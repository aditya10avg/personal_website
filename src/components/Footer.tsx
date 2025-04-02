import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-jura font-medium">Aditya</p>
            <p className="text-sm font-jura text-muted-foreground mt-1">© {currentYear}. All rights reserved.</p>
          </div>
          
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#home" className="text-sm font-jura hover:text-primary/70 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm font-jura hover:text-primary/70 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm font-jura hover:text-primary/70 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-jura hover:text-primary/70 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <Separator className="my-8" />
        
        <p className="text-xs font-jura text-muted-foreground">
          Made by Aditya out of desperation.

        </p>
      </div>
    </footer>
  );
};

export default Footer;
