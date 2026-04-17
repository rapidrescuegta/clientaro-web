import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { EmailSignup } from '../EmailSignup'
import { posts, getPostBySlug, getAllSlugs } from '../posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Clientaro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Find prev/next posts for navigation
  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-16">
        {/* Article header */}
        <header className="bg-[#0F172A] py-16">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-400 hover:text-white text-sm font-medium transition-colors mb-8"
            >
              ← Back to blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold">
                SG
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-slate-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          <div
            className="prose prose-lg prose-gray max-w-none prose-headings:text-[#0F172A] prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* CTA banner */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to build stronger client relationships?
            </h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Clientaro is the CRM built for agents who grow their business through personal connections, not cold calls. Start free — no credit card required.
            </p>
            <a
              href={`${CRM_URL}/signup`}
              className="inline-block bg-amber-400 hover:bg-amber-500 text-[#0F172A] font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start free today →
            </a>
          </div>
        </section>

        {/* Prev/Next navigation */}
        <nav className="max-w-3xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group text-left"
              >
                <p className="text-xs text-gray-400 mb-1">← Previous</p>
                <p className="text-sm font-semibold text-[#0F172A] group-hover:text-amber-600 transition-colors leading-snug">
                  {prevPost.title}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group text-right sm:col-start-2"
              >
                <p className="text-xs text-gray-400 mb-1">Next →</p>
                <p className="text-sm font-semibold text-[#0F172A] group-hover:text-amber-600 transition-colors leading-snug">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </nav>

        {/* Email signup */}
        <EmailSignup />
      </main>
      <Footer />
    </>
  )
}
