import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { 
  BrandIntro, 
  CoreValue, 
  Trust, 
  Experience, 
  Philosophy, 
  Process, 
  Tech, 
  CTASection, 
  FinalMessage 
} from './components/LandingSections';
import { Footer, FixedBottomBar } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-brand-text font-sans selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <BrandIntro />
      <CoreValue />
      <Trust />
      <Experience />
      <Philosophy />
      <Process />
      <Tech />
      <CTASection />
      <FinalMessage />
      <Footer />
      <FixedBottomBar />
    </div>
  );
};

export default App;