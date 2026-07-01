import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, FileDown, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onOpenCmdPalette, onOpenTerminal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Timeline', id: 'journey' },
    { name: 'LeetCode', id: 'dsa' },
    { name: 'Projects', id: 'projects' },
    { name: 'Why Hire Me', id: 'why-hire-me' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-subtle px-6 py-4 flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="text-xl font-serif font-semibold tracking-wide hover:opacity-80 transition-opacity">
        Saavi <span className="text-brand-accent italic font-normal">Kotadia</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="text-xs uppercase tracking-widest text-text-secondary hover:text-brand-accent-light font-semibold transition-colors cursor-pointer"
            id={`nav-link-${link.id}`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Interactive Controls & Status */}
      <div className="hidden md:flex items-center gap-4">
        {/* Available indicator */}
        <div className="flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-accent-light">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse pulse-glow"></span>
          <span>Open to Internships</span>
        </div>

        {/* Cmd+K trigger */}
        <button 
          onClick={onOpenCmdPalette}
          className="p-2 rounded-lg hover:bg-bg-tertiary border border-transparent hover:border-border-subtle text-text-secondary hover:text-text-primary transition-all duration-200"
          title="Search / Actions (Ctrl+K)"
          id="navCmdButton"
        >
          <Search size={16} />
        </button>

        {/* Terminal trigger */}
        <button 
          onClick={onOpenTerminal}
          className="p-2 rounded-lg hover:bg-bg-tertiary border border-transparent hover:border-border-subtle text-text-secondary hover:text-text-primary transition-all duration-200"
          title="Open Terminal ( ` )"
          id="navTerminalButton"
        >
          <Terminal size={16} />
        </button>

        {/* Theme toggler */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-bg-tertiary border border-transparent hover:border-border-subtle text-text-secondary hover:text-brand-gold transition-all duration-200"
          title="Toggle Theme"
          id="navThemeButton"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>

      {/* Mobile Menu button */}
      <div className="flex items-center gap-3 lg:hidden">
        <button 
          onClick={onOpenCmdPalette}
          className="p-2 rounded-lg hover:bg-bg-tertiary text-text-secondary"
          id="navCmdButtonMobile"
        >
          <Search size={18} />
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-bg-tertiary text-text-secondary"
          id="navThemeButtonMobile"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-bg-tertiary text-text-secondary"
          id="navMenuToggleMobile"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-[68px] left-0 right-0 glass border-b border-border-subtle p-6 flex flex-col gap-6 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm uppercase tracking-widest text-text-secondary hover:text-brand-accent-light font-bold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-subtle">
            <div className="flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full text-[11px] font-semibold text-brand-accent-light">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Internships</span>
            </div>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenTerminal(); }}
              className="flex items-center gap-2 text-xs text-text-secondary hover:text-brand-accent-light"
            >
              <Terminal size={14} />
              <span>Terminal CLI</span>
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="flex items-center gap-2 text-xs text-text-secondary hover:text-brand-accent-light"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
