import { LogoWordmark } from './Logo'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <LogoWordmark dark />
            <p className="text-slate-400 text-sm mt-2 max-w-xs">
              The relationship-driven CRM for real estate professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-3">Product</div>
              <div className="space-y-2">
                <a href="#features" className="block text-slate-400 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="block text-slate-400 hover:text-white transition-colors">Pricing</a>
                <a href={`${CRM_URL}/login`} className="block text-slate-400 hover:text-white transition-colors">Log in</a>
                <a href={`${CRM_URL}/signup`} className="block text-slate-400 hover:text-white transition-colors">Sign up free</a>
              </div>
            </div>
            <div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-3">Company</div>
              <div className="space-y-2">
                <a href="/about" className="block text-slate-400 hover:text-white transition-colors">About</a>
                <a href="/blog" className="block text-slate-400 hover:text-white transition-colors">Blog</a>
                <a href="/contact" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-3">Legal</div>
              <div className="space-y-2">
                <a href="/privacy" className="block text-slate-400 hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="block text-slate-400 hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Clientaro. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built for agents who lead with relationships.</p>
        </div>
      </div>
    </footer>
  )
}
