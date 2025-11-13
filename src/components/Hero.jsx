import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 shadow-sm">
            AI Enthusiast • Data Science Engineer • Innovator
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Shankar Sawant
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            <span className="animate-pulse">Exploring AI</span>, building intelligent systems, and shaping ideas into reality.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/sawantshankar-860025273" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/80 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Linkedin className="h-5 w-5 text-purple-700" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/80 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Github className="h-5 w-5 text-purple-700" />
            </a>
            <a href="mailto:someone@example.com" className="p-3 rounded-full bg-white/80 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Mail className="h-5 w-5 text-purple-700" />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-blue-500 rounded-full blur-2xl opacity-40" />
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="Shankar Sawant profile"
              className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full object-cover ring-4 ring-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
