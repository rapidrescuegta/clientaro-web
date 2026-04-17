import Image from 'next/image'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          Built for Real Estate Professionals
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          Close more deals.{' '}
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Never miss
          </span>{' '}
          a moment.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Clientaro is the relationship-driven CRM that surfaces the right client at the right time
          — so you can focus on building trust, not managing spreadsheets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${CRM_URL}/signup`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] font-bold text-base px-8 py-4 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            Start for free →
          </a>
          <a
            href={`${CRM_URL}/login`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            Sign in to your account
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-5">No credit card required · Free plan available</p>
      </div>

      {/* App preview mockup */}
      <div className="relative max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-[#1E293B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
          {/* Fake browser chrome */}
          <div className="bg-[#0F172A] px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4 bg-white/10 rounded-md h-6 flex items-center px-3">
              <span className="text-slate-400 text-xs">app.clientaro.com</span>
            </div>
          </div>
          {/* Real product screenshot */}
          <Image
            src="/screenshots/today-dashboard.png"
            alt="Clientaro Today dashboard — $12.8M pipeline, 15 active contacts, daily targets, and upcoming life events"
            width={1440}
            height={900}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
