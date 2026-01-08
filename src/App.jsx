import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { ProjectDetail } from "./pages/ProjectDetail";
import { getProjectDetailComponent } from "./pages/projects";
import { BaseProjectDetail } from "./pages/projects/BaseProjectDetail";
import { gameProjects, artProjects, otherProjects, featuredProjects } from "./data/projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Get the current hash from URL
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash) {
      setCurrentPage(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setCurrentPage(newHash || "home");

      // Scroll to top when navigating to any page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    // Check if it's a project detail page with slug
    if (currentPage.startsWith("project/")) {
      const slug = currentPage.replace("project/", "");

      // Try to find a custom project detail component
      const CustomProjectComponent = getProjectDetailComponent(slug);

      if (CustomProjectComponent) {
        // Use custom project detail page
        return <CustomProjectComponent />;
      } else {
        // Fall back to BaseProjectDetail with project data
        const allProjects = [
          ...gameProjects,
          ...artProjects,
          ...otherProjects,
          ...featuredProjects
        ];
        const project = allProjects.find(p => p.slug === slug);

        if (project) {
          return <BaseProjectDetail project={project} />;
        } else {
          // Project not found, show old ProjectDetail for backward compatibility
          return <ProjectDetail projectId={slug} />;
        }
      }
    }

    switch (currentPage) {
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      default:
        return (
          <>
            <Navbar />
            <Home />
          </>
        );
    }
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {renderPage()}
      </div>
    </>
  );
}

export default App;
