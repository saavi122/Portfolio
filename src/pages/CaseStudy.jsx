import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Database, Code, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Live Temp Converter component embedded inside the Case Study
const LiveTempConverter = () => {
  const [unit, setUnit] = useState('C');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleConvert = () => {
    setError('');
    setResults(null);
    setExpandedCard(null);

    const num = parseFloat(value);
    if (value.trim() === '' || isNaN(num)) {
      setError('⚠ Please enter a valid number');
      return;
    }

    if (unit === 'K' && num < 0) {
      setError('⚠ Kelvin cannot be negative');
      return;
    }

    // Convert to Celsius first
    let celsius;
    if (unit === 'C') celsius = num;
    else if (unit === 'F') celsius = (num - 32) * 5 / 9;
    else if (unit === 'K') celsius = num - 273.15;

    if (celsius < -273.15) {
      setError('⚠ Value is below Absolute Zero (−273.15 °C)');
      return;
    }

    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;

    setResults({
      C: parseFloat(celsius.toFixed(4)),
      F: parseFloat(fahrenheit.toFixed(4)),
      K: parseFloat(kelvin.toFixed(4))
    });
  };

  const handleCardClick = (cardUnit) => {
    setExpandedCard(prev => (prev === cardUnit ? null : cardUnit));
  };

  return (
    <div className="p-6 rounded-xl border border-brand-accent/20 bg-bg-secondary font-mono text-left max-w-lg mx-auto shadow-2xl">
      <div className="grid grid-cols-3 gap-2 mb-6">
        {['C', 'F', 'K'].map((u) => (
          <button
            key={u}
            onClick={() => {
              setUnit(u);
              setError('');
              setResults(null);
              setExpandedCard(null);
            }}
            className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
              unit === u 
                ? u === 'C' ? 'border-brand-teal text-brand-teal bg-brand-teal/10 shadow-lg shadow-brand-teal/10'
                  : u === 'F' ? 'border-brand-gold text-brand-gold bg-brand-gold/10 shadow-lg shadow-brand-gold/10'
                  : 'border-pink-400 text-pink-400 bg-pink-500/10 shadow-lg shadow-pink-500/10'
                : 'border-border-subtle text-text-secondary hover:text-text-primary'
            }`}
          >
            <span className="block text-base">{u === 'K' ? 'K' : `°${u}`}</span>
            <span className="text-[9px] uppercase tracking-wider">{u === 'C' ? 'Celsius' : u === 'F' ? 'Fahrenheit' : 'Kelvin'}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-text-muted mb-1">Temperature Value</label>
          <div className="flex items-center border border-border-subtle rounded-lg overflow-hidden bg-bg-primary">
            <input
              type="number"
              className="flex-1 bg-transparent p-3 outline-none text-xl text-text-primary"
              placeholder="Enter value"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError('');
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
            />
            <span className="p-3 bg-bg-tertiary border-l border-border-subtle text-sm text-text-muted font-bold">
              {unit === 'K' ? 'K' : `°${unit}`}
            </span>
          </div>
          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
        </div>

        <button
          onClick={handleConvert}
          className="w-full py-3 bg-gradient-to-r from-brand-accent to-brand-accent-light text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          CONVERT &rarr;
        </button>

        {results && (
          <div className="grid grid-cols-3 gap-2 mt-6">
            {[
              { id: 'C', name: 'Celsius', val: results.C, symbol: '°C', color: 'cold', accent: 'text-brand-teal border-brand-teal/20 bg-brand-teal/5' },
              { id: 'F', name: 'Fahrenheit', val: results.F, symbol: '°F', color: 'warm', accent: 'text-brand-gold border-brand-gold/20 bg-brand-gold/5' },
              { id: 'K', name: 'Kelvin', val: results.K, symbol: 'K', color: 'kelvin', accent: 'text-pink-400 border-pink-400/20 bg-pink-500/5' }
            ].map((card) => {
              const isExpanded = expandedCard === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`border rounded-lg p-3 transition-all duration-300 cursor-pointer ${
                    isExpanded ? 'col-span-3 py-6 px-8' : ''
                  } ${card.accent} hover:border-brand-accent/40`}
                >
                  <p className="text-[9px] uppercase tracking-widest text-text-muted">{card.name}</p>
                  <p className={`font-black tracking-tight ${isExpanded ? 'text-4xl mt-3' : 'text-lg mt-1'}`}>
                    {card.val}{card.symbol}
                  </p>
                  {isExpanded && (
                    <p className="text-[10px] text-text-secondary mt-3 leading-relaxed">
                      Detailed Conversion Value. Calculated instantly with full absolute zero floating validation schema.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projectsData = {
    evenafter: {
      title: 'EvenAfter',
      subtitle: 'Gemini AI-infused Real-time Messaging System',
      problem: 'Enterprise internal platforms suffer from data fragmentation and a lack of contextual policy compliance monitoring, leaving channels vulnerable to security leaks and compliance issues.',
      research: 'Evaluated WebSocket architectures (Socket.IO) and asynchronous prompt streaming pipelines. Established that offloading content analysis to background worker loops is vital to prevent chat delivery lags.',
      planning: 'Designed a hybrid system: Node.js handles messaging logic, Socket.IO updates state instantly, while a decoupled queue handler issues API requests to Gemini 1.5/2.5 for audit flagging.',
      dbDesign: `// MongoDB Database Schemas
User {
  _id: ObjectId,
  email: String (Indexed, Unique),
  passwordHash: String,
  role: String ["admin", "moderator", "user"]
}

Message {
  _id: ObjectId,
  channelId: ObjectId,
  senderId: ObjectId,
  text: String,
  flagged: Boolean,
  sentiment: String,
  timestamp: Date
}`,
      apiFlow: `POST /api/chat/message
Request Body:
{
  "text": "Hello world",
  "channelId": "658bc632a514d"
}

Response Body:
{
  "messageId": "658bc6a1d821",
  "status": "delivered",
  "flagged": false
}`,
      challenges: 'Challenge: AI response times introduced 1-2 second messaging latency. Solution: Designed a pipeline where Socket.IO delivers the message to the user instantly, while the backend processes moderation asynchronously and updates flags with a visual warning tag.',
      performance: 'Lighthouse scoring: 98% performance, API calls optimized with connection pooling and MongoDB indexing. Message latency reduced to <50ms for delivery, <1s for sentiment flagging.',
      future: 'Introduce vector searching (RAG) on archived channel logs, allowing employees to ask AI queries like "What did we conclude in our meeting last Tuesday about API endpoints?".',
      github: 'https://github.com/saavi122',
      demo: '#',
      architectureDiagram: (
        <svg viewBox="0 0 600 220" className="w-full h-auto bg-bg-dark rounded-xl border border-border-subtle p-6">
          <rect x="20" y="80" width="100" height="60" rx="8" fill="#0f0f1a" stroke="#7b6ef6" strokeWidth="1.5" />
          <text x="70" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Client (React)</text>

          <path d="M120 110 L200 110" stroke="#a78bfa" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
          <text x="160" y="100" fill="#9999bb" fontSize="9" textAnchor="middle" fontFamily="monospace">Sockets</text>

          <rect x="200" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Server (Express)</text>

          <path d="M320 100 L400 100" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          <path d="M320 120 L400 120" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <text x="360" y="90" fill="#9999bb" fontSize="9" textAnchor="middle" fontFamily="monospace">Query</text>

          <rect x="400" y="50" width="120" height="50" rx="8" fill="#0f0f1a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="460" y="80" fill="#e8e8f0" fontSize="10" textAnchor="middle" fontFamily="monospace">Gemini API</text>

          <rect x="400" y="120" width="120" height="50" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="460" y="150" fill="#e8e8f0" fontSize="10" textAnchor="middle" fontFamily="monospace">MongoDB</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
            </marker>
          </defs>
        </svg>
      )
    },
    dayzero: {
      title: 'DayZero',
      subtitle: 'AI Recruiter Dashboard & Contribution Analyzer',
      problem: 'Hackathon coordinators and tech recruiters lack analytics showing individual candidate code contribution depth. Traditional resume screenings miss hands-on builder proof.',
      research: 'Investigated Git commit logs and git diff analysis tools. Standardized an evaluation framework based on commit frequency, changes count, and quality analysis.',
      planning: 'Designed a Python-based Flask service. Commits and files are pushed to the backend, MongoDB processes metrics, and Gemini LLM drafts developer profiles.',
      dbDesign: `// MongoDB Database Schemas
Candidate {
  _id: ObjectId,
  githubUsername: String,
  overallScore: Number,
  strengths: Array [String]
}

Contribution {
  _id: ObjectId,
  candidateId: ObjectId,
  commitHash: String,
  filesChanged: Number,
  impactRating: Number
}`,
      apiFlow: `GET /api/recruiters/candidates
Request Params: None

Response Body:
[
  {
    "username": "saavi122",
    "score": 94,
    "highlight": "Strong backend performance"
  }
]`,
      challenges: 'Challenge: GitHub contribution APIs are rate-limited. Solution: Built an internal caching service in MongoDB to cache repository metadata and log statistics, updating entries once every 24 hours.',
      performance: 'Lighthouse scoring: 96% accessibility. Optimized MongoDB queries using projection limits, reducing data payloads by 40%.',
      future: 'Create a direct Slack notification system so that recruiters receive automated alerts when a highly rated developer commits code.',
      github: 'https://github.com/saavi122',
      demo: '#',
      architectureDiagram: (
        <svg viewBox="0 0 600 220" className="w-full h-auto bg-bg-dark rounded-xl border border-border-subtle p-6">
          <rect x="20" y="80" width="100" height="60" rx="8" fill="#0f0f1a" stroke="#7b6ef6" strokeWidth="1.5" />
          <text x="70" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Recruiter UI</text>

          <path d="M120 110 L200 110" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
          
          <rect x="200" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Flask Engine</text>

          <path d="M320 110 L400 110" stroke="#38bdf8" strokeWidth="1.5" fill="none" />

          <rect x="400" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="460" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Gemini & Mongo</text>
        </svg>
      )
    },
    voguevista: {
      title: 'Vogue Vista',
      subtitle: 'OpenAI / Claude AI Fashion Recommender',
      problem: 'Online shoppers frequently struggle to find garments that match their unique body shapes, leading to high apparel return rates.',
      research: 'Surveyed body index standards. Configured a body shape analyzer that categorizes users into standardized silhouettes.',
      planning: 'Designed a React web app that collects user dimensions, computes indices, and requests recommendations from Claude and OpenAI models.',
      dbDesign: `// Local Storage Cache Design
SessionProfile {
  chest: Number,
  waist: Number,
  hips: Number,
  inferredShape: String,
  savedRecommendations: Array [
    {
      styleName: String,
      confidence: Number
    }
  ]
}`,
      apiFlow: `POST /api/recommendations
Request Body:
{
  "shape": "hourglass",
  "preference": "formal"
}

Response Body:
{
  "recommendations": [
    {
      "garmentType": "A-line dress",
      "rationale": "Accentuates waist contours"
    }
  ]
}`,
      challenges: 'Challenge: Slow generative outputs caused interface freezes. Solution: Structured a multi-step typing loader while parsing JSON streams from OpenAI/Claude endpoints.',
      performance: 'Lighthouse scoring: 97% best practices. Lazy-loaded fashion model frames and SVG illustrations.',
      future: 'Integrate dynamic virtual camera dressing rooms (WebRTC + computer vision) to overlay recommended clothes in real-time.',
      github: 'https://github.com/saavi122',
      demo: '#',
      architectureDiagram: (
        <svg viewBox="0 0 600 220" className="w-full h-auto bg-bg-dark rounded-xl border border-border-subtle p-6">
          <rect x="20" y="80" width="100" height="60" rx="8" fill="#0f0f1a" stroke="#7b6ef6" strokeWidth="1.5" />
          <text x="70" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">React UI</text>

          <path d="M120 100 L240 70" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
          <path d="M120 120 L240 150" stroke="#38bdf8" strokeWidth="1.5" fill="none" />

          <rect x="240" y="40" width="140" height="50" rx="8" fill="#0f0f1a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="310" y="70" fill="#e8e8f0" fontSize="10" textAnchor="middle" fontFamily="monospace">Claude API</text>

          <rect x="240" y="130" width="140" height="50" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="310" y="160" fill="#e8e8f0" fontSize="10" textAnchor="middle" fontFamily="monospace">OpenAI API</text>
        </svg>
      )
    },
    'aarogya-aadhar': {
      title: 'Aarogya Aadhar',
      subtitle: 'Digital Healthcare Security Portal (SIH Winner)',
      problem: 'Public medical registries suffer from disconnected patient files, leading to incorrect medication issues and slow emergencies navigation.',
      research: 'Investigated secure patient file models. Outlined a centralized registry structure that links medical histories directly to verification systems.',
      planning: 'Drafted HTML5 interface layouts. Designed a modular CSS workflow and structured JavaScript files supporting role-based navigation.',
      dbDesign: `// Proposed SQL Schema Design
Patient {
  id: INT PRIMARY KEY AUTO_INCREMENT,
  nationalId: VARCHAR(12) UNIQUE,
  fullName: VARCHAR(100),
  bloodGroup: VARCHAR(5),
  allergies: TEXT
}

Record {
  id: INT PRIMARY KEY AUTO_INCREMENT,
  patientId: INT,
  doctorName: VARCHAR(100),
  diagnosis: TEXT,
  prescription: TEXT,
  dateCreated: TIMESTAMP
}`,
      apiFlow: `GET /api/records/patient/{nationalId}
Headers: Authorization: Bearer <token>

Response Body:
{
  "fullName": "John Doe",
  "allergies": "Penicillin",
  "records": [...]
}`,
      challenges: 'Challenge: Delivering a fast-loading interface under low-bandwidth clinic conditions. Solution: Minimized style scripts and used standard native browser scripts (vanilla HTML/CSS/JS) to guarantee rapid parsing.',
      performance: 'Lighthouse scoring: 99% performance. Built entirely on lightweight components without excessive client libraries.',
      future: 'Apply blockchain-based distributed ledgers to securely verify records and encrypt medical data at rest.',
      github: 'https://github.com/saavi122',
      demo: '#',
      architectureDiagram: (
        <svg viewBox="0 0 600 220" className="w-full h-auto bg-bg-dark rounded-xl border border-border-subtle p-6">
          <rect x="20" y="80" width="100" height="60" rx="8" fill="#0f0f1a" stroke="#7b6ef6" strokeWidth="1.5" />
          <text x="70" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Patient Portal</text>

          <path d="M120 110 L240 110" stroke="#a78bfa" strokeWidth="1.5" fill="none" />

          <rect x="240" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="300" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Relational DB</text>
        </svg>
      )
    },
    'temp-converter': {
      title: 'Temp Conyotl',
      subtitle: 'Monospace Temperature Unit Converter Engine',
      problem: 'Basic temperature calculators look generic and lack structured error messaging or absolute zero thresholds verification.',
      research: 'Researched UI card expansion animations and typography guidelines. Opted for Bebas Neue and DM Mono to create a retro-futuristic style.',
      planning: 'Designed a lightweight responsive layout using CSS grids. Integrated Kelvin, Fahrenheit, and Celsius rules with modular math equations.',
      dbDesign: `// Math and Logic mapping
celsiusToFahrenheit = c * 9/5 + 32;
celsiusToKelvin = c + 273.15;
absoluteZeroLimit = -273.15 °C;`,
      apiFlow: `In-browser JS Engine:
toCelsius(val, unit) {
  if (unit === 'C') return val;
  if (unit === 'F') return (val - 32) * 5 / 9;
  if (unit === 'K') return val - 273.15;
}`,
      challenges: 'Challenge: High inputs values or non-number characters crashed conversion logic. Solution: Created strict validations matching absolute zero parameters before rendering card transformations.',
      performance: 'Lighthouse scoring: 100% performance. 0ms server latency due to complete client-side JavaScript execution.',
      future: 'Integrate weather API lookups to auto-convert local city temperatures in real time.',
      github: 'https://github.com/saavi122',
      demo: '#',
      architectureDiagram: (
        <svg viewBox="0 0 600 220" className="w-full h-auto bg-bg-dark rounded-xl border border-border-subtle p-6">
          <rect x="50" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#7b6ef6" strokeWidth="1.5" />
          <text x="110" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Input Event</text>

          <path d="M170 110 L240 110" stroke="#a78bfa" strokeWidth="1.5" fill="none" />

          <rect x="240" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="300" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">Val / Zero Check</text>

          <path d="M360 110 L430 110" stroke="#38bdf8" strokeWidth="1.5" fill="none" />

          <rect x="430" y="80" width="120" height="60" rx="8" fill="#0f0f1a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="490" y="115" fill="#e8e8f0" fontSize="11" textAnchor="middle" fontFamily="monospace">UIs Card Render</text>
        </svg>
      )
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
        <Link to="/" className="text-brand-accent hover:underline mt-4 inline-block">Return to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 bg-bg-primary text-left max-w-5xl mx-auto space-y-12">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent-light hover:text-brand-accent transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Go Back</span>
      </button>

      {/* Header Title */}
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-2">
          {project.title}
        </h1>
        <p className="text-sm md:text-base font-serif italic text-text-secondary">
          {project.subtitle}
        </p>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 px-4 py-2 border border-border-subtle hover:border-brand-accent bg-bg-panel hover:bg-bg-tertiary text-xs font-bold text-text-secondary hover:text-text-primary rounded-lg transition-all"
          >
            <GithubIcon size={14} />
            <span>GitHub Repository</span>
          </a>
          <a 
            href={project.demo} 
            className="flex items-center gap-1.5 px-4 py-2 border border-brand-accent/20 bg-brand-accent/5 hover:bg-brand-accent/15 text-xs font-bold text-brand-accent-light rounded-lg transition-all"
          >
            <ExternalLink size={14} />
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>

      <hr className="border-border-subtle" />

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Details (Left/Center columns) */}
        <div className="md:col-span-2 space-y-10">
          {/* Problem Statement */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <ShieldAlert size={18} className="text-red-400" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
              {project.problem}
            </p>
          </section>

          {/* Research & Planning */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Sparkles size={18} className="text-brand-gold" />
              <span>Research &amp; Planning</span>
            </h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
              {project.research}
            </p>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans mt-2">
              {project.planning}
            </p>
          </section>

          {/* Live demo (For Temp Converter) */}
          {projectId === 'temp-converter' && (
            <section className="space-y-4 pt-4 border-t border-border-subtle">
              <h3 className="text-lg font-bold text-brand-teal flex items-center gap-2">
                <Cpu size={18} />
                <span>Interactive Live Demo</span>
              </h3>
              <LiveTempConverter />
            </section>
          )}

          {/* Architecture Diagram */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Cpu size={18} className="text-brand-teal" />
              <span>System Architecture</span>
            </h3>
            {project.architectureDiagram}
          </section>

          {/* Database Design */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Database size={18} className="text-purple-400" />
              <span>Database Schema &amp; Storage</span>
            </h3>
            <pre className="p-4 rounded-xl border border-border-subtle bg-bg-darker font-mono text-[10px] md:text-xs text-code-primary overflow-x-auto leading-relaxed">
              {project.dbDesign}
            </pre>
          </section>

          {/* API Flow */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <Code size={18} className="text-brand-accent-light" />
              <span>API Interfaces</span>
            </h3>
            <pre className="p-4 rounded-xl border border-border-subtle bg-bg-darker font-mono text-[10px] md:text-xs text-code-primary overflow-x-auto leading-relaxed">
              {project.apiFlow}
            </pre>
          </section>
        </div>

        {/* Sidebar Info (Right Column) */}
        <div className="space-y-8 bg-bg-secondary border border-border-subtle p-6 rounded-xl h-fit">
          <section className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-accent-light font-bold">Challenges &amp; Wins</h4>
            <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-sans">
              {project.challenges}
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-teal font-bold">Performance Stats</h4>
            <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-sans">
              {project.performance}
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold">Future Extensions</h4>
            <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-sans">
              {project.future}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
