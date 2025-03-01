"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SettingsDropdown from "./SettingsDropdown";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Handle scroll event for changing navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items with translations
  const navItems = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.services'), href: '/services' },
    { name: t('navbar.work'), href: '/work' },
    { name: t('navbar.about'), href: '/about' },
    { name: t('navbar.contact'), href: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900/90 backdrop-blur-lg shadow-md py-3'
          : 'py-5'
      }`}
      data-scrolled={scrolled}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold mr-1">
              <span className="gradient-text">{t('navbar.logo.first')}</span>
            </span>
            <span className="text-2xl font-display font-semibold transition-colors duration-300 text-gray-800 dark:text-gray-800">
              {t('navbar.logo.second')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled 
                  ? 'text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50' 
                  : 'text-gray-800 dark:text-gray-300 hover:text-gray-800/80 dark:hover:text-gray-800 hover:bg-white/10 dark:hover:bg-gray-800/50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Settings and CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <SettingsDropdown />

          <Link 
            href="/contact" 
            className="btn-sm btn-primary"
          >
            <span className="mr-2">{t('navbar.getQuote')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="lg:hidden flex items-center space-x-1">
          {/* Settings button - Mobile */}
          <SettingsDropdown />
          
          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 rounded-lg transition-colors text-gray-800 hover:bg-white/10 dark:hover:bg-gray-800 nav-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide down animation */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[73px] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto p-4 space-y-4">
          {/* Navigation Links */}
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="py-3 px-4 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary-500">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </nav>
          
          <div className="py-3 px-1">
            <div className="divider"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col space-y-3">
            <Link 
              href="/contact"
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.getQuote')}
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="py-3 px-4 rounded-xl bg-gray-50 dark:bg-gray-800 mt-6">
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-primary-500">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <span>{t('navbar.contactInfo.phone')}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-primary-500">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                <span>{t('navbar.contactInfo.email')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
