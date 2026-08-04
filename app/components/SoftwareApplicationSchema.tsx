/**
 * SoftwareApplication JSON-LD for Clientaro.
 *
 * Mounted on the marketing pages where a visitor is evaluating us as
 * a product (homepage, /realestate, /b2b). NOT mounted on blog posts —
 * those already have Article + FAQPage schema and adding
 * SoftwareApplication there would dilute the Article context.
 *
 * IMPORTANT — pricing mirror:
 * The OFFERS array below is a manual mirror of aria-crm's
 * `src/lib/plan-limits.ts` (PLAN_LIMITS — Free / Starter / Pro).
 * If pricing tiers, prices, or limits change in PLAN_LIMITS, update
 * the OFFERS array here in the same PR. There is no shared package
 * yet — this comment is the contract.
 */

const OFFERS = [
  {
    name: 'Free',
    price: '0',
    description: '30 contacts, every Pro feature unlocked, 50 SMS / month.',
  },
  {
    name: 'Starter',
    price: '19',
    description: '1,000 contacts, full feature set, 500 SMS / month.',
  },
  {
    name: 'Pro',
    price: '49',
    description: 'Unlimited contacts, full feature set, 5,000 SMS / month, priority support.',
  },
]

const FEATURES = [
  'Contact card with family, kids, hobbies, life events',
  'Referral graph view',
  'Email automation and drip campaigns',
  'AI follow-up suggestions',
  'AI email autopilot',
  'Bundled SMS and email',
  'Google + Outlook calendar sync',
  '60-day free trial of Pro',
  'iOS and Android mobile',
  'Built for solo agents and B2B account managers',
]

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Clientaro',
    description:
      'Relationship-first CRM for solo real estate agents and B2B account managers. Tracks the human side of your clients — families, hobbies, life events — so you never miss the moment that turns into a referral.',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'CRM Software',
    operatingSystem: 'Web, iOS, Android',
    url: 'https://www.clientaro.com',
    image: 'https://www.clientaro.com/opengraph-image',
    softwareVersion: '1.0',
    author: {
      '@type': 'Person',
      name: 'Steve Gracco',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clientaro',
      url: 'https://www.clientaro.com',
    },
    offers: OFFERS.map((o) => ({
      '@type': 'Offer',
      name: `${o.name} plan`,
      price: o.price,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: o.price,
        priceCurrency: 'USD',
        billingDuration: 'P1M',
        unitText: 'month',
      },
      description: o.description,
      availability: 'https://schema.org/InStock',
      url: `https://app.clientaro.com/signup?plan=${o.name.toLowerCase()}`,
    })),
    featureList: FEATURES,
    // NOTE: aggregateRating intentionally omitted until we have >=3 real reviews.
    // Schema.org permits omission; Google rich-results validator flags placeholder
    // (0-count) ratings as deceptive. Add back once we have testimonials on the site.
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
