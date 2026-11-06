import { useState, useEffect } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { HexagonalWarDetail } from "./pages/projects/HexagonalWarDetail";
import { ThesisProjectDetail } from "./pages/projects/ThesisProjectDetail";

// Project detail subpages, routed as #project/<slug>
const projectPages = {
  "hexagonal-war": HexagonalWarDetail,
  "thesis-project": ThesisProjectDetail,
};

const getRoute = () => window.location.hash.slice(1);

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const ProjectPage = route.startsWith("project/")
    ? projectPages[route.slice("project/".length)]
    : null;

  // After a route change, jump to the top, or to the section named in the hash (#about, #projects)
  useEffect(() => {
    const section = !ProjectPage && route && document.getElementById(route);
    if (section) {
      section.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [route, ProjectPage]);

  return (
    <div className="min-h-screen">
      {ProjectPage ? (
        <ProjectPage />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
      <Analytics />
    </div>
  );
}

export default App;
