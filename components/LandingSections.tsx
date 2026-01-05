import React from 'react';
import { IMAGES, LINKS } from '../constants';

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand" className="py-24 bg-brand-black relative overflow-hidden min-h-[500px] flex items-center">
      {/* Visual Image on the Right as Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-60">
        <img 
          src={IMAGES.workshop} 
          alt="Brand Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent lg:via-brand-black/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-12 -left-12 text-[8rem] md:text-[10rem] font-eng font-bold text-white/5 select-none leading-none">C&G</div>
             <h3 className="font-eng text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">CAR<span className="text-brand-gold">&</span>GUY</h3>
             <div className="h-1 w-20 bg-brand-gold mb-8"></div>
             <p className="text-2xl text-white font-medium mb-8 korean-text leading-relaxed">
               사고 차량 수리의 기준을<br/>다시 정의합니다
             </p>
          </div>
          <div className="text-brand-muted space-y-6 text-lg font-light korean-text bg-brand-black/30 backdrop-blur-sm lg:bg-transparent p-6 lg:p-0 rounded-sm">
            <p>
              카앤가이는 단순히 고치는 곳이 아닙니다.
              사고 이후 고객이 겪는 모든 불편을 한 번에 해결하기 위해 만들어진
              <strong className="text-white ml-1 font-medium underline decoration-brand-gold underline-offset-4">사고수리 전문 1급 자동차 공업사</strong>입니다.
            </p>
            <p>
              보험 접수부터 수리, 대차까지 모든 과정을 책임지고 관리합니다.
              고객님의 소중한 일상이 멈추지 않도록, 카앤가이가 함께합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CoreValue: React.FC = () => {
  const cards = [
    {
      id: "01",
      title: "보험수리 전문",
      desc: "보험사 기준에 맞춘 정확한 수리와 행정 처리",
      icon: "🛡️"
    },
    {
      id: "02",
      title: "사고대차 즉시 지원",
      desc: "입고와 동시에 대차 배정, 기다림 없는 진행",
      icon: "🚗"
    },
    {
      id: "03",
      title: "전 차종 대응",
      desc: "국산차 · 수입차 차종 제한 없는 수리",
      icon: "🔧"
    },
    {
      id: "04",
      title: "1급 자동차 공업사",
      desc: "국토부 인증 설비, 전문 기술진 상주",
      icon: "🏭"
    }
  ];

  return (
    <section id="core" className="py-24 bg-brand-offwhite text-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2 block">CORE VALUES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black korean-text">사고 이후, 복잡한 과정은 모두 맡기세요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="group p-8 bg-white border border-gray-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl font-eng font-bold text-brand-black">
                {card.id}
              </div>
              <div className="text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <h3 className="text-xl font-bold text-brand-black mb-3 korean-text">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed korean-text">{card.desc}</p>
              <div className="mt-6 w-8 h-[2px] bg-gray-200 group-hover:bg-brand-gold transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Trust: React.FC = () => {
  return (
    <section className="py-0 flex flex-col md:flex-row bg-brand-black">
      <div className="w-full md:w-1/2 h-[500px] md:h-auto relative group">
        <img src={IMAGES.welding} alt="Professional Repair" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/90 md:bg-gradient-to-r md:from-transparent md:to-brand-black"></div>
      </div>
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-brand-black">
        <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">TRUST & QUALITY</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 korean-text">결과로 증명하는 사고수리</h2>
        <p className="text-brand-muted mb-10 leading-relaxed korean-text">
          보이지 않는 곳까지 정직하게.<br/>
          외형 복원에 그치지 않고 안전성과 주행감까지 고려합니다.
        </p>
        
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-gold flex items-center justify-center text-brand-gold font-eng font-bold transition-colors">
              01
            </div>
            <div>
              <h4 className="text-white font-bold text-lg korean-text">프레임 교정 시스템</h4>
              <p className="text-xs text-brand-muted mt-1 korean-text">미세한 오차까지 잡아내는 정밀 교정</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-gold flex items-center justify-center text-brand-gold font-eng font-bold transition-colors">
              02
            </div>
            <div>
              <h4 className="text-white font-bold text-lg korean-text">도장 전용 부스 운영</h4>
              <p className="text-xs text-brand-muted mt-1 korean-text">열처리 시스템으로 완벽한 도장면 구현</p>
            </div>
          </li>
          <li className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-gold flex items-center justify-center text-brand-gold font-eng font-bold transition-colors">
              03
            </div>
            <div>
              <h4 className="text-white font-bold text-lg korean-text">정밀 진단 장비 보유</h4>
              <p className="text-xs text-brand-muted mt-1 korean-text">전용 스캐너를 통한 시스템 정밀 진단</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative h-[450px] overflow-hidden rounded-sm">
            <img src={IMAGES.workshop} alt="Workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">PREMIUM WORKSHOP</span>
              <h3 className="text-2xl font-bold text-white mb-3 korean-text">경기도 광주 태전동<br/>접근성 좋은 입지</h3>
              <p className="text-white/70 text-sm mb-6 korean-text leading-relaxed">넓고 체계적인 작업 공간에서<br/>고객님의 차량을 전문가가 직접 케어합니다.</p>
              <button className="text-white text-xs font-bold uppercase tracking-wider border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors korean-text">
                위치 안내 보기
              </button>
            </div>
          </div>

          <div className="group relative h-[450px] overflow-hidden rounded-sm">
            <img src={IMAGES.detail} alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">PERFECT FINISH</span>
              <h3 className="text-2xl font-bold text-white mb-3 korean-text">다시 운전석에 앉는 순간<br/>새 차와 같은 감동</h3>
              <p className="text-white/70 text-sm mb-6 korean-text leading-relaxed">수리 티가 나지 않는 완벽한 복원.<br/>디테일링 마무리로 퀄리티를 높입니다.</p>
              <button className="text-white text-xs font-bold uppercase tracking-wider border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors korean-text">
                수리 과정 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black text-center relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight korean-text">
          사고는 불편해야 할<br/>
          이유가 없습니다
        </h2>
        <div className="max-w-2xl mx-auto text-brand-muted text-lg font-light leading-loose korean-text">
          <p className="mb-8">
            카앤가이는 ‘기다림·불안·복잡함’을 줄이기 위해<br/>
            사고 수리 과정을 처음부터 다시 설계했습니다.
          </p>
          <div className="inline-block p-4 border border-brand-gold/30 bg-brand-gold/5 rounded-sm">
             <p className="text-brand-gold font-medium">
              고객은 설명만 들으시면 됩니다.<br/>
              나머지는 카앤가이가 처리합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "차량 접수 & 사고 상담",
      desc: "전화 또는 방문 즉시 접수"
    },
    {
      num: "02",
      title: "보험 처리 & 대차 배정",
      desc: "보험 접수부터 사고대차까지 원스톱 진행"
    },
    {
      num: "03",
      title: "정밀 수리 & 출고 안내",
      desc: "진행 상황 공유 후 안전하게 출고"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white text-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2 block">PROCESS</span>
            <h2 className="text-3xl font-bold text-brand-black korean-text">사고 이후, 이렇게 진행됩니다</h2>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 text-sm korean-text">체계적인 프로세스로 고객님의 시간을 아껴드립니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-10 bg-brand-offwhite border border-gray-100 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-lg rounded-sm">
              <span className="text-6xl font-eng font-bold text-gray-100 absolute top-4 right-6 pointer-events-none">{step.num}</span>
              <div className="text-brand-gold font-bold mb-4 text-sm tracking-widest">STEP {step.num}</div>
              <h3 className="text-xl font-bold text-brand-black mb-3 korean-text">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed korean-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Tech: React.FC = () => {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img src={IMAGES.tech} alt="Tech background" className="w-full h-full object-cover grayscale" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-transparent z-0"></div>

       <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
         <div className="w-full md:w-2/3">
           <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2 block">DATA DRIVEN REPAIR</span>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 korean-text leading-tight">
             차량은 감이 아닌<br/>
             데이터로 수리합니다
           </h2>
           <p className="text-brand-muted text-lg max-w-xl leading-relaxed korean-text mb-8">
             제조사 기준과 진단 데이터를 기반으로 정확하게 판단하고<br/>
             불필요한 수리는 하지 않습니다.
           </p>
           <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 korean-text">#오리지널파츠</span>
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 korean-text">#전자계측</span>
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 korean-text">#스캐닝진단</span>
           </div>
         </div>
       </div>
    </section>
  );
};

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
          <div className="w-full lg:w-1/2 h-[400px] overflow-hidden rounded-sm shadow-2xl relative group">
            <img 
              src={IMAGES.lifestyle} 
              alt="Professional Consultation" 
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-brand-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 flex items-center space-x-3">
               <div className="w-3 h-3 bg-brand-gold rounded-full animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
               <span className="text-white text-sm font-bold korean-text tracking-wider">실시간 사고 접수 대기 중</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-right flex flex-col items-end">
            <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block font-eng">Ready to Help</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 korean-text leading-tight">
              막막한 사고 수리<br />
              <span className="text-brand-gold">전문가와 대화</span>하세요
            </h2>
            <p className="text-brand-muted text-lg korean-text leading-relaxed max-w-md">
              복잡한 보험 절차와 대차 걱정은 내려놓으세요.<br />
              카앤가이가 처음부터 끝까지 투명하게 진행합니다.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <a href={`tel:${LINKS.tel}`} className="group relative bg-brand-gold text-white py-8 px-8 text-xl font-bold hover:bg-white hover:text-brand-black transition-all duration-300 korean-text flex flex-col items-center justify-center rounded-sm transform hover:scale-[1.02] active:scale-95 shadow-2xl">
            <span className="text-[10px] opacity-80 mb-2 font-eng tracking-[0.3em] uppercase">Emergency</span>
            <span>24시 사고 접수</span>
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand-black group-hover:w-full transition-all duration-500"></div>
          </a>
          
          <a href={`tel:${LINKS.tel}`} className="group relative bg-white/5 backdrop-blur-xl text-white border border-white/10 py-8 px-8 text-xl font-bold hover:bg-white hover:text-brand-black transition-all duration-300 korean-text flex flex-col items-center justify-center rounded-sm transform hover:scale-[1.02] active:scale-95">
            <span className="text-[10px] opacity-50 mb-2 font-eng tracking-[0.3em] uppercase">Consulting</span>
            <span>보험수리 문의</span>
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
          </a>
          
          <a href={`tel:${LINKS.tel}`} className="group relative bg-white text-brand-black py-8 px-8 text-xl font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 korean-text flex flex-col items-center justify-center rounded-sm transform hover:scale-[1.02] active:scale-95 shadow-xl">
            <span className="text-[10px] opacity-50 mb-2 font-eng tracking-[0.3em] uppercase">Mobility</span>
            <span>사고대차 배정</span>
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand-charcoal group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export const FinalMessage: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black text-center border-b border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-white mb-2 korean-text">사고는 잠깐, 선택은 오래 갑니다</h3>
        <p className="text-brand-muted korean-text">사고가 났을 때 후회 없는 선택, 카앤가이</p>
      </div>
    </section>
  );
};