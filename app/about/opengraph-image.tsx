// app/about/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'About Clientaro'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="About"
        title="Built by people who hate busywork"
        subtitle="Clientaro puts relationships — not data entry — at the center of your day."
      />
    ),
    { ...OG_SIZE },
  )
}
