import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Pricing } from '../components/Pricing'
import { CtaBanner } from '../components/CtaBanner'
import { WhyClientaro } from '../components/WhyClientaro'
import { B2BHero } from './B2BHero'
import { B2BFeatures } from './B2BFeatures'

export const metadata = {
  title: 'Clientaro for B2B & Services — Your Relationship-Driven CRM',
  description: 'The CRM built for consultants, service businesses, and account managers who win on trust.',
}

export default function B2BPage() {
  return (
    <main className="bg-white text-gray-900">
      <Nav segment="b2b" />
      <B2BHero />
      <B2BFeatures />
      <WhyClientaro segment="b2b" />
      <Pricing />
      <CtaBanner
        headline="B2B deals are won before the contract."
        sub="Clientaro keeps every relationship warm — so when the time comes, you're the obvious choice."
      />
      <Footer />
    </main>
  )
}
