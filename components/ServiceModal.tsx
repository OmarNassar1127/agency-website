"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../contexts/ThemeContext";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

// Service type definition
export type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  bgClass: string;
  iconBgClass: string;
  highlights: string[];
  detailedContent?: {
    overview?: string;
    approach?: string;
    benefits?: string;
    deliverables?: string[];
    technologies?: string[];
    timeline?: string;
    pricing?: string;
    faq?: { question: string; answer: string }[];
  };
};

const ServiceModal = ({
  isOpen,
  onClose,
  service,
}: {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}) => {
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());

  // Add this function to handle toggling FAQ items
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Initialize portal once component mounts
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Return null during SSR or if modal is not open
  if (!mounted || !isOpen || !service) return null;

  const tabs = [
    { id: "overview", label: t("services.modal.tabs.overview") },
    { id: "approach", label: t("services.modal.tabs.approach") },
    { id: "benefits", label: t("services.modal.tabs.benefits") },
    { id: "faq", label: t("services.modal.tabs.faq") },
  ];

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto animate-fade-in">
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl max-h-[90vh] my-4 overflow-y-auto rounded-2xl ${
          resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
        } shadow-2xl transition-all duration-300 transform animate-fadeInUp`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:scale-110 cursor-pointer"
          aria-label="Close modal"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Service header */}
        <div
          className={`p-10 rounded-t-2xl bg-gradient-to-br ${service.bgClass}`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div
              className={`rounded-2xl w-20 h-20 flex items-center justify-center ${service.iconBgClass} transition-transform`}
            >
              {service.icon}
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white text-center sm:text-left">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center sm:text-left">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex overflow-x-auto px-6 pt-6 border-b border-gray-200 dark:border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-primary-500 text-primary-600 dark:text-primary-400"
                  : "border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300" 
                     dangerouslySetInnerHTML={{ __html: service.detailedContent?.overview || service.description }}>
                </div>
              </div>

              {/* Deliverables */}
              {service.detailedContent?.deliverables && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {t("services.modal.deliverables")}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.detailedContent.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600 dark:text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {service.detailedContent?.technologies && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {t("services.modal.technologies")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.detailedContent.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Approach Tab */}
          {activeTab === "approach" && (
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300"
                     dangerouslySetInnerHTML={{ __html: service.detailedContent?.approach || t("services.modal.noApproachInfo") }}>
                </div>
              </div>

              {/* Timeline */}
              {service.detailedContent?.timeline && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {t("services.modal.timeline")}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300"
                       dangerouslySetInnerHTML={{ __html: service.detailedContent.timeline }}>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300"
                     dangerouslySetInnerHTML={{ __html: service.detailedContent?.benefits || t("services.modal.noBenefitsInfo") }}>
                </div>
              </div>

              {/* Pricing info */}
              {service.detailedContent?.pricing && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {t("services.modal.pricing")}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300"
                       dangerouslySetInnerHTML={{ __html: service.detailedContent.pricing }}>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="space-y-6">
              {service.detailedContent?.faq && service.detailedContent.faq.length > 0 ? (
                service.detailedContent.faq.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 py-3 flex justify-between items-center text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {item.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                          expandedFaqs.has(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        expandedFaqs.has(index)
                          ? 'max-h-[1000px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div 
                        className="p-4 text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {t("services.modal.noFaqInfo")}
                </p>
              )}
            </div>
          )}

          {/* Call-to-action */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <p className="text-gray-700 dark:text-gray-300">
                {t("services.modal.interested")}
              </p>
              <Link href="/contact" className="btn btn-primary">
                {t("services.modal.contactButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Use createPortal to render modal at the document body level
  return createPortal(modalContent, document.body);
};

export default ServiceModal;
