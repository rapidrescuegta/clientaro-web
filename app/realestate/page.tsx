import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Pricing } from '../components/Pricing'
import { CtaBanner } from '../components/CtaBanner'
import { WhyClientaro } from '../components/WhyClientaro'
import { ProductShowcase } from '../components/ProductShowcase'
import { REHero } from './REHero'
import { REFeatures } from './REFeatures'

export const metadata = {
  title: 'Clientaro for Real Estate — Your Relationship-Driven CRM',
  description: 'The CRM built for real estate agents and brokers who win on relationships.',
}

export default function RealEstatePage() {
  return (
    <main className="bg-white text-gray-900">
      <Nav segment="realestate" />
      <REHero />
      <REFeatures />
      <ProductShowcase />
      <WhyClientaro segment="realestate" />
      <Pricing />
      <CtaBanner
        headline="Your next referral is one relationship away."
        sub="Clientaro keeps you top of mind with every client — automatically."
      />
      <Footer />
    </main>
  )
}
