const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

export function REHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] pt-32 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          For Real Estate Agents & Brokers
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
          Your referral business
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            runs on relationships.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Clientaro surfaces the right clients at the right time — birthdays, home anniversaries,
          life events — so you&apos;re always the agent they remember.
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

        {/* App mockup */}
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
              {['Today', 'Pipeline', 'People', 'Households', 'Tasks', 'Referrals', 'Reports'].map((item, i) => (
                <div key={item} className={`h-7 rounded-md flex items-center px-2.5 text-xs font-medium ${i === 0 ? 'bg-amber-500/20 text-amber-400' : 'text-slate-400'}`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex-1 p-5">
              <div className="text-white font-bold text-sm mb-1">Your Daily Five 🎯</div>
              <div className="text-slate-500 text-xs mb-4">5 people to reach out to today</div>
              <div className="space-y-2">
                {[
                  { name: 'Maria R.', reason: 'Birthday tomorrow 🎂', urgency: 'Today' },
                  { name: 'James C.', reason: '1-year home anniversary approaching 🏠', urgency: 'This week' },
                  { name: 'Sarah W.', reason: '60 days post-close — check in', urgency: 'Follow up' },
                  { name: 'David M.', reason: 'No contact in 47 days', urgency: 'Reconnect' },
                  { name: 'Priya S.', reason: 'Referred 2 clients — say thank you', urgency: 'Today' },
                ].map(item => (
                  <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <div>
                      <span className="text-white text-xs font-semibold">{item.name}</span>
                      <span className="text-slate-400 text-xs ml-2">{item.reason}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 shrink-0">
                      {item.urgency}
                    </span>
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
