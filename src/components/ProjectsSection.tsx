import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRightIcon } from "lucide-react";
import AnimatedHeading from './AnimatedHeading';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
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
  },
  {
    id: 3,
    title: "Protect - Scam Detection",
    description: "An LLM-powered software that protects users from financial scams by analyzing speech patterns and technical terminology used in conversations.",
    tags: ["LLM", "Security", "Pattern Recognition"],
    link: "https://github.com/aditya10avg/Protect",
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
  },
  {
    id: 6,
    title: "Pixie Style Transformer",
    description: "An open-source image-to-art generator that transforms images into specific art styles. Gained over 700 users within 24 hours of launch.",
    tags: ["AI", "Image Processing", "Art Generation"],
    link: "https://github.com/aditya10avg/pixie-style-transformer",
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const handleImageError = (projectId: number) => {
    setImageError(prev => ({...prev, [projectId]: true}));
  };

  // Separate projects with and without images
  const projectsWithImages = projects.filter(p => p.image);
  const projectsWithoutImages = projects.filter(p => !p.image);

  return (
    <section id="projects" className="py-8 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="ml-0 md:-ml-4">
          <AnimatedHeading 
            text="Past   Endeavours"
            tag="h2"
            className="text-3xl font-jura font-semibold mb-6"
          />
        </div>
        
        {/* Projects with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {projectsWithImages.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              isActive={activeProject === project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              onImageError={() => handleImageError(project.id)}
              hasError={imageError[project.id]}
            />
          ))}
        </div>

        {/* Projects without images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsWithoutImages.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              isActive={activeProject === project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Add interface for ProjectCard props
interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onImageError?: () => void;
  hasError?: boolean;
}

// Update the ProjectCard component with proper typing
const ProjectCard = ({ 
  project, 
  isActive, 
  onMouseEnter, 
  onMouseLeave, 
  onImageError, 
  hasError 
}: ProjectCardProps) => (
  <div 
    className={cn(
      "rounded-lg transition-all p-3",
      isActive ? "bg-card shadow-sm" : "hover:bg-card/50"
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {project.image && (
      <div className="aspect-video bg-muted rounded-md overflow-hidden mb-4">
        <img 
          src={hasError ? '/placeholder.svg' : project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          onError={onImageError}
        />
      </div>
    )}
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-jura font-medium">{project.title}</h3>
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-jura font-medium hover:text-primary/70 transition-colors"
        >
          View Project <ArrowUpRightIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
      <p className="text-muted-foreground mb-3 font-jura text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-jura px-2 py-1 bg-secondary rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsSection;
