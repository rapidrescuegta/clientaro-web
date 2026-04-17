'use client'

import { useState, FormEvent } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message received!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thanks for reaching out, {form.name.split(' ')[0] || 'friend'}. We typically respond within
          24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', subject: 'General Inquiry', message: '' })
          }}
          className="mt-6 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-colors"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-colors"
        >
          <option>General Inquiry</option>
          <option>Sales Question</option>
          <option>Technical Support</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help?"
          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F172A] font-semibold text-sm px-6 py-3 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/25"
      >
        Send message
      </button>
    </form>
  )
}
