import { projects } from "@/lib/data"
import { ProjectCategory } from "@/lib/types"
import { ProjectCard } from "@/components/project-card"

export function RealWorldProjectsSection() {
  const realWorldProjects = projects.filter((project) => project.category === ProjectCategory.RealWorld)

  return (
    <section id="real-world-projects" className="py-16 md:py-24 bg-muted/50">
      <header className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Real-World Projects</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional projects I&apos;ve contributed to, showcasing my skills in a commercial environment.
        </p>
      </header>

      <div className="px-7">
        {realWorldProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {realWorldProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No real-world projects to display yet.</p>
        )}
      </div>
    </section>
  )
}
