import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Briefcase, Shirt, ShieldCheck, Thermometer } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      id: 'evenafter',
      title: 'EvenAfter',
      subtitle: 'Gemini-Powered MERN Real-time Messaging Platform',
      desc: 'Role-based communications portal that processes message content in real time using Google Gemini API to analyze context, sentiment, and flags.',
      tags: ['MERN Stack', 'JWT Security', 'Socket.IO', 'Gemini API'],
      icon: <MessageSquare size={24} className="text-brand-teal" />,
      bgVar: 'var(--project-evenafter-bg)',
      hoverBorder: 'hover:border-brand-teal/40',
      tagColor: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20'
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
      tagColor: 'text-brand-accent-light bg-brand-accent/10 border-brand-accent/20'
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
      tagColor: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20'
    },
    {
      id: 'aarogya-aadhar',
      title: 'Aarogya Aadhar',
      subtitle: 'Digital Healthcare Security Portal (SIH Winner)',
      desc: 'Role-based digital health identity proposal built for Smart India Hackathon, supporting patient portals, analytics dashboards, and locators.',
      tags: ['HTML/CSS', 'JavaScript', 'Healthcare system', 'SIH Proposal'],
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      bgVar: 'var(--project-aarogya-bg)',
      hoverBorder: 'hover:border-emerald-400/40',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'temp-converter',
      title: 'Temp Conyotl',
      subtitle: 'Premium Monospace Temperature Unit Converter',
      desc: 'Sleek temperature unit converter supporting °C, °F, and Kelvin. Interactive card scaling transitions with absolute zero checks.',
      tags: ['HTML/CSS', 'JavaScript', 'DM Mono', 'Retro-Futuristic'],
      icon: <Thermometer size={24} className="text-pink-400" />,
      bgVar: 'var(--project-temp-bg)',
      hoverBorder: 'hover:border-pink-400/40',
      tagColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Title */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-[1px] bg-brand-accent"></span>
          <span>Selected Portfolio Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Featured <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Engineering Work</span>
        </h2>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl mb-16">
          Each card links to a comprehensive product case study. Explore problem statements, architecture flows, database designs, API contracts, and lessons learned.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Header Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-bg-primary border border-border-subtle group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    title="Read Case Study"
                    id={`project-btn-${project.id}`}
                  >
                    <ArrowUpRight size={20} />
                  </Link>
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

              {/* Tags and CTA Link */}
              <div className="space-y-4">
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
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent-light group-hover:text-brand-accent transition-colors duration-200"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
