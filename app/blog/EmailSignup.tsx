'use client'

import { useState, FormEvent } from 'react'

export function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-[#0F172A] py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Get tips that help you close more deals
        </h3>
        <p className="text-slate-400 mb-8">
          Join thousands of relationship-driven professionals. We send one actionable article per week — no spam, no fluff.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-6 py-4">
            <p className="text-emerald-400 font-semibold">
              You&apos;re in! Check your inbox for a welcome email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-[#0F172A] font-semibold rounded-lg transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  )
}
