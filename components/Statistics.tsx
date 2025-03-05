"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Statistics = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 -right-20 w-[30rem] h-[30rem] bg-white opacity-[0.03] blur-[6rem] rounded-full"></div>
          <div className="absolute bottom-10 -left-20 w-[20rem] h-[20rem] bg-secondary-500 opacity-[0.06] blur-[5rem] rounded-full"></div>
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgNTlWMWg1OHY1OEgxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTMwIDMwSDB2MzBoMzBWMzB6TTMwIDBIMHYzMGgzMFYwek02MCAwSDMwdjMwaDMwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">
              {t('statistics.label')}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
            {t('statistics.heading')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('statistics.description')}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-105">
            <div
              className="text-5xl md:text-6xl font-bold font-display text-white mb-3"
              style={{ lineHeight: "1" }}
            >
              97<span className="text-secondary-400">%</span>
            </div>
            <p className="text-lg md:text-xl text-white/70 text-center">
              {t('statistics.clientSatisfaction')}
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-105">
            <div
              className="text-5xl md:text-6xl font-bold font-display text-white mb-3"
              style={{ lineHeight: "1" }}
            >
              250<span className="text-secondary-400">+</span>
            </div>
            <p className="text-lg md:text-xl text-white/70 text-center">
              {t('statistics.projectsCompleted')}
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-105">
            <div
              className="text-5xl md:text-6xl font-bold font-display text-white mb-3"
              style={{ lineHeight: "1" }}
            >
              40<span className="text-secondary-400">%</span>
            </div>
            <p className="text-lg md:text-xl text-white/70 text-center">
              {t('statistics.roiIncrease')}
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-transform hover:scale-105">
            <div
              className="text-5xl md:text-6xl font-bold font-display text-white mb-3"
              style={{ lineHeight: "1" }}
            >
              10<span className="text-secondary-400">y+</span>
            </div>
            <p className="text-lg md:text-xl text-white/70 text-center">
              {t('statistics.experience')}
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></div>
          </div>
        </div>

        {/* Additional stats with logos */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Improved performance */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-white/10 rounded-xl p-3 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white/70 text-sm mb-1">{t('statistics.performance.label')}</div>
                <div className="text-3xl font-bold text-white font-display">
                  {t('statistics.performance.value')}
                </div>
              </div>
            </div>
            <p className="text-white/70">
              {t('statistics.performance.description')}
            </p>
          </div>

          {/* Cost reduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-white/10 rounded-xl p-3 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white/70 text-sm mb-1">
                  {t('statistics.costReduction.label')}
                </div>
                <div className="text-3xl font-bold text-white font-display">
                  {t('statistics.costReduction.value')}
                </div>
              </div>
            </div>
            <p className="text-white/70">
              {t('statistics.costReduction.description')}
            </p>
          </div>

          {/* Time to market */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="bg-white/10 rounded-xl p-3 mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white/70 text-sm mb-1">
                  {t('statistics.timeToMarket.label')}
                </div>
                <div className="text-3xl font-bold text-white font-display">
                  {t('statistics.timeToMarket.value')}
                </div>
              </div>
            </div>
            <p className="text-white/70">
              {t('statistics.timeToMarket.description')}
            </p>
          </div>
        </div>

        {/* Testimonial highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex mx-auto px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-300 mr-3 mt-1 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg text-white italic">
              {t('statistics.testimonialQuote')}
            </span>
          </div>
          <p className="text-white/70 mt-4">
            {t('statistics.testimonialAuthor')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;