import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Background } from './components/Background';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
        <Background />
        <div className="grain-overlay" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;