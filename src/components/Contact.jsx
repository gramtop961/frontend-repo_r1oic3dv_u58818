import { useState } from 'react'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white border border-purple-100 shadow">
            <div className="grid gap-4">
              <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" required />
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" required />
              <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400" required />
              <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 text-white font-semibold shadow hover:shadow-lg transition-all">Send Message</button>
              {sent && <p className="text-green-600 text-sm">Thanks! Your message has been prepared for sending.</p>}
            </div>
          </form>

          <div className="space-y-4">
            <p className="text-gray-700">Feel free to reach out for collaborations, project ideas, or opportunities.</p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/sawantshankar-860025273" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border hover:shadow transition">
                <Linkedin className="h-5 w-5 text-purple-700" /> LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border hover:shadow transition">
                <Github className="h-5 w-5 text-purple-700" /> GitHub
              </a>
              <a href="mailto:someone@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border hover:shadow transition">
                <Mail className="h-5 w-5 text-purple-700" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg hover:-translate-y-0.5 transition-transform" aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </button>
    </section>
  )
}
