import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";
import { Navigation } from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <RouteChangeWrapper>
        <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
          <Background />
          <div className="grain-overlay" />
          <Navigation />
          <LayoutGroup id="routes">
            <AnimatedRoutes />
          </LayoutGroup>
        </div>
      </RouteChangeWrapper>
    </Router>
  );
}

export default App;

function RouteChangeWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
