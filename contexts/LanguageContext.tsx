"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'en';
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoaded: boolean;
};

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Initial load of language preference and translations
  useEffect(() => {
    const initLanguage = async () => {
      // Client-side only code
      if (typeof window !== 'undefined') {
        // Load saved language preference from localStorage if available
        const savedLanguage = localStorage.getItem('language') as Language;
        const detectedLanguage = savedLanguage && (savedLanguage === 'nl' || savedLanguage === 'en') 
          ? savedLanguage 
          : defaultLanguage;
        
        try {
          // Preload translations before rendering UI
          const data = detectedLanguage === 'nl'
            ? (await import('../locales/nl.json')).default
            : (await import('../locales/en.json')).default;
          
          setLanguage(detectedLanguage);
          setTranslations(data);
          setIsLoaded(true);
        } catch (error) {
          console.error('Failed to load translations:', error);
          // Fall back to empty translations but still show UI
          setIsLoaded(true);
        }
      }
    };
    
    initLanguage();
  }, []);

  // Load new translations when language changes (after initial load)
  useEffect(() => {
    // Skip the first render as it's handled by the initialization
    if (!isLoaded) return;
    
    const loadTranslations = async () => {
      setIsLoaded(false);
      try {
        // Use dynamic import for translations
        const data = language === 'nl'
          ? (await import('../locales/nl.json')).default
          : (await import('../locales/en.json')).default;
        
        setTranslations(data);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        setIsLoaded(true);
      }
    };
    
    loadTranslations();
  }, [language, isLoaded]);

  // Update html lang attribute when language changes
  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) return;
    
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language, isLoaded]);

  // Translation helper function
  const t = (key: string): any => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let result = translations;
    
    // Check if key contains "detailedContent" and we're in Dutch
    const isDetailedContentInDutch = language === 'nl' && key.includes('detailedContent');
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // For Dutch detailed content, try to load English version
        if (isDetailedContentInDutch) {
          console.log('Missing Dutch detailed content, attempting to load English version for:', key);
          // For now, let's do a console log
          // In a full implementation, we would fetch from English translations
        }
        return key; // Fallback to key if translation not found
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>
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