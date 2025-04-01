
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRightIcon } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project and what technologies you used.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of your second project and what problem it solved.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of your third project and its impact.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    image: "/placeholder.svg",
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-display tracking-tight mb-2">Projects</h2>
            <Separator className="w-12" />
            <p className="mt-6 text-muted-foreground">
              A selection of projects I've worked on, spanning from web applications to design systems.
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg transition-all",
                    activeProject === project.id ? "bg-card shadow-sm" : "hover:bg-card/50"
                  )}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="mt-auto inline-flex items-center text-sm font-medium hover:text-primary/70 transition-colors"
                    >
                      View Project <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
