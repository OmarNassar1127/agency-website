"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-primary-900 to-secondary-900 min-h-screen pt-36 pb-24 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500 opacity-10 blur-[8rem] rounded-full"></div>
          <div className="absolute top-1/2 -left-60 w-[36rem] h-[36rem] bg-secondary-400 opacity-10 blur-[8rem] rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500 opacity-10 blur-[8rem] rounded-full"></div>
        </div>
      </div>
      
      {/* Animated Grid - Subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgNTlWMWg1OHY1OEgxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTMwIDMwSDB2MzBoMzBWMzB6TTMwIDBIMHYzMGgzMFYwek02MCAwSDMwdjMwaDMwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 lg:gap-x-16 items-center">
          {/* Hero Content - Spans 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Pre-heading badge */}
            <div className="inline-flex items-center mb-6 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium text-white/80">{t('hero.preheading')}</span>
            </div>
            
            {/* Main Heading with gradient text */}
            <h1 className="text-balance mb-6 font-display">
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in mb-2">
                {t('hero.heading')}
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl text-gray-300 mt-6">
                {t('hero.subheading')}
              </span>
            </h1>
            
            {/* Hero CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link 
                href="/contact" 
                className="btn btn-lg btn-primary group"
              >
                <span className="mr-2">{t('hero.cta2')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/work" 
                className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10"
              >
                <span>{t('hero.cta1')}</span>
              </Link>
            </div>
            
            {/* Social proof section with stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="font-display font-bold text-3xl text-white mb-1">97%</div>
                <p className="text-sm text-gray-100/70">{t('hero.stats.clientSatisfaction')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="font-display font-bold text-3xl text-white mb-1">120+</div>
                <p className="text-sm text-gray-100/70">{t('hero.stats.projectsCompleted')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="font-display font-bold text-3xl text-white mb-1">10+ yrs</div>
                <p className="text-sm text-gray-100/70">{t('hero.stats.experience')}</p>
              </div>
            </div>
          </div>
          
          {/* Hero 3D Mockup/Illustration - Spans 2 columns */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main hero visual - modern 3D illustration mockup */}
              <div className="w-full max-w-lg h-[420px] md:h-[500px] rounded-3xl p-1 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-highlight relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 backdrop-blur-md rounded-[calc(1.5rem-4px)]"></div>
                
                {/* Content inside frame - would be replaced with actual image/illustration */}
                <div className="absolute inset-0 flex items-center justify-center rounded-[calc(1.5rem-4px)] overflow-hidden">
                  <div className="flex flex-col items-center text-white">
                    <div className="rounded-full w-20 h-20 bg-primary-600/30 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-200" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {/* <div className="text-center px-4">
                      <div className="font-display font-bold text-2xl mb-2">Interactive Demo</div>
                      <p className="text-gray-100/80 text-sm">Custom dashboard visualization for enterprise solutions</p>
                    </div> */}
                  </div>
                </div>
                
                {/* Floating elements animation */}
                <div className="absolute top-6 left-4 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl animate-float delay-300 backdrop-blur-sm"></div>
                <div className="absolute bottom-10 right-6 w-40 h-16 bg-gradient-to-br from-secondary-400/20 to-secondary-600/20 rounded-xl animate-float delay-700 backdrop-blur-sm"></div>
                <div className="absolute top-1/3 right-12 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full animate-float delay-500 backdrop-blur-sm"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl rotate-12 opacity-30 blur-md animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-2xl -rotate-12 opacity-30 blur-md animate-pulse-slow"></div>
              
              {/* Code snippet decoration */}
              <div className="absolute -left-16 top-1/3 w-32 h-20 bg-gray-950/80 backdrop-blur-md rounded-lg border border-gray-800 shadow-lg p-3 hidden lg:block transform -rotate-6 animate-float">
                <div className="flex items-center space-x-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-primary-500/30"></div>
                  <div className="h-1.5 w-3/4 rounded-full bg-secondary-500/30"></div>
                  <div className="h-1.5 w-1/2 rounded-full bg-purple-500/30"></div>
                </div>
              </div>
              
              {/* Tech stack badges */}
              <div className="absolute -right-4 -bottom-4 hidden lg:flex flex-col space-y-2">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-secondary">Node.js</div>
                <div className="badge bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by brands */}
        <div className="mt-24 relative">
          <div className="divider mb-12"></div>
          <div className="text-center">
            <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-8">{t('hero.trustedBy.heading')}</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['TechCorp', 'Innovate', 'GlobalSoft', 'FutureTech', 'ZenithSystems'].map((brand, index) => (
                <div key={index} className="text-white/50 font-bold font-display text-xl md:text-2xl">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm text-gray-400 dark:text-gray-500 flex flex-col items-center animate-pulse">
            <span>{t('hero.scrollDown')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;