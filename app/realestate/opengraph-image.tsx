// app/realestate/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'Clientaro for real estate professionals'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Real Estate"
        title="The CRM for real estate pros"
        subtitle="Nurture every lead, stay top-of-mind, close more listings."
      />
    ),
    { ...OG_SIZE },
  )
}
