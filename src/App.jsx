import { useState, useEffect } from "react";
import Navigation from "./component/Navigation/Navigation";
import AboutSection from "./component/AboutSection/AboutSection";
import SkillsSection from "./component/SkillsSection/SkillsSection";
import EducationSection from "./component/EducationSection/EducationSection";
import ProjectsSection from "./component/ProjectsSection/ProjectsSection";
import "./App.css";
import ContactSection from "./component/ContactSection/ContactSection";
import Footer from "./component/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <AboutSection scrollToSection={scrollToSection} />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
