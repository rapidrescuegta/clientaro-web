'use client'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

type Plan = {
  name: 'Free' | 'Starter' | 'Pro'
  monthly: number
  desc: string
  features: string[]
  cta: string
  ctaPlan: 'free' | 'starter' | 'pro'
  featured: boolean
}

const plans: Plan[] = [
  {
    name: 'Free',
    monthly: 0,
    desc: 'For agents trying us out with their A-list sphere.',
    features: [
      '30 contacts — ideal for your A-list sphere',
      'Every Pro feature unlocked — nothing gated',
      '50 SMS / month bundled',
      'AI follow-ups so no lead goes cold',
      'Referral radar — see who\u2019s likely to refer next',
      'iOS + Android — works between showings',
    ],
    cta: 'Start free',
    ctaPlan: 'free',
    featured: false,
  },
  {
    name: 'Starter',
    monthly: 19,
    desc: 'For working solo agents managing a real book.',
    features: [
      'Everything in Free',
      '1,000 contacts — room for a full book',
      '500 SMS / month bundled',
      'Same full feature set as Pro — no upsell',
    ],
    cta: 'Start 60-day Pro trial',
    ctaPlan: 'starter',
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 49,
    desc: 'For top producers running on relationships at scale.',
    features: [
      'Everything in Starter',
      'Unlimited contacts',
      '5,000 SMS / month bundled',
      'Priority support — a real human, same day',
    ],
    cta: 'Start 60-day Pro trial',
    ctaPlan: 'pro',
    featured: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Honest pricing. Free forever option.
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Every tier gets every feature. You pay for the volume you actually use — never for unlocking features you should already have.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 ${
                plan.featured
                  ? 'bg-[#0F172A] border-2 border-amber-400 shadow-2xl shadow-amber-500/10 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${plan.featured ? 'text-amber-400' : 'text-slate-500'}`}>
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-0.5">
                <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-[#0F172A]'}`}>
                  ${plan.monthly}
                </span>
                <span className={`text-xs mb-1.5 ${plan.featured ? 'text-slate-400' : 'text-gray-400'}`}>
                  {plan.monthly === 0 ? '/forever' : '/mo'}
                </span>
              </div>
              <p className={`text-xs mb-4 mt-1 ${plan.featured ? 'text-slate-400' : 'text-gray-500'}`}>
                {plan.desc}
              </p>

              <ul className="space-y-1.5 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <span className="text-amber-400 font-bold mt-px">✓</span>
                    <span className={plan.featured ? 'text-slate-300' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${CRM_URL}/signup?plan=${plan.ctaPlan}`}
                className={`block text-center text-xs font-bold py-2.5 rounded-xl transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] hover:from-amber-300 hover:to-amber-400'
                    : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          60-day free trial of Pro on every paid signup. No credit card required to start free. Cancel anytime.
        </p>

      </div>
    </section>
  )
}
