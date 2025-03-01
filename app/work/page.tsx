"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

// Metadata is handled in layout.tsx for client components

const WorkPage = () => {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />

      <main className="page-background-light">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-950 via-primary-900 to-secondary-900 py-24 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-primary-500 opacity-10 blur-[8rem] rounded-full"></div>
              <div className="absolute top-1/2 -left-60 w-[36rem] h-[36rem] bg-secondary-400 opacity-10 blur-[8rem] rounded-full"></div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="inline-flex items-center mb-6 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium text-white/80">
                {t("work.portfolio")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {t("work.heading")}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t("work.subheading")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href="#featured-work" className="btn btn-lg btn-primary">
                {t("work.viewProjects")}
              </a>
              <Link
                href="/contact"
                className="btn btn-lg border-2 border-white/20 text-white hover:bg-white/10"
              >
                {t("work.startYourProject")}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Work Filter */}
        <section
          id="featured-work"
          className="py-20 bg-white dark:bg-gray-950"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  {t("work.featuredProjects")}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t("work.heading")}{" "}
                <span className="gradient-text">
                  {t("work.successStories")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("work.browseText")}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-5 py-2 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
                {t("work.filters.all")}
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {t("work.filters.webDev")}
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {t("work.filters.mobileApps")}
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {t("work.filters.ecommerce")}
              </button>
              <button className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {t("work.filters.aiSolutions")}
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                        {t("work.projectPlaceholder")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-600/80 dark:bg-primary-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-primary-600 hover:bg-gray-100"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("work.projects.crm.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t("work.projects.crm.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded dark:bg-primary-900/30 dark:text-primary-300">
                    React
                  </span>
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded dark:bg-primary-900/30 dark:text-primary-300">
                    Node.js
                  </span>
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded dark:bg-primary-900/30 dark:text-primary-300">
                    MongoDB
                  </span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                        {t("work.projectPlaceholder")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-secondary-600/80 dark:bg-secondary-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-secondary-600 hover:bg-gray-100"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("work.projects.healthApp.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t("work.projects.healthApp.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-1 rounded dark:bg-secondary-900/30 dark:text-secondary-300">
                    React Native
                  </span>
                  <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-1 rounded dark:bg-secondary-900/30 dark:text-secondary-300">
                    Firebase
                  </span>
                  <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-1 rounded dark:bg-secondary-900/30 dark:text-secondary-300">
                    GraphQL
                  </span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                        {t("work.projectPlaceholder")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-purple-600/80 dark:bg-purple-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-purple-600 hover:bg-gray-100"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("work.projects.aiAnalytics.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t("work.projects.aiAnalytics.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900/30 dark:text-purple-300">
                    Python
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900/30 dark:text-purple-300">
                    TensorFlow
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900/30 dark:text-purple-300">
                    AWS
                  </span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t("work.projectPlaceholder")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-teal-600/80 dark:bg-teal-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-teal-600 hover:bg-gray-100"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("work.projects.ecommerce.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t("work.projects.ecommerce.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded dark:bg-teal-900/30 dark:text-teal-300">
                    Next.js
                  </span>
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded dark:bg-teal-900/30 dark:text-teal-300">
                    Shopify
                  </span>
                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded dark:bg-teal-900/30 dark:text-teal-300">
                    Three.js
                  </span>
                </div>
              </div>

              {/* Project 5 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t("work.projectPlaceholder")}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-amber-600/80 dark:bg-amber-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-amber-600 hover:bg-gray-100"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("work.projects.banking.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t("work.projects.banking.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded dark:bg-amber-900/30 dark:text-amber-300">
                    Angular
                  </span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded dark:bg-amber-900/30 dark:text-amber-300">
                    Java Spring
                  </span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded dark:bg-amber-900/30 dark:text-amber-300">
                    PostgreSQL
                  </span>
                </div>
              </div>

              {/* Project 6 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-rose-600/80 dark:bg-rose-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-rose-600 hover:bg-gray-100"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  ConnectNow Messaging Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  A real-time messaging platform with end-to-end encryption,
                  voice/video calls, and seamless file sharing capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded dark:bg-rose-900/30 dark:text-rose-300">
                    Vue.js
                  </span>
                  <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded dark:bg-rose-900/30 dark:text-rose-300">
                    WebRTC
                  </span>
                  <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded dark:bg-rose-900/30 dark:text-rose-300">
                    Firebase
                  </span>
                </div>
              </div>

              {/* Project 7 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/80 dark:bg-blue-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-blue-600 hover:bg-gray-100"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  TicketMaster Event Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  A comprehensive event management platform with ticketing, seat
                  selection, and real-time analytics for event organizers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                    React
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                    Django
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                    Redis
                  </span>
                </div>
              </div>

              {/* Project 8 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-green-600/80 dark:bg-green-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-green-600 hover:bg-gray-100"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  SmartHome IoT Control Center
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  An integrated IoT platform for controlling smart home devices
                  with voice commands, automation rules, and energy
                  optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900/30 dark:text-green-300">
                    Flutter
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900/30 dark:text-green-300">
                    AWS IoT
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900/30 dark:text-green-300">
                    MQTT
                  </span>
                </div>
              </div>

              {/* Project 9 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-indigo-600/80 dark:bg-indigo-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-indigo-600 hover:bg-gray-100"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  EduLearn Virtual Classroom
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  An interactive virtual classroom platform with live sessions,
                  collaborative tools, and comprehensive learning management
                  features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded dark:bg-indigo-900/30 dark:text-indigo-300">
                    Next.js
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded dark:bg-indigo-900/30 dark:text-indigo-300">
                    Socket.io
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded dark:bg-indigo-900/30 dark:text-indigo-300">
                    MongoDB
                  </span>
                </div>
              </div>

              {/* Project 10 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-gray-300 dark:bg-gray-700 aspect-[4/3] mb-4">
                  {/* Image placeholder - you'll replace this with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Project Image Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-fuchsia-600/80 dark:bg-fuchsia-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="btn bg-white text-fuchsia-600 hover:bg-gray-100"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  MarketInsight Analytics Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  A data visualization platform for financial markets with
                  real-time updates, predictive models, and customizable
                  dashboards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                    D3.js
                  </span>
                  <span className="text-xs bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                    Express.js
                  </span>
                  <span className="text-xs bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-950/60">
                <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t("work.testimonials.label")}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                {t("work.testimonials.heading").split(" ")[0]}{" "}
                <span className="gradient-text">
                  {t("work.testimonials.heading").split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("work.testimonials.subheading")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-100 dark:text-primary-900/30"
                  >
                    <path
                      d="M20.7876 37.9286C25.1931 37.9286 28.7705 41.5357 28.7705 46.0119C28.7705 50.4881 25.1931 54.0952 20.7876 54.0952C16.3821 54.0952 12.8047 50.4881 12.8047 46.0119C12.8047 41.5357 16.3821 37.9286 20.7876 37.9286ZM20.7876 28.5714C17.7781 28.5714 14.8905 29.3312 12.395 30.7613C9.89953 32.1914 7.89991 34.2391 6.6073 36.7126C5.3147 39.186 4.77713 41.9784 5.04012 44.7502C5.3031 47.522 6.35825 50.1545 8.0777 52.3335C9.79716 54.5125 12.11 56.1499 14.7504 57.0595C17.3907 57.9691 20.2506 58.116 22.981 57.4835C25.7114 56.8509 28.1939 55.4673 30.1267 53.5007C32.0595 51.5341 33.36 49.0109 33.9162 46.2619C34.4725 43.5129 34.2654 40.6564 33.3217 38.0297C32.378 35.403 30.7178 33.1194 28.5233 31.4319C26.3288 29.7444 23.6885 28.7209 20.9194 28.5803C20.8753 28.5738 20.8316 28.5714 20.7876 28.5714Z"
                      fill="currentColor"
                    />
                    <path
                      d="M55.7876 37.9286C60.1931 37.9286 63.7705 41.5357 63.7705 46.0119C63.7705 50.4881 60.1931 54.0952 55.7876 54.0952C51.3821 54.0952 47.8047 50.4881 47.8047 46.0119C47.8047 41.5357 51.3821 37.9286 55.7876 37.9286ZM55.7876 28.5714C52.7781 28.5714 49.8905 29.3312 47.395 30.7613C44.8995 32.1914 42.8999 34.2391 41.6073 36.7126C40.3147 39.186 39.7771 41.9784 40.0401 44.7502C40.3031 47.522 41.3583 50.1545 43.0777 52.3335C44.7972 54.5125 47.11 56.1499 49.7504 57.0595C52.3907 57.9691 55.2506 58.116 57.981 57.4835C60.7114 56.8509 63.1939 55.4673 65.1267 53.5007C67.0595 51.5341 68.36 49.0109 68.9162 46.2619C69.4725 43.5129 69.2654 40.6564 68.3217 38.0297C67.378 35.403 65.7178 33.1194 63.5233 31.4319C61.3288 29.7444 58.6885 28.7209 55.9194 28.5803C55.8753 28.5738 55.8316 28.5714 55.7876 28.5714Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {t("testimonials.items.0.content")}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex-shrink-0">
                    {/* Client image placeholder */}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {t("testimonials.items.0.author")}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("testimonials.items.0.position")},{" "}
                      {t("testimonials.items.0.company")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-secondary-100 dark:text-secondary-900/30"
                  >
                    <path
                      d="M20.7876 37.9286C25.1931 37.9286 28.7705 41.5357 28.7705 46.0119C28.7705 50.4881 25.1931 54.0952 20.7876 54.0952C16.3821 54.0952 12.8047 50.4881 12.8047 46.0119C12.8047 41.5357 16.3821 37.9286 20.7876 37.9286ZM20.7876 28.5714C17.7781 28.5714 14.8905 29.3312 12.395 30.7613C9.89953 32.1914 7.89991 34.2391 6.6073 36.7126C5.3147 39.186 4.77713 41.9784 5.04012 44.7502C5.3031 47.522 6.35825 50.1545 8.0777 52.3335C9.79716 54.5125 12.11 56.1499 14.7504 57.0595C17.3907 57.9691 20.2506 58.116 22.981 57.4835C25.7114 56.8509 28.1939 55.4673 30.1267 53.5007C32.0595 51.5341 33.36 49.0109 33.9162 46.2619C34.4725 43.5129 34.2654 40.6564 33.3217 38.0297C32.378 35.403 30.7178 33.1194 28.5233 31.4319C26.3288 29.7444 23.6885 28.7209 20.9194 28.5803C20.8753 28.5738 20.8316 28.5714 20.7876 28.5714Z"
                      fill="currentColor"
                    />
                    <path
                      d="M55.7876 37.9286C60.1931 37.9286 63.7705 41.5357 63.7705 46.0119C63.7705 50.4881 60.1931 54.0952 55.7876 54.0952C51.3821 54.0952 47.8047 50.4881 47.8047 46.0119C47.8047 41.5357 51.3821 37.9286 55.7876 37.9286ZM55.7876 28.5714C52.7781 28.5714 49.8905 29.3312 47.395 30.7613C44.8995 32.1914 42.8999 34.2391 41.6073 36.7126C40.3147 39.186 39.7771 41.9784 40.0401 44.7502C40.3031 47.522 41.3583 50.1545 43.0777 52.3335C44.7972 54.5125 47.11 56.1499 49.7504 57.0595C52.3907 57.9691 55.2506 58.116 57.981 57.4835C60.7114 56.8509 63.1939 55.4673 65.1267 53.5007C67.0595 51.5341 68.36 49.0109 68.9162 46.2619C69.4725 43.5129 69.2654 40.6564 68.3217 38.0297C67.378 35.403 65.7178 33.1194 63.5233 31.4319C61.3288 29.7444 58.6885 28.7209 55.9194 28.5803C55.8753 28.5738 55.8316 28.5714 55.7876 28.5714Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {t("testimonials.items.1.content")}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex-shrink-0">
                    {/* Client image placeholder */}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {t("testimonials.items.1.author")}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("testimonials.items.1.position")},{" "}
                      {t("testimonials.items.1.company")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-100 dark:text-purple-900/30"
                  >
                    <path
                      d="M20.7876 37.9286C25.1931 37.9286 28.7705 41.5357 28.7705 46.0119C28.7705 50.4881 25.1931 54.0952 20.7876 54.0952C16.3821 54.0952 12.8047 50.4881 12.8047 46.0119C12.8047 41.5357 16.3821 37.9286 20.7876 37.9286ZM20.7876 28.5714C17.7781 28.5714 14.8905 29.3312 12.395 30.7613C9.89953 32.1914 7.89991 34.2391 6.6073 36.7126C5.3147 39.186 4.77713 41.9784 5.04012 44.7502C5.3031 47.522 6.35825 50.1545 8.0777 52.3335C9.79716 54.5125 12.11 56.1499 14.7504 57.0595C17.3907 57.9691 20.2506 58.116 22.981 57.4835C25.7114 56.8509 28.1939 55.4673 30.1267 53.5007C32.0595 51.5341 33.36 49.0109 33.9162 46.2619C34.4725 43.5129 34.2654 40.6564 33.3217 38.0297C32.378 35.403 30.7178 33.1194 28.5233 31.4319C26.3288 29.7444 23.6885 28.7209 20.9194 28.5803C20.8753 28.5738 20.8316 28.5714 20.7876 28.5714Z"
                      fill="currentColor"
                    />
                    <path
                      d="M55.7876 37.9286C60.1931 37.9286 63.7705 41.5357 63.7705 46.0119C63.7705 50.4881 60.1931 54.0952 55.7876 54.0952C51.3821 54.0952 47.8047 50.4881 47.8047 46.0119C47.8047 41.5357 51.3821 37.9286 55.7876 37.9286ZM55.7876 28.5714C52.7781 28.5714 49.8905 29.3312 47.395 30.7613C44.8995 32.1914 42.8999 34.2391 41.6073 36.7126C40.3147 39.186 39.7771 41.9784 40.0401 44.7502C40.3031 47.522 41.3583 50.1545 43.0777 52.3335C44.7972 54.5125 47.11 56.1499 49.7504 57.0595C52.3907 57.9691 55.2506 58.116 57.981 57.4835C60.7114 56.8509 63.1939 55.4673 65.1267 53.5007C67.0595 51.5341 68.36 49.0109 68.9162 46.2619C69.4725 43.5129 69.2654 40.6564 68.3217 38.0297C67.378 35.403 65.7178 33.1194 63.5233 31.4319C61.3288 29.7444 58.6885 28.7209 55.9194 28.5803C55.8753 28.5738 55.8316 28.5714 55.7876 28.5714Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {t("testimonials.items.2.content")}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex-shrink-0">
                    {/* Client image placeholder */}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {t("testimonials.items.2.author")}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("testimonials.items.2.position")},{" "}
                      {t("testimonials.items.2.company")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("work.cta.heading")}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t("work.cta.subheading")}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-700 hover:bg-gray-100 font-medium rounded-lg px-8 py-4 text-lg transition-colors"
            >
              {t("work.cta.button")}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WorkPage;
