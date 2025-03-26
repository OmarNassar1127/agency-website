"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const lastUpdated = "March 25, 2025";

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {t('legal.privacy.title')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {t('legal.privacy.lastUpdated')}: {lastUpdated}
          </p>
          
          {/* Introduction */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg">{t('legal.privacy.intro')}</p>
          </div>
          
          {/* Policy Sections */}
          <div className="space-y-12">
            <Section 
              title={t('legal.privacy.sections.informationCollection.title')} 
              content={t('legal.privacy.sections.informationCollection.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.informationUse.title')} 
              content={t('legal.privacy.sections.informationUse.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.informationSharing.title')} 
              content={t('legal.privacy.sections.informationSharing.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.cookies.title')} 
              content={t('legal.privacy.sections.cookies.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.dataRetention.title')} 
              content={t('legal.privacy.sections.dataRetention.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.dataSecurity.title')} 
              content={t('legal.privacy.sections.dataSecurity.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.yourRights.title')} 
              content={t('legal.privacy.sections.yourRights.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.changes.title')} 
              content={t('legal.privacy.sections.changes.content')} 
            />
            
            <Section 
              title={t('legal.privacy.sections.contact.title')} 
              content={t('legal.privacy.sections.contact.content')} 
            />
          </div>
          
          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">{t('footer.legalInfo')}</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                {t('footer.termsOfService')}
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

export default PrivacyPolicy;
