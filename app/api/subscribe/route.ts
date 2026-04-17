import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, firstName } = body as { email?: string; firstName?: string }

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Service temporarily unavailable.' },
        { status: 500 }
      )
    }

    // Build topics array if RESEND_TOPIC_ID is set
    const topics = process.env.RESEND_TOPIC_ID
      ? [{ id: process.env.RESEND_TOPIC_ID, subscription: 'opt_in' }]
      : undefined

    // Build segmentIds array if RESEND_SEGMENT_ID is set
    const segmentIds = process.env.RESEND_SEGMENT_ID
      ? [process.env.RESEND_SEGMENT_ID]
      : undefined

    // 1. Create contact in Resend
    const contactRes = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        segment_ids: segmentIds,
        topics,
      }),
    })

    if (!contactRes.ok) {
      const err = await contactRes.json().catch(() => ({}))
      console.error('Resend contact creation failed:', contactRes.status, err)
      // Don't block signup if contact already exists (409)
      if (contactRes.status !== 409) {
        return NextResponse.json(
          { error: 'Could not subscribe. Please try again.' },
          { status: 500 }
        )
      }
    }

    // 2. Send welcome email
    const displayName = firstName ? firstName : 'there'

    const welcomeHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <!-- Header -->
    <div style="background-color:#0F172A;border-radius:16px 16px 0 0;padding:40px 32px;text-align:center;">
      <div style="display:inline-block;background:linear-gradient(135deg,#F5C842,#C9930A);width:48px;height:48px;border-radius:12px;line-height:48px;font-size:28px;font-weight:800;color:#0F172A;margin-bottom:16px;">C</div>
      <h1 style="color:#ffffff;font-size:24px;font-weight:700;margin:0 0 8px 0;">Welcome to Clientaro</h1>
      <p style="color:#94a3b8;font-size:14px;margin:0;">Your free guide is ready.</p>
    </div>

    <!-- Body -->
    <div style="background-color:#ffffff;padding:40px 32px;border-radius:0 0 16px 16px;">
      <p style="color:#334155;font-size:16px;line-height:1.6;margin:0 0 20px 0;">
        Hey ${escHtml(displayName)},
      </p>
      <p style="color:#334155;font-size:16px;line-height:1.6;margin:0 0 20px 0;">
        Thanks for grabbing <strong>The Daily 5 System</strong> — a simple framework that top-producing real estate agents use to stay connected with the people who matter most.
      </p>

      <p style="color:#334155;font-size:16px;line-height:1.6;margin:0 0 8px 0;">
        Here's what you'll learn:
      </p>
      <ul style="color:#334155;font-size:15px;line-height:1.8;margin:0 0 24px 0;padding-left:20px;">
        <li>Why 5 touchpoints a day changes everything</li>
        <li>How to pick who to reach out to (no guessing)</li>
        <li>Scripts and templates that feel natural</li>
        <li>How to track it all without spreadsheets</li>
      </ul>

      <!-- CTA Button -->
      <div style="text-align:center;margin:32px 0;">
        <a href="https://www.clientaro.com/newsletter" style="display:inline-block;background:linear-gradient(135deg,#F5C842,#C9930A);color:#0F172A;font-size:16px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;">
          Read the Daily 5 Guide &rarr;
        </a>
      </div>

      <div style="border-top:1px solid #e2e8f0;padding-top:24px;margin-top:24px;">
        <p style="color:#334155;font-size:16px;line-height:1.6;margin:0 0 16px 0;">
          Clientaro is the CRM built for relationship-driven agents. If you ever want to put the Daily 5 on autopilot, we're here for you.
        </p>
        <p style="color:#334155;font-size:16px;line-height:1.6;margin:0;">
          Talk soon,<br/>
          <strong>Steve @ Clientaro</strong>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:24px 16px;">
      <p style="color:#94a3b8;font-size:12px;margin:0;">
        &copy; ${new Date().getFullYear()} Clientaro. All rights reserved.<br/>
        <a href="https://www.clientaro.com" style="color:#94a3b8;text-decoration:underline;">clientaro.com</a>
      </p>
    </div>
  </div>
</body>
</html>`

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'steve@clientaro.com',
        to: email,
        subject: "Welcome to Clientaro — Here's Your Free Guide",
        html: welcomeHtml,
      }),
    })

    if (!emailRes.ok) {
      const err = await emailRes.json().catch(() => ({}))
      console.error('Welcome email send failed:', emailRes.status, err)
      // Still return success — they're subscribed even if email fails
    }

    // 3. Schedule drip emails (fire-and-forget — don't block the response)
    scheduleDripEmails(apiKey, email, displayName).catch((err) =>
      console.error('Drip schedule error:', err)
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

/** Schedule 3 follow-up drip emails via Resend's scheduledAt */
async function scheduleDripEmails(apiKey: string, email: string, name: string) {
  const drips = [
    {
      delay: 2, // days
      subject: 'The #1 mistake agents make with follow-ups',
      body: `<p>Hey ${escHtml(name)},</p>
