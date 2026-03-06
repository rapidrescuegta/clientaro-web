import Link from 'next/link'
import { LogoWordmark } from './components/Logo'

export default function SegmentPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col">
      {/* Nav */}
      <header className="px-8 py-6 flex items-center justify-between">
        <LogoWordmark dark />
        <a
          href="http://localhost:3000/login"
          className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          Log in →
        </a>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Welcome to Clientaro
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            The CRM built for{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              relationships.
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-14 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll show you how Clientaro fits.
          </p>

          {/* Two path cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <Link
              href="/realestate"
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-amber-400/50 transition-all duration-200"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h2 className="text-xl font-bold text-white mb-2">Real Estate</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Agents, brokers, and teams who build their business on referrals and relationships.
              </p>
              <div className="mt-6 flex items-center gap-2 text-amber-400 font-semibold text-sm">
                See how it works
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            <Link
              href="/b2b"
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 hover:border-amber-400/50 transition-all duration-200"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h2 className="text-xl font-bold text-white mb-2">B2B & Services</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Consultants, service businesses, and account managers who win on trust.
              </p>
              <div className="mt-6 flex items-center gap-2 text-amber-400 font-semibold text-sm">
                See how it works
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>

          <p className="text-slate-600 text-sm mt-10">
            One platform. Two versions. Same relationship-first philosophy.
          </p>
        </div>
      </div>
    </main>
  )
}
