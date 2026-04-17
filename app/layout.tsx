import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from './components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clientaro.com'),
  title: 'Clientaro — The CRM Built for Relationships',
  description:
    'Close more deals. Never miss a moment. Clientaro is the relationship-driven CRM for real estate professionals.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Clientaro — The CRM Built for Relationships',
    description:
      'Close more deals. Never miss a moment. Clientaro is the relationship-driven CRM for real estate professionals.',
    siteName: 'Clientaro',
    type: 'website',
    url: 'https://www.clientaro.com',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clientaro — The CRM Built for Relationships',
    description:
      'Close more deals. Never miss a moment. Clientaro is the relationship-driven CRM for real estate professionals.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Clientaro',
  url: 'https://www.clientaro.com',
  description:
    'The relationship-driven CRM for real estate and B2B professionals who grow their business through genuine connections.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Steve Gracco',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
