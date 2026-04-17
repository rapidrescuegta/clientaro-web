'use client'
import { useState } from 'react'
import { LogoWordmark } from './Logo'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://app.clientaro.com'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Nav({ segment }: { segment?: 'realestate' | 'b2b' }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <LogoWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
          <a href="/newsletter" className="hover:text-amber-500 text-amber-600 font-semibold transition-colors">Free Guide</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${CRM_URL}/login`}
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Log in
          </a>
          <a
            href={`${CRM_URL}/signup`}
            className="text-sm font-semibold bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B] transition-colors"
          >
            Start free →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#pricing" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="/blog" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="/newsletter" className="block text-sm font-medium text-amber-600" onClick={() => setMobileOpen(false)}>Free Guide</a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a href={`${CRM_URL}/login`} className="text-sm font-semibold text-gray-700 py-2">Log in</a>
            <a href={`${CRM_URL}/signup`} className="text-sm font-semibold bg-[#0F172A] text-white px-4 py-2.5 rounded-lg text-center">Start free →</a>
          </div>
        </div>
      )}
    </header>
  )
}
