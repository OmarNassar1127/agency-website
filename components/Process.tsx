import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  // Add intersection observer for animation triggers
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px", // Changed to trigger closer to viewport
      threshold: 0.2, // Increased threshold to trigger when card is more visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the timeout for more immediate response
          entry.target.classList.add("is-visible");
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-hidden");
        }
      });
    }, options);

    // Observe the process section and each step
    const processSteps = document.querySelectorAll(".process-step");
    processSteps.forEach((step, index) => {
      step.setAttribute("data-item-index", index.toString());
      observer.observe(step);
    });

    return () => {
      processSteps.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
          <div className="absolute w-[40rem] h-[40rem] bg-primary-100 dark:bg-primary-900/20 blur-[10rem] rounded-full -top-20 -left-20"></div>
          <div className="absolute w-[30rem] h-[30rem] bg-secondary-100 dark:bg-secondary-900/20 blur-[8rem] rounded-full bottom-0 right-0"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-600/70 text-white font-medium text-sm tracking-wider mb-4 shadow-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              {t("process.heading")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            {t("process.titleStart")}{" "}
            <span className="gradient-text">{t("process.titleHighlight")}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("process.subheading")}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

          <div className="space-y-24">
            {/* Step 1: Discovery & Planning */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 0 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Content */}
                <div className="md:text-right order-2 md:order-1 step-content">
                  <span className="inline-block text-sm text-white font-medium bg-primary-600 dark:bg-primary-500 py-1 px-3 rounded-full mb-4">
                    {t("process.steps.discovery.phase")}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("process.steps.discovery.title")}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {t("process.steps.discovery.description")}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.discovery.points.0")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.discovery.points.1")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.discovery.points.2")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>

                {/* Step Illustration - REDUCED SIZE */}
                <div className="order-1 md:order-2 relative animate-when-visible illustration">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20 blur-lg rounded-xl"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[180px] flex items-center justify-center">
                      <div className="relative w-full max-w-[180px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {/* Discovery Illustration */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-primary-500 dark:text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 right-3 h-8 w-8 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform rotate-45"></div>
                        <div className="absolute -bottom-2 -left-2 h-10 w-10 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform -rotate-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Design & Prototyping */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 1 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Illustration - REDUCED SIZE */}
                <div className="relative md:order-1 animate-when-visible illustration">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary-500 to-primary-500 opacity-20 blur-lg rounded-xl"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[180px] flex items-center justify-center">
                      <div className="relative w-full max-w-[180px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {/* Design Illustration */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-secondary-500 dark:text-secondary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 left-3 h-8 w-8 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform -rotate-45"></div>
                        <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform rotate-12"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-left md:order-2 step-content">
                  <span className="inline-block text-sm text-white font-medium bg-secondary-600 dark:bg-secondary-500 py-1 px-3 rounded-full mb-4">
                    {t("process.steps.design.phase")}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("process.steps.design.title")}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {t("process.steps.design.description")}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-secondary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.design.points.0")}</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-secondary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.design.points.1")}</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-secondary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.design.points.2")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: Development */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 2 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Content */}
                <div className="md:text-right order-2 md:order-1 step-content">
                  <span className="inline-block text-sm text-white font-medium bg-primary-600 dark:bg-primary-500 py-1 px-3 rounded-full mb-4">
                    {t("process.steps.development.phase")}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("process.steps.development.title")}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {t("process.steps.development.description")}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.development.points.0")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.development.points.1")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li className="flex items-center md:justify-end text-gray-600 dark:text-gray-300">
                      <span className="md:order-2">
                        {t("process.steps.development.points.2")}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 mr-2 md:ml-2 md:mr-0 text-primary-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>

                {/* Step Illustration - REDUCED SIZE */}
                <div className="order-1 md:order-2 relative animate-when-visible illustration">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-purple-500 opacity-20 blur-lg rounded-xl"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[180px] flex items-center justify-center">
                      <div className="relative w-full max-w-[180px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {/* Development Illustration */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-purple-500 dark:text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 right-3 h-8 w-8 bg-purple-200 dark:bg-purple-800/50 rounded-lg -z-10 transform rotate-45"></div>
                        <div className="absolute -bottom-2 -left-2 h-10 w-10 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform -rotate-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Launch & Support */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 3 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Illustration - REDUCED SIZE */}
                <div className="relative md:order-1 animate-when-visible illustration">
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-secondary-500 opacity-20 blur-lg rounded-xl"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[180px] flex items-center justify-center">
                      <div className="relative w-full max-w-[180px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {/* Launch Illustration */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-teal-500 dark:text-teal-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 left-3 h-8 w-8 bg-teal-200 dark:bg-teal-800/50 rounded-lg -z-10 transform -rotate-45"></div>
                        <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform rotate-12"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-left md:order-2 step-content">
                  <span className="inline-block text-sm text-white font-medium bg-teal-600 dark:bg-teal-500 py-1 px-3 rounded-full mb-4">
                    {t("process.steps.support.phase")}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("process.steps.support.title")}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {t("process.steps.support.description")}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.support.points.0")}</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.support.points.1")}</span>
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-teal-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{t("process.steps.support.points.2")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="mt-20 text-center process-step section-hidden"
          style={{ "--item-index": 4 } as React.CSSProperties}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("process.cta.heading")}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("process.cta.description")}
            </p>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg inline-flex items-center font-medium"
            >
              <span className="mr-2">{t("process.cta.button")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
