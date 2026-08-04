// app/components/OgCard.tsx
//
// Shared 1200×630 branded Open Graph card used by every route-level
// opengraph-image.tsx. Rendered by next/og's edge ImageResponse —
// zero new dependencies, no binary PNG assets to maintain.
//
// Usage (in a route's opengraph-image.tsx):
//   import { ImageResponse } from 'next/og'
//   import { OgCard, OG_SIZE } from '../components/OgCard'
//   export const size = OG_SIZE
//   export default function Image() {
//     return new ImageResponse(<OgCard eyebrow="Pricing" title="…" />, { ...OG_SIZE })
//   }

import React from 'react'

export const OG_SIZE = { width: 1200, height: 630 } as const

export function OgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
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
      {/* Top row: brand + eyebrow pill */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
          {eyebrow}
        </div>
      </div>

      {/* Center band: headline + optional subtitle */}
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
            fontSize: title.length > 60 ? 60 : title.length > 40 ? 68 : 76,
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            maxWidth: '100%',
            display: 'flex',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.3,
              color: '#94A3B8',
              marginTop: 24,
              maxWidth: '90%',
              display: 'flex',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Footer */}
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
            color: '#94A3B8',
            fontSize: 22,
            fontWeight: 500,
            display: 'flex',
          }}
        >
          The CRM built for relationships
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
  )
}
