import React from 'react';
import { Mail, Trophy, Phone, ArrowRight, FileDown, MapPin } from 'lucide-react';

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

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Editorial Contact Header */}
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-[1px] bg-brand-accent"></span>
            <span>Studio Contact &amp; Inquiries</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-text-primary mb-6">
            Let's build <span className="font-serif italic font-normal text-brand-accent-light">together.</span>
          </h2>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans max-w-xl">
            Currently accepting Software Engineering and AI/ML internship opportunities for Summer &amp; Fall. Open for full-stack software development, architectural design, and hackathons.
          </p>
        </div>

        {/* Per Appelgren Studio Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-8 border-t border-border-subtle">
          
          {/* Column 1: Base & Institution */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-brand-accent-light font-bold flex items-center gap-2">
              <MapPin size={14} />
              <span>Base &amp; Campus</span>
            </h3>
            <div className="text-xs text-text-secondary leading-relaxed font-sans space-y-1">
              <p className="font-bold text-text-primary">Parul Institute of Technology</p>
              <p>Department of Computer Science (AI/ML)</p>
              <p className="text-text-muted">Vadodara &amp; Mumbai, India</p>
            </div>
          </div>

          {/* Column 2: Credentials */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-brand-teal font-bold">
              Recognitions
            </h3>
            <div className="text-xs text-text-secondary leading-relaxed font-sans space-y-1">
              <p className="font-bold text-text-primary">LinkedIn CoachIn Selectee</p>
              <p>Top 8 LinkedIn Hackathon Finish</p>
              <p className="text-text-muted">500+ Algorithmic Problems Solved</p>
            </div>
          </div>

          {/* Column 3: Direct Inquiry */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              Direct Contact
            </h3>
            <div className="text-xs text-text-secondary leading-relaxed font-sans space-y-2">
              <p className="font-bold text-text-primary">kotadiasaavi2811@gmail.com</p>
              <p>+91 98920 17769</p>
              <a 
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent-light hover:underline pt-2"
              >
                <FileDown size={14} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Social Channels List */}
        <div className="pt-8 border-t border-border-subtle">
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-bold text-left mb-6">Social Portals:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.label !== 'Phone' && link.label !== 'Email' ? '_blank' : '_self'}
                rel="noreferrer"
                className="p-4 rounded-xl border border-border-subtle bg-bg-primary hover:border-brand-accent/40 hover:bg-bg-tertiary transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bg-secondary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-accent-light font-bold block">{link.label}</span>
                    <span className="text-xs text-text-secondary group-hover:text-text-primary font-mono truncate block max-w-[180px]">{link.value}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-text-muted group-hover:text-brand-accent-light group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Editorial Footer */}
        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-text-muted select-none">
          <div className="flex items-center gap-2 font-mono uppercase tracking-widest text-text-primary">
            <span className="font-extrabold">SAAVI KOTADIA</span>
            <span>&bull;</span>
            <span className="text-text-secondary">SOFTWARE ENGINEER</span>
          </div>
          <div>&copy; {new Date().getFullYear()} Saavi Kotadia. All Rights Reserved.</div>
          <div className="flex items-center gap-4 font-mono text-[10px]">
            <span>DESIGN &amp; ARCHITECTURE BY SAAVI KOTADIA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
