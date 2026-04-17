import { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { posts } from './posts'

export const metadata: Metadata = {
  title: 'Clientaro Blog — Tips for Relationship-Driven Professionals',
  description:
    'Actionable advice on follow-up systems, referral management, CRM strategies, and client relationships for real estate agents and B2B professionals.',
  openGraph: {
    title: 'Clientaro Blog — Tips for Relationship-Driven Professionals',
    description: 'Actionable advice on follow-up systems, referral management, CRM strategies, and client relationships.',
    type: 'website',
  },
}

const categoryColors: Record<string, string> = {
  'CRM Reviews': 'bg-blue-50 text-blue-700',
  'Sales Tips': 'bg-amber-50 text-amber-700',
  'Growth Strategy': 'bg-emerald-50 text-emerald-700',
  Productivity: 'bg-violet-50 text-violet-700',
}

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero */}
        <section className="bg-[#0F172A] py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Clientaro Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Grow your business with{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                better relationships.
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Practical tips on follow-up systems, referral management, and CRM strategies for real estate agents and B2B professionals who lead with relationships.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-amber-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
                        SG
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <span className="text-amber-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
