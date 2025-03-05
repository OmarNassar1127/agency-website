"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Services from '../../components/Services';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Services />
    </main>
  );
}