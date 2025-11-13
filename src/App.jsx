import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-600">
        © 2025 Shankar Sawant | Designed with ❤️ and AI.
      </footer>
    </div>
  )
}

export default App
