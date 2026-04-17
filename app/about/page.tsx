import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { CtaBanner } from '../components/CtaBanner'

export const metadata = {
  title: 'About Clientaro — Our Mission & Story',
  description:
    'Clientaro is a relationship-driven CRM built for real estate professionals and B2B teams who believe in growing business through genuine human connections.',
  openGraph: {
    title: 'About Clientaro — Our Mission & Story',
    description:
      'Clientaro is a relationship-driven CRM built for real estate professionals and B2B teams who believe in growing business through genuine human connections.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            About Clientaro
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
            Built by people who believe{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              relationships come first.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Clientaro is a CRM for professionals who know that the best business
            doesn&apos;t come from funnels and automation blasts — it comes from
            genuine human connection, nurtured over time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              Born from a simple frustration.
            </h2>
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>
                Every CRM we tried treated contacts like data points in a
                pipeline. Move them through stages, score them, automate a drip
                sequence, and hope for the best. But that&apos;s not how real
                business works — especially in real estate and B2B, where trust
                is everything.
              </p>
              <p>
                Clientaro was born from years of working in the trenches of real
                estate and B2B sales. We saw the gap firsthand: agents juggling
                spreadsheets and sticky notes because the &quot;enterprise&quot;
                CRMs felt like they were built for a different planet. Service
                professionals losing touch with past clients because no tool
                made it easy to just stay human.
              </p>
              <p>
                So we built something different. A CRM that puts the
                relationship at the center — not the deal. One that helps you
                remember birthdays, follow up naturally, and keep every
                connection warm without feeling like a robot.
              </p>
              <p>
                Built in 2025 and launched in 2026, Clientaro is still early —
                but the mission has never been clearer. We&apos;re here to help
                professionals grow their business the way it actually works:
                through real relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Our values drive every decision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Relationships First
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Every feature we build starts with one question: does this help
                our users strengthen a real human connection? If the answer is
                no, it doesn&apos;t ship. Period.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Radically Simple
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Most CRMs are bloated with features nobody uses. We obsess over
                simplicity — if it takes more than a few seconds to figure out,
                we redesign it until it doesn&apos;t.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your Data, Your Rules
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Your contacts are your livelihood. We will never sell your data,
                use it for ads, or lock you in. Export everything, anytime. Your
                relationships belong to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-10">
              A small team with a big mission.
            </h2>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-3xl font-extrabold text-[#0F172A] shrink-0">
                SG
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Steve Gracco
                </h3>
                <p className="text-amber-600 font-semibold text-sm mb-3">
                  Founder & CEO
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Clientaro is a one-person startup built with conviction. Steve
                  saw how relationship-driven professionals were underserved by
                  existing tools and set out to build something that actually
                  fits the way they work. No VC playbook, no growth hacks —
                  just a genuine product for genuine people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        headline="Ready to try a CRM that gets it?"
        sub="Start free — no credit card, no commitments. Just better relationships."
      />

      <Footer />
    </main>
  )
}
