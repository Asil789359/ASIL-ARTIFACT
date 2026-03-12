import AOS from "aos";
import "aos/dist/aos.css";

import React, { useMemo, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "beautiful-react-hooks";

import projectData from "./projectsData";
import Header from "./components/shared/Header";
import MouseFollower from "./components/shared/MouseFollower";

// import Archives from "./components/pages/Archives";
import Home from "./components/pages/About/About.jsx";
import Works from "./components/pages/Works";
import Courses from "./components/pages/Courses/Courses.jsx";
import Labs from "./components/pages/Labs";
import Capsule from "./components/pages/Capsule";
import Random from "./components/pages/Random";
import ProjectDetail from "./components/projects/ProjectDetail";
import { AnimatePresence } from "framer-motion";
import StyleSwitcher from "./components/shared/StyleSwitcher";

// LEGALS
import CGV from "./components/pages/Legals/CGV.jsx";
import Mentions from "./components/pages/Legals/Mentions.jsx";

const App = () => {
  AOS.init({
    duration: 2000,
  });
  const containerRef = useRef(null);
let projectRoutes = useMemo(
    () =>
      projectData.map((project, index) => (
        <Route
          key={index}
          path={`/works/${project.path}`}
          element={<ProjectDetail index={index} project={project} />}
        />
      )),
    []
  );

  const isDesktop = useMediaQuery("(min-width:769px)");

  return (
    <>
      {isDesktop && <MouseFollower />}
      <Header />
      <StyleSwitcher />
      <div data-app-container ref={containerRef}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Routes>
            {projectRoutes}
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/about" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/Capsule" element={<Capsule />} />
            <Route path="/random" element={<Random />} />
            <Route path="/" element={<Works />} />
            {/* legals */}
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
