'use client'
import { useState } from 'react'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

const plans = [
  {
    name: 'Solo',
    monthly: 29,
    desc: 'Perfect for individual agents just getting started.',
    features: [
      'Up to 500 contacts',
      'Pipeline management',
      'Daily Five',
      'Email & task reminders',
      'Basic reporting',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 79,
    desc: 'For serious producers who want every edge.',
    features: [
      'Unlimited contacts',
      'AI Memory Cards',
      'Smart Automations',
      'Household & property tracking',
      'Advanced reports & GCI',
      'Referral radar',
      'Priority support',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Team',
    monthly: 179,
    desc: 'For brokerages and high-performing teams.',
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Role-based permissions',
      'Team performance dashboard',
      'Shared pipeline views',
      'Dedicated onboarding',
    ],
    cta: 'Contact sales',
    featured: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-500 text-sm mb-5">Start free. No credit card required. Cancel anytime.</p>

          {/* Monthly / Annual toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-xl p-1 gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${!annual ? 'bg-[#0F172A] text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-[#0F172A] text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Annual
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">1 month free</span>
            </button>
          </div>
          {annual && (
            <p className="text-xs text-green-600 font-medium mt-2">
              Billed annually — 11 months for the price of 10.
            </p>
          )}
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
                  /mo
                </span>
              </div>
              {annual && (
                <p className={`text-[10px] mb-0.5 ${plan.featured ? 'text-green-400' : 'text-green-600'}`}>
                  ${plan.monthly * 11}/yr — 1 month free
                </p>
              )}
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
                href={`${CRM_URL}/signup`}
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

        {/* Special rates banner */}
        <div className="mt-6 bg-[#0F172A] border border-amber-400/30 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-6 py-5">
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest mb-2">
                <span className="w-1 h-1 bg-amber-400 rounded-full" />
                First 100 people only
              </div>
              <h3 className="text-white font-extrabold text-lg mb-1">Help us spread the word.</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Share Clientaro with your network, leave an honest review, or refer a colleague.
                In return, we&apos;ll lock in 50% off for your entire first year.
              </p>
              <a
                href={`${CRM_URL}/signup`}
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] font-bold text-xs px-5 py-2.5 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all"
              >
                Claim your spot →
              </a>
            </div>
            <div className="md:w-56 bg-amber-500/10 border-t md:border-t-0 md:border-l border-amber-400/20 px-6 py-5 flex flex-col justify-center">
              <div className="text-amber-400 text-5xl font-extrabold leading-none tracking-tighter">50%</div>
              <div className="text-amber-300 font-semibold text-xs mt-0.5 mb-3">off for your first year</div>
              <div className="space-y-1.5">
                {plans.map(p => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{p.name}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-slate-600 line-through">${p.monthly}/mo</span>
                      <span className="text-white font-bold">${Math.round(p.monthly / 2)}/mo</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-[10px] mt-2">After year one, regular pricing applies.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
