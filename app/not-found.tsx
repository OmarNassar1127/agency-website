"use client";

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-primary-900 to-secondary-900 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500 opacity-10 blur-[8rem] rounded-full"></div>
          <div className="absolute top-1/2 -left-60 w-[36rem] h-[36rem] bg-secondary-400 opacity-10 blur-[8rem] rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500 opacity-10 blur-[8rem] rounded-full"></div>
        </div>
      </div>

      <div className="container px-4 py-16 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Mac-style browser window */}
          <div className="mb-12">
            <div className="rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-gray-700 mx-auto max-w-md">
              {/* Window controls */}
              <div className="h-8 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center px-4 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-center text-xs text-gray-400 font-mono">404 - Page Not Found</div>
              </div>
              
              {/* Browser content */}
              <div className="p-8 flex flex-col items-center justify-center">
                <div className="text-[120px] font-bold font-display leading-none gradient-text mb-4">
                  404
                </div>
                <div className="animate-pulse text-gray-400 text-sm font-mono mb-4">
                  Error: Page not found in database
                </div>
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Error message */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {t('404.title') || 'Page Not Found'}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            {t('404.description') || "Oops! The page you are looking for doesn't exist or has been moved."}
          </p>
          
          {/* Back to home button */}
          <Link 
            href="/" 
            className="btn btn-lg btn-primary inline-flex items-center group"
          >
            <span className="mr-2">{t('404.backHome') || 'Back to Home'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
