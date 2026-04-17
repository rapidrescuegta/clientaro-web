import Image from 'next/image'

type Shot = {
  src: string
  alt: string
  label: string
  title: string
  description: string
}

const shots: Shot[] = [
  {
    src: '/screenshots/today-dashboard.png',
    alt: 'Clientaro Today dashboard — pipeline value, contacts, daily targets, life events and referral radar',
    label: 'Today',
    title: 'Start every day with the five people who matter most.',
    description:
      "Your AI-ranked Daily Target surfaces the clients most likely to close, refer, or drift — with the exact reason you should reach out.",
  },
  {
    src: '/screenshots/pipeline.png',
    alt: 'Clientaro pipeline — $12.8M across 10 deals, drag-and-drop kanban by stage',
    label: 'Pipeline',
    title: 'See every deal — and exactly what to do next.',
    description:
      'A drag-and-drop kanban built for real-estate stages: Lead, Consultation, Listing Signed, On Market, Under Contract, Closed. Every card shows last-contact context so no deal goes cold.',
  },
  {
    src: '/screenshots/contact-profile.png',
    alt: 'Contact profile with AI Memory, engagement score, deals, and full activity timeline',
    label: 'Contact Profile',
    title: 'AI Memory remembers what you can\u2019t.',
    description:
      'Every contact gets an always-on AI summary, engagement score, relationship map, active deals, and a full activity timeline — so every call starts with context.',
  },
  {
    src: '/screenshots/tasks.png',
    alt: 'Tasks list with urgent, high, and normal priorities tied to specific contacts and reasons',
    label: 'Tasks',
    title: 'Follow-ups that tell you why — not just what.',
    description:
      'Every task carries the reason it exists: "conditions deadline approaching," "4-year anniversary," "quarterly nurture cadence." Never send another awkward check-in.',
  },
  {
    src: '/screenshots/households.png',
    alt: 'Households view showing family groupings across Toronto addresses',
    label: 'Households',
    title: 'Track families, not just contacts.',
    description:
      'Group spouses, partners, kids, and roommates into a single household. One move, one closing, one referral tree — all connected automatically.',
  },
  {
    src: '/screenshots/properties.png',
    alt: 'Properties view with purchase price, estimated value, and equity growth per home',
    label: 'Properties',
    title: 'Equity is the #1 reason past clients re-list.',
    description:
      'Clientaro tracks purchase price vs. estimated value for every past client — so you see equity growth coming before they do, and reach out when they\u2019re ready to move.',
  },
]

export function ProductShowcase() {
  return (
    <section className="bg-[#F8FAFC] py-24 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest mb-3">
            Inside Clientaro
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Every screen is built for{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              the next conversation.
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 leading-relaxed">
            Not another database. A daily system that tells you who to call, why, and what to say — built from
            the ground up for agents who lead with relationships.
          </p>
        </div>

        <div className="space-y-20">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full mb-5">
                  {s.label}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-5">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{s.description}</p>
              </div>

              <div className="bg-[#1E293B] rounded-2xl border border-gray-200 overflow-hidden shadow-2xl shadow-slate-900/10">
                <div className="bg-[#0F172A] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-3 bg-white/10 rounded h-5 flex items-center px-3">
                    <span className="text-slate-400 text-[11px]">app.clientaro.com</span>
                  </div>
                </div>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
