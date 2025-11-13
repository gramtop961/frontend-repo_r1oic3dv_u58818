import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Forensic Face Sketch Construction',
    desc: 'AI-assisted system to generate facial sketches from inputs for forensic workflows.',
    tech: ['AI','Python','Flask'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'LAMHAA: NLP e-Blogging Platform',
    desc: 'Semantic analysis and NLP-powered blogging with smart recommendations.',
    tech: ['NLP','Flask','TensorFlow'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'Ambulance Alert System',
    desc: 'IoT + ML system for smart traffic signal prioritization for ambulances.',
    tech: ['IoT','ML','Python'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'ADHD Detection & Management',
    desc: 'Data-driven assessment tool with predictive modeling to assist clinicians.',
    tech: ['Data Science','Python','Dash'],
    links: { demo: '#', github: '#' }
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Projects & Creations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-2xl p-6 bg-gradient-to-br from-white to-purple-50 border border-purple-100 shadow hover:shadow-2xl transition-all">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <h3 className="relative text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="relative mt-2 text-gray-700">{p.desc}</p>
              <div className="relative mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">{t}</span>
                ))}
              </div>
              <div className="relative mt-5 flex gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm text-purple-700 hover:underline">
                  <ExternalLink className="h-4 w-4" /> View Project
                </a>
                <a href={p.links.github} className="inline-flex items-center gap-1 text-sm text-purple-700 hover:underline">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
