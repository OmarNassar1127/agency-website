"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

const CookiePolicy = () => {
  const { t, language } = useLanguage();
  const lastUpdated = "March 25, 2025";
  
  // Function to open cookie settings modal
  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined' && 'openCookieSettings' in window) {
      window.openCookieSettings?.();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {t('legal.cookies.title')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {t('legal.cookies.lastUpdated')}: {lastUpdated}
          </p>
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg">{t('legal.cookies.intro')}</p>
          </div>
          
          {/* Policy Sections */}
          <div className="space-y-12">
            <Section 
              title={t('legal.cookies.sections.whatAreCookies.title')} 
              content={t('legal.cookies.sections.whatAreCookies.content')} 
            />
            
            <Section 
              title={t('legal.cookies.sections.whyWeUse.title')} 
              content={t('legal.cookies.sections.whyWeUse.content')} 
            />
            
            <Section 
              title={t('legal.cookies.sections.typesOfCookies.title')} 
              content={t('legal.cookies.sections.typesOfCookies.content')} 
            />
            
            <Section 
              title={t('legal.cookies.sections.control.title')} 
              content={t('legal.cookies.sections.control.content')} 
            />
            
            <Section 
              title={t('legal.cookies.sections.updates.title')} 
              content={t('legal.cookies.sections.updates.content')} 
            />
            
            <Section 
              title={t('legal.cookies.sections.contact.title')} 
              content={t('legal.cookies.sections.contact.content')} 
            />
          </div>
          
          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.legalInfo')}</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    {t('footer.privacyPolicy')}
                  </Link>
                  <Link href="/terms" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    {t('footer.termsOfService')}
                  </Link>
                </div>
              </div>
              
              <button
                onClick={handleOpenCookieSettings}
                className="mt-4 md:mt-0 px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
              >
                {language === 'nl' ? 'Cookievoorkeuren beheren' : 'Manage Cookie Preferences'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="prose dark:prose-invert max-w-none">
      <p>{content}</p>
    </div>
  </div>
);

export default CookiePolicy;
