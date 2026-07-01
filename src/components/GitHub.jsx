import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, GitFork, BookOpen, Clock } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const GitHub = () => {
  const [repos, setRepos] = useState([
    { name: 'EvenAfter', desc: 'Gemini-powered real-time MERN stack messaging system.', stars: 12, forks: 3, lang: 'JavaScript' },
    { name: 'DayZero', desc: 'AI Recruitment Screening portal built for LinkedIn Hackathon.', stars: 16, forks: 4, lang: 'Python' },
    { name: 'VogueVista', desc: 'Apparel recommendations powered by Claude & OpenAI.', stars: 8, forks: 2, lang: 'JavaScript' }
  ]);

  // Generate simulated contribution squares
  const cols = 28;
  const rows = 7;
  const squares = [];
  for (let i = 0; i < cols * rows; i++) {
    // Randomize contribution density: 0 (none), 1 (light), 2 (medium), 3 (dark green)
    const rand = Math.random();
    let level = 0;
    if (rand > 0.85) level = 3;
    else if (rand > 0.65) level = 2;
    else if (rand > 0.45) level = 1;
    squares.push(level);
  }

  const activities = [
    { text: 'Merged pull request #4 in EvenAfter/sockets-refactor', time: '2 hours ago' },
    { text: 'Pushed 3 commits to DayZero/flask-auth-handler', time: 'Yesterday' },
    { text: 'Created repository VogueVista/ai-fashion-recommender', time: '4 days ago' }
  ];

  return (
    <section id="github" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <GithubIcon size={14} />
          <span>Open Source Profile</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          GitHub <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Contributions</span>
        </h2>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contribution graph & stats */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Contribution Graph Visualizer */}
            <div className="p-6 rounded-xl border border-border-subtle bg-bg-secondary">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-semibold text-text-primary">Contribution Matrix</span>
                <a 
                  href="https://github.com/saavi122" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] font-bold text-brand-accent-light hover:underline flex items-center gap-1"
                >
                  <span>github.com/saavi122</span>
                  <GithubIcon size={12} />
                </a>
              </div>

              {/* Grid block */}
              <div className="overflow-x-auto pb-2 custom-scrollbar">
                <div 
                  className="grid gap-1.5" 
                  style={{ gridTemplateColumns: `repeat(${cols}, minmax(10px, 1fr))`, gridTemplateRows: `repeat(${rows}, minmax(10px, 1fr))` }}
                >
                  {squares.map((level, idx) => {
                    let color = 'bg-bg-github-empty'; // none
                    if (level === 1) color = 'bg-emerald-950/80';
                    if (level === 2) color = 'bg-emerald-800';
                    if (level === 3) color = 'bg-emerald-500';

                    return (
                      <div 
                        key={idx} 
                        className={`w-3 h-3 rounded-[2.5px] ${color} transition-all duration-300 border border-transparent hover:border-white/20`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-end gap-1.5 items-center text-[9px] text-text-muted mt-4">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-bg-github-empty" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/80" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
                <span>More</span>
              </div>
            </div>

            {/* Pinned Repositories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {repos.map((repo, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={14} className="text-brand-accent-light" />
                      <h4 className="text-xs md:text-sm font-bold text-text-primary">{repo.name}</h4>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {repo.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-text-muted mt-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span>{repo.lang}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5">
                        <Star size={10} />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork size={10} />
                        {repo.forks}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Panel: Github stats and activity */}
          <div className="space-y-6">
            {/* Stats Block */}
            <div className="p-6 rounded-xl border border-border-subtle bg-bg-secondary grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-tertiary rounded-lg border border-border-subtle flex flex-col items-center">
                <Star size={20} className="text-brand-gold mb-2" />
                <h4 className="text-lg font-bold font-mono">36+</h4>
                <p className="text-[9px] uppercase tracking-wider text-text-secondary">Stars Earned</p>
              </div>
              <div className="p-4 bg-bg-tertiary rounded-lg border border-border-subtle flex flex-col items-center">
                <Users size={20} className="text-brand-teal mb-2" />
                <h4 className="text-lg font-bold font-mono">50+</h4>
                <p className="text-[9px] uppercase tracking-wider text-text-secondary">Followers</p>
              </div>
            </div>

            {/* Recent Activity Log */}
            <div className="p-6 rounded-xl border border-border-subtle bg-bg-secondary text-left">
              <h4 className="text-xs uppercase tracking-widest text-text-primary font-bold mb-6 flex items-center gap-2">
                <Clock size={14} className="text-brand-accent-light" />
                <span>Recent Commit Log</span>
              </h4>

              <div className="space-y-4">
                {activities.map((act, idx) => (
                  <div key={idx} className="border-l-2 border-brand-accent/20 pl-3 py-1 space-y-1">
                    <p className="text-[11px] md:text-xs text-text-secondary font-medium leading-relaxed">
                      {act.text}
                    </p>
                    <span className="text-[9px] text-text-muted block">
                      {act.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
