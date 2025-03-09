"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Process from "../components/Process";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/animations.css";

export default function Home() {
  const { t } = useLanguage();
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Intersection Observer to trigger animated section when it becomes visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
 }, []);

  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="services" ref={servicesSectionRef}>
        <Services />
      </div>

      <div id="work" ref={workSectionRef}>
        <FeaturedProjects />
      </div>

      {/* <div id="statistics">
        <Statistics />
      </div> */}
      <div id="  ">
        <Process />
      </div>

      {/* About Section - Hero Section with Animated Elements */}
      <div id="about" ref={aboutSectionRef} className="opacity-0 transition-opacity duration-1000 ease-in-out">
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
      </div>
      
      {/* <Testimonials /> */}
      <div id="contact" ref={contactSectionRef}>
        <CTA />
      </div>
    </main>
  );
}