import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const Process = () => {
  const { t } = useLanguage();
  const [countdownText, setCountdownText] = useState('T-10');

  useEffect(() => {
    const texts = ['T-10', 'T-09', 'T-08', 'T-07', 'T-06', 'T-05', 'T-04', 'T-03', 'T-02', 'T-01', 'LIFTOFF'];
    let currentIndex = 0;

    const updateText = () => {
      setCountdownText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    };

    const interval = setInterval(updateText, 1000);
    return () => clearInterval(interval);
  }, []);

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
                <motion.div
                  className="order-1 md:order-2 relative illustration"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20 blur-lg rounded-xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[220px] flex items-center justify-center">
                      <div className="relative w-full max-w-[220px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {/* Discovery Illustration - 3D Compass Scene */}
                          <motion.div
                            className="relative w-full h-full"
                            animate={{
                              rotateY: [0, 360],
                            }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            style={{
                              transformStyle: "preserve-3d",
                              perspective: "1000px",
                            }}
                          >
                            {/* Compass base */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-600 shadow-inner flex items-center justify-center">
                                <div className="w-28 h-28 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center">
                                  <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400 absolute"></div>
                                  {/* Compass face */}
                                  <div className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-500 relative">
                                    <motion.div
                                      className="absolute top-1/2 left-1/2 w-[1px] h-10 bg-red-500 origin-bottom"
                                      style={{ translateX: "-50%" }}
                                      animate={{
                                        rotate: [0, 30, -30, 15, -15, 0],
                                      }}
                                      transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="absolute top-1/2 left-1/2 w-[1px] h-8 bg-blue-500 origin-bottom"
                                      style={{ translateX: "-50%" }}
                                      animate={{
                                        rotate: [180, 210, 150, 195, 165, 180],
                                      }}
                                      transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                      }}
                                    ></motion.div>

                                    {/* Cardinal points */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-800 dark:text-gray-200">
                                      N
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-800 dark:text-gray-200">
                                      S
                                    </div>
                                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-800 dark:text-gray-200">
                                      W
                                    </div>
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-800 dark:text-gray-200">
                                      E
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Floating map elements */}
                            <motion.div
                              className="absolute top-1 right-1 w-6 h-6 bg-primary-200 dark:bg-primary-800/50 rounded-md"
                              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            ></motion.div>
                            <motion.div
                              className="absolute bottom-3 left-2 w-8 h-8 bg-secondary-200 dark:bg-secondary-800/50 rounded-md"
                              animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                              }}
                            ></motion.div>
                          </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute top-3 right-3 h-8 w-8 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform rotate-45"
                          animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        ></motion.div>
                        <motion.div
                          className="absolute -bottom-2 -left-2 h-10 w-10 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform -rotate-12"
                          animate={{
                            rotate: [-12, -45, -12],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 2: Design & Prototyping */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 1 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Illustration - REDUCED SIZE */}
                <motion.div
                  className="relative md:order-1 illustration"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-secondary-500 to-primary-500 opacity-20 blur-lg rounded-xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[220px] flex items-center justify-center">
                      <div className="relative w-full max-w-[220px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {/* Design Illustration - Interactive Design Board */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Design canvas */}
                            <div className="w-32 h-36 bg-white dark:bg-gray-800 rounded-lg shadow-md relative border border-gray-200 dark:border-gray-600">
                              {/* Design elements */}
                              <motion.div
                                className="absolute top-3 left-3 w-8 h-8 bg-secondary-500/20 dark:bg-secondary-500/30 rounded-md"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              ></motion.div>
                              <motion.div
                                className="absolute bottom-3 right-3 w-6 h-6 bg-primary-500/20 dark:bg-primary-500/30 rounded-full"
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.3,
                                }}
                              ></motion.div>
                              <motion.div
                                className="absolute top-3 right-3 w-4 h-4 bg-purple-500/20 dark:bg-purple-500/30 rounded-md"
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5,
                                }}
                              ></motion.div>
                              <motion.div
                                className="absolute top-14 left-5 w-20 h-1 bg-gray-300 dark:bg-gray-500 rounded-full"
                                animate={{ width: [18, 20, 15, 20] }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              ></motion.div>
                              <motion.div
                                className="absolute top-18 left-5 w-10 h-1 bg-gray-300 dark:bg-gray-500 rounded-full"
                                animate={{ width: [10, 15, 8, 10] }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.3,
                                }}
                              ></motion.div>
                              <motion.div
                                className="absolute top-22 left-5 w-14 h-1 bg-gray-300 dark:bg-gray-500 rounded-full"
                                animate={{ width: [14, 18, 12, 14] }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.6,
                                }}
                              ></motion.div>
                            </div>

                            {/* Color palette */}
                            <motion.div
                              className="absolute -top-2 -right-2"
                              animate={{ rotate: [0, -5, 5, 0] }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                                  <div className="flex flex-wrap content-center justify-center gap-1 w-12 h-12">
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-red-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0,
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-blue-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3,
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-green-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6,
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-yellow-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.9,
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-purple-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.2,
                                      }}
                                    ></motion.div>
                                    <motion.div
                                      className="w-3 h-3 rounded-full bg-pink-500"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.5,
                                      }}
                                    ></motion.div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>

                            {/* Design tool */}
                            <motion.div
                              className="absolute -bottom-4 left-0"
                              animate={{ rotate: [0, 8, 0] }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                              }}
                            >
                              <div className="w-10 h-10 bg-secondary-400 dark:bg-secondary-500 rounded-md rotate-12 flex items-center justify-center">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
                                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                    <path d="m2 2 7.586 7.586"></path>
                                    <circle cx="11" cy="11" r="2"></circle>
                                  </svg>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute top-3 left-3 h-8 w-8 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform -rotate-45"
                          animate={{
                            rotate: [-45, -90, -45],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        ></motion.div>
                        <motion.div
                          className="absolute -bottom-2 -right-2 h-10 w-10 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform rotate-12"
                          animate={{
                            rotate: [12, 45, 12],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

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
                <motion.div
                  className="order-1 md:order-2 relative illustration"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-purple-500 opacity-20 blur-lg rounded-xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[220px] flex items-center justify-center">
                      <div className="relative w-full max-w-[220px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {/* Development Illustration - Live Coding Animation */}
                          <div className="w-[160px] h-[160px] relative">
                            {/* Code Editor Window */}
                            <motion.div 
                              className="w-full h-full bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg relative"
                              animate={{ boxShadow: ['0px 4px 12px rgba(0,0,0,0.1)', '0px 8px 24px rgba(0,0,0,0.15)', '0px 4px 12px rgba(0,0,0,0.1)'] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                              {/* Window Header */}
                              <div className="h-6 bg-gray-700 dark:bg-gray-800 flex items-center px-2">
                                <motion.div 
                                  className="w-2 h-2 rounded-full bg-red-500 mr-1"
                                  whileInView={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                                ></motion.div>
                                <motion.div 
                                  className="w-2 h-2 rounded-full bg-yellow-500 mr-1"
                                  whileInView={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 0.3 }}
                                ></motion.div>
                                <motion.div 
                                  className="w-2 h-2 rounded-full bg-green-500"
                                  whileInView={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 0.6 }}
                                ></motion.div>
                              </div>
                              
                              {/* Code Editor Content */}
                              <div className="p-2 text-left">
                                {/* Line numbers */}
                                <div className="absolute left-2 top-8 flex flex-col text-[6px] text-gray-500 font-mono">
                                  <span>1</span>
                                  <span>2</span>
                                  <span>3</span>
                                  <span>4</span>
                                  <span>5</span>
                                  <span>6</span>
                                  <span>7</span>
                                  <span>8</span>
                                </div>
                                
                                {/* Code lines - Live Coding Effect */}
                                <div className="ml-3 flex flex-col text-[6px] font-mono">
                                  <motion.div 
                                    className="flex items-center text-blue-400 dark:text-blue-300"
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: false }}
                                  >
                                    <span>function</span>
                                    <span className="text-green-400 dark:text-green-300 ml-1">createApp</span>
                                    <span className="text-gray-300">()</span>
                                    <span className="text-gray-300 ml-1">{`{`}</span>
                                  </motion.div>
                                  
                                  <motion.div 
                                    className="ml-2 text-purple-400 dark:text-purple-300 flex"
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: false }}
                                  >
                                    <span>const</span>
                                    <span className="text-gray-300 ml-1">app</span>
                                    <span className="text-gray-300 ml-1">=</span>
                                    <span className="text-blue-400 dark:text-blue-300 ml-1">new</span>
                                    <span className="text-yellow-400 dark:text-yellow-300 ml-1">App();</span>
                                  </motion.div>
                                  
                                  {/* Animated cursor effect */}
                                  <motion.div 
                                    className="ml-2 flex items-center h-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 1.0 }}
                                    viewport={{ once: false }}
                                  >
                                    <motion.span 
                                      className="inline-block h-2 w-[2px] bg-white"
                                      animate={{ opacity: [1, 0, 1], x: [0, 30, 30] }}
                                      transition={{ 
                                        opacity: { duration: 0.8, repeat: Infinity, repeatType: "loop" },
                                        x: { duration: 1.5, times: [0, 0.7, 0.7], repeat: Infinity, repeatType: "loop" }
                                      }}
                                    ></motion.span>
                                    <motion.span 
                                      className="text-green-400 dark:text-green-300"
                                      initial={{ opacity: 0, width: 0 }}
                                      animate={{ opacity: 1, width: "auto" }}
                                      transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 6 }}
                                    >
                                      app.initialize();
                                    </motion.span>
                                  </motion.div>
                                  
                                  <motion.div 
                                    className="ml-2 text-orange-400 dark:text-orange-300"
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 2.8 }}
                                    viewport={{ once: false }}
                                  >
                                    <span>return app;</span>
                                  </motion.div>
                                  
                                  <motion.div 
                                    className="text-gray-300"
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 3.3 }}
                                    viewport={{ once: false }}
                                  >
                                    <span>{`}`}</span>
                                  </motion.div>
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Floating code elements */}
                            <motion.div 
                              className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500/30 dark:bg-purple-400/20 rounded-md p-1 flex items-center justify-center"
                              animate={{ 
                                y: [0, -5, 0],
                                rotate: [0, 8, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700 dark:text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                              </svg>
                            </motion.div>
                            
                            <motion.div 
                              className="absolute -bottom-3 -left-2 w-7 h-7 bg-blue-500/30 dark:bg-blue-400/20 rounded-md p-1 flex items-center justify-center"
                              animate={{ 
                                y: [0, 5, 0],
                                rotate: [0, -8, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                <line x1="6" y1="9" x2="6" y2="21"></line>
                              </svg>
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute top-3 right-3 h-8 w-8 bg-purple-200 dark:bg-purple-800/50 rounded-lg -z-10 transform rotate-45"
                          animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        ></motion.div>
                        <motion.div
                          className="absolute -bottom-2 -left-2 h-10 w-10 bg-primary-200 dark:bg-primary-800/50 rounded-lg -z-10 transform -rotate-12"
                          animate={{
                            rotate: [-12, -45, -12],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 4: Launch & Support */}
            <div
              className="relative process-step section-hidden"
              style={{ "--item-index": 3 } as React.CSSProperties}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Step Illustration - REDUCED SIZE */}
                <motion.div
                  className="relative md:order-1 illustration"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-teal-500 to-secondary-500 opacity-20 blur-lg rounded-xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-[220px] flex items-center justify-center">
                      <div className="relative w-full max-w-[220px] aspect-square">
                        <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                          {/* Launch Illustration - Enhanced Rocket Launch Animation */}
                          <div className="relative w-full h-full overflow-hidden">
                            {/* Space background with animated stars and nebula */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-b from-blue-950 via-purple-950 to-indigo-950 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950"
                              animate={{ 
                                background: [
                                  'linear-gradient(to bottom, #172554, #4c1d95, #312e81)',
                                  'linear-gradient(to bottom, #1e1b4b, #581c87, #1e3a8a)',
                                  'linear-gradient(to bottom, #172554, #4c1d95, #312e81)'
                                ]
                              }}
                              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                              {/* Stars with twinkling effect - added more stars */}
                              {[...Array(12)].map((_, i) => (
                                <motion.div 
                                  key={i}
                                  className={`absolute w-${Math.random() > 0.7 ? '1.5' : '0.5'} h-${Math.random() > 0.7 ? '1.5' : '0.5'} bg-white rounded-full`}
                                  style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random() * 0.5 + 0.3
                                  }}
                                  animate={{ 
                                    opacity: [0.4, 1, 0.4],
                                    scale: [1, 1.2, 1]
                                  }}
                                  transition={{ 
                                    duration: 1 + Math.random() * 3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    delay: Math.random() * 2
                                  }}
                                />
                              ))}
                              
                              {/* Nebula/galaxy effect */}
                              <motion.div 
                                className="absolute top-5 right-10 w-14 h-14 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-xl"
                                animate={{ 
                                  opacity: [0.1, 0.2, 0.1],
                                  scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div 
                                className="absolute bottom-10 left-5 w-16 h-16 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-xl"
                                animate={{ 
                                  opacity: [0.1, 0.3, 0.1],
                                  scale: [1, 1.15, 1]
                                }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                              />
                            </motion.div>
                            
                            {/* Enhanced launch platform */}
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-b-lg">
                              {/* Launch platform with glowing elements */}
                              <motion.div 
                                className="absolute left-1/2 bottom-0 w-24 h-4 bg-gray-700 dark:bg-gray-800 -translate-x-1/2 rounded-t-lg flex justify-center items-center overflow-hidden"
                                animate={{ boxShadow: ['0 0 0px rgba(20,184,166,0.2)', '0 0 10px rgba(20,184,166,0.5)', '0 0 0px rgba(20,184,166,0.2)'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              >
                                {/* Launch pad lights */}
                                <motion.div 
                                  className="absolute top-1 w-16 h-0.5 flex justify-between"
                                >
                                  {[...Array(5)].map((_, i) => (
                                    <motion.div 
                                      key={i}
                                      className="w-0.5 h-0.5 bg-teal-500 rounded-full"
                                      animate={{ opacity: [0.3, 1, 0.3] }}
                                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                    />
                                  ))}
                                </motion.div>
                              </motion.div>
                            </div>
                            
                            {/* Enhanced rocket with more detailed animation */}
                            <motion.div 
                              className="absolute left-1/2 bottom-6 -translate-x-1/2"
                              animate={{ 
                                y: [0, -50, -80, -120],
                                scale: [1, 1, 1, 0.8],
                                opacity: [1, 1, 1, 0.8]
                              }}
                              transition={{ 
                                duration: 5, 
                                times: [0, 0.3, 0.6, 1],
                                repeat: Infinity, 
                                repeatDelay: 1,
                                ease: [0.25, 0.1, 0.25, 1] // custom cubic-bezier for realistic motion
                              }}
                            >
                              <div className="relative">
                                {/* Enhanced rocket body */}
                                <motion.div 
                                  className="w-12 h-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-100 dark:to-gray-200 rounded-t-full rounded-b-lg relative"
                                  animate={{ boxShadow: ['0 0 5px rgba(255,255,255,0.3)', '0 0 15px rgba(255,255,255,0.5)', '0 0 5px rgba(255,255,255,0.3)'] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  {/* Glowing window */}
                                  <motion.div 
                                    className="absolute top-5 left-1/2 w-5 h-5 bg-teal-200 dark:bg-teal-300 rounded-full -translate-x-1/2 border-2 border-teal-500"
                                    animate={{ boxShadow: ['0 0 0px rgba(20,184,166,0)', '0 0 8px rgba(20,184,166,0.6)', '0 0 0px rgba(20,184,166,0)'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  >
                                    {/* Astronaut silhouette */}
                                    <motion.div 
                                      className="w-2 h-2 bg-teal-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
                                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                  </motion.div>
                                  
                                  {/* Enhanced fins */}
                                  <motion.div 
                                    className="absolute -left-3 bottom-0 w-3 h-6 bg-gradient-to-l from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-l-md"
                                    animate={{ rotate: [-3, 0, -3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  />
                                  <motion.div 
                                    className="absolute -right-3 bottom-0 w-3 h-6 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-r-md"
                                    animate={{ rotate: [3, 0, 3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  />
                                  
                                  {/* Rocket body details */}
                                  <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500"></div>
                                  <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500"></div>
                                  
                                  {/* Rocket logo */}
                                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-3 flex justify-center items-center">
                                    <div className="text-teal-700 dark:text-teal-600 text-[4px] font-bold">AGENCY</div>
                                  </div>
                                </motion.div>
                                
                                {/* Enhanced rocket flames */}
                                <motion.div
                                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                                  initial={{ opacity: 0.7, scale: 0.8 }}
                                  animate={{ 
                                    opacity: [0.7, 1, 0.7],
                                    scale: [0.8, 1.3, 0.8]
                                  }}
                                  transition={{ 
                                    duration: 0.5, 
                                    repeat: Infinity, 
                                    repeatType: "mirror"
                                  }}
                                >
                                  {/* Main flame */}
                                  <div className="w-8 h-10 bg-gradient-to-t from-orange-600 via-yellow-500 to-red-500 rounded-b-full rounded-t-sm blur-[1px]"></div>
                                  
                                  {/* Center blue flame */}
                                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-blue-600 via-blue-400 to-yellow-300 rounded-b-full rounded-t-sm blur-[1px]"></div>
                                  
                                  {/* Flame particles */}
                                  <motion.div 
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2"
                                  >
                                    {[...Array(6)].map((_, i) => (
                                      <motion.div 
                                        key={i}
                                        className="absolute w-1 h-1 bg-orange-500 rounded-full"
                                        style={{
                                          left: `${Math.random() * 100}%`,
                                          bottom: `${Math.random() * 100}%`
                                        }}
                                        animate={{ 
                                          y: [0, 10],
                                          opacity: [1, 0],
                                          scale: [1, 0]
                                        }}
                                        transition={{ 
                                          duration: 0.5 + Math.random() * 0.5,
                                          repeat: Infinity,
                                          delay: Math.random() * 0.5
                                        }}
                                      />
                                    ))}
                                  </motion.div>
                                </motion.div>
                              </div>
                            </motion.div>
                            
                            {/* Mission control indicators */}
                            <div className="absolute top-2 left-2 flex space-x-1">
                              <motion.div 
                                className="w-3 h-3 rounded-full bg-green-500"
                                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 5px rgba(34,197,94,0.7)', '0 0 0px rgba(34,197,94,0)'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div 
                                className="w-3 h-3 rounded-full bg-blue-500"
                                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 5px rgba(59,130,246,0.7)', '0 0 0px rgba(59,130,246,0)'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                              />
                            </div>
                            <div className="absolute top-2 right-2 flex space-x-1">
                              <motion.div 
                                className="w-3 h-3 rounded-full bg-teal-500"
                                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 0px rgba(20,184,166,0)', '0 0 5px rgba(20,184,166,0.7)', '0 0 0px rgba(20,184,166,0)'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div 
                                className="w-3 h-3 rounded-full bg-purple-500"
                                animate={{ opacity: [0.5, 1, 0.5], boxShadow: ['0 0 0px rgba(168,85,247,0)', '0 0 5px rgba(168,85,247,0.7)', '0 0 0px rgba(168,85,247,0)'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                              />
                            </div>
                            
                            {/* Countdown display */}
                            <motion.div 
                              className="absolute bottom-3 right-3 p-1 bg-gray-900/70 backdrop-blur-sm rounded text-[6px] font-mono text-white flex items-center justify-center w-8 h-3"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <motion.span
                                animate={{ 
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                {countdownText}
                              </motion.span>
                            </motion.div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute top-3 left-3 h-8 w-8 bg-teal-200 dark:bg-teal-800/50 rounded-lg -z-10 transform -rotate-45"
                          animate={{
                            rotate: [-45, -90, -45],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        ></motion.div>
                        <motion.div
                          className="absolute -bottom-2 -right-2 h-10 w-10 bg-secondary-200 dark:bg-secondary-800/50 rounded-lg -z-10 transform rotate-12"
                          animate={{
                            rotate: [12, 45, 12],
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

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
              href="/#contact"
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
