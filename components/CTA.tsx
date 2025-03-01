"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with layered gradients for depth */}
      <div className="absolute inset-0 -z-10">
        {/* Background base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
        
        {/* Glow effects */}
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-secondary-500 opacity-20 blur-[6rem] rounded-full"></div>
        <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-primary-400 opacity-10 blur-[6rem] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-secondary-400 opacity-10 blur-[7rem] rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgNTlWMWg1OHY1OEgxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTMwIDMwSDB2MzBoMzBWMzB6TTMwIDBIMHYzMGgzMFYwek02MCAwSDMwdjMwaDMwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout for larger screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column with text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-white/90">{t('cta.badge')}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white leading-tight">
                {t('cta.heading')}
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-xl lg:pr-6">
                {t('cta.subheading')}
              </p>
              
              {/* Statistics highlight */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-10 mb-8 md:mb-12">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">97%</div>
                  <p className="text-white/70 text-sm">{t('cta.stats.satisfaction')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">2 {t('cta.stats.week')}</div>
                  <p className="text-white/70 text-sm">{t('cta.stats.responseTime')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">24/7</div>
                  <p className="text-white/70 text-sm">{t('cta.stats.support')}</p>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-4">
                <Link 
                  href="/contact" 
                  className="btn-lg bg-white text-primary-700 hover:bg-white/95 shadow-highlight transition-all group"
                >
                  <span className="mr-2">{t('cta.button')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/work" 
                  className="btn-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white"
                >
                  {t('hero.cta1')}
                </Link>
              </div>
            </div>
            
            {/* Right column with form card */}
            <div className="relative">
              {/* Card with subtle glow effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-white/20 to-white/0 rounded-3xl blur-sm"></div>
              <div className="card card-glass bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-8 relative">
                <h3 className="text-2xl font-display font-bold text-white mb-6">{t('cta.form.heading')}</h3>
                
                <form className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                      placeholder={t('newsletter.placeholder')}
                    />
                  </div>
                  
                  {/* Project type field */}
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-white/80 mb-1.5">{t('contact.form.subject')}</label>
                    <select 
                      id="project-type" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/25 appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                    >
                      <option value="" className="bg-gray-900">{t('cta.form.selectType')}</option>
                      <option value="web-app" className="bg-gray-900">{t('services.webDev.title')}</option>
                      <option value="mobile-app" className="bg-gray-900">{t('services.mobileDev.title')}</option>
                      <option value="custom-software" className="bg-gray-900">{t('services.items.customSoftware.title')}</option>
                      <option value="cloud-solutions" className="bg-gray-900">{t('services.cloudSolutions.title')}</option>
                      <option value="ai-ml" className="bg-gray-900">{t('services.items.aiMl.title')}</option>
                    </select>
                  </div>
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-white/95 text-primary-700 font-bold rounded-xl py-3 transition-all shadow-md hover:shadow-lg mt-2"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
                
                {/* Guarantee text */}
                <p className="text-white/70 text-sm text-center mt-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                  {t('cta.form.guarantee')}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-400/20 to-secondary-600/20 rounded-full blur-md hidden lg:block"></div>
            </div>
          </div>
          
          {/* Testimonial line */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center mx-auto px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-300 mr-2">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90 font-medium">
                {t('cta.testimonial')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;