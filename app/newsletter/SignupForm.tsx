'use client'

import { useState, FormEvent } from 'react'

export function SignupForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: firstName.trim() || undefined }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur border border-amber-400/30 rounded-2xl p-8 md:p-10 text-center">
        <div className="text-4xl mb-4">&#9993;</div>
        <h3 className="text-2xl font-bold text-white mb-2">Check your inbox!</h3>
        <p className="text-slate-300 text-base">
          We just sent <strong className="text-amber-400">The Daily 5 System</strong> to{' '}
          <strong className="text-white">{email}</strong>. Look for an email from Steve @ Clientaro.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1.5">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
            Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm mb-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-lg font-bold text-[#0F172A] text-base bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Get the free guide'}
      </button>

      <p className="text-slate-500 text-xs text-center mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}
