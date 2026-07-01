import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, Folder, FileDown, ArrowRight, Flame, Award, Trophy, GraduationCap } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const [codeSnippet, setCodeSnippet] = useState('');
  const fullSnippet = `// Initializing Google Gemini LLM API client
const { GoogleGenAI } = require("@google/generative-ai");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

async function analyzeCandidateCode(repoPath) {
  const repoAnalysis = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: "Verify complexity of DSA solutions inside " + repoPath,
    temperature: 0.1
  });
  
  return {
    problemsSolved: 450,
    coachInStatus: "Top 100 / 21k Selected",
    hackathonFinish: "Top 8 Finish (DayZero)",
    gradeCGPA: 8.66,
    recommendation: "STRONG HIRE"
  };
}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCodeSnippet(fullSnippet.slice(0, index));
      index++;
      if (index > fullSnippet.length) {
        setTimeout(() => { index = 0; }, 4000); // Pause before re-typing
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-height-[95vh] relative pt-32 pb-20 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 grid-bg">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-[80px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-brand-teal/3 blur-[60px] pointer-events-none -z-10"></div>

      {/* Hero Content */}
      <div className="flex-1 max-w-2xl text-left select-none">
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full text-xs font-bold text-brand-accent-light uppercase tracking-widest mb-6"
        >
          <Sparkles size={12} />
          <span>CSE • AI/ML Undergraduate</span>
        </motion.div>

        {/* Large Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08] mb-4 font-sans"
        >
          Saavi <br className="hidden md:inline" />
          <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Kotadia</span>
        </motion.h1>

        {/* Professional Headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl font-medium text-text-secondary mb-6 font-serif italic tracking-wide"
        >
          Software Engineer &bull; AI Engineer &bull; Full Stack Developer
        </motion.p>

        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm md:text-base text-text-secondary leading-relaxed max-w-lg mb-10 font-sans"
        >
          I build production-grade web systems and intelligent integrations. Currently engineering full-stack software and integrating large language models with a strong analytical foundation in DSA.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <a 
            href="#projects" 
            className="flex items-center gap-2 bg-gradient-to-r from-brand-accent to-brand-accent-light text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Folder size={14} />
            <span>View Projects</span>
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-transparent text-text-secondary hover:text-text-primary text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg border border-border-subtle hover:border-brand-accent transition-all duration-200"
          >
            <span>Contact Me</span>
            <ArrowRight size={14} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-brand-accent-light uppercase tracking-wider px-2 py-3 transition-colors duration-200"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Animated Statistics */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border-subtle"
        >
          <div className="flex items-center gap-3">
            <Flame size={20} className="text-brand-accent-light shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                <AnimatedCounter value={450} suffix="+" />
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">DSA Solved</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award size={20} className="text-brand-teal shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                <AnimatedCounter value={100} suffix="" />
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">CoachIn Selectee</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Trophy size={20} className="text-brand-gold shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                <AnimatedCounter value={8} suffix="" />
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">Hackathon Rank</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap size={20} className="text-indigo-400 shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                <AnimatedCounter value={8.66} duration={1.2} suffix="" />
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-text-secondary">GPA Score</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coding Terminal UI */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex-1 w-full max-w-lg rounded-xl overflow-hidden border border-border-subtle bg-bg-secondary/90 code-window select-text"
      >
        {/* Terminal Title Bar */}
        <div className="bg-bg-dark/80 px-4 py-3 flex items-center justify-between border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted font-mono">
            <TerminalIcon size={12} />
            <span>candidate_evaluation.js</span>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-[11px] md:text-xs leading-relaxed text-code-primary overflow-x-auto min-h-[300px] text-left">
          <pre className="whitespace-pre-wrap font-mono">
            {codeSnippet}
            <span className="w-1.5 h-4 bg-brand-accent-light inline-block align-middle ml-0.5 animate-pulse"></span>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
