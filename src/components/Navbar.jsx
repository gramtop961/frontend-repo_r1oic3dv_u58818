import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToId('home')} className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
            <span className="font-semibold tracking-tight text-gray-800 group-hover:text-purple-600 transition-colors">
              Shankar Sawant
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:text-purple-600 hover:bg-purple-50 ${
                  active === s.id ? 'text-purple-700 bg-purple-100 shadow-inner' : 'text-gray-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all hover:text-purple-600 hover:bg-purple-50 ${
                  active === s.id ? 'text-purple-700 bg-purple-100' : 'text-gray-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
