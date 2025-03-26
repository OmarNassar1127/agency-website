"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

const TermsOfService = () => {
  const { t } = useLanguage();
  const lastUpdated = "March 25, 2025";

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {t('legal.terms.title')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {t('legal.terms.lastUpdated')}: {lastUpdated}
          </p>
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg">{t('legal.terms.intro')}</p>
          </div>
          
          {/* Terms Sections */}
          <div className="space-y-12">
            <Section 
              title={t('legal.terms.sections.acceptance.title')} 
              content={t('legal.terms.sections.acceptance.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.changes.title')} 
              content={t('legal.terms.sections.changes.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.intellectualProperty.title')} 
              content={t('legal.terms.sections.intellectualProperty.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.userConduct.title')} 
              content={t('legal.terms.sections.userConduct.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.indemnification.title')} 
              content={t('legal.terms.sections.indemnification.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.disclaimer.title')} 
              content={t('legal.terms.sections.disclaimer.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.limitations.title')} 
              content={t('legal.terms.sections.limitations.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.governingLaw.title')} 
              content={t('legal.terms.sections.governingLaw.content')} 
            />
            
            <Section 
              title={t('legal.terms.sections.contact.title')} 
              content={t('legal.terms.sections.contact.content')} 
            />
          </div>
          
          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">{t('footer.legalInfo')}</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/cookies" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                {t('footer.cookiePolicy')}
              </Link>
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

export default TermsOfService;
