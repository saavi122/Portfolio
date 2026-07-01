import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import DSA from '../components/DSA';
import Projects from '../components/Projects';
import WhyHireMe from '../components/WhyHireMe';
import GitHub from '../components/GitHub';
import Academics from '../components/Academics';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <DSA />
      <Projects />
      <WhyHireMe />
      <GitHub />
      <Academics />
      <Contact />
    </div>
  );
};

export default Home;
