
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Your Name.
          </h1>
          <p className="text-lg md:text-xl mt-6 text-muted-foreground opacity-0 animate-fade-in max-w-2xl" style={{ animationDelay: '0.5s' }}>
            I'm a [Your Profession] focusing on [Your Specialty]. I build [what you build] 
            that helps [who you help] achieve [what they achieve].
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="#about">
                Learn more
                <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
