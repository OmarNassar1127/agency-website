"use client";

import React, { useEffect, useRef } from "react";
import Script from 'next/script';
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import CTA from "../components/CTA";
import Process from "../components/Process";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/animations.css";

export default function Home() {
  const { t } = useLanguage();
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Intersection Observer to trigger animated sections when they become visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px", // Start loading even earlier for ultra-smooth transitions
      threshold: 0.001, // Extremely low threshold to trigger as soon as any part is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Smoothly handle visibility changes
        if (entry.isIntersecting) {
          // Use requestAnimationFrame to make it smoother
          requestAnimationFrame(() => {
            // Apply a very slight delay to make transitions even more fluid
            setTimeout(() => {
              entry.target.classList.add("is-visible");
              entry.target.classList.add("section-visible");
              entry.target.classList.remove("section-hidden");
            }, 50);
          });
        }
      });
    }, options);

    // Add special handling for home section - make it visible immediately
    const homeSection = document.getElementById("home");
    if (homeSection) {
      // Add a small timeout to make the animation visible
      setTimeout(() => {
        homeSection.classList.add("is-visible");
        homeSection.classList.add("section-visible");
        homeSection.classList.remove("section-hidden");
      }, 100);
    }

    const sectionRefs = [
      aboutSectionRef.current,
      servicesSectionRef.current,
      workSectionRef.current,
      contactSectionRef.current,
      document.getElementById("process"),
    ].filter(Boolean);

    sectionRefs.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main>
      <div id="home" className="section-hidden section-fade-content">
        <Hero />
      </div>
      <div id="services" ref={servicesSectionRef} className="section-hidden">
        <Services />
      </div>

      <div id="work" ref={workSectionRef} className="section-hidden">
        <FeaturedProjects />
      </div>

      {/* <div id="statistics">
        <Statistics />
      </div> */}
      <div id="process" className="section-hidden">
        <Process />
      </div>

      {/* About Section - Hero Section with Animated Elements */}
      <div
        id="about"
        ref={aboutSectionRef}
        className="section-hidden section-fade-content"
      >
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
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white opacity-20 rounded-full animate-float-slow animate-when-visible"></div>
            <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-primary-400 opacity-20 rounded-full animate-float-medium animate-when-visible"></div>
            <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-secondary-400 opacity-20 rounded-full animate-float-fast animate-when-visible"></div>
            <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white opacity-20 rounded-full animate-float-slow animate-when-visible"></div>

            {/* Code-like animated elements */}
            <div className="absolute top-20 left-10 w-[200px] h-6 bg-white/5 rounded animate-slide-right animate-when-visible overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  &lt;div className="future"&gt;
                </span>
              </div>
            </div>
            <div className="absolute top-1/3 right-10 w-[150px] h-6 bg-white/5 rounded animate-slide-left animate-when-visible overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  .transform(ideas)
                </span>
              </div>
            </div>
            <div className="absolute bottom-1/3 left-20 w-[180px] h-6 bg-white/5 rounded animate-slide-right animate-when-visible overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  innovation.unleash()
                </span>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-20 w-[120px] h-6 bg-white/5 rounded animate-slide-left animate-when-visible overflow-hidden">
              <div className="absolute inset-0 flex items-center px-3">
                <span className="text-xs font-mono text-white/30">
                  &lt;/div&gt;
                </span>
              </div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="flex justify-center w-full mb-4">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-600/70 text-white font-medium text-sm tracking-wider shadow-lg backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              {t("about.ourStory")}
            </span>
          </div>
        </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 fade-in-2">
              {t("about.heading.start")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x animate-when-visible">
                {t("about.heading.highlight")}
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 fade-in-3">
              {t("about.subheading")}
            </p>

            {/* Creative intro animation - replacing standard buttons */}
            <div
              className="flex flex-wrap justify-center mt-12 relative card-item"
              style={{ "--item-index": 2 } as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 max-w-3xl mx-auto">
                <div className="typing-animation relative pl-4 border-l-2 border-primary-400 animate-when-visible">
                  <p className="text-md md:text-lg text-left font-mono text-white/90">
                    <span className="text-primary-400">const</span>{" "}
                    <span className="text-secondary-400">dominiumTeam</span> = [
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
                      dominiumTeam.reduce((product, value) =&gt; <br />{" "}
                    </span>
                    <span className="ml-8">
                      {t("about.codeAnimation.line6")}
                    </span>
                    <br />
                    <span className="ml-8">
                      {t("about.codeAnimation.line7")}
                    </span>
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
      </div>

      {/* <Testimonials /> */}
      <div
        id="contact"
        ref={contactSectionRef}
        className="section-hidden section-fade-content"
      >
        <CTA />
      </div>

      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dominium Labs',
            url: 'https://dominiumlabs.com',
            logo: 'https://dominiumlabs.com/images/logo/DominiumLabs.png',
            description: 'We create custom software solutions tailored to your business needs.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Netherlands',
              addressCountry: 'NL'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'contact@dominiumlabs.com',
            },
            // Define main entity to help with one-page structure
            mainEntity: [
              {
                '@type': 'WebPage',
                '@id': 'https://dominiumlabs.com/#about',
                name: 'About Dominium Labs',
                url: 'https://dominiumlabs.com/#about'
              },
              {
                '@type': 'WebPage',
                '@id': 'https://dominiumlabs.com/#services',
                name: 'Our Services',
                url: 'https://dominiumlabs.com/#services'
              },
              {
                '@type': 'WebPage',
                '@id': 'https://dominiumlabs.com/#work',
                name: 'Our Work',
                url: 'https://dominiumlabs.com/#work'
              },
              {
                '@type': 'WebPage',
                '@id': 'https://dominiumlabs.com/#process',
                name: 'Our Process',
                url: 'https://dominiumlabs.com/#process'
              },
              {
                '@type': 'WebPage',
                '@id': 'https://dominiumlabs.com/#contact',
                name: 'Contact Us',
                url: 'https://dominiumlabs.com/#contact'
              }
            ],
            sameAs: [
              // Add your social media profiles here
              // 'https://twitter.com/dominiumlabs',
              // 'https://www.linkedin.com/company/dominiumlabs'
            ]
          })
        }}
      />
    </main>
  );
}
