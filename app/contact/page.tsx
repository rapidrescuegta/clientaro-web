import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContactForm } from './ContactForm'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Clientaro — Get in Touch',
  description:
    'Have questions about Clientaro CRM? Reach out to our team — we typically respond within 24 hours.',
  openGraph: {
    title: 'Contact Clientaro — Get in Touch',
    description:
      'Have questions about Clientaro CRM? Reach out to our team — we typically respond within 24 hours.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />

      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Questions, feedback, partnership ideas — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT — Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* RIGHT — Contact info cards */}
            <div className="space-y-5">
              {/* Email */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:hello@clientaro.com"
                      className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      hello@clientaro.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-sm text-gray-500">Toronto, Canada</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Quick Links</h3>
                    <div className="space-y-1.5">
                      <Link
                        href="/blog"
                        className="block text-sm text-gray-500 hover:text-amber-600 transition-colors"
                      >
                        Read our blog &rarr;
                      </Link>
                      <Link
                        href="/newsletter"
                        className="block text-sm text-gray-500 hover:text-amber-600 transition-colors"
                      >
                        Download the free guide &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
