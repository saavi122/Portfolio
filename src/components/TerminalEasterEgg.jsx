import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

const TerminalEasterEgg = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { text: 'Saavi Kotadia AI & Core CLI v1.0.0', type: 'system' },
    { text: "Type 'help' to see available commands or 'exit' to close.", type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const command = trimmedInput.toLowerCase().split(' ')[0];
    const args = trimmedInput.toLowerCase().split(' ').slice(1);

    const newHistory = [...history, { text: `saavi-dev@portfolio:~$ ${trimmedInput}`, type: 'input' }];

    let response = [];
    switch (command) {
      case 'help':
        response = [
          { text: 'Available commands:', type: 'system' },
          { text: '  help       - Display this list', type: 'info' },
          { text: '  about      - Read Saavi\'s developer story', type: 'info' },
          { text: '  skills     - List categorized technical skills', type: 'info' },
          { text: '  projects   - Show descriptions of featured projects', type: 'info' },
          { text: '  contact    - Print social links and contact info', type: 'info' },
          { text: '  resume     - Get link to download resume', type: 'info' },
          { text: '  clear      - Clear the terminal screen', type: 'info' },
          { text: '  exit       - Close the CLI console', type: 'info' }
        ];
        break;
      case 'about':
        response = [
          { text: 'Saavi Kotadia — Software Engineer & AI/ML Developer', type: 'system' },
          { text: 'B.Tech CSE (AI/ML) Undergraduate (2024-2028) at Parul Institute. Selected out of 21,000+ applicants for LinkedIn CoachIn. Top 8 finish in LinkedIn Hackathon. Passionate about solving complex engineering challenges, backend architecture, and building production-grade LLM applications.', type: 'info' }
        ];
        break;
      case 'skills':
        response = [
          { text: 'Languages: Java, Python, JavaScript, C, C++', type: 'info' },
          { text: 'Frontend:  React, Tailwind, HTML, CSS, Vite', type: 'info' },
          { text: 'Backend:   Node.js, Express, Flask, REST APIs, JWT, Socket.IO', type: 'info' },
          { text: 'Database:  MongoDB, SQL', type: 'info' },
          { text: 'AI:        Gemini API, OpenAI API, Claude API, Prompt Engineering, RAG', type: 'info' },
          { text: 'Dev Tools: Git, GitHub, Postman, Vercel, Render, VS Code', type: 'info' }
        ];
        break;
      case 'projects':
        response = [
          { text: '1. EvenAfter — Gemini-powered MERN real-time messaging application.', type: 'system' },
          { text: '2. DayZero — Recruiter Dashboard & AI hiring platform (Top 8 LinkedIn Hackathon).', type: 'system' },
          { text: '3. Vogue Vista — OpenAI/Claude based AI fashion recommendation system.', type: 'system' },
          { text: '4. Aarogya Aadhar — Aarogya digital health identity card web system (SIH).', type: 'system' },
          { text: 'Type "projects <name>" (e.g. "projects dayzero") to read more (coming soon).', type: 'info' }
        ];
        break;
      case 'contact':
        response = [
          { text: 'Email:      kotadiasaavi2811@gmail.com', type: 'info' },
          { text: 'LinkedIn:   linkedin.com/in/Saavi-Kotadia', type: 'info' },
          { text: 'GitHub:     github.com/saavi122', type: 'info' },
          { text: 'LeetCode:   leetcode.com/saavikotadia', type: 'info' },
          { text: 'Phone:      +91 98920 17769', type: 'info' }
        ];
        break;
      case 'resume':
        response = [
          { text: 'Resume download link: /resume.pdf (Click floating resume button in main UI)', type: 'info' }
        ];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
      case 'close':
        onClose();
        setInput('');
        return;
      default:
        response = [{ text: `Command not found: "${command}". Type "help" for a list of commands.`, type: 'error' }];
    }

    setHistory([...newHistory, ...response]);
    setInput('');
  };

  return (
    <div className={`fixed z-[999] inset-x-0 bottom-0 p-4 transition-all duration-300 ${isMaximized ? 'top-0 h-full' : 'h-[40vh] md:h-[45vh]'}`}>
      <div 
        className="w-full h-full flex flex-col rounded-t-xl overflow-hidden border border-border-subtle shadow-2xl glass font-mono text-sm text-text-primary"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-bg-primary/80 border-b border-border-subtle select-none cursor-default">
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-brand-accent-light" />
            <span className="text-xs font-semibold text-text-secondary">saavi-dev@terminal:~</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }} 
              className="text-text-secondary hover:text-text-primary transition-colors"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }} 
              className="text-text-secondary hover:text-red-500 transition-colors"
              title="Close"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 select-text custom-scrollbar bg-bg-darker/90">
          {history.map((line, i) => (
            <div key={i} className="leading-relaxed font-mono">
              {line.type === 'input' && (
                <span className="text-text-secondary">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-brand-accent font-semibold">{line.text}</span>
              )}
              {line.type === 'info' && (
                <span className="text-code-primary">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-red-400">{line.text}</span>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input line */}
        <div className="flex items-center gap-2 px-4 py-3 bg-bg-primary border-t border-border-subtle">
          <span className="text-brand-accent-light select-none">saavi-dev@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-text-primary caret-brand-accent-light"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
            autoComplete="off"
            spellCheck="false"
            id="terminalInput"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalEasterEgg;


