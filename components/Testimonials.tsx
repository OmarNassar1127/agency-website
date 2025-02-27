"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "TechCraft Studio transformed our outdated system into a modern, efficient platform that's increased our productivity by 40%. Their team was professional, responsive, and delivered exactly what we needed.",
    author: "Sarah Johnson",
    position: "CTO, Innovate Inc.",
    image: "/images/testimonial-1.jpg", // This is a placeholder, you'll need to add actual images
  },
  {
    id: 2,
    content:
      "Working with TechCraft Studio was a game-changer for our business. Their custom CRM solution has helped us nurture leads more effectively, resulting in a 25% increase in conversion rates within just three months.",
    author: "Michael Chen",
    position: "Director of Sales, GrowthTech",
    image: "/images/testimonial-2.jpg", // This is a placeholder, you'll need to add actual images
  },
  {
    id: 3,
    content:
      "The mobile app TechCraft developed for us exceeded our expectations. Not only did they deliver on time and within budget, but they also provided valuable insights that improved the final product significantly.",
    author: "Jessica Martinez",
    position: "Product Manager, AppWorks",
    image: "/images/testimonial-3.jpg", // This is a placeholder, you'll need to add actual images
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've helped businesses of all sizes achieve their technology goals.
            Here's what they have to say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-700">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full p-8 md:p-12">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <svg
                        className="w-12 h-12 text-blue-500 opacity-20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067 24l6.4-12.8h-4.8l-6.4 12.8h4.8zM20.067 24l6.4-12.8h-4.8l-6.4 12.8h4.8z"></path>
                      </svg>
                    </div>

                    {/* Content */}
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex-shrink-0 overflow-hidden">
                        {/* This would be an image, but we're using a placeholder */}
                        <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
