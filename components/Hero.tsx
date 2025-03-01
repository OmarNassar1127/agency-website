"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Website building animation using canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Alternative approach without using roundRect
    const drawRoundedRect = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) => {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);
      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);
      context.closePath();
    };
    
    // Set canvas dimensions to match its display size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Define types for animation elements
    type StructureElement = {
      type: string;
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      targetWidth: number;
      speed: number;
    };
    
    type UIElement = {
      type: string;
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      active: boolean;
      delay: number;
    };
    
    // Animation elements
    const elements: StructureElement[] = [
      { type: 'header', x: 0, y: 0, width: 0, height: 50, color: 'rgba(99, 102, 241, 0.4)', targetWidth: 0, speed: 3 },
      { type: 'hero', x: 0, y: 60, width: 0, height: 200, color: 'rgba(236, 72, 153, 0.3)', targetWidth: 0, speed: 2 },
      { type: 'section1', x: 0, y: 270, width: 0, height: 100, color: 'rgba(139, 92, 246, 0.3)', targetWidth: 0, speed: 2.5 },
      { type: 'section2', x: 0, y: 380, width: 0, height: 140, color: 'rgba(59, 130, 246, 0.3)', targetWidth: 0, speed: 1.8 },
      { type: 'footer', x: 0, y: 530, width: 0, height: 70, color: 'rgba(99, 102, 241, 0.4)', targetWidth: 0, speed: 3.2 },
    ];
    
    // UI elements for more realistic design
    const uiElements: UIElement[] = [
      // Navigation items in header
      { type: 'navItem', x: 20, y: 25, width: 40, height: 6, color: 'rgba(255, 255, 255, 0.7)', active: false, delay: 500 },
      { type: 'navItem', x: 70, y: 25, width: 40, height: 6, color: 'rgba(255, 255, 255, 0.7)', active: false, delay: 600 },
      { type: 'navItem', x: 120, y: 25, width: 40, height: 6, color: 'rgba(255, 255, 255, 0.7)', active: false, delay: 700 },
      { type: 'navItem', x: 170, y: 25, width: 40, height: 6, color: 'rgba(255, 255, 255, 0.7)', active: false, delay: 800 },
      
      // Hero content elements
      { type: 'heroHeading', x: 50, y: 100, width: 300, height: 15, color: 'rgba(255, 255, 255, 0.9)', active: false, delay: 1000 },
      { type: 'heroSubheading', x: 50, y: 130, width: 250, height: 10, color: 'rgba(255, 255, 255, 0.7)', active: false, delay: 1200 },
      { type: 'heroButton', x: 50, y: 160, width: 120, height: 30, color: 'rgba(99, 102, 241, 0.8)', active: false, delay: 1400 },
      
      // Image/graphic placeholder
      { type: 'heroImage', x: 400, y: 80, width: 200, height: 150, color: 'rgba(255, 255, 255, 0.2)', active: false, delay: 1600 },
      
      // Section content
      { type: 'sectionTitle', x: 50, y: 290, width: 250, height: 12, color: 'rgba(255, 255, 255, 0.8)', active: false, delay: 1800 },
      { type: 'sectionContent', x: 50, y: 320, width: 500, height: 6, color: 'rgba(255, 255, 255, 0.6)', active: false, delay: 2000 },
      { type: 'sectionContent', x: 50, y: 335, width: 450, height: 6, color: 'rgba(255, 255, 255, 0.6)', active: false, delay: 2100 },
      { type: 'sectionContent', x: 50, y: 350, width: 480, height: 6, color: 'rgba(255, 255, 255, 0.6)', active: false, delay: 2200 },
      
      // Grid items in section 2
      { type: 'gridItem', x: 50, y: 400, width: 150, height: 100, color: 'rgba(255, 255, 255, 0.2)', active: false, delay: 2400 },
      { type: 'gridItem', x: 220, y: 400, width: 150, height: 100, color: 'rgba(255, 255, 255, 0.2)', active: false, delay: 2500 },
      { type: 'gridItem', x: 390, y: 400, width: 150, height: 100, color: 'rgba(255, 255, 255, 0.2)', active: false, delay: 2600 },
      
      // Footer items
      { type: 'footerItem', x: 50, y: 560, width: 100, height: 6, color: 'rgba(255, 255, 255, 0.5)', active: false, delay: 2800 },
      { type: 'footerItem', x: 180, y: 560, width: 100, height: 6, color: 'rgba(255, 255, 255, 0.5)', active: false, delay: 2900 },
      { type: 'footerItem', x: 310, y: 560, width: 100, height: 6, color: 'rgba(255, 255, 255, 0.5)', active: false, delay: 3000 },
    ];
    
    // Create code animation elements
    type AnimationElement = {
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      active: boolean;
      delay: number;
      type?: string;
    };
    
    const codeLines: AnimationElement[] = [];
    for (let i = 0; i < 12; i++) {
      const width = Math.random() * 80 + 40;
      codeLines.push({
        x: 600,
        y: 100 + i * 15,
        width: width,
        height: 6,
        color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 0.4)`,
        active: false,
        delay: 2000 + i * 150
      });
    }
    
    let animationStartTime = Date.now();
    let animationFrame: number;
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentTime = Date.now();
      const elapsedTime = currentTime - animationStartTime;
      
      // Draw main structure elements with animation
      elements.forEach(element => {
        // Set target width based on canvas width
        element.targetWidth = canvas.width * 0.95;
        
        // Animate width
        if (element.width < element.targetWidth) {
          element.width += element.speed;
          if (element.width > element.targetWidth) {
            element.width = element.targetWidth;
          }
        }
        
        // Draw element
        ctx.fillStyle = element.color;
        ctx.fillRect(element.x, element.y, element.width, element.height);
        
        // Add subtle pulsing effect for completed elements
        if (element.width === element.targetWidth) {
          const pulseIntensity = Math.sin(elapsedTime / 1000) * 0.1 + 0.9;
          ctx.fillStyle = element.color.replace(')', `, ${pulseIntensity})`);
          ctx.fillRect(element.x, element.y, element.width, element.height);
        }
      });
      
      // Draw UI elements with sequential appearance
      [...uiElements, ...codeLines].forEach(element => {
        if (!element.active && elapsedTime > element.delay) {
          element.active = true;
        }
        
        if (element.active) {
          // Create fading in effect
          const fadeProgress = Math.min(1, (elapsedTime - element.delay) / 300);
          const fade = element.color.replace(')', `, ${fadeProgress})`);
          ctx.fillStyle = fade;
          ctx.fillRect(element.x, element.y, element.width, element.height);
          
          // Add rounded corners to buttons
          if (element.type === 'heroButton') {
            ctx.fillStyle = fade;
            const radius = 6;
            drawRoundedRect(ctx, element.x, element.y, element.width, element.height, radius);
            ctx.fill();
          }
        }
      });
      
      // Loop animation when it's done or reset after certain time
      if (elapsedTime > 8000) {
        // Reset animation
        animationStartTime = Date.now();
        elements.forEach(element => {
          element.width = 0;
        });
        [...uiElements, ...codeLines].forEach(element => {
          element.active = false;
        });
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-center">
          {/* Logo and Headline - Centered for impact */}
          <div className="lg:col-span-12 text-center mb-12">
            <div className="inline-flex flex-col items-center">
              {/* Logo-style headline */}
              <div className="mb-8 flex items-center text-center">
                <span className="text-5xl md:text-7xl font-display font-bold mr-2">
                  <span className="gradient-text">{t('navbar.logo.first')}</span>
                  <span className="text-white">{t('navbar.logo.second')}</span>
                </span>
              </div>
              
              {/* Modern one-liner tag */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                {t('hero.subheading')}
              </h1>
              
              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
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
                  href="/services" 
                  className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10"
                >
                  <span>{t('hero.cta1')}</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Website Building Animation - Spans 7 columns */}
          <div className="lg:col-span-7 flex justify-center relative order-2 lg:order-1">
            <div className="relative w-full max-w-3xl">
              {/* Animation canvas */}
              <div className="rounded-3xl p-1 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-highlight overflow-hidden group h-[500px] md:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-secondary-900/40 backdrop-blur-sm rounded-[calc(1.5rem-4px)]"></div>
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full rounded-[calc(1.5rem-4px)] relative z-10"
                ></canvas>
                
                {/* Glowing elements and particles */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-primary-400 rounded-full animate-ping-slow opacity-70"></div>
                <div className="absolute bottom-32 right-14 w-2 h-2 bg-secondary-400 rounded-full animate-ping-slow opacity-70 animation-delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping-slow opacity-70 animation-delay-2000"></div>
                
                {/* IDE Window decoration */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white/40 text-sm font-mono opacity-80">
                  index.tsx - Nexus Digital Project
                </div>
                
                {/* Building indicators */}
                <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                  <div className="animate-pulse-slow w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-white/70 text-xs font-mono">Building website...</div>
                </div>
                
                {/* Tech stack labels */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  <div className="badge badge-sm badge-primary opacity-60">{t('hero.techStack.react')}</div>
                  <div className="badge badge-sm badge-secondary opacity-60">{t('hero.techStack.typescript')}</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl rotate-12 opacity-20 blur-md animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-2xl -rotate-12 opacity-20 blur-md animate-pulse-slow"></div>
            </div>
          </div>
          
          {/* Stats Section - Spans 5 columns */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="text-white text-3xl font-display font-bold mb-8 text-center lg:text-left">
              <span className="gradient-text">Results</span> That Speak Volumes
            </h2>
            
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-3xl text-white">97%</div>
                    <p className="text-sm text-gray-100/70">{t('hero.stats.clientSatisfaction')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-secondary-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-3xl text-white">120+</div>
                    <p className="text-sm text-gray-100/70">{t('hero.stats.projectsCompleted')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-3xl text-white">10+ yrs</div>
                    <p className="text-sm text-gray-100/70">{t('hero.stats.experience')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-emerald-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-3xl text-white">24/7</div>
                    <p className="text-sm text-gray-100/70">{t('cta.stats.support')}</p>
                  </div>
                </div>
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
      
    </section>
  );
};

export default Hero;