import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import AnimatedHeading from './AnimatedHeading';

const ContactSection = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      link: "http://github.com/aditya10avg",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/aditya-gayakwad-ba993026a/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://x.com/avg_aditya",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/adiitya_g10/",
    },
    {
      name: "Threads",
      icon: Instagram,
      link: "https://www.threads.net/@adiitya_g10",
    },
  ];

  return (
    <section id="contact" className="py-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="ml-0 md:-ml-4">
          <AnimatedHeading 
            text="Contact / Socials"
            tag="h2"
            className="text-3xl font-jura font-semibold mb-6"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <a href="mailto:adityavg1005@gmail.com" className="text-lg font-jura hover:text-primary/70 transition-colors">
              adityavg1005@gmail.com
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary/70 transition-colors font-jura"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
