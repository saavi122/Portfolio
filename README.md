# Saavi Kotadia | Developer Portfolio

Welcome to my personal developer portfolio! I am a Computer Science & Engineering undergraduate specializing in **AI/ML, Full-Stack Web Development, and Systems Engineering**. I build interactive web applications, orchestrate LLM integrations, and design modular backend architectures.

---

## 🚀 Technical Highlights & Stats

- 🎓 **Academics**: CSE Undergraduate with a **8.66 CGPA**.
- 🧠 **Problem Solving**: **450+ solved problems** across algorithmic platforms (LeetCode/GeekforGeeks).
- 🏆 **Smart India Hackathon (SIH)**: Winner with **Aarogya Aadhar**, a digital healthcare security portal.
- ⚡ **Hackathons**: Top 8 Finish at a major hackathon with **DayZero** (AI Recruitment Dashboard).
- 🏅 **Selective Cohorts**: Selected for the prestigious **CoachIn Program** (Top 100 out of 21,000+ candidates).

---

## 🛠️ Technical Stack

- **Languages**: Python, Java, JavaScript, C/C++
- **Frontend**: React.js, Tailwind CSS, HTML5, CSS3, GSAP, Framer Motion
- **Backend & Security**: Node.js, Express.js, JWT Authentication, Socket.IO (Real-time communications)
- **Databases**: MongoDB, SQL (Relational Databases)
- **AI & LLM Integration**: Google Gemini API, OpenAI API, Claude API, Prompt Engineering, RAG (Retrieval-Augmented Generation)
- **Developer Tools**: Git & GitHub, Postman, Vercel, Render, VS Code

---

## 📂 Featured Engineering Projects

### 🧠 1. WhyCode — AI Knowledge Recovery Platform
*A MERN-stack application that indexes codebase history to resolve tribal knowledge, architectural rationale, and documentation drift.*
- **Tech Stack**: React.js, Node.js, Express, MongoDB, Gemini API, Render, Vercel.
- **Key Features**:
  - Automatically indexes codebase commits and function implementation history.
  - Integrates Google Gemini API (`gemini-2.5-flash`) to analyze code changes against docstrings, automating intent reconstruction.
  - Secure invitation-based passwordless login gateway with dynamic Vercel rewrites to bypass CORS limits.
  - Interactive microservice Dependency Graph featuring ownership tracking, real-time risk telemetry, and animated aurora backgrounds.

### 💬 2. EvenAfter — Gemini-Powered Real-time Chat
*A MERN messaging application leveraging Gemini AI for content analysis.*
- **Tech Stack**: React.js, Node.js, Express, MongoDB, Socket.IO, JWT, Gemini API.
- **Key Features**:
  - Real-time chat powered by Socket.IO.
  - Automatic message evaluation utilizing Google Gemini to analyze context, sentiments, and toxicity flags.
  - Role-based communications portal with secure JWT authentication.

### 📊 3. DayZero — AI Recruitment Analytics Portal (Hackathon Win)
*A full-stack dashboard designed to screen candidates and track analytics.*
- **Tech Stack**: Flask, MongoDB, Gemini AI, React, Tailwind CSS.
- **Key Features**:
  - Top 8 finish dashboard with candidate screening algorithms.
  - Multi-agent analytics tracker evaluating student contributions and performance metrics.
  - Flask-powered Python backend with robust MongoDB storage.

### 👗 4. Vogue Vista — AI Fashion Recommender
*Interactive recommendation engine tailoring outfits to user measurements.*
- **Tech Stack**: React.js, Tailwind CSS, OpenAI API, Claude API.
- **Key Features**:
  - Integrated both Claude and OpenAI models for flexible AI reasoning.
  - Predicts custom outfit matches by analyzing body shape indices and visual preferences.

### 🏥 5. Aarogya Aadhar — Healthcare Security Portal (SIH Winner)
*Smart India Hackathon-winning digital identity proposal for healthcare security.*
- **Tech Stack**: HTML, CSS, JavaScript, Responsive Web Architecture.
- **Key Features**:
  - Secure role-based dashboard for patients, doctors, and diagnostic labs.
  - Interactive hospital/clinic locator with intuitive UI states.

---

## ⚙️ Running the Portfolio Locally

To run this portfolio application on your local machine, follow these steps:

### Prerequisite
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/saavi122/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment & Hosting

This portfolio is built using **Vite + React.js** as a static site. The production build output is generated in the `dist` directory.
It can be hosted on:
- **Vercel** (Connect your GitHub repo, automatic configuration detection)
- **Netlify** (Connect Git repository and build with `npm run build` and output folder `dist`)
- **GitHub Pages** (Deploy via the `gh-pages` branch or Github Actions workflow)
