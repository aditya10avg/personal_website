import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-jura font-semibold tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Aditya.
          </h1>
          <p className="text-lg md:text-xl mt-6 text-muted-foreground opacity-0 animate-fade-in max-w-2xl font-jura" style={{ animationDelay: '0.5s' }}>
            I just wanna bring a significant change. I built solutions to real world problems. Might be a future tech leader.
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button asChild variant="outline" size="lg" className="group font-jura">
              <a href="#about">
                Explore more
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

