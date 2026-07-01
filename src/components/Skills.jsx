import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-400" size={20} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'C / C++', level: 78 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="text-brand-teal" size={20} />,
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML & CSS', level: 90 }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="text-brand-accent-light" size={20} />,
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'JWT Security', level: 85 },
        { name: 'Socket.IO (Real-time)', level: 82 }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-400" size={20} />,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'SQL & Relational', level: 80 }
      ]
    },
    {
      title: 'AI Engineering',
      icon: <Brain className="text-brand-gold" size={20} />,
      skills: [
        { name: 'Gemini / OpenAI API', level: 92 },
        { name: 'Claude API', level: 88 },
        { name: 'Prompt Engineering', level: 95 }
      ]
    },
    {
      title: 'Dev Tools & Cloud',
      icon: <Settings className="text-emerald-400" size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman Client', level: 88 },
        { name: 'Vercel / Render', level: 85 },
        { name: 'VS Code ecosystem', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-[1px] bg-brand-accent"></span>
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Tools &amp; <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Expertise</span>
        </h2>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-xl border border-border-subtle bg-bg-tertiary hover:border-brand-accent/30 hover:bg-bg-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border-subtle group-hover:border-brand-accent/20 transition-all">
                <div className="p-2 rounded-lg bg-bg-secondary group-hover:bg-brand-accent/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xs md:text-sm font-bold text-text-primary group-hover:text-brand-accent-light transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Items */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] md:text-xs font-medium">
                      <span className="text-text-primary">{skill.name}</span>
                      <span className="text-brand-accent-light font-mono font-semibold">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-1 bg-bg-secondary rounded-full overflow-hidden border border-border-subtle">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
