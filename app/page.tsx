"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />

      {/* Featured Projects/Portfolio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('featuredProjects.heading')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('featuredProjects.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project Image Placeholder
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {t('featuredProjects.projects.crm.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('featuredProjects.projects.crm.description')}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.react')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.nodejs')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.mongodb')}
                  </span>
                </div>
                <a
                  href="/work/enterprise-crm"
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
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project Image Placeholder
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {t('featuredProjects.projects.healthApp.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('featuredProjects.projects.healthApp.description')}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.reactNative')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.firebase')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.graphql')}
                  </span>
                </div>
                <a
                  href="/work/health-track-app"
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
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project Image Placeholder
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {t('featuredProjects.projects.aiAnalytics.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('featuredProjects.projects.aiAnalytics.description')}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.python')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.tensorflow')}
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    {t('featuredProjects.technologies.aws')}
                  </span>
                </div>
                <a
                  href="/work/ai-analytics"
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
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/work"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
            >
              {t('featuredProjects.viewAllButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section - Impact numbers to show credibility */}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {t('whyChooseUs.label')}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              {t('whyChooseUs.heading')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('whyChooseUs.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Reason 1 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-800/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {t('whyChooseUs.reasons.experts.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('whyChooseUs.reasons.experts.description')}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.experts.points.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.experts.points.1')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-secondary-50 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-800/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                {t('whyChooseUs.reasons.agile.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('whyChooseUs.reasons.agile.description')}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-secondary-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.agile.points.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-secondary-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.agile.points.1')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {t('whyChooseUs.reasons.futureProof.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('whyChooseUs.reasons.futureProof.description')}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.futureProof.points.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.futureProof.points.1')}
                  </li>
                </ul>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 dark:group-hover:bg-teal-800/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {t('whyChooseUs.reasons.support.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('whyChooseUs.reasons.support.description')}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.support.points.0')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2 text-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('whyChooseUs.reasons.support.points.1')}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="btn btn-lg btn-primary inline-flex items-center"
            >
              <span className="mr-2">{t('whyChooseUs.cta')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}