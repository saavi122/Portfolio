import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Briefcase, Shirt, ShieldCheck, Brain, LayoutGrid, List } from 'lucide-react';

const GithubIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const projectsList = [
    {
      id: 'gigsure',
      title: 'GigSure',
      subtitle: 'Parametric Insurance Platform for Gig Workers',
      desc: 'Micro-insurance platform protecting gig economy workers against income volatility caused by extreme weather conditions with automated claims.',
      tags: ['React.js', 'Tailwind CSS', 'Vercel', 'Parametric Insurance'],
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      bgVar: 'var(--project-gigsure-bg)',
      hoverBorder: 'hover:border-emerald-400/40',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      github: 'https://github.com/saavi122/GigSure',
      live: 'https://gig-sure-ten.vercel.app/'
    },
    {
      id: 'whycode',
      title: 'WhyCode',
      subtitle: 'AI Knowledge Recovery Platform',
      desc: 'MERN-stack application that indexes codebase history to resolve tribal knowledge, architectural rationale, and doc drift using Gemini.',
      tags: ['MERN Stack', 'Gemini API', 'Dependency Graph', 'Vercel Rewrites'],
      icon: <Brain size={24} className="text-indigo-400" />,
      bgVar: 'var(--project-whycode-bg)',
      hoverBorder: 'hover:border-indigo-400/40',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      github: 'https://github.com/saavi122/WhyCode',
      live: 'https://why-code.vercel.app/'
    },
    {
      id: 'dayzero',
      title: 'DayZero',
      subtitle: 'AI Recruitment Portal & Dashboard (Hackathon Win)',
      desc: 'Top 8 finished dashboard featuring analytics trackers, Flask server scripts, MongoDB collections, and Gemini screening algorithms.',
      tags: ['Flask Backend', 'MongoDB', 'Gemini AI', 'Contribution Analytics'],
      icon: <Briefcase size={24} className="text-brand-accent-light" />,
      bgVar: 'var(--project-dayzero-bg)',
      hoverBorder: 'hover:border-brand-accent-light/40',
      tagColor: 'text-brand-accent-light bg-brand-accent/10 border-brand-accent/20',
      github: 'https://github.com/saavi122/DayZero',
      live: 'https://day-zero-pi.vercel.app/'
    },
    {
      id: 'voguevista',
      title: 'Vogue Vista',
      subtitle: 'OpenAI / Claude AI Fashion Recommender',
      desc: 'Interactive apparel recommendation portal powered by Claude and OpenAI APIs to analyze user body shape indices and provide custom matches.',
      tags: ['React.js', 'Tailwind CSS', 'OpenAI API', 'Claude API'],
      icon: <Shirt size={24} className="text-brand-gold" />,
      bgVar: 'var(--project-voguevista-bg)',
      hoverBorder: 'hover:border-brand-gold/40',
      tagColor: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20',
      github: '',
      live: ''
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-[1px] bg-brand-accent"></span>
              <span>Work Archive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Selected <span className="font-serif italic font-normal text-brand-accent-light">Projects</span>
            </h2>
          </div>

          {/* Grid vs List View Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-lg border border-border-subtle bg-bg-primary w-fit">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${
                viewMode === 'list'
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <List size={14} />
              <span>Archive List</span>
            </button>
          </div>
        </div>

        {/* View Mode: Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsList.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-xl border border-border-subtle ${project.hoverBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[350px] group`}
                style={{ background: project.bgVar }}
              >
                <div>
                  {/* Header Icon & Links */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-bg-primary border border-border-subtle group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg border border-border-subtle bg-bg-primary/80 text-text-secondary hover:text-text-primary hover:border-brand-accent/40 transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg border border-border-subtle bg-bg-primary/80 text-text-secondary hover:text-brand-teal hover:border-brand-teal/40 transition-colors flex items-center gap-1 text-xs font-bold"
                          title="Live Site"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <Link 
                        to={`/projects/${project.id}`} 
                        className="p-2 rounded-lg border border-border-subtle bg-bg-primary/80 text-text-secondary hover:text-brand-accent-light hover:border-brand-accent/40 transition-colors"
                        title="Read Case Study"
                        id={`project-btn-${project.id}`}
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-text-primary mb-2 font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted font-medium mb-4 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                    {project.desc}
                  </p>
                </div>

                {/* Tags and CTA Links */}
                <div className="space-y-4 pt-4 border-t border-border-subtle/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className={`text-[9px] font-bold px-2 py-0.5 rounded border ${project.tagColor} uppercase tracking-wider`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent-light group-hover:text-brand-accent transition-colors duration-200"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    <div className="flex items-center gap-3 text-xs font-semibold">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-text-secondary hover:text-text-primary flex items-center gap-1 transition-colors"
                        >
                          <GithubIcon size={13} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-brand-teal hover:underline flex items-center gap-1 transition-colors font-bold"
                        >
                          <span>Live</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode: Editorial Archive List */}
        {viewMode === 'list' && (
          <div className="border border-border-subtle rounded-xl overflow-hidden bg-bg-primary">
            <div className="grid grid-cols-12 p-4 border-b border-border-subtle text-[10px] font-bold uppercase tracking-widest text-text-muted bg-bg-tertiary">
              <div className="col-span-1 md:col-span-1">No.</div>
              <div className="col-span-4 md:col-span-3">Project Title</div>
              <div className="hidden md:block md:col-span-4">Stack &amp; Frameworks</div>
              <div className="col-span-7 md:col-span-4 text-right">Actions / Links</div>
            </div>

            {projectsList.map((project, index) => (
              <div 
                key={project.id}
                className="grid grid-cols-12 p-4 items-center border-b border-border-subtle/60 hover:bg-bg-tertiary/60 transition-colors group text-left"
              >
                <div className="col-span-1 md:col-span-1 font-mono text-xs text-text-muted font-bold">
                  0{index + 1}
                </div>
                <div className="col-span-4 md:col-span-3">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-text-primary group-hover:text-brand-accent-light transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider truncate">
                    {project.subtitle}
                  </p>
                </div>
                <div className="hidden md:flex md:col-span-4 flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[9px] font-bold px-2 py-0.5 rounded border border-border-subtle text-text-secondary bg-bg-secondary uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="col-span-7 md:col-span-4 flex items-center justify-end gap-3 text-xs font-bold">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-text-secondary hover:text-text-primary flex items-center gap-1 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-brand-teal hover:underline flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                  <Link 
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-1 text-brand-accent-light hover:text-brand-accent transition-colors bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
