import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import QuotesSection from "./components/QuotesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import QuotesPage from "./pages/QuotesPage";
import { ThemeProvider } from "@/hooks/useTheme";

const MainContent = () => (
  <>
    <main>
      <HeroSection />
      <ProjectsSection />
      <QuotesSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
