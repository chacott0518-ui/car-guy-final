import React from 'react';
import { IMAGES, LINKS } from '../constants';
import { ArrowRight } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Premium Car Repair Background" 
          className="w-full h-full object-cover" 
        />
        {/* Deep Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
            <span className="h-[1px] w-12 bg-brand-gold"></span>
            <span className="text-brand-gold tracking-widest text-sm font-eng font-bold uppercase">Premium Repair Service</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.2] korean-text animate-fade-in-up delay-100">
            사고 후,<br />
            가장 먼저 떠올려야 할<br />
            <span className="text-brand-gold">단 하나의 이름</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/80 mb-10 font-light korean-text animate-fade-in-up delay-200 leading-relaxed">
            보험수리부터 사고대차까지<br className="md:hidden"/> 한 번에 해결하는 1급 자동차 공업사
          </h2>

          <p className="text-white/60 mb-10 text-sm md:text-base flex items-center space-x-2 animate-fade-in-up delay-300">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span className="korean-text">경기도 광주 태전동 · 사고수리 · 보험처리 · 사고대차 전문</span>
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-500">
            <a href={`tel:${LINKS.tel}`} className="group bg-brand-gold text-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider flex items-center justify-center space-x-3 shadow-2xl rounded-sm transform hover:scale-[1.02] active:scale-95">
              <span className="korean-text">사고 접수 바로가기</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300"><ArrowRight /></span>
            </a>
            <a href={`tel:${LINKS.tel}`} className="bg-white/10 border border-white/20 text-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-brand-black transition-all duration-300 uppercase tracking-wider backdrop-blur-md flex items-center justify-center korean-text rounded-sm active:scale-95">
              보험수리 상담받기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};