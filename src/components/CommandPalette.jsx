import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Folder, Zap, Compass, Terminal, ShieldAlert, Award, FileDown, SunMoon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CommandPalette = ({ isOpen, onClose, onOpenTerminal }) => {
  const [search, setSearch] = useState('');
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  // Handle keys: escape to close, down/up arrows, enter to submit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAction = (type, target) => {
    onClose();
    if (type === 'route') {
      navigate(target);
    } else if (type === 'scroll') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (type === 'theme') {
      toggleTheme();
    } else if (type === 'terminal') {
      onOpenTerminal();
    } else if (type === 'resume') {
      window.open('/resume.pdf', '_blank');
    }
  };

  const sections = [
    { name: 'Go to Hero / Home', category: 'Navigation', icon: <Compass size={16} />, action: () => handleAction('scroll', 'home') },
    { name: 'Go to Technical Skills', category: 'Navigation', icon: <Zap size={16} />, action: () => handleAction('scroll', 'skills') },
    { name: 'Go to Experience Timeline', category: 'Navigation', icon: <Compass size={16} />, action: () => handleAction('scroll', 'journey') },
    { name: 'Go to Competitive Programming (DSA)', category: 'Navigation', icon: <Award size={16} />, action: () => handleAction('scroll', 'dsa') },
    { name: 'Go to Projects Showcase', category: 'Navigation', icon: <Folder size={16} />, action: () => handleAction('scroll', 'projects') },
    { name: 'Go to Recruiter "Why Hire Me?"', category: 'Navigation', icon: <ShieldAlert size={16} />, action: () => handleAction('scroll', 'why-hire-me') },
    { name: 'Go to Certifications', category: 'Navigation', icon: <Award size={16} />, action: () => handleAction('scroll', 'certifications') },
    { name: 'Go to Contact', category: 'Navigation', icon: <Compass size={16} />, action: () => handleAction('scroll', 'contact') },
    
    { name: 'Case Study: EvenAfter (Gemini Chat)', category: 'Projects', icon: <Folder size={16} />, action: () => handleAction('route', '/projects/evenafter') },
    { name: 'Case Study: DayZero (AI Hiring)', category: 'Projects', icon: <Folder size={16} />, action: () => handleAction('route', '/projects/dayzero') },
    { name: 'Case Study: Vogue Vista (AI Fashion)', category: 'Projects', icon: <Folder size={16} />, action: () => handleAction('route', '/projects/voguevista') },
    { name: 'Case Study: Aarogya Aadhar (Healthcare)', category: 'Projects', icon: <Folder size={16} />, action: () => handleAction('route', '/projects/aarogya-aadhar') },
    { name: 'Case Study: Temp Conyotl (Converter)', category: 'Projects', icon: <Folder size={16} />, action: () => handleAction('route', '/projects/temp-converter') },

    { name: 'Toggle Dark / Light Theme', category: 'System', icon: <SunMoon size={16} />, action: () => handleAction('theme') },
    { name: 'Open Developer Terminal console ( ` )', category: 'System', icon: <Terminal size={16} />, action: () => handleAction('terminal') },
    { name: 'Download Professional Resume', category: 'System', icon: <FileDown size={16} />, action: () => handleAction('resume') },
  ];

  const filtered = sections.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-[990] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm select-none"
      onClick={onClose}
      id="cmdPaletteModal"
    >
      <div 
        ref={modalRef}
        className="w-full max-w-xl rounded-xl border border-brand-accent/20 shadow-2xl glass overflow-hidden flex flex-col max-h-[50vh] font-sans"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border-subtle bg-bg-dark/40">
          <Search size={18} className="text-text-secondary" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder-text-muted text-sm"
            placeholder="Type a section, project name, or system command..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            id="cmdPaletteInput"
          />
          <span className="text-[10px] text-text-muted bg-bg-tertiary px-1.5 py-0.5 rounded border border-border-subtle">ESC</span>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-brand-accent/10 hover:text-brand-accent-light text-text-secondary text-xs transition-all duration-150 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-text-muted group-hover:text-brand-accent-light transition-colors">{item.icon}</span>
                  <span className="font-medium text-text-primary group-hover:text-text-primary">{item.name}</span>
                </div>
                <span className="text-[10px] text-text-muted group-hover:text-brand-accent-light bg-bg-tertiary group-hover:bg-brand-accent/20 border border-border-subtle group-hover:border-brand-accent/30 px-2 py-0.5 rounded-full capitalize">
                  {item.category}
                </span>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-text-muted text-xs">
              No matching sections or actions found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-border-subtle bg-bg-darker/60 flex items-center justify-between text-[10px] text-text-muted">
          <span>Search & navigate the portfolio instantly</span>
          <span className="flex items-center gap-1">
            <span>Use</span>
            <kbd className="bg-bg-tertiary px-1 rounded border border-border-subtle">↑</kbd>
            <kbd className="bg-bg-tertiary px-1 rounded border border-border-subtle">↓</kbd>
            <span>to navigate</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
