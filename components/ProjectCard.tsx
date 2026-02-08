import { Github } from "lucide-react"

type Props = {
  title: string
  description: string
  techStack: string[]
  github: string
}

export default function ProjectCard({
  title,
  description,
  techStack,
  github,
}: Props) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition">
      <div className="h-40 bg-gray-800 rounded-lg mb-4" />

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-white/10 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-3 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition"
        >
          <Github size={16} />
        </a>

        {/* <button className="flex items-center gap-2 text-sm px-3 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition">
          <ExternalLink size={16} />
          Live
        </button> */}
      </div>
    </div>
  )
}
