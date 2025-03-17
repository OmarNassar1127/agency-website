"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceModal, { Service } from './ServiceModal';

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get service data with translations
  const getServiceData = (t: (key: string) => string): Service[] => [
    {
      id: 1,
      title: t('services.items.customSoftware.title'),
      description: t('services.items.customSoftware.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: '/services/custom-software',
      bgClass: 'from-blue-500/5 to-indigo-500/5',
      iconBgClass: 'bg-blue-50 dark:bg-blue-950/30 text-blue-500 dark:text-blue-400',
      highlights: [
        t('services.items.customSoftware.highlights.0'),
        t('services.items.customSoftware.highlights.1'),
        t('services.items.customSoftware.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.customSoftware.detailedContent.overview'),
        approach: t('services.items.customSoftware.detailedContent.approach'),
        benefits: t('services.items.customSoftware.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.customSoftware.detailedContent.deliverables')) 
          ? t('services.items.customSoftware.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.customSoftware.detailedContent.technologies')) 
          ? t('services.items.customSoftware.detailedContent.technologies') 
          : [],
        timeline: t('services.items.customSoftware.detailedContent.timeline'),
        pricing: t('services.items.customSoftware.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.customSoftware.detailedContent.faq')) 
          ? t('services.items.customSoftware.detailedContent.faq') 
          : []
      }
    },
    {
      id: 2,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      link: '/services/web-development',
      bgClass: 'from-purple-500/5 to-pink-500/5',
      iconBgClass: 'bg-purple-50 dark:bg-purple-950/30 text-purple-500 dark:text-purple-400',
      highlights: [
        t('services.items.webDev.highlights.0'),
        t('services.items.webDev.highlights.1'),
        t('services.items.webDev.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.webDev.detailedContent.overview'),
        approach: t('services.items.webDev.detailedContent.approach'),
        benefits: t('services.items.webDev.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.webDev.detailedContent.deliverables')) 
          ? t('services.items.webDev.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.webDev.detailedContent.technologies')) 
          ? t('services.items.webDev.detailedContent.technologies') 
          : [],
        timeline: t('services.items.webDev.detailedContent.timeline'),
        pricing: t('services.items.webDev.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.webDev.detailedContent.faq')) 
          ? t('services.items.webDev.detailedContent.faq') 
          : []
      }
    },
    {
      id: 3,
      title: t('services.items.mobileDev.title'),
      description: t('services.items.mobileDev.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/mobile-apps',
      bgClass: 'from-indigo-500/5 to-blue-500/5',
      iconBgClass: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 dark:text-indigo-400',
      highlights: [
        t('services.items.mobileDev.highlights.0'),
        t('services.items.mobileDev.highlights.1'),
        t('services.items.mobileDev.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.mobileDev.detailedContent.overview'),
        approach: t('services.items.mobileDev.detailedContent.approach'),
        benefits: t('services.items.mobileDev.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.mobileDev.detailedContent.deliverables')) 
          ? t('services.items.mobileDev.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.mobileDev.detailedContent.technologies')) 
          ? t('services.items.mobileDev.detailedContent.technologies') 
          : [],
        timeline: t('services.items.mobileDev.detailedContent.timeline'),
        pricing: t('services.items.mobileDev.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.mobileDev.detailedContent.faq')) 
          ? t('services.items.mobileDev.detailedContent.faq') 
          : []
      }
    },
    {
      id: 4,
      title: t('services.items.cloudSolutions.title'),
      description: t('services.items.cloudSolutions.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      link: '/services/cloud-solutions',
      bgClass: 'from-sky-500/5 to-cyan-500/5',
      iconBgClass: 'bg-sky-50 dark:bg-sky-950/30 text-sky-500 dark:text-sky-400',
      highlights: [
        t('services.items.cloudSolutions.highlights.0'),
        t('services.items.cloudSolutions.highlights.1'),
        t('services.items.cloudSolutions.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.cloudSolutions.detailedContent.overview'),
        approach: t('services.items.cloudSolutions.detailedContent.approach'),
        benefits: t('services.items.cloudSolutions.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.cloudSolutions.detailedContent.deliverables')) 
          ? t('services.items.cloudSolutions.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.cloudSolutions.detailedContent.technologies')) 
          ? t('services.items.cloudSolutions.detailedContent.technologies') 
          : [],
        timeline: t('services.items.cloudSolutions.detailedContent.timeline'),
        pricing: t('services.items.cloudSolutions.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.cloudSolutions.detailedContent.faq')) 
          ? t('services.items.cloudSolutions.detailedContent.faq') 
          : []
      }
    },
    {
      id: 5,
      title: t('services.items.aiMl.title'),
      description: t('services.items.aiMl.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/services/ai-ml',
      bgClass: 'from-rose-500/5 to-orange-500/5',
      iconBgClass: 'bg-rose-50 dark:bg-rose-950/30 text-rose-500 dark:text-rose-400',
      highlights: [
        t('services.items.aiMl.highlights.0'),
        t('services.items.aiMl.highlights.1'),
        t('services.items.aiMl.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.aiMl.detailedContent.overview'),
        approach: t('services.items.aiMl.detailedContent.approach'),
        benefits: t('services.items.aiMl.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.aiMl.detailedContent.deliverables')) 
          ? t('services.items.aiMl.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.aiMl.detailedContent.technologies')) 
          ? t('services.items.aiMl.detailedContent.technologies') 
          : [],
        timeline: t('services.items.aiMl.detailedContent.timeline'),
        pricing: t('services.items.aiMl.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.aiMl.detailedContent.faq')) 
          ? t('services.items.aiMl.detailedContent.faq') 
          : []
      }
    },
    {
      id: 6,
      title: t('services.items.devOps.title'),
      description: t('services.items.devOps.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      link: '/services/devops',
      bgClass: 'from-teal-500/5 to-green-500/5',
      iconBgClass: 'bg-teal-50 dark:bg-teal-950/30 text-teal-500 dark:text-teal-400',
      highlights: [
        t('services.items.devOps.highlights.0'),
        t('services.items.devOps.highlights.1'),
        t('services.items.devOps.highlights.2')
      ],
      detailedContent: {
        overview: t('services.items.devOps.detailedContent.overview'),
        approach: t('services.items.devOps.detailedContent.approach'),
        benefits: t('services.items.devOps.detailedContent.benefits'),
        deliverables: Array.isArray(t('services.items.devOps.detailedContent.deliverables')) 
          ? t('services.items.devOps.detailedContent.deliverables') 
          : [],
        technologies: Array.isArray(t('services.items.devOps.detailedContent.technologies')) 
          ? t('services.items.devOps.detailedContent.technologies') 
          : [],
        timeline: t('services.items.devOps.detailedContent.timeline'),
        pricing: t('services.items.devOps.detailedContent.pricing'),
        faq: Array.isArray(t('services.items.devOps.detailedContent.faq')) 
          ? t('services.items.devOps.detailedContent.faq') 
          : []
      }
    }
  ];

  // Add intersection observer for animation triggers
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px', // Start loading before section is fully in view
      threshold: 0.01 // Trigger earlier for smoother transitions
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Open modal with selected service
  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Get services data
  const services = getServiceData(t);

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div ref={sectionRef} className="container mx-auto section-hidden">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Section label */}
          <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{t('services.sectionLabel')}</span>
          </div>
          
          {/* Heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            {t('services.titleStart')} <span className="gradient-text">{t('services.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">
            {t('services.description')}
          </p>
        </div>
        
        {/* Service cards in grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`group card card-hover p-8 pb-10 bg-gradient-to-br ${service.bgClass} dark:bg-opacity-30 relative overflow-hidden card-item cursor-pointer`}
              style={{ '--item-index': service.id - 1 } as React.CSSProperties}
              onClick={() => handleServiceClick(service)}
            >
              {/* Icon with background */}
              <div className={`rounded-2xl w-16 h-16 flex items-center justify-center mb-6 ${service.iconBgClass} transition-transform group-hover:scale-110 duration-300`}>
                {service.icon}
              </div>
              
              {/* Title with animation */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-balance">
                {service.description}
              </p>
              
              {/* Feature highlights */}
              <div className="mb-8 space-y-2">
                {service.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </div>
                ))}
              </div>
              
              {/* Learn more link with animation */}
              <div 
                className="absolute bottom-8 inline-flex items-center font-medium group-hover:font-semibold text-primary-600 dark:text-primary-400 transition-all"
              >
                <span className="mr-1">{t('services.learnMore')}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Decorative gradient corner */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-primary-600/10 blur-sm rounded-tl-3xl"></div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center bg-gray-50 dark:bg-gray-900 p-2 rounded-full">
            <span className="text-gray-700 dark:text-gray-300 px-4">{t('services.cta.question')}</span>
            <Link 
              href="/services" 
              className="btn-sm btn-primary rounded-full inline-flex items-center"
            >
              <span className="mr-2">{t('services.cta.button')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;