import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import QuotesSection from "./components/QuotesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

const App = () => {
  return (
    <ThemeProvider>
      <main>
        <HeroSection />
        <ProjectsSection />
        <QuotesSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
