"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import CTA from '../../components/CTA';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main>
      <CTA />
    </main>
  );
}