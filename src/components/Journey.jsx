import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Zap, Compass, CheckCircle2 } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      title: 'LinkedIn CoachIn Program Selectee',
      organization: 'LinkedIn',
      date: '2026 - Present',
      type: 'mentorship',
      icon: <Briefcase className="text-brand-accent-light" size={18} />,
      badge: 'Top 100 / 21,000+ Applicants',
      color: 'border-brand-accent',
      bulletPoints: [
        'Selected among the Top 100 students out of 21,000+ national applicants for an intensive engineering mentorship program.',
        'Engaged in weekly 1-on-1 mock interviews and engineering mentorship sessions with senior LinkedIn software engineers.',
        'Deepened skills in advanced Data Structures & Algorithms, System Design principles, and collaborative software engineering methodologies.'
      ]
    },
    {
      title: 'LinkedIn Hackathon Finalist',
      organization: 'LinkedIn Hackathon',
      date: 'December 2026',
      type: 'competition',
      icon: <Award className="text-brand-gold" size={18} />,
      badge: 'Top 8 Rank Finish',
      color: 'border-brand-gold',
      bulletPoints: [
        'Finished in the Top 8 overall out of hundreds of engineering teams with the DayZero AI Recruitment Dashboard project.',
        'Designed and engineered the Flask backend server integrated with MongoDB to stream structural candidate evaluation stats.',
        'Leveraged Google Gemini AI LLM model endpoints to write automated candidate resume screening & project contributions algorithms.'
      ]
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-primary select-none">
      <div className="max-w-4xl mx-auto text-left">
        {/* Section Title */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-[1px] bg-brand-accent"></span>
          <span>Professional Milestones</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Mentorship & <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Competitions</span>
        </h2>

        {/* Timeline container */}
        <div className="relative border-l border-border-subtle pl-6 md:pl-10 space-y-12">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-bg-primary border-2 border-brand-accent flex items-center justify-center shadow-lg shadow-brand-accent/20 z-10">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className={`p-6 md:p-8 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/35 hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-secondary font-medium mt-1">
                      {item.organization} &bull; {item.date}
                    </p>
                  </div>
                  <span className="self-start md:self-center px-3 py-1 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-[10px] font-bold text-brand-accent-light uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {item.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary leading-relaxed">
                      <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
