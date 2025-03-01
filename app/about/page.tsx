"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

// export const metadata = {
//   title: "About Us - Nexus Digital Agency",
//   description:
//     "Learn about Nexus Digital Agency, our mission, values, and the talented team behind our innovative digital solutions.",
// };

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="page-background-light">
      <Navbar />

      <div className="">
        {/* Hero Section with Animated Elements */}
        <section className="relative bg-gradient-to-br from-gray-950 via-primary-900 to-secondary-900 py-24 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500 opacity-10 blur-[8rem] rounded-full"></div>
              <div className="absolute top-1/2 -left-60 w-[36rem] h-[36rem] bg-secondary-400 opacity-10 blur-[8rem] rounded-full"></div>
            </div>
          </div>

          {/* Animated floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white opacity-20 rounded-full animate-float-slow"></div>
            <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-primary-400 opacity-20 rounded-full animate-float-medium"></div>
            <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-secondary-400 opacity-20 rounded-full animate-float-fast"></div>
            <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white opacity-20 rounded-full animate-float-slow"></div>

            {/* Code-like animated elements */}
            <div className="absolute top-20 left-10 w-[200px] h-6 bg-white/5 rounded animate-slide-right overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  &lt;div className="future"&gt;
                </span>
              </div>
            </div>
            <div className="absolute top-1/3 right-10 w-[150px] h-6 bg-white/5 rounded animate-slide-left overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  .transform(ideas)
                </span>
              </div>
            </div>
            <div className="absolute bottom-1/3 left-20 w-[180px] h-6 bg-white/5 rounded animate-slide-right overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  innovation.unleash()
                </span>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-20 w-[120px] h-6 bg-white/5 rounded animate-slide-left overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  &lt;/div&gt;
                </span>
              </div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="inline-flex items-center mb-6 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium text-white/80">
                {t('about.ourStory')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {t('about.heading.start')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
                {t('about.heading.highlight')}
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t('about.subheading')}
            </p>

            {/* Creative intro animation - replacing standard buttons */}
            <div className="flex flex-wrap justify-center mt-12 relative">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 max-w-3xl mx-auto">
                <div className="typing-animation relative pl-4 border-l-2 border-primary-400">
                  <p className="text-md md:text-lg text-left font-mono text-white/90">
                    <span className="text-primary-400">const</span>{" "}
                    <span className="text-secondary-400">nexusTeam</span> = [
                    <br />
                    <span className="ml-4">
                      {t("about.codeAnimation.line2")}
                    </span>
                    <br />
                    {t("about.codeAnimation.line3")}
                    <br />
                    <br />
                    <span className="text-primary-400">function</span>{" "}
                    <span className="text-secondary-400">
                      createDigitalMagic
                    </span>
                    () {`{`}
                    <br />
                    <span className="ml-4">
                      <span className="text-primary-400">return</span>{" "}
                      nexusTeam.reduce((product, value) =&gt; <br />{" "}
                    </span>
                    <span className="ml-8">{t("about.codeAnimation.line6")}</span>
                    <br />
                    <span className="ml-8">{t("about.codeAnimation.line7")}</span>
                    <br />
                    <span className="ml-4">);</span>
                    <br />
                    {`}`}
                    <br />
                    <br />
                    <span className="text-primary-400">
                      {t("about.codeAnimation.line10")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {t('about.journeyTitle')}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.journeySubtitle').split(' ')[0]}{" "}
                <span className="gradient-text">
                  {t('about.journeySubtitle').split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.journeyDescription')}
              </p>
            </div>

            {/* Interactive Timeline */}
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>

              {/* Timeline nodes */}
              <div className="relative z-10">
                {/* 2015 - Founded */}
                <div className="timeline-node mb-20">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                        {t('about.timeline.2015.label')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.timeline.2015.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('about.timeline.2015.description')}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10 shadow-lg order-1 md:order-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0 order-3">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 md:ml-6 transform transition-transform hover:scale-105">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                          {/* Image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">
                              Founding Team Photo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2017 - Growth */}
                <div className="timeline-node mb-20">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 order-2 md:order-3">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 md:mr-6 transform transition-transform hover:scale-105">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                          {/* Image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">
                              First Office Photo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10 shadow-lg order-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
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
                    <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0 md:text-left order-3 md:order-1">
                      <span className="text-secondary-600 dark:text-secondary-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                        {t('about.timeline.2017.label')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.timeline.2017.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('about.timeline.2017.description')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2019 - Innovation */}
                <div className="timeline-node mb-20">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                        {t('about.timeline.2019.label')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.timeline.2019.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('about.timeline.2019.description')}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10 shadow-lg order-1 md:order-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0 order-3">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 md:ml-6 transform transition-transform hover:scale-105">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                          {/* Image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">
                              AI Team Photo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2021 - Global */}
                <div className="timeline-node mb-20">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 order-2 md:order-3">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 md:mr-6 transform transition-transform hover:scale-105">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                          {/* Image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">
                              Global Team Photo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10 shadow-lg order-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0 md:text-left order-3 md:order-1">
                      <span className="text-teal-600 dark:text-teal-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                        {t('about.timeline.2021.label')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.timeline.2021.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('about.timeline.2021.description')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2023 - Present */}
                <div className="timeline-node">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-16 md:text-right order-2 md:order-1">
                      <span className="text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                        {t('about.timeline.2023.label')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('about.timeline.2023.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('about.timeline.present.description')}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 border-4 border-white dark:border-gray-950 flex items-center justify-center z-10 shadow-lg order-1 md:order-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0 order-3">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 md:ml-6 transform transition-transform hover:scale-105">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                          {/* Image placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 dark:text-gray-400">
                              Current Team Photo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values - Interactive Cards */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-950/60">
                <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t('about.valuesTitle')}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.valuesTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.values.description') || "These principles guide every decision we make and every line of code we write."}
              </p>
            </div>

            {/* Interactive 3D Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 - Excellence */}
              <div className="value-card group perspective">
                <div className="relative preserve-3d duration-1000 w-full h-[400px]">
                  {/* Card Front */}
                  <div className="absolute backface-hidden w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {t('about.values.innovation.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('about.values.innovation.description')}
                    </p>
                    <div className="mt-auto">
                      <button className="text-primary-600 dark:text-primary-400 font-medium flex items-center group-hover:text-primary-700 dark:group-hover:text-primary-300">
                        {t('about.values.learnMore')}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="absolute backface-hidden w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-xl p-8 flex flex-col rotate-y-180">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Excellence in Action
                    </h3>
                    <ul className="text-white/90 space-y-4 mb-6">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-primary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Rigorous quality assurance on every project</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-primary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Continuous learning and skill development</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-primary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          Never settling for "good enough" when we can make it
                          great
                        </span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <div className="text-white/80 italic">
                        "Excellence is not a skill. It's an attitude." — Ralph
                        Marston
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value 2 - Innovation */}
              <div className="value-card group perspective">
                <div className="relative preserve-3d duration-1000 w-full h-[400px]">
                  {/* Card Front */}
                  <div className="absolute backface-hidden w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary-50 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6">
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {t('about.values.innovation.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('about.values.innovation.description')}
                    </p>
                    <div className="mt-auto">
                      <button className="text-secondary-600 dark:text-secondary-400 font-medium flex items-center group-hover:text-secondary-700 dark:group-hover:text-secondary-300">
                        {t('about.values.learnMore')}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="absolute backface-hidden w-full h-full bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-2xl shadow-xl p-8 flex flex-col rotate-y-180">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Innovation in Action
                    </h3>
                    <ul className="text-white/90 space-y-4 mb-6">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-secondary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Weekly exploration of emerging technologies</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-secondary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Innovation lab for experimental solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-secondary-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          Regular innovation sprints to generate new ideas
                        </span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <div className="text-white/80 italic">
                        "Innovation distinguishes between a leader and a
                        follower." — Steve Jobs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value 3 - Collaboration */}
              <div className="value-card group perspective">
                <div className="relative preserve-3d duration-1000 w-full h-[400px]">
                  {/* Card Front */}
                  <div className="absolute backface-hidden w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {t('about.values.collaboration.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('about.values.collaboration.description')}
                    </p>
                    <div className="mt-auto">
                      <button className="text-purple-600 dark:text-purple-400 font-medium flex items-center group-hover:text-purple-700 dark:group-hover:text-purple-300">
                        {t('about.values.learnMore')}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="absolute backface-hidden w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl p-8 flex flex-col rotate-y-180">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Collaboration in Action
                    </h3>
                    <ul className="text-white/90 space-y-4 mb-6">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-purple-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          Cross-functional teams for holistic solutions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-purple-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Client workshops and co-creation sessions</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-2 text-purple-300 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          Open communication channels across all teams
                        </span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <div className="text-white/80 italic">
                        "Alone we can do so little; together we can do so much."
                        — Helen Keller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team - Creative Display */}
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {t('about.teamTitle')}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.leadershipTeam.title').split(' ')[0]} <span className="gradient-text">{t('about.leadershipTeam.title').split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.leadershipTeam.description')}
              </p>
            </div>

            {/* Team Orbit Display */}
            <div className="relative max-w-4xl mx-auto h-[600px] md:h-[700px]">
              {/* Center element */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur flex items-center justify-center z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {t('about.teamOrbit.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t('about.teamOrbit.description')}
                  </p>
                </div>
              </div>

              {/* Orbiting team members */}
              <div className="team-orbit absolute inset-0">
                {/* Team Member 1 */}
                <div className="team-member absolute left-1/2 top-[10%] transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image - replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {t('about.teamMembers.leadership.members.0.name') || "James Anderson"}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 text-sm">
                        {t('about.teamMembers.leadership.members.0.position') || "CEO"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="team-member absolute right-[10%] top-1/3 transform -translate-y-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Sophia Martinez
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                        CTO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="team-member absolute left-[10%] top-1/3 transform -translate-y-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        David Kim
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 text-sm">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="team-member absolute left-1/2 bottom-[10%] transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Emily Roberts
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 text-sm">
                        Project Management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Member 5 */}
                <div className="team-member absolute right-[20%] bottom-[25%]">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Michael Chen
                      </h4>
                      <p className="text-rose-600 dark:text-rose-400 text-sm">
                        AI Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Team Member 6 */}
                <div className="team-member absolute left-[20%] bottom-[25%]">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-950 shadow-lg">
                      {/* Member image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        Sarah Johnson
                      </h4>
                      <p className="text-amber-600 dark:text-amber-400 text-sm">
                        Marketing Lead
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Animated Stats Counter */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/* Stat 1 */}
              <div className="counter-item">
                <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">
                  <span className="counter-value" data-target="250">
                    {t('about.stats.projects.number')}
                  </span>
                </div>
                <p className="text-lg text-white/80">{t('about.stats.projects.label')}</p>
              </div>

              {/* Stat 2 */}
              <div className="counter-item">
                <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">
                  <span className="counter-value" data-target="80">
                    {t('about.stats.team.number')}
                  </span>
                </div>
                <p className="text-lg text-white/80">{t('about.stats.team.label')}</p>
              </div>

              {/* Stat 3 */}
              <div className="counter-item">
                <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">
                  <span className="counter-value" data-target="15">
                    {t('about.stats.countries.number')}
                  </span>
                </div>
                <p className="text-lg text-white/80">{t('about.stats.countries.label')}</p>
              </div>

              {/* Stat 4 */}
              <div className="counter-item">
                <div className="text-5xl md:text-6xl font-bold font-display text-white mb-2">
                  <span className="counter-value" data-target="8">
                    {t('about.stats.years.number')}
                  </span>
                </div>
                <p className="text-lg text-white/80">{t('about.stats.years.label')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.cta.heading')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                {t('about.cta.description')}
              </p>

              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-1 rounded-xl shadow-xl">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('about.cta.section.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t('about.cta.section.description')}
                    </p>
                    <Link
                      href="/contact"
                      className="btn-lg btn-primary inline-flex items-center"
                    >
                      <span className="mr-2">{t('about.cta.section.button')}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="text-center md:text-right">
                    <span className="inline-block text-5xl font-display font-bold gradient-text mb-4">
                      {t('about.cta.tagline') || "Let's Create"}
                    </span>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('about.cta.taglineDescription') || "Digital experiences that matter"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Add these style definitions for the animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(400%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slide-right 15s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 15s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .perspective {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .value-card:hover .preserve-3d {
          transform: rotateY(180deg);
        }

        .team-orbit {
          animation: orbit 30s linear infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .team-member {
          animation: counter-orbit 30s linear infinite;
        }

        @keyframes counter-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .typing-animation {
          overflow: hidden;
          border-right: 0.15em solid #38bdf8;
          white-space: nowrap;
          letter-spacing: 0.05em;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #38bdf8;
          }
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </main>
  );
}
