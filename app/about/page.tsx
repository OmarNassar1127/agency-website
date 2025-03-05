"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import About from "@/components/About";

// export const metadata = {
//   title: "About Us - Nexus Digital Agency",
//   description:
//     "Learn about Nexus Digital Agency, our mission, values, and the talented team behind our innovative digital solutions.",
// };

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <main className="page-background-light texture-overlay">
       <About />
      </main>

      {/* Add these style definitions for the animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(400%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

         .is-visible {
          opacity: 1 !important;
        }
        
        /* Style additions to ensure component fills the viewport */
        .pt-24 {
          padding-top: 6rem;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slide-right 15s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 15s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .perspective {
          perspective: 1000px;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .value-card:hover .preserve-3d {
          transform: rotateY(180deg);
        }

        .team-orbit {
          animation: orbit 30s linear infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .team-member {
          animation: counter-orbit 30s linear infinite;
        }

        @keyframes counter-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .typing-animation {
          overflow: hidden;
          border-right: 0.15em solid #38bdf8;
          white-space: nowrap;
          letter-spacing: 0.05em;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #38bdf8;
          }
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        /* Mobile timeline fixes */
        @media (max-width: 767px) {
          .timeline-node {
            position: relative;
            padding-left: 40px; /* Increased padding */
            margin-bottom: 2rem; /* Better spacing */
          }
          
          .timeline-node::before {
            content: '';
            position: absolute;
            left: 16px; /* Moved from 8px to 16px */
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #3b82f6);
            opacity: 0.8; /* Added subtle opacity */
            z-index: 1;
          }
          
          .timeline-node:last-child::before {
            height: 50%;
          }
          
          .timeline-node .flex-shrink-0 {
            margin-left: -28px !important; /* Adjusted to account for new line position */
            z-index: 2;
          }
        }
      `}</style>
    </>
  );
}
