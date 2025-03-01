"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

// Metadata is handled in layout.tsx for client components

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-950 via-primary-900 to-secondary-900 py-24 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500 opacity-10 blur-[8rem] rounded-full"></div>
              <div className="absolute top-1/2 -left-60 w-[36rem] h-[36rem] bg-secondary-400 opacity-10 blur-[8rem] rounded-full"></div>
            </div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="inline-flex items-center mb-6 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium text-white/80">{t('services.preheading')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">{t('services.heading')}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t('services.pageSubheading')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="#services" className="btn btn-lg btn-primary">
                {t('services.exploreServices')}
              </Link>
              <Link href="/contact" className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10">
                {t('services.getInTouch')}
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services Grid Section */}
        <section id="services" className="py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{t('services.sectionLabel')}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t('services.titleStart')} <span className="gradient-text">{t('services.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('services.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{t('services.webDev.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('services.items.webDev.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom CMS Integration
                  </li>
                </ul>
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:text-primary-700 dark:hover:text-primary-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-secondary-200 dark:hover:border-secondary-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-secondary-50 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">{t('services.mobileDev.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('services.items.mobileDev.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    iOS & Android Apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cross-Platform Solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AR/VR Integration
                  </li>
                </ul>
                <Link href="/contact" className="text-secondary-600 dark:text-secondary-400 font-medium flex items-center hover:text-secondary-700 dark:hover:text-secondary-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t('services.items.aiMl.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('services.items.aiMl.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Natural Language Processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Computer Vision
                  </li>
                </ul>
                <Link href="/contact" className="text-purple-600 dark:text-purple-400 font-medium flex items-center hover:text-purple-700 dark:hover:text-purple-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 dark:group-hover:bg-teal-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Data Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Transform your raw data into actionable insights that drive business decisions and growth strategies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business Intelligence
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Data Visualization
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom Dashboards
                  </li>
                </ul>
                <Link href="/contact" className="text-teal-600 dark:text-teal-400 font-medium flex items-center hover:text-teal-700 dark:hover:text-teal-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Service 5 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-amber-200 dark:hover:border-amber-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 dark:group-hover:bg-amber-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Strategic digital marketing services that increase your online visibility, drive traffic, and generate leads.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Content Marketing
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Social Media Management
                  </li>
                </ul>
                <Link href="/contact" className="text-amber-600 dark:text-amber-400 font-medium flex items-center hover:text-amber-700 dark:hover:text-amber-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Service 6 */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-rose-200 dark:hover:border-rose-800 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 dark:group-hover:bg-rose-800/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">UX/UI Design</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  User-centered design that creates intuitive, engaging, and accessible digital experiences for your customers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    User Research
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Visual Design
                  </li>
                </ul>
                <Link href="/contact" className="text-rose-600 dark:text-rose-400 font-medium flex items-center hover:text-rose-700 dark:hover:text-rose-300">
                  {t('services.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We Work Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-950/60">
                <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">{t('services.processLabel')}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t('services.processHeading')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('services.processDescription')}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>
                
                {/* Step 1 */}
                <div className="relative z-10 mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('process.steps.discovery.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('process.steps.discovery.description')}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-500 dark:bg-primary-500 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.discovery.points.0')}
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.discovery.points.1')}
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.discovery.points.2')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative z-10 mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.design.points.0')}
                        </li>
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.design.points.1')}
                        </li>
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.design.points.2')}
                        </li>
                      </ul>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary-500 dark:bg-secondary-500 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 shadow-lg order-2 md:order-2">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-3 md:order-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('process.steps.design.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('process.steps.design.description')}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative z-10 mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('process.steps.development.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('process.steps.development.description')}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500 dark:bg-purple-500 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.development.points.0')}
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.development.points.1')}
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.development.points.2')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-1 md:order-1">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.support.points.0')}
                        </li>
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.support.points.1')}
                        </li>
                        <li className="flex items-center justify-end text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {t('process.steps.support.points.2')}
                        </li>
                      </ul>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-500 dark:bg-yellow-500 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 shadow-lg order-2 md:order-2">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-3 md:order-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('process.steps.support.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('process.steps.support.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.ctaHeading')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t('services.ctaDescription')}
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-700 hover:bg-gray-100 font-medium rounded-lg px-8 py-4 text-lg transition-colors">
              {t('services.ctaButton')}
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;