"use client";

import React from 'react';
import Image from 'next/image';

const MembershipHero = () => {
  return (
    <section 
      className="relative py-20 pt-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-activity-text)' }}
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Main Pattern Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: '120px 120px',
            animation: 'patternFloat 20s ease-in-out infinite'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d5875]/90 to-[#0f3d4f]/90"></div>
        
        {/* Animated Floating Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-bounce-slow">
          <div 
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: 'url(/images/pattern.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="absolute bottom-20 right-10 w-24 h-24 opacity-25 animate-pulse">
          <div 
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: 'url(/images/pattern.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <div className="absolute top-1/2 left-5 w-16 h-16 opacity-20 animate-spin-slow">
          <div 
            className="w-full h-full rounded-full"
            style={{
              backgroundImage: 'url(/images/pattern.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      </div>

      {/* Top Pattern Decoration - Horizontal Line */}
      <div className="absolute left-0 top-0 z-10 w-full">
        <div className="relative w-full">
          <div 
            className="h-8 w-full bg-white opacity-40 hover:opacity-60 transition-opacity duration-500"
            style={{
              backgroundImage: 'url(/images/pattern.png)',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center',
              backgroundSize: '100px 100px'
            }}
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/5 blur-sm"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Vector Icon - Enhanced */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative">
              <Image
                src="/vector.svg"
                alt="ISCRS Vector"
                width={200}
                height={100}
                className="h-16 lg:h-20 w-auto opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full"></div>
            </div>
          </div>

          {/* Main Headline - Enhanced Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              ISCRS
            </span>
            <br />
            <span className="bg-gradient-to-r from-white/95 to-white/80 bg-clip-text text-transparent">
              Membership
            </span>
          </h1>

          {/* Enhanced Description */}
          <div className="mb-12 animate-fade-in-up animation-delay-400">
            <p className="text-xl sm:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-6">
              Join the International Society of Cataract and Refractive Surgeons
            </p>
            <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Connect with leading eye care professionals from around the world and advance your career in ophthalmology
            </p>
          </div>

          {/* Decorative Pattern Line */}
          <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-600">
            <div 
              className="h-1 w-32 opacity-70"
              style={{
                backgroundImage: 'url(/images/pattern.png)',
                backgroundRepeat: 'repeat-x',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-up animation-delay-800">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-white font-medium">Complete the form below to join</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes patternFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>

      {/* Bottom Pattern Decoration - Horizontal Line */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="relative w-full">
          <div 
            className="h-8 w-full bg-white opacity-50 hover:opacity-70 transition-opacity duration-500"
            style={{
              backgroundImage: 'url(/images/pattern.png)',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center',
              backgroundSize: '100px 100px'
            }}
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/10 blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default MembershipHero;
