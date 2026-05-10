// app/blog/[slug]/opengraph-image.tsx
//
// Next.js 13.3+ file convention: this file auto-generates the
// og:image AND twitter:image meta tags for every /blog/<slug> URL.
// No metadata wiring needed in page.tsx — Next.js handles it.
//
// Output: 1200×630 branded card per post.
// Cost: 0 — uses next/og's edge ImageResponse, no new dependency.

import { ImageResponse } from 'next/og'
import { getPostBySlug } from '../posts'

export const runtime = 'edge'
export const alt = 'Clientaro blog post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  const title = post?.title ?? 'Clientaro Blog'
  const category = post?.category ?? 'Insights'
  const readTime = post?.readTime ?? ''
  const author = post?.author ?? 'Clientaro'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top row: brand + category pill */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'linear-gradient(135deg, #F5C842 0%, #C9930A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A',
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              C
            </div>
            <div
              style={{
                color: '#FFFFFF',
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              Clientaro
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: '#FBBF24',
              background: 'rgba(251, 191, 36, 0.12)',
              padding: '10px 20px',
              borderRadius: 999,
              display: 'flex',
            }}
          >
            {category}
          </div>
        </div>

        {/* Title — center band */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            paddingTop: 32,
          }}
        >
          <div
            style={{
              fontSize: title.length > 80 ? 52 : title.length > 50 ? 60 : 68,
              fontWeight: 800,
              lineHeight: 1.12,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              maxWidth: '100%',
              display: 'flex',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom row: author + read time + url */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.10)',
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              color: '#94A3B8',
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            <div style={{ display: 'flex' }}>{author}</div>
            {readTime && (
              <>
                <div style={{ display: 'flex', color: '#475569' }}>·</div>
                <div style={{ display: 'flex' }}>{readTime}</div>
              </>
            )}
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#FBBF24',
              display: 'flex',
            }}
          >
            clientaro.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
