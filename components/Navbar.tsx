import React, { useEffect, useState } from 'react';
import { LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-eng font-bold text-2xl tracking-tighter text-white">
          CAR<span className="text-brand-gold">&</span>GUY
        </div>
        {/* Consulting button removed for a cleaner look as requested */}
      </div>
    </nav>
  );
};