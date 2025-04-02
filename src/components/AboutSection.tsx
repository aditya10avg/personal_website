import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-jura tracking-tight mb-2">About Me</h2>
            <Separator className="w-12" />
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-lg mb-4 font-jura">
              I'm a Aditya. I love building products that help people.
              I mostly work on AI apps, tools and products with AI capabilities.
            </p>
            <p className="text-lg mb-4 font-jura">
              I am currently building a startup called Calley AI <a href="https://calleyai.tech" target="_blank" rel="noopener noreferrer">calleyai.tech</a>
              I've worked on many small and large projects. The number goes above 50
            </p>
            <p className="text-lg font-jura">
              Currently, I'm focused on Calley AI. When I'm not working,
              you can find me roaming in some random park/garden.
            </p>
            
            <h3 className="font-jura text-lg mt-8 mb-3">Experience</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-jura font-medium">Check my linkedin for my experience</h4>
                  <span className="text-sm font-jura text-muted-foreground"></span>
                </div>
                <p className="text-muted-foreground font-jura"></p>
                <p className="mt-2 font-jura"></p>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-jura font-medium"></h4>
                  <span className="text-sm font-jura text-muted-foreground"></span>
                </div>
                <p className="text-muted-foreground font-jura"></p>
                <p className="mt-2 font-jura"></p>
              </div>
            </div>
            
            <h3 className="font-jura text-lg mt-8 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'AI agents', 'LLM Based Apps', 'Cold-Outreach', 'Vibe Coding', 'Arduino', 'Azure','Sensors'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-card text-sm rounded-full font-jura">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
