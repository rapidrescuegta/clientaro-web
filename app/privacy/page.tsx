import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy — Clientaro',
  description: 'How Clientaro collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-base">Last updated: April 16, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 text-base leading-relaxed">
            At Clientaro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated by GRDev, we take your
            privacy seriously. This Privacy Policy explains how we collect, use, store, and protect
            your personal information when you use the Clientaro CRM platform at{' '}
            <a href="https://www.clientaro.com" className="text-amber-600 hover:underline">www.clientaro.com</a>{' '}
            and{' '}
            <a href="https://app.clientaro.com" className="text-amber-600 hover:underline">app.clientaro.com</a>{' '}
            (collectively, the &quot;Service&quot;).
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            We collect information in the following ways:
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-2">
            <strong className="text-gray-800">Account Information:</strong> When you create an account, we collect
            your name, email address, company name, and any other details you provide during registration.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-2">
            <strong className="text-gray-800">Usage Data:</strong> We automatically collect information about how
            you interact with the Service, including pages visited, features used, timestamps, and device
            information such as browser type and operating system.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            <strong className="text-gray-800">Cookies:</strong> We use essential cookies to keep you logged in and
            to ensure the Service functions properly. See the Cookies section below for more details.
          </p>

          {/* 2. How We Use Your Information */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li><strong className="text-gray-800">Provide and maintain the Service</strong> — including managing your account, processing transactions, and delivering customer support.</li>
            <li><strong className="text-gray-800">Improve our product</strong> — by analyzing usage patterns to make Clientaro faster, more reliable, and more useful for your workflow.</li>
            <li><strong className="text-gray-800">Communicate with you</strong> — to send important account notifications, product updates, and occasional marketing communications (which you can opt out of at any time).</li>
          </ul>

          {/* 3. Data Storage & Security */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">3. Data Storage &amp; Security</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Your data is encrypted both in transit (TLS/SSL) and at rest. Our infrastructure is hosted
            on servers located in Canada and the United States through trusted cloud providers.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We implement industry-standard security measures including access controls, regular security
            audits, and monitoring to protect your information against unauthorized access, alteration,
            or destruction. While no system is 100% secure, we are committed to safeguarding your data
            using best practices.
          </p>

          {/* 4. Third-Party Services */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">4. Third-Party Services</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            We use a limited number of trusted third-party services to operate Clientaro:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li><strong className="text-gray-800">Resend</strong> — for transactional and marketing email delivery.</li>
            <li><strong className="text-gray-800">Analytics providers</strong> — to understand how the Service is used and to improve performance.</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            These providers are contractually bound to process your data only as necessary to provide
            their services to us, and in accordance with applicable privacy laws.
          </p>

          {/* 5. Your Rights */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-2 ml-2">
            <li><strong className="text-gray-800">Access</strong> your personal data and request a copy of the information we hold about you.</li>
            <li><strong className="text-gray-800">Correct</strong> any inaccurate or incomplete information in your account.</li>
            <li><strong className="text-gray-800">Delete</strong> your personal data by requesting account deletion.</li>
            <li><strong className="text-gray-800">Export</strong> your data at any time in a standard, machine-readable format.</li>
          </ul>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:privacy@clientaro.com" className="text-amber-600 hover:underline">privacy@clientaro.com</a>.
            We will respond to your request within 30 days.
          </p>

          {/* 6. Cookies */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">6. Cookies</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-3">
            Clientaro uses <strong className="text-gray-800">essential cookies only</strong>. These are
            necessary for the Service to function properly — for example, to keep you logged in and to
            remember your preferences.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We do not use tracking cookies or third-party advertising cookies by default. If this
            changes in the future, we will update this policy and request your consent before
            enabling any non-essential cookies.
          </p>

          {/* 7. Data Retention */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">7. Data Retention</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We retain your personal information for as long as your account is active or as needed to
            provide you with the Service. If you close your account, we will delete your data upon
            request. Certain information may be retained for a limited period as required by law or
            for legitimate business purposes such as resolving disputes or enforcing our agreements.
          </p>

          {/* 8. Children's Privacy */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">8. Children&apos;s Privacy</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Clientaro is not directed at children under the age of 13. We do not knowingly collect
            personal information from children. If we become aware that we have inadvertently
            collected data from a child under 13, we will promptly delete that information. If you
            believe a child has provided us with personal data, please contact us at{' '}
            <a href="mailto:privacy@clientaro.com" className="text-amber-600 hover:underline">privacy@clientaro.com</a>.
          </p>

          {/* 9. Changes to This Policy */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            for legal, operational, or regulatory reasons. When we make material changes, we will notify
            you by email and update the &quot;Last updated&quot; date at the top of this page. We encourage you
            to review this policy periodically.
          </p>

          {/* 10. Contact Us */}
          <h2 className="text-xl font-bold text-[#0F172A] mt-10 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or how we handle your data,
            please reach out to us:
          </p>
          <div className="mt-4 text-gray-600 text-base leading-relaxed">
            <p><strong className="text-gray-800">GRDev</strong></p>
            <p>Toronto, Ontario, Canada</p>
            <p>
              Email:{' '}
              <a href="mailto:privacy@clientaro.com" className="text-amber-600 hover:underline">
                privacy@clientaro.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
