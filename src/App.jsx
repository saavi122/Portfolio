import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import CommandPalette from './components/CommandPalette';
import TerminalEasterEgg from './components/TerminalEasterEgg';
import { FileText, ArrowUp } from 'lucide-react';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Inner App component to use React Router hooks
const AppContent = () => {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mouse spotlight tracker
  const handleMouseMove = (e) => {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', `${e.clientX}px`);
    root.style.setProperty('--mouse-y', `${e.clientY + window.scrollY}px`);
  };

  useEffect(() => {
    // Keyboard shortcuts listener
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K toggles Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdPaletteOpen(prev => !prev);
      }
      // Backtick key toggles Terminal CLI
      if (e.key === '`') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };

    // Scroll listener for back-to-top button
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="spotlight-container min-h-screen flex flex-col">
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Navbar 
        onOpenCmdPalette={() => setCmdPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<CaseStudy />} />
        </Routes>
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full border border-border-subtle bg-bg-secondary hover:border-brand-accent text-text-secondary hover:text-brand-accent-light transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
            title="Scroll to Top"
            id="floatingScrollTopBtn"
          >
            <ArrowUp size={16} />
          </button>
        )}

        {/* Floating Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="p-3.5 rounded-full border border-brand-accent/20 bg-brand-accent text-white hover:bg-brand-accent-light transition-all shadow-lg hover:-translate-y-1 active:translate-y-0 flex items-center justify-center pulse-glow"
          title="Download Professional Resume"
          id="floatingResumeBtn"
        >
          <FileText size={16} />
        </a>
      </div>

      {/* Command Palette Overlay */}
      <CommandPalette 
        isOpen={cmdPaletteOpen} 
        onClose={() => setCmdPaletteOpen(false)}
        onOpenTerminal={() => {
          setCmdPaletteOpen(false);
          setTerminalOpen(true);
        }}
      />

      {/* Easter Egg CLI Console Overlay */}
      <TerminalEasterEgg 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
