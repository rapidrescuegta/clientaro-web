const stats = [
  { value: '2,400+', label: 'Active agents' },
  { value: '$1.2B+', label: 'Pipeline tracked' },
  { value: '94%', label: 'Retention rate' },
  { value: '4.9 ★', label: 'Average rating' },
]

const testimonials = [
  {
    quote: "I used to let follow-ups slip through the cracks constantly. Clientaro's Daily Five changed that overnight. My referral volume is up 40% this year.",
    name: 'Sarah M.',
    role: 'Top Producer, RE/MAX',
    initials: 'SM',
  },
  {
    quote: "Finally a CRM that works the way I think. I can see my entire pipeline, my top relationships, and today's priorities — all without digging through menus.",
    name: 'Marcus T.',
    role: 'Broker-Owner, Compass',
    initials: 'MT',
  },
  {
    quote: "The AI memory cards are incredible. I walked into a listing presentation and remembered the client's daughter's name, their dog, everything. They were blown away.",
    name: 'Jennifer L.',
    role: 'Luxury Specialist',
    initials: 'JL',
  },
]

export function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-amber-400 mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Loved by top producers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <div className="text-amber-400 text-2xl mb-4">&#8220;</div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0F172A] font-bold text-xs">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
