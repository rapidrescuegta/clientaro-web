// app/b2b/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'Clientaro for B2B sales teams'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="B2B Sales"
        title="A CRM your team will actually use"
        subtitle="Pipeline clarity, relationship history, and follow-ups that never slip."
      />
    ),
    { ...OG_SIZE },
  )
}
