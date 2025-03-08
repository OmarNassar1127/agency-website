"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  longDescription?: string;
  images?: string[];
};

// Modal component for project details
const ProjectModal = ({ 
  isOpen, 
  onClose, 
  project 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  project: Project | null;
}) => {
  const { resolvedTheme } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Position modal in center of viewport
      setTimeout(() => {
        window.scrollTo({
          top: window.scrollY,
          behavior: 'auto'
        });
      }, 50);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen || !project) return null;

  // Placeholder images for carousel (replace with actual project images)
  const projectImages = project.images || [
    '/project-image-1.jpg',
    '/project-image-2.jpg',
    '/project-image-3.jpg',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto animate-fade-in">
      <div 
        ref={modalRef}
        className={`w-full max-w-4xl max-h-[90vh] my-4 overflow-y-auto rounded-2xl ${
          resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } shadow-2xl transition-all duration-300 transform animate-fadeInUp`}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-700 dark:text-gray-300"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header image */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gray-200 dark:bg-gray-800 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <div className="relative w-full h-full">
            {/* Image carousel */}
            <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}>
              {projectImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full">
                  <div className="h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <button 
              onClick={() => setActiveImageIndex(prev => (prev > 0 ? prev - 1 : projectImages.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveImageIndex(prev => (prev < projectImages.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImageIndex === index 
                      ? 'bg-white w-4' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h2>
          
          {/* Project description */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300">
              {project.longDescription || project.description}
            </p>
          </div>
          
          {/* Tech stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Example projects data derived from translations
  const projects: Project[] = [
    {
      id: 'crm',
      title: t('featuredProjects.projects.crm.title'),
      description: t('featuredProjects.projects.crm.description'),
      technologies: [
        t('featuredProjects.technologies.react'),
        t('featuredProjects.technologies.nodejs'),
        t('featuredProjects.technologies.mongodb')
      ],
      longDescription: "Our custom CRM platform was built for a Fortune 500 company looking to streamline their customer management and sales processes. The solution includes comprehensive contact management, sales pipeline visualization, automated lead scoring, and detailed analytics dashboards. The system integrates with their existing tools and has led to a 40% increase in sales team productivity and a 25% boost in conversion rates.",
    },
    {
      id: 'healthApp',
      title: t('featuredProjects.projects.healthApp.title'),
      description: t('featuredProjects.projects.healthApp.description'),
      technologies: [
        t('featuredProjects.technologies.reactNative'),
        t('featuredProjects.technologies.firebase'),
        t('featuredProjects.technologies.graphql')
      ],
      longDescription: "HealthTrack is a comprehensive health and fitness mobile application designed for both iOS and Android platforms. The app features personalized workout plans, nutrition tracking, health metrics monitoring, and social sharing capabilities. Users can set goals, track their progress with interactive charts, and receive AI-powered recommendations to optimize their health journey. The app has gained over 100,000 users since launch with a 4.8-star average rating.",
    },
    {
      id: 'aiAnalytics',
      title: t('featuredProjects.projects.aiAnalytics.title'),
      description: t('featuredProjects.projects.aiAnalytics.description'),
      technologies: [
        t('featuredProjects.technologies.python'),
        t('featuredProjects.technologies.tensorflow'),
        t('featuredProjects.technologies.aws')
      ],
      longDescription: "This AI-powered analytics platform provides predictive insights for e-commerce businesses. Using machine learning algorithms, the system analyzes customer behavior patterns, market trends, and inventory data to optimize pricing, marketing campaigns, and product recommendations. The platform includes real-time dashboards, automated reporting, and customizable alert systems. Clients using this platform have reported an average 45% increase in conversion rates and 30% improvement in inventory management efficiency.",
    }
  ];
  
  // Open project modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Intersection observer for animations
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
  
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div ref={sectionRef} className="container mx-auto px-4 section-hidden">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('featuredProjects.heading')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('featuredProjects.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 card-item" 
                style={{ '--item-index': index } as React.CSSProperties}
              >
                <div className="h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {index === 0 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        )}
                        {index === 1 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        )}
                        {index === 2 && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                          />
                        )}
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Project Image Placeholder
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {t('featuredProjects.viewCaseStudy')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project details modal */}
      <ProjectModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        project={selectedProject} 
      />
    </>
  );
};

export default FeaturedProjects;
