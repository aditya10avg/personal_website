
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-display font-medium">YourName</p>
            <p className="text-sm text-muted-foreground mt-1">© {currentYear}. All rights reserved.</p>
          </div>
          
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#home" className="text-sm hover:text-primary/70 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-primary/70 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-primary/70 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-primary/70 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <Separator className="my-8" />
        
        <p className="text-xs text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
