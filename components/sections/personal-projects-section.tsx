import { projects } from "@/lib/data"
import { ProjectCategory } from "@/lib/types"
import { ProjectCard } from "@/components/project-card"

export function PersonalProjectsSection() {
  const personalProjects = projects.filter((project) => project.category === ProjectCategory.Personal)

  return (
    <section id="personal-projects" className="py-16 md:py-24">
      <header className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Personal Projects</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Projects I&apos;ve built for learning, fun, or to solve a personal need.
        </p>
      </header>
      {personalProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-center">No personal projects to display yet.</p>
      )}
    </section>
  )
}
