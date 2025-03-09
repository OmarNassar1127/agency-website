"use client";

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';

// Project type definition
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  longDescription?: string;
  images?: string[];
};

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Initialize portal once component mounts
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Auto-rotate carousel images every 5 seconds
  useEffect(() => {
    if (!isOpen || !project || isPaused) return;
    
    const imageCount = project.images?.length || 3;
    
    const interval = setInterval(() => {
      setActiveImageIndex(prevIndex => {
        const nextIndex = prevIndex < imageCount - 1 ? prevIndex + 1 : 0;
        return nextIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isOpen, project, isPaused]);

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

  // Return null during SSR or if modal is not open
  if (!mounted || !isOpen || !project) return null;

  // Placeholder images for carousel (replace with actual project images)
  const projectImages = project.images || [
    '/project-image-1.jpg',
    '/project-image-2.jpg',
    '/project-image-3.jpg',
  ];

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto animate-fade-in">
      <div 
        ref={modalRef}
        className={`relative w-full max-w-4xl max-h-[90vh] my-4 overflow-y-auto rounded-2xl ${
          resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } shadow-2xl transition-all duration-300 transform animate-fadeInUp`}
      >
        {/* Close button - Updated z-index and positioning */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-[60] p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110 cursor-pointer"
          aria-label="Close modal"
          type="button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 pointer-events-none" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header image */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gray-200 dark:bg-gray-800 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <div 
            className="relative w-full h-full" 
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image carousel */}
            <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}>
              {projectImages.map((image, index) => (
                <div 
                  key={index} 
                  className="min-w-full h-full relative bg-gray-900" // Changed from bg-red-500 to bg-gray-900
                >
                  {/* Loading Spinner */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      className="animate-spin h-12 w-12 text-primary-500" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      ></circle>
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  <img
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      console.error('Image failed to load:', image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      // Hide the loading spinner container when image loads
                      const spinnerContainer = e.currentTarget.previousSibling as HTMLElement;
                      if (spinnerContainer) {
                        spinnerContainer.style.display = 'none';
                      }
                    }}
                  />
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
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImageIndex === index 
                      ? 'bg-white w-4' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  type="button"
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

  // Use createPortal to render modal at the document body level
  return createPortal(modalContent, document.body);
};

export default ProjectModal;
