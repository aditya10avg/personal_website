import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
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
        <a href="#home" className="text-lg font-jura font-medium">
          Aditya
        </a>
        <div className="flex items-center gap-2">
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          <Switch 
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
