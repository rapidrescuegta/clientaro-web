// Replaces SocialProof — honest, no fake numbers

const pillars = [
  {
    icon: '🤝',
    title: 'Built on relationships, not transactions',
    desc: 'Most CRMs are built for sales teams pushing product. We built Clientaro for professionals who win business by genuinely knowing their clients.',
  },
  {
    icon: '🔒',
    title: 'Your data is yours, always',
    desc: 'Export your contacts, deals, and history at any time — no lock-in, no ransom. We earn your business every month.',
  },
  {
    icon: '⚡',
    title: 'Simple enough to actually use',
    desc: 'The best CRM is the one you open every day. We obsess over removing friction so the tool works for you, not the other way around.',
  },
]

export function WhyClientaro({ segment }: { segment: 'realestate' | 'b2b' }) {
  const quote =
    segment === 'realestate'
      ? 'Real estate is a relationship business. We built Clientaro because no existing tool treated it that way.'
      : 'B2B deals are won long before the contract — in the trust built over months of real relationship. Clientaro keeps that front and center.'

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Founder quote */}
        <div className="border border-amber-400/30 rounded-2xl p-8 md:p-10 mb-16 bg-amber-500/5">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Why we built this</p>
          <blockquote className="text-white text-xl md:text-2xl font-semibold leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0F172A] font-bold text-sm">A</div>
            <div>
              <div className="text-white font-semibold text-sm">Alex, Founder</div>
              <div className="text-slate-400 text-xs">Built Clientaro to solve their own problem</div>
            </div>
          </div>
        </div>

        {/* Three honest pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Early access honest CTA */}
        <div className="mt-12 text-center bg-white/5 border border-white/10 rounded-2xl px-8 py-10">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Early Access</p>
          <h3 className="text-white text-2xl font-extrabold mb-2">Be among the first.</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Clientaro is new. That means you&apos;ll get direct access to the team, influence the roadmap,
            and lock in founding-member pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
