import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Link2, Download, BookOpen } from 'lucide-react';

const Academics = () => {
  const education = [
    {
      year: '2024 – 2028',
      inst: 'Parul Institute of Engineering & Technology',
      degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
      score: 'CGPA: 8.66',
      courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Artificial Intelligence', 'Machine Learning', 'Object Oriented Programming']
    },
    {
      year: '2024',
      inst: 'Nirmala College',
      degree: 'HSC — Maharashtra State Board (MSBSHSE)',
      score: '84.00%',
      courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
    },
    {
      year: '2022',
      inst: "Mary Immaculate Girls' High School",
      degree: 'SSC — Maharashtra State Board (MSBSHSE)',
      score: '93.00%',
      courses: ['Science & Tech', 'Mathematics', 'Social Sciences']
    }
  ];

  const certifications = [
    {
      issuer: 'AWS',
      name: 'AWS Data Engineering Academy',
      badge: 'Certified',
      desc: 'Hands-on orchestration of ETL logic, pipeline design, Athena query setups, and S3 data stores.',
      link: '#',
      file: '/certs/aws-data-engineering.pdf'
    },
    {
      issuer: 'IBM',
      name: 'IBM Python for Data Science',
      badge: 'Certified',
      desc: 'Mastering data analysis libraries: Pandas, NumPy, and matplotlib. Data structures and syntax models.',
      link: '#',
      file: '/certs/ibm-python.pdf'
    },
    {
      issuer: 'Pearson',
      name: 'Pearson Master Certificate in HTML & CSS',
      badge: 'Verified',
      desc: 'Deep validation of semantic markup structures, flexbox/grid alignments, responsive queries, and style patterns.',
      link: '#',
      file: '/certs/pearson-html-css.pdf'
    },
    {
      issuer: 'Pearson',
      name: 'Pearson Master Certificate in JavaScript',
      badge: 'Verified',
      desc: 'Comprehensive execution of ES6 scopes, asynchronous fetch protocols, callback paradigms, and DOM control.',
      link: '#',
      file: '/certs/pearson-js.pdf'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-16 lg:px-24 bg-bg-secondary select-none">
      <div className="max-w-6xl mx-auto text-left space-y-20">
        
        {/* Education Sub-Section */}
        <div>
          <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap size={14} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Academic <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/25 hover:bg-bg-tertiary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-brand-accent-light uppercase tracking-wider block mb-2">{edu.year}</span>
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-1">{edu.inst}</h3>
                  <p className="text-xs text-text-secondary mb-4">{edu.degree}</p>
                  
                  {/* Courses */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {edu.courses.map((c, cIdx) => (
                      <span key={cIdx} className="text-[9px] font-medium px-2 py-0.5 bg-bg-primary/50 text-text-secondary rounded border border-border-subtle">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div>
          <div className="flex items-center gap-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
            <Award size={14} />
            <span>Professional Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Verified <span className="font-serif italic font-normal text-brand-accent-light bg-gradient-to-r from-brand-accent-light to-brand-teal bg-clip-text text-transparent">Credentials</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl border border-border-subtle bg-bg-secondary hover:border-brand-accent/25 hover:bg-bg-tertiary transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                      {cert.issuer}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-brand-accent-light transition-colors mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-6 font-sans">
                    {cert.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-bg-primary hover:bg-brand-accent/20 border border-border-subtle hover:border-brand-accent/40 rounded-lg text-[10px] font-bold text-text-secondary hover:text-brand-accent-light uppercase tracking-wider transition-all duration-200"
                  >
                    <Download size={12} />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
