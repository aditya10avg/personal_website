
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "py-6"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-display font-medium">
          YourName
        </a>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a href="#about" className="text-sm hover:text-black/70 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm hover:text-black/70 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-black/70 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
