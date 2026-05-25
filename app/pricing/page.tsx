import { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Pricing } from '../components/Pricing'
import { CtaBanner } from '../components/CtaBanner'
import { SoftwareApplicationSchema } from '../components/SoftwareApplicationSchema'

export const metadata: Metadata = {
  title: 'Pricing — Clientaro',
  description:
    'Clientaro pricing: Free forever for 30 contacts, Starter $19/mo for 1,000, Pro $49/mo unlimited. Every tier has every feature. 60-day Pro trial on every paid signup.',
  alternates: { canonical: 'https://www.clientaro.com/pricing' },
  openGraph: {
    title: 'Pricing — Clientaro',
    description:
      'Free forever for 30 contacts. Starter $19/mo. Pro $49/mo unlimited. 60-day Pro trial on every paid signup.',
    url: 'https://www.clientaro.com/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Clientaro',
    description:
      'Free forever for 30 contacts. Starter $19/mo. Pro $49/mo unlimited. 60-day Pro trial on every paid signup.',
  },
}

const PRICING_FAQS = [
  {
    q: 'Is Clientaro really free forever?',
    a: 'Yes. The Free plan stays free for as long as you have 30 or fewer contacts and use no more than 50 SMS per month. No credit card, no trial timer, no feature lockouts — every Pro feature is unlocked on Free.',
  },
  {
    q: 'What happens when I hit 30 contacts on the Free plan?',
    a: 'New contact creation pauses (existing contacts still work) and the dashboard shows an upgrade prompt. You can keep using everything else indefinitely. Upgrade to Starter at $19/mo for 1,000 contacts or Pro at $49/mo for unlimited.',
  },
  {
    q: 'Do I need a credit card to sign up?',
    a: 'No. The Free plan requires only email. Paid plans (Starter $19/mo, Pro $49/mo) start with a 60-day Pro trial — credit card is collected at trial signup but not charged until day 61.',
  },
  {
    q: 'What is included in the 60-day Pro trial?',
    a: 'Every Pro feature, unlimited contacts, 5,000 SMS/month, priority support. After day 60, the account auto-downgrades to the plan you selected at signup (Starter or Pro). No surprise charges.',
  },
  {
    q: 'How does Clientaro pricing compare to LionDesk, Wise Agent, Follow Up Boss?',
    a: 'LionDesk shut down in 2025. Wise Agent is $49/mo flat with no free tier. Follow Up Boss starts at $69/user/mo (team-oriented). Clientaro Starter at $19/mo is the cheapest dedicated real-estate CRM with bundled SMS, and Free forever for 30 contacts is the only true free-forever dedicated real-estate CRM as of 2026.',
  },
  {
    q: 'Are there any hidden fees, setup costs, or add-ons?',
    a: 'No. SMS is bundled (50 / 500 / 5,000 per month on Free / Starter / Pro). Email is bundled. Calendar sync is bundled. Mobile apps are free on every tier. Overage SMS is $0.02/message at cost — never used as a profit center.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from the Settings → Billing page. Your account drops to the Free plan immediately; data is retained as long as you stay under the Free plan limits. No cancellation fees, no retention pitches.',
  },
  {
    q: 'Do you offer annual pricing?',
    a: 'Not yet. We chose monthly billing only at launch so agents can leave painlessly if Clientaro is not working for them. Annual plans (with a discount) are on the roadmap once we have steady-state retention data.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PRICING_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.clientaro.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.clientaro.com/pricing' },
  ],
}

export default function PricingPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <main className="bg-white text-gray-900">
        <Nav />

        <header className="bg-[#0F172A] py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Honest pricing. Free forever option.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every tier gets every feature. You pay for volume — never to unlock features you should already have.
            </p>
          </div>
        </header>

        <Pricing />

        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-extrabold text-[#0F172A] mb-10 text-center">Frequently asked</h2>
          <div className="space-y-4">
            {PRICING_FAQS.map((f) => (
              <details
                key={f.q}
                className="border border-gray-200 rounded-xl p-5 group bg-white open:shadow-sm"
              >
                <summary className="font-semibold text-[#0F172A] cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">▾</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CtaBanner
          headline="Start free. Pay only when the contact list grows."
          sub="60-day Pro trial on every paid signup. No credit card to start Free. Cancel anytime."
        />

        <Footer />
      </main>
    </>
  )
}
