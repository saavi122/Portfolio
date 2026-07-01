import React from 'react';
import { Mail, Trophy, Phone, ArrowRight, FileDown } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const socialLinks = [
    {
      label: 'Email',
      value: 'kotadiasaavi2811@gmail.com',
      href: 'mailto:kotadiasaavi2811@gmail.com',
      icon: <Mail size={16} className="text-brand-accent-light" />
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/Saavi-Kotadia',
      href: 'https://linkedin.com/in/Saavi-Kotadia',
      icon: <LinkedinIcon size={16} className="text-brand-teal" />
    },
    {
      label: 'GitHub',
      value: 'github.com/saavi122',
      href: 'https://github.com/saavi122',
      icon: <GithubIcon size={16} className="text-text-primary" />
    },
    {
      label: 'LeetCode',
      value: 'leetcode.com/saavikotadia',
      href: 'https://leetcode.com/saavikotadia',
      icon: <Trophy size={16} className="text-brand-gold" />
    },
    {
      label: 'Phone',
      value: '+91 98920 17769',
      href: 'tel:+919892017769',
      icon: <Phone size={16} className="text-emerald-400" />
    }
  ];

  const openTo = [
    'Software Engineering Internships',
    'AI / ML Internships',
    'Full Stack Development',
    'Hackathons & Co-labs',
    'Research Opportunities'
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left column: Tagline & Open To */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-[1px] bg-brand-accent"></span>
            <span>Let's Collaborate</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans leading-tight">
            Looking for an <br />
            <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">intern ready to build</span>
          </h2>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-md mb-10">
            I am actively looking for internship positions starting in Summer/Fall. Let's build something intelligent and performant together.
          </p>

          <h3 className="text-xs uppercase tracking-widest text-text-primary font-bold mb-4">Open to Opportunities:</h3>
          <div className="flex flex-wrap gap-2 max-w-md">
            {openTo.map((role, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-bold px-3 py-1.5 bg-bg-tertiary border border-border-subtle rounded-full text-brand-teal uppercase tracking-wider"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: Social Portals */}
        <div className="flex-1 w-full text-left space-y-3">
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-6">Contact Channels:</h3>
          
          <div className="space-y-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.label !== 'Phone' && link.label !== 'Email' ? '_blank' : '_self'}
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/30 hover:bg-bg-tertiary transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-bg-primary border border-border-subtle group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent-light block font-semibold">{link.label}</span>
                    <span className="text-xs md:text-sm text-text-secondary group-hover:text-text-primary font-mono mt-0.5 transition-colors">{link.value}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-text-muted group-hover:text-brand-accent-light group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Resume Card download */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-between p-4 rounded-xl border border-brand-accent/20 bg-brand-accent/5 hover:border-brand-accent/40 hover:bg-brand-accent/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent-light">
                  <FileDown size={16} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-accent-light block font-semibold">Resume</span>
                  <span className="text-xs md:text-sm text-text-secondary group-hover:text-text-primary font-mono mt-0.5 transition-colors">Download PDF CV</span>
                </div>
              </div>
              <ArrowRight size={16} className="text-brand-accent-light group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <span className="font-serif italic text-text-secondary">Saavi Kotadia</span>
        <span>&copy; {new Date().getFullYear()} &bull; All Rights Reserved.</span>
        <span>Built with React + Tailwind + Framer Motion.</span>
      </div>
    </section>
  );
};

export default Contact;
