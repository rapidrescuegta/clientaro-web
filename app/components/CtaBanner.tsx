const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

interface CtaBannerProps {
  headline?: string
  sub?: string
}

export function CtaBanner({ headline, sub }: CtaBannerProps) {
  const displayHeadline = headline ?? 'Your next client is waiting for you.'
  const displaySub = sub ?? 'Clientaro keeps every relationship warm — so when the time comes, you\'re the obvious choice.'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-[#0F172A] rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/15 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {displayHeadline}
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              {displaySub}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${CRM_URL}/signup`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] font-extrabold text-base px-8 py-4 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20"
              >
                Get started free →
              </a>
              <a
                href={`${CRM_URL}/login`}
                className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Log in to your account
              </a>
            </div>

            <p className="text-slate-500 text-sm mt-6">No credit card required · 14-day free trial</p>
          </div>
        </div>
      </div>
    </section>
  )
}
