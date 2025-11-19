import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Governance } from './components/Governance';
import { Journey } from './components/Journey';
import { Stats } from './components/Stats';
import { Accolades } from './components/Accolades';
import { Services } from './components/Services';
import { Voices } from './components/Voices';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Global smooth reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Governance />
        <Journey />
        <Services />
        <Stats />
        <Accolades />
        <Voices />
        <Team />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;