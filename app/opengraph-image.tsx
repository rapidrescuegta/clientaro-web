// app/opengraph-image.tsx — default OG card (home + any route without its own)
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from './components/OgCard'

export const runtime = 'edge'
export const alt = 'Clientaro — The CRM built for relationships'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="CRM"
        title="The CRM built for relationships"
        subtitle="Close more deals. Never miss a moment."
      />
    ),
    { ...OG_SIZE },
  )
}
