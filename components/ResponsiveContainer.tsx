"use client";

import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A responsive container component that maintains proper spacing and padding
 * across all screen sizes. Use this component to wrap sections that need
 * consistent responsive behavior.
 */
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;