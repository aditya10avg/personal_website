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
    title: "Calley AI",
    description: "An AI cold calling agent that autonomously calls potential leads, interacts naturally, and qualifies leads by scheduling meetings with the sales team when interest is detected.",
    tags: ["AI", "Voice AI", "Cold Calling", "Sales Automation"],
    link: "https://youtu.be/K0pzPqWGrfU?si=XW7YWPuMPW3J5C_G",
    image: "/images/projects/calley-ai.png",
  },
  {
    id: 2,
    title: "VoiceDoc - Parkinson's Detection",
    description: "A machine learning model that detects Parkinson's disease symptoms by analyzing voice features including tone, jitters, and pitch variations.",
    tags: ["Machine Learning", "Healthcare", "Voice Analysis"],
    link: "https://github.com/aditya10avg/voice_doc",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Protect - Scam Detection",
    description: "An LLM-powered software that protects users from financial scams by analyzing speech patterns and technical terminology used in conversations.",
    tags: ["LLM", "Security", "Pattern Recognition"],
    link: "https://github.com/aditya10avg/Protect",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Parkinson's Detection Wearable",
    description: "A watch-like wearable device that monitors and analyzes hand tremors to detect potential Parkinson's symptoms through frequency and amplitude analysis.",
    tags: ["IoT", "Healthcare", "Sensors", "Wearable Tech"],
    link: "#",
    image: "/images/projects/parkinsons-wearable.png",
  },
  {
    id: 5,
    title: "Quantum Chemistry Neural Network",
    description: "Using Graph Neural Networks and Message Passing Neural Networks to predict quantum properties of organic molecules, aiding in drug discovery.",
    tags: ["Neural Networks", "Quantum Chemistry", "Drug Discovery"],
    link: "https://github.com/aditya10avg/MPNN-for-Quantum-Biochemistry",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Pixie Style Transformer",
    description: "An open-source image-to-art generator that transforms images into specific art styles. Gained over 700 users within 24 hours of launch.",
    tags: ["AI", "Image Processing", "Art Generation"],
    link: "https://github.com/aditya10avg/pixie-style-transformer",
    image: "/placeholder.svg",
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const handleImageError = (projectId: number) => {
    setImageError(prev => ({...prev, [projectId]: true}));
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-jura tracking-tight mb-2">Projects</h2>
            <Separator className="w-12" />
            <p className="mt-6 text-muted-foreground font-jura">
              A collection of innovative projects spanning AI, healthcare, and technology, focused on solving real-world problems.
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
                      src={imageError[project.id] ? '/placeholder.svg' : project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(project.id)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-jura font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 font-jura">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-jura px-2 py-1 bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center text-sm font-jura font-medium hover:text-primary/70 transition-colors"
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
