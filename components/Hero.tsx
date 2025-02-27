import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Custom Software Solutions for Your Business
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up">
              We build tailored software that drives innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/portfolio" 
                className="btn bg-transparent hover:bg-white/10 border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all"
              >
                View Our Work
              </Link>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-blue-100 mb-4 font-medium">Trusted by innovative companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-white/70 font-bold text-lg">ACME Inc.</div>
                <div className="text-white/70 font-bold text-lg">TechGiant</div>
                <div className="text-white/70 font-bold text-lg">Innovate Co.</div>
                <div className="text-white/70 font-bold text-lg">FutureSoft</div>
              </div>
            </div>
          </div>
          
          {/* Image/illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[400px] md:h-[500px]">
              {/* Placeholder for an illustration - you'll need to replace this with an actual image */}
              <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-500/40 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Hero Image Placeholder</p>
                  <p className="text-blue-100 text-sm mt-2">Replace with your custom illustration</p>
                </div>
              </div>
              
              {/* Decoration elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg -rotate-12 opacity-80"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white dark:text-gray-900 w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;