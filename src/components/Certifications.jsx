import { Award } from 'lucide-react'

const certs = [
  'AI/ML Foundations',
  'Data Science Specialization',
  'Python Programming',
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Certifications & Achievements</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c} className="p-6 rounded-2xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 shadow hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-purple-600" />
                <p className="font-medium text-gray-800">{c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
