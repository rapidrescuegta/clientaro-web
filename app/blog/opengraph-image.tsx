// app/blog/opengraph-image.tsx — blog index card
// (individual posts have their own dynamic card at blog/[slug]/opengraph-image.tsx)
import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '../components/OgCard'

export const runtime = 'edge'
export const alt = 'The Clientaro blog'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Blog"
        title="The Clientaro blog"
        subtitle="Playbooks, tactics, and tools for relationship-driven sales."
      />
    ),
    { ...OG_SIZE },
  )
}
