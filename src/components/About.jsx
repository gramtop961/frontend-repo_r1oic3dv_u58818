export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-transparent to-white/60 pointer-events-none" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          I’m a Computer Engineering student from Saraswati College of Engineering, passionate about Artificial Intelligence, Machine Learning, and Data Science. I love building intelligent, creative, and impactful projects such as AI-based systems, blogging platforms, and data-driven applications. My focus lies in exploring real-world problems, experimenting with models, and transforming ideas into meaningful digital experiences that can scale.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Problem Solving','Creativity','Analytical Thinking','Team Collaboration'].map((s) => (
            <div key={s} className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition-shadow border border-purple-100">
              <p className="text-sm font-semibold text-purple-700">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
