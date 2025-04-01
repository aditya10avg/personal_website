import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-jura tracking-tight mb-2">Contact</h2>
            <Separator className="w-12" />
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-lg mb-8 font-jura">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="mb-12">
              <h3 className="text-lg font-jura font-medium mb-4">Get in touch</h3>
              <a href="mailto:adityavg1005@gmail.com" className="text-lg font-jura hover:text-primary/70 transition-colors">
                adityavg1005@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-jura font-medium mb-4">Follow me</h3>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
