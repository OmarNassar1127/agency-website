"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-30 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-500">
              TechCraft
            </span>
            <span className="text-2xl font-bold text-gray-800 dark:text-white ml-1">
              Studio
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full btn btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
