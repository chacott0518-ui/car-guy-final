import React from 'react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 text-white/60 text-sm font-light border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-eng font-bold text-2xl text-white mb-6 tracking-tighter">
              CAR<span className="text-brand-gold">&</span>GUY
            </h4>
            <p className="mb-4 korean-text leading-relaxed text-xs">
              경기도 광주 태전동에 위치한<br/>
              프리미엄 1급 자동차 공업사입니다.<br/>
              고객님의 차량을 내 차처럼 관리합니다.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-eng">CONTACT</h5>
            <ul className="space-y-3 text-xs korean-text">
              <li>{LINKS.mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')} (24시 사고접수)</li>
              <li>{LINKS.tel.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3')} (대표전화)</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-eng">ADDRESS</h5>
            <p className="leading-relaxed korean-text text-xs">
              경기도 광주시 태전동 463-2<br/>
              (태전JC 5분 거리)<br/>
              카앤가이
            </p>
          </div>
          
          <div>
             <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs font-eng">BUSINESS</h5>
             <ul className="space-y-3 korean-text text-xs">
               <li>사업자등록번호 : 510-19-93615</li>
               <li>대표 : 정혜성</li>
               <li>개인정보관리책임자 : 장우성</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-eng text-xs opacity-40">&copy; 2024 CAR&GUY. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs opacity-40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FixedBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/30 p-4 z-50 transform translate-y-0 transition-transform md:hidden">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-xs text-white/90 korean-text">
          <span className="text-brand-gold font-bold block mb-1">즉시 대차 지원 가능</span>
          <span>차량 접수 → 점검 → 배정까지 빠르게</span>
        </div>
        <a href={`tel:${LINKS.tel}`} className="bg-brand-gold text-white px-4 py-2 text-xs font-bold rounded-sm hover:bg-white hover:text-brand-gold transition-colors flex items-center justify-center korean-text">
          전화 상담
        </a>
      </div>
    </div>
  );
};