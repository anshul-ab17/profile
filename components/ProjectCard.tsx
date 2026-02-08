import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

type Props = {
  title: string
  description: string
  techStack: string[]
  github: string
  live?: string
  image: string   
}

export default function ProjectCard({
  title,
  description,
  techStack,
  github,
  live,
  image,         
}: Props) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      
      {/* Project Image */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
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
          Code
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
