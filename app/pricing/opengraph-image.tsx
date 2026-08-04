// app/pricing/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'Clientaro pricing — Free forever, or unlimited from $19/mo'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Pricing"
        title="Simple, honest pricing"
        subtitle="Free forever for 30 contacts · unlimited from $19/mo · 60-day Pro trial"
      />
    ),
    { ...OG_SIZE },
  )
}
