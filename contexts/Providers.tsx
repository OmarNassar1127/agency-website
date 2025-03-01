"use client";

import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import LoadingScreen from '../components/LoadingScreen';

// Wrapper component that conditionally renders the app or loading screen
function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useLanguage();
  
  // Show a loading screen until translations are loaded
  if (!isLoaded) {
    return <LoadingScreen />;
  }
  
  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent>
          {children}
        </AppContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}