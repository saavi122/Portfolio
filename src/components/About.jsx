import React from 'react';
import { BookOpen, Layers, Compass, RefreshCw, Layout } from 'lucide-react';

const About = () => {
  const learningTopics = [
    { title: 'Docker & Containers', desc: 'Containerizing services for consistent developer environments & cloud deployment.', icon: <Layers size={18} className="text-blue-400" /> },
    { title: 'System Design', desc: 'Architecting scalable, reliable, and high-throughput software architectures.', icon: <Compass size={18} className="text-brand-teal" /> },
    { title: 'RAG & AI Agents', desc: 'Structuring Retrieval-Augmented Generation & autonomous execution loops.', icon: <RefreshCw size={18} className="text-brand-gold" /> },
    { title: 'React.js', desc: 'Advanced React rendering paradigms, custom hook states, & performance tuning.', icon: <Layout size={18} className="text-cyan-400" /> }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Developer Story */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-[1px] bg-brand-accent"></span>
            <span>Developer Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-8">
            Engineering solutions at the <span className="font-serif italic font-normal text-brand-accent-light">intersection of AI & Systems</span>
          </h2>
          <div className="space-y-6 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
            <p>
              I am a Computer Science student passionate about building highly interactive web apps and AI-infused architectures. My technical journey is anchored in computer science fundamentals, algortihmic problem solving (450+ solved problems), and design patterns.
            </p>
            <p>
              From building production-grade full-stack products like <strong className="text-text-primary">EvenAfter</strong> (Gemini AI real-time chat) and <strong className="text-text-primary">DayZero</strong> (AI Hiring platform with analytics), to creating distributed digital portal designs like <strong className="text-text-primary">Aarogya Aadhar</strong>, I specialize in bringing software to life with modern architecture.
            </p>
            <p>
              I focus heavily on <strong className="text-text-primary">Backend architecture, LLM orchestrations (Gemini, OpenAI, Claude), and System Design</strong>. I aim to write highly optimized, clean, and modular code that delivers premium performance and flawless responsiveness.
            </p>
          </div>
        </div>

        {/* Right Side: Currently Learning Grid */}
        <div className="flex-1 w-full text-left">
          <div className="flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen size={14} />
            <span>Currently Learning</span>
          </div>
          <h3 className="text-2xl font-bold mb-8">Expanding My Tech Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningTopics.map((topic, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl border border-border-subtle bg-bg-tertiary hover:border-brand-accent/30 hover:bg-bg-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-bg-secondary group-hover:bg-brand-accent/10 transition-colors">
                    {topic.icon}
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-text-primary group-hover:text-brand-accent-light transition-colors">
                    {topic.title}
                  </h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
