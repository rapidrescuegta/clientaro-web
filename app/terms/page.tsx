import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata = {
  title: 'Terms of Service — Clientaro',
  description: 'Terms and conditions for using the Clientaro CRM platform.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-base">Last updated: April 16, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 text-base leading-relaxed">
            Welcome to Clientaro. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
            the Clientaro CRM platform at{' '}
            <a href="https://www.clientaro.com" className="text-amber-600 hover:underline">www.clientaro.com</a>{' '}
            and{' '}
            <a href="https://app.clientaro.com" className="text-amber-600 hover:underline">app.clientaro.com</a>{' '}
            (the &quot;Service&quot;), operated by GRDev (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By using the Service, you agree to be bound by these Terms.
          </p>

          {/* 1. Acceptance of Terms */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            By creating an account or using the Service in any way, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and our{' '}
            <a href="/privacy" className="text-amber-600 hover:underline">Privacy Policy</a>.
            If you do not agree, you may not access or use the Service. If you are using the Service on
            behalf of an organization, you represent that you have the authority to bind that organization
            to these Terms.
          </p>

          {/* 2. Description of Service */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Clientaro is a customer relationship management (CRM) platform designed to help professionals
            manage their contacts, deals, pipelines, and client relationships. The Service includes
            web-based tools for contact management, deal tracking, communication logging, task management,
            and related features as described on our website.
          </p>

          {/* 3. Account Registration */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">3. Account Registration</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            To use Clientaro, you must create an account. When doing so, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li>Be at least <strong className="text-gray-800">18 years of age</strong> or the age of majority in your jurisdiction.</li>
            <li>Provide <strong className="text-gray-800">accurate and complete information</strong> during registration and keep it up to date.</li>
            <li>Be <strong className="text-gray-800">responsible for the security</strong> of your account credentials and for all activity that occurs under your account.</li>
            <li>Notify us immediately at <a href="mailto:legal@clientaro.com" className="text-amber-600 hover:underline">legal@clientaro.com</a> if you suspect any unauthorized use of your account.</li>
          </ul>

          {/* 4. Acceptable Use */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">4. Acceptable Use</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            You agree to use the Service only for lawful purposes. Specifically, you must not:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li>Use the Service for any <strong className="text-gray-800">illegal activity</strong> or in violation of any applicable local, provincial, national, or international law.</li>
            <li>Send <strong className="text-gray-800">unsolicited bulk messages (spam)</strong> through or in connection with the Service.</li>
            <li><strong className="text-gray-800">Reverse engineer</strong>, decompile, disassemble, or otherwise attempt to discover the source code or underlying technology of the Service.</li>
            <li>Interfere with, disrupt, or place an unreasonable burden on the Service or its infrastructure.</li>
            <li>Attempt to gain unauthorized access to other users&apos; accounts or data.</li>
          </ul>

          {/* 5. Subscription & Billing */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">5. Subscription &amp; Billing</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Clientaro offers both monthly and annual subscription plans. By subscribing, you agree to the following:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li><strong className="text-gray-800">Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing cycle unless you cancel before the renewal date.</li>
            <li><strong className="text-gray-800">Cancellation:</strong> You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period.</li>
            <li><strong className="text-gray-800">Refund Policy:</strong> Monthly plans are non-refundable. Annual plans are eligible for a pro-rated refund for the unused portion of your subscription if cancelled within the first 30 days.</li>
            <li><strong className="text-gray-800">Price Changes:</strong> We may adjust pricing with at least 30 days&apos; notice before your next billing cycle. Continued use after a price change constitutes acceptance.</li>
          </ul>

          {/* 6. Intellectual Property */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            The Clientaro platform — including its design, code, features, branding, documentation,
            and all related intellectual property — is owned by GRDev and protected by applicable
            copyright, trademark, and other intellectual property laws. Your subscription grants you
            a limited, non-exclusive, non-transferable license to use the Service for its intended
            purpose. Nothing in these Terms transfers any ownership of our intellectual property to you.
          </p>

          {/* 7. Data Ownership */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">7. Data Ownership</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            <strong className="text-gray-800">Your data belongs to you.</strong> All contacts, deals, notes,
            files, and any other content you create or upload to Clientaro remain your property. We do
            not claim ownership over your data.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            You may export your data at any time in a standard format. We grant you this commitment
            because we believe you should never feel locked into any platform — including ours. You
            grant us a limited license to host, store, and process your data solely for the purpose
            of providing the Service to you.
          </p>

          {/* 8. Limitation of Liability */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            To the maximum extent permitted by applicable law:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li>The Service is provided on an <strong className="text-gray-800">&quot;as is&quot;</strong> and <strong className="text-gray-800">&quot;as available&quot;</strong> basis without warranties of any kind, whether express or implied.</li>
            <li>GRDev shall not be liable for any <strong className="text-gray-800">indirect, incidental, special, consequential, or punitive damages</strong> arising from your use of or inability to use the Service.</li>
            <li>Our total liability for any claim related to the Service shall not exceed the <strong className="text-gray-800">amount you paid us in the 12 months preceding the claim</strong>.</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Some jurisdictions do not allow the exclusion of certain warranties or limitations of
            liability, so some of the above may not apply to you.
          </p>

          {/* 9. Termination */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">9. Termination</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Either party may terminate this agreement at any time:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li><strong className="text-gray-800">You</strong> may close your account at any time from your account settings or by contacting us.</li>
            <li><strong className="text-gray-800">We</strong> may suspend or terminate your account if you violate these Terms, engage in activity that harms the Service or other users, or fail to pay applicable fees.</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Upon termination, your data will remain available for export for <strong className="text-gray-800">30 days</strong>.
            After that period, we will permanently delete your data from our systems unless required
            by law to retain it.
          </p>

          {/* 10. Governing Law */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">10. Governing Law</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of the{' '}
            <strong className="text-gray-800">Province of Ontario, Canada</strong>, without regard to its
            conflict of law principles. Any disputes arising from these Terms or the Service shall be
            resolved in the courts located in Toronto, Ontario, Canada. Both parties agree to submit
            to the exclusive jurisdiction of those courts.
          </p>

          {/* 11. Contact */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">11. Contact</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="mt-4 text-gray-600 text-base leading-relaxed">
            <p><strong className="text-gray-800">GRDev</strong></p>
            <p>Toronto, Ontario, Canada</p>
            <p>
              Email:{' '}
              <a href="mailto:legal@clientaro.com" className="text-amber-600 hover:underline">
                legal@clientaro.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
