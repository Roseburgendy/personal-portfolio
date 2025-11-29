import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About as AboutSection } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { ProjectDetail } from "./pages/ProjectDetail";

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
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    // Check if it's a project detail page
    if (currentPage.startsWith("project/")) {
      const projectId = currentPage.replace("project/", "");
      return <ProjectDetail projectId={projectId} />;
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
