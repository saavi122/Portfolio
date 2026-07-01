import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Sparkles, Terminal, Rocket, Users } from 'lucide-react';

const WhyHireMe = () => {
  const advantages = [
    {
      title: 'Strong DSA Foundation',
      desc: '450+ solved problems on LeetCode and GeeksforGeeks. Proficient in graphs, dynamic programming, backtracking, and algorithmic optimization.',
      icon: <Code2 size={20} className="text-brand-accent-light" />
    },
    {
      title: 'Full Stack Development',
      desc: 'Deep familiarity with the MERN Stack. Structuring clean frontend code with React, styling with Tailwind, and bundling with Vite.',
      icon: <Globe size={20} className="text-brand-teal" />
    },
    {
      title: 'AI Integration Specialist',
      desc: 'Hands-on experience configuring Google Gemini, OpenAI, and Claude model endpoints. Skilled in prompt engineering, context control, and LLM calls.',
      icon: <Sparkles size={20} className="text-brand-gold" />
    },
    {
      title: 'Backend & System Design',
      desc: 'Engineering robust server portals in Node.js, Express, and Flask. Implementing JWT auth, REST endpoints, MongoDB models, and real-time Socket.IO protocols.',
      icon: <Terminal size={20} className="text-indigo-400" />
    },
    {
      title: 'Real-World Project Execution',
      desc: 'Experience building applications like EvenAfter, DayZero, and Vogue Vista. Focused on architecture flows, database schemas, and clean endpoints.',
      icon: <Rocket size={20} className="text-pink-400" />
    },
    {
      title: 'Fast Learner & Collaborator',
      desc: 'Ranked Top 8 in LinkedIn Hackathon. Proven ability to operate under tight schedules, align with mentors, and adopt containers/orchestrations.',
      icon: <Users size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="why-hire-me" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-primary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-[1px] bg-brand-accent"></span>
          <span>Recruiter Overview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Why <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Hire Me?</span>
        </h2>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/25 hover:bg-bg-tertiary transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-lg bg-bg-primary border border-border-subtle">
                  {adv.icon}
                </div>
                <h3 className="text-xs md:text-sm font-bold text-text-primary">
                  {adv.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
