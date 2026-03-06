const features = [
  {
    icon: '🎯',
    title: 'Daily Five',
    desc: 'Every morning, see the 5 accounts you should contact today — based on deal stage, time since last touch, and key milestones in the relationship.',
    tag: 'Core',
  },
  {
    icon: '📊',
    title: 'Deal Pipeline',
    desc: 'Drag-and-drop deal tracking from first conversation to signed contract. See every opportunity and where it stands — at a glance.',
    tag: 'Core',
  },
  {
    icon: '🧠',
    title: 'AI Memory Cards',
    desc: 'Each contact gets an AI-generated profile — role, priorities, past conversations, personal details — so you walk into every meeting fully prepared.',
    tag: 'AI',
  },
  {
    icon: '🏢',
    title: 'Companies & Contacts',
    desc: 'Link contacts to their company, track stakeholders and decision-makers, and see the full relationship map before you ever send a proposal.',
    tag: 'Core',
  },
  {
    icon: '🔔',
    title: 'Relationship Alerts',
    desc: 'Get notified when it\'s been too long since you touched a key account, when a contact changes jobs, or when a renewal window is approaching.',
    tag: 'Automation',
  },
  {
    icon: '⚡',
    title: 'Smart Automations',
    desc: 'Set rules once — Clientaro reminds you before a contract renews, after a proposal goes out, or when a deal has been stuck in a stage too long.',
    tag: 'Automation',
  },
]

const tagColors: Record<string, string> = {
  Core: 'bg-slate-100 text-slate-600',
  AI: 'bg-amber-100 text-amber-700',
  Automation: 'bg-indigo-100 text-indigo-700',
}

export function B2BFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Built for how B2B
            <br />
            <span className="text-slate-400">actually closes.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every feature exists because a consultant, account manager, or agency owner needed it — not because a software team thought it sounded good.
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
