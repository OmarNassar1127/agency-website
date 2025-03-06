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
        
        {/* Main content - Side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column - Content and tagline */}
          <div className="lg:col-span-5 order-1 px-4 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white fade-in-1">
              Building <span className="gradient-text">Digital</span> Experiences
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 fade-in-2">
              {t('hero.subheading')}
            </p>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2 mb-8 fade-in-3">
              <Link 
                href="contact" 
                className="btn btn-lg btn-primary group"
              >
                <span className="mr-2">{t('hero.cta2')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="services" 
                className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10"
              >
                <span>{t('hero.cta1')}</span>
              </Link>
            </div>
            
            {/* Stats highlights */}
            <div className="grid grid-cols-2 gap-4 mt-4 fade-in-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-white">97%</div>
                    <p className="text-xs text-gray-100/70">{t('hero.stats.clientSatisfaction')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-secondary-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-white">120+</div>
                    <p className="text-xs text-gray-100/70">{t('hero.stats.projectsCompleted')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Mac-style browser window animation */}
          <div className="lg:col-span-7 order-2 card-item" style={{ '--item-index': 1 } as React.CSSProperties}>
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Mac-style window frame */}
              <div className="rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-gray-700">
                {/* Window controls */}
                <div className="h-8 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center px-4 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-center text-xs text-gray-400 font-mono">
                    nexusdigital.cloud - Building Your Website
                  </div>
                </div>
                
                {/* Address bar */}
                <div className="h-9 bg-gray-800 border-b border-gray-700 px-4 flex items-center">
                  <div className="flex-1 bg-gray-700 rounded-md h-6 px-3 flex items-center">
                    <div className="w-4 h-4 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-xs text-gray-300 font-mono">https://your-site.com</span>
                  </div>
                </div>
                
                {/* Browser content - Canvas */}
                <div className="relative h-[450px] md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-full relative z-10"
                  ></canvas>
                  
                  {/* Building indicators */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3 z-20">
                    <div className="animate-pulse-slow w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="text-green-400 text-xs font-mono">Building website...</div>
                  </div>
                  
                  
                  {/* Glowing elements */}
                  <div className="absolute top-10 left-10 w-2 h-2 bg-primary-400 rounded-full animate-ping-slow opacity-70 z-20"></div>
                  <div className="absolute bottom-32 right-14 w-2 h-2 bg-secondary-400 rounded-full animate-ping-slow opacity-70 animation-delay-1000 z-20"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl rotate-12 opacity-20 blur-md animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-2xl -rotate-12 opacity-20 blur-md animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        {/* Trusted by brands */}
        <div className="mt-24 relative fade-in-3">
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