<p>Most agents know they should follow up. The problem? They wait until they "have a reason" to reach out.</p>
<p>Top producers don't wait. They use a simple system: <strong>touch 5 people a day</strong>, no matter what. A quick text. A birthday card. A market update. A "saw this and thought of you."</p>
<p>It takes 20 minutes. And it's the difference between hoping for referrals and consistently generating them.</p>
<p>Here are 3 no-pressure touchpoint ideas you can use today:</p>
<ol>
<li><strong>The Market Snapshot</strong> — "Hey [Name], homes in your area are up 4% this quarter. Want me to send you a quick update on your home's value?"</li>
<li><strong>The Check-In</strong> — "Hi [Name], just thinking about you — how's the new place treating you?"</li>
<li><strong>The Share</strong> — "Saw this article about backyard renovations and thought of you!"</li>
</ol>
<p>Simple. Human. Effective.</p>
<p>If you want a tool that reminds you who to reach out to every morning, <a href="https://app.clientaro.com/signup" style="color:#C9930A;font-weight:600;">try Clientaro free for 14 days</a>.</p>
<p>— Steve @ Clientaro</p>`,
    },
    {
      delay: 4,
      subject: 'How one agent doubled referrals in 90 days',
      body: `<p>Hey ${escHtml(name)},</p>
<p>A real estate agent in Ontario was closing 12 deals a year. Good, not great. She knew her past clients liked her — but they kept using other agents because she'd go silent after closing.</p>
<p>She started a simple routine:</p>
<ul>
<li>Every morning, she'd look at her "Daily 5" — a list of 5 people to reach out to</li>
<li>She'd send a quick text, email, or handwritten note</li>
<li>She tracked every interaction so nobody fell through the cracks</li>
</ul>
<p>90 days later, she'd received 8 referrals. In the next quarter, she closed 6 of them.</p>
<p><strong>The secret wasn't working harder. It was being consistently present.</strong></p>
<p>That's exactly what Clientaro's Daily Five feature does — it picks 5 people for you every morning based on who you haven't talked to in a while, upcoming birthdays, or deal milestones.</p>
<p><a href="https://app.clientaro.com/signup" style="color:#C9930A;font-weight:600;">Start your free trial →</a></p>
<p>— Steve @ Clientaro</p>`,
    },
    {
      delay: 7,
      subject: 'Your 14-day free trial is waiting',
      body: `<p>Hey ${escHtml(name)},</p>
<p>Over the last week, I've shared the Daily 5 system and how top agents use it to generate more referrals without cold calling or paid ads.</p>
<p>If any of it resonated, here's your chance to put it into practice — for free.</p>
<p><strong>Clientaro gives you:</strong></p>
<ul>
<li>A Daily Five list every morning — who to reach out to and why</li>
<li>One-click logging for calls, texts, emails, and visits</li>
<li>Smart reminders so no client falls through the cracks</li>
<li>Pipeline tracking from lead to close</li>
<li>Automated follow-up rules you set once and forget</li>
</ul>
<p>No credit card required. No long onboarding. Just sign up and start building better relationships.</p>
<div style="text-align:center;margin:32px 0;">
<a href="https://app.clientaro.com/signup" style="display:inline-block;background:linear-gradient(135deg,#F5C842,#C9930A);color:#0F172A;font-size:16px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;">Start free for 14 days →</a>
</div>
<p>If you have questions, just reply to this email. I read every one.</p>
<p>— Steve @ Clientaro</p>`,
    },
  ]

  const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background-color:#0F172A;border-radius:16px 16px 0 0;padding:24px 32px;text-align:center;">
      <div style="display:inline-block;background:linear-gradient(135deg,#F5C842,#C9930A);width:36px;height:36px;border-radius:8px;line-height:36px;font-size:20px;font-weight:800;color:#0F172A;">C</div>
    </div>
    <div style="background-color:#ffffff;padding:32px;border-radius:0 0 16px 16px;color:#334155;font-size:16px;line-height:1.7;">
      ${content}
    </div>
    <div style="text-align:center;padding:24px 16px;">
      <p style="color:#94a3b8;font-size:12px;margin:0;">
        &copy; ${new Date().getFullYear()} Clientaro &middot;
        <a href="https://www.clientaro.com" style="color:#94a3b8;">clientaro.com</a>
      </p>
    </div>
  </div>
</body>
</html>`

  for (const drip of drips) {
    const scheduledAt = new Date(
      Date.now() + drip.delay * 24 * 60 * 60 * 1000
    ).toISOString()

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'steve@clientaro.com',
        to: email,
        subject: drip.subject,
        html: baseTemplate(drip.body),
        scheduled_at: scheduledAt,
      }),
    })
  }
}

/** Escape HTML special characters to prevent XSS in email */
function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
