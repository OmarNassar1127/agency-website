"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'en';
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const defaultLanguage: Language = 'nl';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  
  useEffect(() => {
    // Client-side only code
    if (typeof window !== 'undefined') {
      // Load saved language preference from localStorage if available
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'nl' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Load translation file when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Use dynamic import for translations to work with both server and client
        let data;
        if (language === 'nl') {
          data = (await import('../locales/nl.json')).default;
        } else {
          data = (await import('../locales/en.json')).default;
        }
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };
    
    loadTranslations();
  }, [language]);

  // Update html lang attribute when language changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  // Translation helper function
  const t = (key: string): string => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let result = translations;
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}