"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FeaturedProjects from '../../components/FeaturedProjects';

export default function WorkPage() {
  const { t } = useLanguage();

  return (
    <main>
      <FeaturedProjects />
    </main>
  );
}