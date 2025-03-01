"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

// Metadata moved to app/layout.tsx since this is a client component
// title: "Contact Us - Nexus Digital",
// description: "Get in touch with Nexus Digital. Let's discuss your project and help bring your vision to life."

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Navbar />

      <main className="page-background-light page-soft-gradient texture-overlay">
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

          {/* Animated Grid - Subtle pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgNTlWMWg1OHY1OEgxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTMwIDMwSDB2MzBoMzBWMzB6TTMwIDBIMHYzMGgzMFYwek02MCAwSDMwdjMwaDMwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            {/* Pre-heading badge */}
            <div className="inline-flex items-center mb-6 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse-slow"></span>
              <span className="text-sm font-medium text-white/80">
                {t('contact.subheading')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {t('contact.heading')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {t('contact.description') || "Ready to start your digital transformation? Contact our team to discuss how we can help bring your vision to life."}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="#contact-form" className="btn btn-lg btn-primary">
                {t('contact.form.submit')}
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 section-elegant section-accent-top my-8 mx-4 md:mx-8 lg:mx-12 xl:mx-16 relative">
          {/* Removed background gradient as we're using glass effect now */}

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-start">
              {/* Contact Information */}
              <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                <div className="inline-block mb-6 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60">
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    {t('contact.info.heading')}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                  {t('contact.form.heading').split(' ')[0]} <span className="gradient-text">{t('contact.form.heading').split(' ').slice(1).join(' ')}</span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
                  {t('contact.form.description') || "Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape and achieve your goals."}
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 mr-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('contact.info.callUsDirectly') || "Call Us Directly"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-1">
                        {t('contact.info.phone') || "(555) 123-4567"}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t('contact.info.hours') || "Monday-Friday, 9am-6pm PST"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 mr-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('contact.info.emailUs') || "Email Us"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-1">
                        {t('contact.info.email') || "info@nexusdigital.com"}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t('contact.info.response') || "We respond within 24 hours"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-4 mr-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-600 dark:text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>

                      <div className="text-gray-600 dark:text-gray-300 text-lg mb-1">
                        {t('contact.info.address').split('<br/>')[0] || "123 Innovation Drive"}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 mb-1">
                        {t('contact.info.address').split('<br/>')[1] || "San Francisco, CA 94105"}
                      </div>
                      <Link
                        href="#map"
                        className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 font-medium"
                      >
                        <span>{t('contact.info.viewMap') || "View on map"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 h-5 w-5"
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
                </div>

                {/* Social Media with improved styling */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t('contact.info.connectWithUs') || "Connect With Us"}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 group"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 group"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 group"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 group"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form - improved styling and conversions */}
              <div className="order-1 lg:order-2 relative">
                {/* Card with highlights and glow effects */}
                <div className="absolute -inset-1.5 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-sm"></div>
                <div className="card card-glass bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl border border-white/10 dark:border-gray-700/80 shadow-highlight p-8 relative">
                  <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {t('contact.form.startProject') || "Start Your Project"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t('contact.form.formDescription') || "Fill out the form below and we'll get back to you within 24 hours."}
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t('contact.form.name')} <span className="text-primary-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-input"
                          placeholder={t('contact.form.namePlaceholder') || "John Doe"}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t('contact.form.email')}{" "}
                          <span className="text-primary-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          placeholder={t('contact.form.emailPlaceholder') || "you@company.com"}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="form-input"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="project-type"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Project Type <span className="text-primary-600">*</span>
                      </label>
                      <select id="project-type" className="form-input" required>
                        <option value="" disabled selected>
                          Select the type of project
                        </option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="custom-software">Custom Software</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Estimated Budget
                      </label>
                      <select id="budget" className="form-input">
                        <option value="" disabled selected>
                          Select your budget range
                        </option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Project Details{" "}
                        <span className="text-primary-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="form-input"
                        placeholder="Tell us about your project goals, timeline, and specific requirements..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          I agree to the{" "}
                          <a
                            href="/privacy"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="/terms"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                          >
                            Terms of Service
                          </a>
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full btn-lg btn-primary"
                      >
                        {t('contact.form.submitButton') || "Submit Request"}
                      </button>
                      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                        <span className="inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                          {t('contact.form.secure') || "Your information is secure and encrypted"}
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
