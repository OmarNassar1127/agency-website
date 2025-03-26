"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'dominium_cookie_consent';

type CookiePreferences = {
  essential: boolean;
  performance: boolean;
  functional: boolean;
  targeting: boolean;
  accepted: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true, // Essential cookies cannot be rejected
  performance: false,
  functional: false,
  targeting: false,
  accepted: false,
};

const CookieConsent = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showManager, setShowManager] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  // Load consent status from localStorage on component mount
  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setPreferences(parsedConsent);
        setIsOpen(!parsedConsent.accepted);
      } catch (error) {
        console.error('Error parsing stored cookie consent:', error);
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      performance: true,
      functional: true,
      targeting: true,
      accepted: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newPreferences));
    setIsOpen(false);
    setShowManager(false);
  };

  const handleAcceptSelected = () => {
    const newPreferences = {
      ...preferences,
      accepted: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newPreferences));
    setIsOpen(false);
    setShowManager(false);
  };

  const handleRejectNonEssential = () => {
    const newPreferences = {
      essential: true,
      performance: false,
      functional: false,
      targeting: false,
      accepted: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newPreferences));
    setIsOpen(false);
    setShowManager(false);
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential' || key === 'accepted') return; // Can't change essential or accepted status
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  
  const handleManageCookies = () => {
    setShowManager(true);
  };

  // Function to open cookie settings from elsewhere in the app
  const openCookieSettings = () => {
    setIsOpen(true);
    setShowManager(true);
  };

  // Add to window object so it can be called from outside
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openCookieSettings = openCookieSettings;
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        // Clean up when component unmounts
        delete window.openCookieSettings;
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
      {showManager ? (
        <div className="container mx-auto p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-bold">
              {language === 'nl' ? 'Cookie-voorkeuren beheren' : 'Manage Cookie Preferences'}
            </h2>
            <button 
              onClick={() => setShowManager(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {language === 'nl' ? 'Essentiële cookies' : 'Essential Cookies'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {language === 'nl' 
                      ? 'Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.' 
                      : 'These cookies are necessary for the website to function and cannot be switched off.'}
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-not-allowed">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-primary-500"></div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {language === 'nl' ? 'Prestatiecookies' : 'Performance Cookies'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {language === 'nl'
                      ? 'Deze cookies helpen ons om te begrijpen hoe bezoekers onze website gebruiken.'
                      : 'These cookies help us understand how visitors use our website.'}
                  </p>
                </div>
                <label className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={preferences.performance}
                    onChange={() => handleTogglePreference('performance')}
                  />
                  <div 
                    className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                      preferences.performance 
                        ? 'left-7 bg-primary-500' 
                        : 'left-1 bg-gray-400 dark:bg-gray-500'
                    }`}
                  ></div>
                </label>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {language === 'nl' ? 'Functionele cookies' : 'Functional Cookies'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {language === 'nl'
                      ? 'Deze cookies maken gepersonaliseerde functies mogelijk, zoals het opslaan van voorkeuren.'
                      : 'These cookies enable personalized features, such as remembering your preferences.'}
                  </p>
                </div>
                <label className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={preferences.functional}
                    onChange={() => handleTogglePreference('functional')}
                  />
                  <div 
                    className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                      preferences.functional 
                        ? 'left-7 bg-primary-500' 
                        : 'left-1 bg-gray-400 dark:bg-gray-500'
                    }`}
                  ></div>
                </label>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {language === 'nl' ? 'Targeting cookies' : 'Targeting Cookies'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {language === 'nl'
                      ? 'Deze cookies worden gebruikt om advertenties en content relevanter te maken voor u.'
                      : 'These cookies are used to make advertising and content more relevant to you.'}
                  </p>
                </div>
                <label className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={preferences.targeting}
                    onChange={() => handleTogglePreference('targeting')}
                  />
                  <div 
                    className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                      preferences.targeting 
                        ? 'left-7 bg-primary-500' 
                        : 'left-1 bg-gray-400 dark:bg-gray-500'
                    }`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {language === 'nl' ? 'Alleen essentiële cookies' : 'Essential Cookies Only'}
            </button>
            <button
              onClick={handleAcceptSelected}
              className="px-4 py-2 text-white bg-gray-700 dark:bg-gray-600 rounded-md hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
            >
              {language === 'nl' ? 'Geselecteerde cookies accepteren' : 'Accept Selected Cookies'}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
            >
              {language === 'nl' ? 'Alle cookies accepteren' : 'Accept All Cookies'}
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-800 dark:text-gray-200">
                {language === 'nl'
                  ? 'We gebruiken cookies om uw ervaring op onze website te verbeteren, gepersonaliseerde inhoud te bieden en ons websiteverkeer te analyseren.'
                  : 'We use cookies to enhance your experience on our website, provide personalized content, and analyze our website traffic.'}
                {' '}
                <Link href="/cookies" className="text-primary-600 hover:underline">
                  {language === 'nl' ? 'Meer informatie' : 'Learn more'}
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleManageCookies}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
              >
                {language === 'nl' ? 'Cookies beheren' : 'Manage Cookies'}
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
              >
                {language === 'nl' ? 'Weigeren' : 'Reject'}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                {language === 'nl' ? 'Accepteren' : 'Accept'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
