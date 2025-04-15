import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import AnimatedText from './AnimatedText';
import AnimatedHeading from './AnimatedHeading';

const HeroSection = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="home" className="min-h-[50vh] flex flex-col justify-center">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2">
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            <Switch 
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
            />
          </div>
        </div>

        <div className="ml-0 md:-ml-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-jura font-semibold tracking-tight mb-8">
            Aditya
          </h1>

          <div className="space-y-6">
            <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-primary opacity-30 animate-matrix-effect"></div>
            
            <p className="text-lg font-jura">
              I just wanna bring a significant change. I love building solutions to real world problems. I might be a future tech leader.
            </p>

            <p className="text-lg font-jura">
              I'm a Aditya. I love building products that help people.
              I mostly work on AI apps, tools and products with AI capabilities.
            </p>

            <p className="text-lg font-jura">
              I am currently building a startup called  <a href="https://calleyai.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors">Calley AI</a>.
              I've worked on many small and large projects. The number goes above 50.
            </p>

            <p className="text-lg font-jura">
              Currently, I'm focused on Calley AI. When I'm not working,
              you can find me roaming in some random park/garden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

