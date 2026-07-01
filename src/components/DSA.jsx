import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Flame, Layers } from 'lucide-react';

const DSA = () => {
  const topics = [
    'Arrays', 'Strings', 'Dynamic Programming', 'Graphs', 'Trees', 
    'BFS', 'DFS', 'Sliding Window', 'Binary Search', 'Greedy', 
    'Backtracking', 'Hash Maps', 'Two Pointers'
  ];

  // LeetCode stats breakdown
  const stats = [
    { label: 'Easy', count: 150, total: 600, color: 'text-emerald-400', stroke: 'stroke-emerald-400' },
    { label: 'Medium', count: 240, total: 1300, color: 'text-brand-gold', stroke: 'stroke-brand-gold' },
    { label: 'Hard', count: 60, total: 600, color: 'text-rose-400', stroke: 'stroke-rose-400' }
  ];

  return (
    <section id="dsa" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-primary select-none">
      <div className="max-w-6xl mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-[1px] bg-brand-accent"></span>
          <span>Competitive Programming</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          Algorithmic <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Problem Solving</span>
        </h2>

        {/* DSA Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left panel: Total Solved Count & badges */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 md:p-8 rounded-xl border border-border-subtle bg-bg-secondary flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Giant number */}
              <div className="shrink-0 flex items-center gap-4 bg-brand-accent/5 border border-brand-accent/20 p-6 rounded-2xl">
                <Flame size={40} className="text-brand-accent-light animate-bounce" />
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-brand-accent-light font-mono">450+</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">Total Solved</p>
                </div>
              </div>
              {/* Summary text */}
              <div className="space-y-3">
                <h4 className="text-sm md:text-base font-bold text-text-primary">Data Structures &amp; Algorithms Foundation</h4>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  Consistent problem solving on LeetCode and GeeksforGeeks. Well-versed in complexity analysis (Time &amp; Space), selecting optimal data structures, and applying standard design paradigms to write clean, performant algorithms.
                </p>
              </div>
            </div>

            {/* Topic Badges Card */}
            <div className="p-6 md:p-8 rounded-xl border border-border-subtle bg-bg-secondary text-left">
              <h4 className="text-xs uppercase tracking-widest text-brand-teal font-bold mb-6 flex items-center gap-2">
                <Layers size={14} />
                <span>Core Topics &amp; Patterns</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {topics.map((topic, index) => (
                  <span 
                    key={index} 
                    className="text-[11px] md:text-xs font-semibold px-3.5 py-2 bg-bg-tertiary hover:bg-brand-accent/15 border border-border-subtle hover:border-brand-accent/40 rounded-lg text-text-secondary hover:text-brand-accent-light transition-all duration-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Breakdown & Circular progress indicators */}
          <div className="p-6 md:p-8 rounded-xl border border-border-subtle bg-bg-secondary flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-accent-light font-bold mb-8 flex items-center gap-2">
                <Code2 size={14} />
                <span>LeetCode Breakdown</span>
              </h4>
              
              <div className="space-y-6">
                {stats.map((stat, idx) => {
                  const percentage = (stat.count / stat.total) * 100;
                  const radius = 24;
                  const strokeWidth = 4;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (percentage / 100) * circumference;

                  return (
                    <div key={idx} className="flex items-center justify-between border-b border-border-subtle/50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        {/* Circular ring representation */}
                        <svg className="w-12 h-12 transform -rotate-90 shrink-0">
                          <circle 
                            cx="24" cy="24" r={radius} 
                            className="stroke-bg-tertiary" 
                            strokeWidth={strokeWidth} 
                            fill="transparent" 
                          />
                          <motion.circle 
                            cx="24" cy="24" r={radius} 
                            className={stat.stroke} 
                            strokeWidth={strokeWidth} 
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                          />
                        </svg>
                        <div>
                          <p className="text-xs md:text-sm font-bold text-text-primary">{stat.label}</p>
                          <p className="text-[10px] text-text-secondary">Target total: {stat.total}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm md:text-base font-bold font-mono ${stat.color}`}>{stat.count}</span>
                        <p className="text-[9px] text-text-muted">Solved</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Simulated Activity SVG sparkline */}
            <div className="pt-8 border-t border-border-subtle mt-8">
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-3">Recent Activity Trend</p>
              <svg viewBox="0 0 300 50" className="w-full h-8 overflow-visible">
                {/* Grid guidelines */}
                <line x1="0" y1="40" x2="300" y2="40" className="stroke-border-subtle" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="0" y1="10" x2="300" y2="10" className="stroke-border-subtle" strokeWidth="0.5" strokeDasharray="2,2" />
                {/* Glow sparkline path */}
                <path 
                  d="M0,42 Q25,25 50,30 T100,12 T150,35 T200,8 T250,22 T300,15" 
                  fill="none" 
                  className="stroke-brand-accent/25" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                <motion.path 
                  d="M0,42 Q25,25 50,30 T100,12 T150,35 T200,8 T250,22 T300,15" 
                  fill="none" 
                  className="stroke-brand-accent-light" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSA;
