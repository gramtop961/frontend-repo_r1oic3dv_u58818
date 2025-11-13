export default function Skills() {
  const groups = [
    { title: 'Programming Languages', items: ['Python', 'JavaScript', 'C++'] },
    { title: 'Frameworks & Tools', items: ['Flask', 'TensorFlow', 'Scikit-learn', 'HTML', 'CSS', 'JS'] },
    { title: 'Databases', items: ['SQLite', 'MySQL'] },
    { title: 'Soft Skills', items: ['Leadership', 'Teamwork', 'Communication'] },
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
              <h3 className="text-lg font-semibold text-purple-800">{g.title}</h3>
              <div className="mt-4 space-y-3">
                {g.items.map((item) => (
                  <div key={item} className="w-full">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-700">{item}</span>
                      <span className="text-purple-600">{Math.floor(60 + Math.random()*35)}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-purple-100 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 rounded-full animate-[grow_1s_ease-out]" style={{ width: `${Math.floor(60 + Math.random()*35)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes grow{from{width:0}to{}}`}</style>
    </section>
  )
}
