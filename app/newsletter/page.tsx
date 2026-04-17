import { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { SignupForm } from './SignupForm'

export const metadata: Metadata = {
  title: 'The Daily 5 System — Free Guide for Real Estate Agents | Clientaro',
  description:
    'Download the free Daily 5 System guide. Learn the simple follow-up framework top-producing real estate agents use to close more deals through relationships.',
}

export default function NewsletterPage() {
  return (
    <>
      <Nav segment="realestate" />

      <main className="bg-[#0F172A] min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — copy */}
              <div>
                <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Free guide for agents
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  The Daily 5{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                    System
                  </span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  The simple follow-up framework that top-producing agents use to stay
                  connected, generate referrals, and close more deals — in just 20 minutes
                  a day.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Why 5 daily touchpoints beat 50 cold calls',
                    'The 4-category system for choosing who to contact',
                    'Exact scripts that feel natural, not salesy',
                    'How to track follow-ups without spreadsheets',
                    'The compounding effect: what happens after 90 days',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#0F172A]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — form */}
              <div>
                <SignupForm />
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-400 font-bold text-3xl md:text-4xl mb-3">500+</p>
            <p className="text-white font-semibold text-lg mb-2">
              agents already using smarter follow-up
            </p>
            <p className="text-slate-500 text-base max-w-lg mx-auto">
              Join real estate professionals who stopped guessing and started building
              real relationships — one conversation at a time.
            </p>
          </div>
        </section>

        {/* Testimonial / value strip */}
        <section className="relative py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '20 min/day',
                label: 'That\'s all it takes',
                desc: 'Five meaningful conversations. No marathon call sessions.',
              },
              {
                stat: '3x',
                label: 'More referrals',
                desc: 'Agents who follow up consistently see 3x more repeat and referral business.',
              },
              {
                stat: '0',
                label: 'Spreadsheets needed',
                desc: 'The guide shows you a better way to track — and Clientaro makes it automatic.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <p className="text-amber-400 font-extrabold text-3xl mb-1">{card.stat}</p>
                <p className="text-white font-semibold text-base mb-2">{card.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 px-6 border-t border-white/5">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to transform your follow-up?
            </h2>
            <p className="text-slate-400 text-base mb-8">
              Get the free Daily 5 System guide sent straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
