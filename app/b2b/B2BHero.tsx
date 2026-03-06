const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'http://localhost:3000'

export function B2BHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          For B2B & Service Businesses
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          B2B runs on trust.
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Clientaro keeps it warm.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          For consultants, agencies, and service businesses who know the deal is won months before
          the proposal — in the relationship you&apos;ve been quietly building.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <a
            href={`${CRM_URL}/signup`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] font-bold text-base px-8 py-4 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            Start free →
          </a>
          <a
            href={`${CRM_URL}/login`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            Log in to your account
          </a>
        </div>
        <p className="text-slate-500 text-sm">No credit card required · Cancel anytime</p>

        {/* App mockup — B2B view */}
        <div className="mt-16 bg-[#1E293B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
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
          <div className="flex h-64">
            <div className="w-44 bg-white/5 border-r border-white/10 p-4 space-y-1.5">
              {['Today', 'Pipeline', 'People', 'Companies', 'Tasks', 'Activities', 'Reports'].map((item, i) => (
                <div key={item} className={`h-7 rounded-md flex items-center px-2.5 text-xs font-medium ${i === 2 ? 'bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex-1 p-5">
              <div className="text-white font-bold text-sm mb-1">Pipeline Overview 📊</div>
              <div className="text-slate-500 text-xs mb-4">Active deals by stage</div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { stage: 'Prospect', count: 8, color: 'bg-slate-500/20 text-slate-300' },
                  { stage: 'Proposal', count: 4, color: 'bg-blue-500/20 text-blue-300' },
                  { stage: 'Negotiating', count: 2, color: 'bg-amber-500/20 text-amber-300' },
                  { stage: 'Closed', count: 3, color: 'bg-green-500/20 text-green-300' },
                ].map(s => (
                  <div key={s.stage} className={`rounded-lg p-2.5 border border-white/10 text-center ${s.color} bg-opacity-20`}>
                    <div className="text-lg font-bold">{s.count}</div>
                    <div className="text-[10px] mt-0.5 opacity-80">{s.stage}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                {[
                  { company: 'Acme Corp', contact: 'Jordan T.', value: '$24,000', stage: 'Proposal' },
                  { company: 'Bright Media', contact: 'Casey R.', value: '$8,500', stage: 'Negotiating' },
                  { company: 'Nova Solutions', contact: 'Morgan L.', value: '$41,000', stage: 'Proposal' },
                ].map(d => (
                  <div key={d.company} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{d.company}</span>
                      <span className="text-slate-400">· {d.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold">{d.value}</span>
                      <span className="text-amber-400 text-[10px] px-1.5 py-0.5 bg-amber-500/20 rounded">{d.stage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
