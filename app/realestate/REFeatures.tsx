const features = [
  {
    icon: '🎯',
    title: 'Daily Five',
    desc: 'Every morning, see the 5 clients you should contact today — based on life events, deal stages, and how long since you last connected.',
    tag: 'Core',
  },
  {
    icon: '📊',
    title: 'Pipeline Board',
    desc: 'Drag-and-drop deal tracking from first contact to closed. See every active deal and what stage it\'s in — at a glance.',
    tag: 'Core',
  },
  {
    icon: '🧠',
    title: 'AI Memory Cards',
    desc: 'Each contact gets an AI-generated profile — hobbies, family details, milestones — so you walk into every conversation fully prepared.',
    tag: 'AI',
  },
  {
    icon: '🏘️',
    title: 'Households & Properties',
    desc: 'Link clients to their household, family members, pets, and properties. See the full picture of every family you serve.',
    tag: 'Core',
  },
  {
    icon: '🎯',
    title: 'Referral Radar',
    desc: 'Track who referred whom. Know your best referral sources and automatically follow up to keep that pipeline flowing.',
    tag: 'Core',
  },
  {
    icon: '⚡',
    title: 'Smart Automations',
    desc: 'Set rules once — Clientaro automatically reminds you when a client\'s anniversary is near, when it\'s been too long, or when a deal closes.',
    tag: 'Automation',
  },
]

const tagColors: Record<string, string> = {
  Core: 'bg-slate-100 text-slate-600',
  AI: 'bg-amber-100 text-amber-700',
  Automation: 'bg-indigo-100 text-indigo-700',
}

export function REFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Built for how real estate
            <br />
            <span className="text-slate-400">actually works.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every feature exists because a real estate professional needed it — not because a software team thought it sounded good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all"
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
