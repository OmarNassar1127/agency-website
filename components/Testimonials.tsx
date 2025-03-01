"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const getTestimonials = (t: (key: string) => string) => [
  {
    id: 1,
    content: t('testimonials.items.0.content'),
    author: t('testimonials.items.0.author'),
    position: t('testimonials.items.0.position'),
    company: t('testimonials.items.0.company'),
    rating: 5,
    industry: t('testimonials.items.0.industry'),
    service: t('testimonials.items.0.service'),
    image: "/img/testimonial-1.jpg" // This is a placeholder, you'll need to add actual images
  },
  {
    id: 2,
    content: t('testimonials.items.1.content'),
    author: t('testimonials.items.1.author'),
    position: t('testimonials.items.1.position'),
    company: t('testimonials.items.1.company'),
    rating: 5,
    industry: t('testimonials.items.1.industry'),
    service: t('testimonials.items.1.service'),
    image: "/img/testimonial-2.jpg" // This is a placeholder, you'll need to add actual images
  },
  {
    id: 3,
    content: t('testimonials.items.2.content'),
    author: t('testimonials.items.2.author'),
    position: t('testimonials.items.2.position'),
    company: t('testimonials.items.2.company'),
    rating: 5,
    industry: t('testimonials.items.2.industry'),
    service: t('testimonials.items.2.service'),
    image: "/img/testimonial-3.jpg" // This is a placeholder, you'll need to add actual images
  },
  {
    id: 4,
    content: t('testimonials.items.3.content'),
    author: t('testimonials.items.3.author'),
    position: t('testimonials.items.3.position'),
    company: t('testimonials.items.3.company'),
    rating: 5,
    industry: t('testimonials.items.3.industry'),
    service: t('testimonials.items.3.service'),
    image: "/img/testimonial-4.jpg" // This is a placeholder, you'll need to add actual images
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  const testimonials = getTestimonials(t);

  // Handle automatic testimonial rotation
  useEffect(() => {
    if (!autoplay || isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, isHovering]);

  // Navigation functions
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false); // Stop autoplay when user manually navigates
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "currentColor" : "currentColor"}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < rating ? 0 : 1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Section label */}
          <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-950/60">
            <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">{t('testimonials.heading')}</span>
          </div>
          
          {/* Heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            {t('testimonials.titleStart')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Main testimonial display */}
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Large featured testimonial card */}
          <div className="relative z-10 mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl -z-10"></div>
            <div className="card card-glass p-1 rounded-3xl overflow-hidden">
              <div className="overflow-hidden rounded-[calc(1.5rem-4px)]">
                <div 
                  className="transition-transform duration-700 ease-out flex"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                      <div className="flex flex-col h-full">
                        {/* Top section with quote and rating */}
                        <div className="flex justify-between items-start mb-8">
                          {/* Quote mark */}
                          <svg className="w-12 h-12 text-primary-400/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.067 24l6.4-12.8h-4.8l-6.4 12.8h4.8zM20.067 24l6.4-12.8h-4.8l-6.4 12.8h4.8z"></path>
                          </svg>
                          
                          {/* Star rating */}
                          <div className="flex space-x-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        
                        {/* Main content */}
                        <div className="flex-grow">
                          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-light text-balance">
                            "{testimonial.content}"
                          </p>
                        </div>
                        
                        {/* Footer with author information */}
                        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-600 dark:to-secondary-600 mr-4 flex-shrink-0 overflow-hidden flex items-center justify-center">
                              {/* This would be an image, but using initials as placeholder */}
                              <span className="text-lg font-semibold text-primary-900 dark:text-white">
                                {testimonial.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                {testimonial.author}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center">
                                <span>{testimonial.position}</span>
                                <span className="hidden sm:inline mx-2">•</span>
                                <span className="font-medium text-primary-600 dark:text-primary-400">{testimonial.company}</span>
                              </p>
                            </div>
                          </div>
                          
                          {/* Project type badge */}
                          <div className="hidden md:block">
                            <span className="badge badge-secondary">
                              {testimonial.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous button */}
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-soft hover:shadow-md transition-all focus-ring"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary-500 w-8" // Active dot is wider
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
            
            {/* Next button */}
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-soft hover:shadow-md transition-all focus-ring"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          {/* Industry labels along the bottom */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {Array.from(new Set(testimonials.map(t => t.industry))).map((industry, idx) => (
              <div key={idx} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
