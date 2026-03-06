const features = [
  {
    icon: '🎯',
    title: 'Daily Five',
    desc: 'Every morning, Clientaro surfaces the 5 people you should reach out to today — based on life events, deal stage, and relationship health.',
    tag: 'Core',
  },
  {
    icon: '📊',
    title: 'Visual Pipeline',
    desc: 'Drag-and-drop deal tracking across every stage. See your entire book of business at a glance and know exactly where revenue is hiding.',
    tag: 'Core',
  },
  {
    icon: '🧠',
    title: 'AI Memory Cards',
    desc: "Every contact gets an AI-generated profile — hobbies, family, milestones — so you walk into every conversation knowing what matters to them.",
    tag: 'AI',
  },
  {
    icon: '🔁',
    title: 'Smart Automations',
    desc: 'Set rules once. Clientaro automatically creates follow-up tasks when clients go quiet, anniversaries approach, or deals close.',
    tag: 'Automation',
  },
  {
    icon: '🏠',
    title: 'Household & Property Tracking',
    desc: 'Link clients to households, properties, and relationships. One view shows you the full picture of every family you serve.',
    tag: 'Core',
  },
  {
    icon: '📈',
    title: 'Reports & GCI Tracking',
    desc: 'Track closed volume, lead sources, activity trends, and referral performance. Know your numbers without opening a spreadsheet.',
    tag: 'Insights',
  },
]

const tagColors: Record<string, string> = {
  Core: 'bg-slate-100 text-slate-600',
  AI: 'bg-amber-100 text-amber-700',
  Automation: 'bg-indigo-100 text-indigo-700',
  Insights: 'bg-green-100 text-green-700',
}

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Everything your business needs.
            <br />
            <span className="text-slate-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Built specifically for relationship-driven sales — real estate agents, brokers, and service professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{f.icon}</div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[f.tag]}`}>
                  {f.tag}
                </span>
              </div>
              <h3 className="font-bold text-[#0F172A] text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
