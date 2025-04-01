
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-display tracking-tight mb-2">About Me</h2>
            <Separator className="w-12" />
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-lg mb-6">
              I'm a [Your Role] with [X years] of experience in [Your Industry]. 
              I specialize in [Your Specialization] and have a passion for 
              [Something You're Passionate About].
            </p>
            <p className="text-lg mb-6">
              My background includes [brief background - education/career highlights]. 
              I've worked with [notable clients/companies] to deliver [results/products].
            </p>
            <p className="text-lg">
              Currently, I'm focused on [current focus/interests]. When I'm not working,
              you can find me [personal interests/hobbies].
            </p>
            
            <h3 className="font-display text-lg mt-12 mb-4">Experience</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-medium">Senior [Your Role]</h4>
                  <span className="text-sm text-muted-foreground">2020 - Present</span>
                </div>
                <p className="text-muted-foreground">[Company Name]</p>
                <p className="mt-2">Brief description of your responsibilities and achievements.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-medium">[Previous Role]</h4>
                  <span className="text-sm text-muted-foreground">2017 - 2020</span>
                </div>
                <p className="text-muted-foreground">[Previous Company]</p>
                <p className="mt-2">Brief description of your responsibilities and achievements.</p>
              </div>
            </div>
            
            <h3 className="font-display text-lg mt-12 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-full">
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
