// app/contact/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'Contact Clientaro'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Questions, demos, or feedback — we're quick to reply."
      />
    ),
    { ...OG_SIZE },
  )
}
