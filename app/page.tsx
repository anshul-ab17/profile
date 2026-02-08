import Sidebar from "@/components/Sidebar"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "./projects/projects"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
        <Sidebar />
      </div>

      <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
          />
        ))}
      </div>
    </main>
  )
}
