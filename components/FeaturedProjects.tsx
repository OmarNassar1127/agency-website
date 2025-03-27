"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectModal, { Project } from "./ProjectModal";

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Example projects data derived from translations
  const projects: Project[] = [
    {
      id: "ai",
      title: t("featuredProjects.projects.ai.title"),
      description: t("featuredProjects.projects.ai.description"),
      technologies: [
        t("featuredProjects.technologies.python"),
        t("featuredProjects.technologies.tensorflow"),
        t("featuredProjects.technologies.nextjs"),
        t("featuredProjects.technologies.mysql"),
        t("featuredProjects.technologies.laravel"),
        t("featuredProjects.technologies.openai"),
        t("featuredProjects.technologies.typescript"),
        t("featuredProjects.technologies.react"),
      ],
      longDescription: t("featuredProjects.projects.ai.description_long"),
      images: [
        "/images/projects/ai/pop-up/rag.png",
        "/images/projects/ai/pop-up/bookings.png",
        "/images/projects/ai/pop-up/fines.png",
      ],
    },
    {
      id: "quotum",
      title: t("featuredProjects.projects.quotum.title"),
      description: t("featuredProjects.projects.quotum.description"),
      technologies: [
        t("featuredProjects.technologies.react"),
        t("featuredProjects.technologies.nodejs"),
        t("featuredProjects.technologies.mongodb"),
        t("featuredProjects.technologies.laravel"),
        t("featuredProjects.technologies.stripe"),
        t("featuredProjects.technologies.tradingview"),
        t("featuredProjects.technologies.mailtrap"),
      ],
      longDescription: t("featuredProjects.projects.quotum.description_long"),
      images: [
        "/images/projects/quotum/pop-up/quotum-sc.png",
        "/images/projects/quotum/pop-up/quotum-sc-2.png",
        "/images/projects/quotum/pop-up/quotum-sc-3.png",
        "/images/projects/quotum/pop-up/quotum-sc-4.png",
      ],
    },
    {
      id: "kyc",
      title: t("featuredProjects.projects.kyc.title"),
      description: t("featuredProjects.projects.kyc.description"),
      technologies: [
        t("featuredProjects.technologies.laravel"),
        t("featuredProjects.technologies.mysql"),
        t("featuredProjects.technologies.onfido"),
        t("featuredProjects.technologies.reactNative"),
      ],
      longDescription: t("featuredProjects.projects.kyc.description_long"),
      images: [
        "/images/projects/kyc/pop-up/onfido.png",
      ],
    },
    {
      id: "automations",
      title: t("featuredProjects.projects.automations.title"),
      description: t("featuredProjects.projects.automations.description"),
      technologies: [
        t("featuredProjects.technologies.laravel"),
        t("featuredProjects.technologies.python"),
        t("featuredProjects.technologies.bol"),
        t("featuredProjects.technologies.aws"),
        t("featuredProjects.technologies.marktplaats"),
        t("featuredProjects.technologies.mongodb"),
        t("featuredProjects.technologies.mailtrap"),
      ],
      longDescription: t(
        "featuredProjects.projects.automations.description_long"
      ),
      images: [
        "/images/projects/shop/pop-up/amazon.png",
        "/images/projects/shop/pop-up/bol.png",
        "/images/projects/shop/pop-up/marktplaats.png",
      ],
    },
    {
      id: "gdpr",
      title: t("featuredProjects.projects.gdpr.title"),
      description: t("featuredProjects.projects.gdpr.description"),
      technologies: [
        t("featuredProjects.technologies.c#"),
        t("featuredProjects.technologies.dotnet"),
        t("featuredProjects.technologies.ssms"),
        t("featuredProjects.technologies.consoleapp"),
        t("featuredProjects.technologies.taskscheduler"),
      ],
      longDescription: t("featuredProjects.projects.gdpr.description_long"),
      images: [
        "/images/projects/gdpr/pop-up/avg.png",
        "/images/projects/gdpr/pop-up/task_scheduler.png",
        "/images/projects/gdpr/pop-up/avg1.png",
      ],
    },
    {
      id: "myteam",
      title: t("featuredProjects.projects.myteam.title"),
      description: t("featuredProjects.projects.myteam.description"),
      technologies: [
        t("featuredProjects.technologies.laravel"),
        t("featuredProjects.technologies.mysql"),
        t("featuredProjects.technologies.react"),
        t("featuredProjects.technologies.tailwind"),
        t("featuredProjects.technologies.git"),
        t("featuredProjects.technologies.php"),
        t("featuredProjects.technologies.azuredevops"),
        t("featuredProjects.technologies.javascript"),
      ],
      longDescription: t("featuredProjects.projects.myteam.description_long"),
      images: [
        "/images/projects/myteam/pop-up/myteam1.png",
        "/images/projects/myteam/pop-up/myteam2.png",
        "/images/projects/myteam/pop-up/myteam3.png",
      ],
    },
    {
      id: "excel_automation",
      title: t("featuredProjects.projects.excel_automation.title"),
      description: t("featuredProjects.projects.excel_automation.description"),
      technologies: [
        t("featuredProjects.technologies.excel"),
        t("featuredProjects.technologies.c#"),
        t("featuredProjects.technologies.dotnet"),
        t("featuredProjects.technologies.aspdotnet"),
        t("featuredProjects.technologies.ssms"),
      ],
      longDescription: t(
        "featuredProjects.projects.excel_automation.description_long"
      ),
      images: [
        "/images/projects/excel/pop-up/fo2xcel.png",
        "/images/projects/excel/pop-up/ExcelAutomation.png",
      ],
    },
    {
      id: "debt-assistance",
      title: t("featuredProjects.projects.debt_assistance.title"),
      description: t("featuredProjects.projects.debt_assistance.description"),
      technologies: [
        t("featuredProjects.technologies.c#"),
        t("featuredProjects.technologies.dotnet"),
        t("featuredProjects.technologies.aspdotnet"),
        t("featuredProjects.technologies.ssms"),
        t("featuredProjects.technologies.winforms"),
        t("featuredProjects.technologies.stripe"),
        t("featuredProjects.technologies.tsql"),
      ],
      longDescription: t(
        "featuredProjects.projects.debt_assistance.description_long"
      ),
      images: [
        "/images/projects/debt/pop-up/Bewindvoerders.png",
        "/images/projects/debt/pop-up/Bewindvoerders1.png",
        "/images/projects/debt/pop-up/Bewindvoerders2.png",
      ],
    }
  ];

  // Open project modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Intersection observer for animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px", // Start loading before section is fully in view
      threshold: 0.01, // Trigger earlier for smoother transitions
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-hidden");
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div ref={sectionRef} className="container mx-auto px-4 section-hidden">
          <div className="flex justify-center w-full mb-4">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-600/70 text-white font-medium text-sm tracking-wider shadow-lg backdrop-blur-sm">
              <span className="text-sm font-medium text-white">
                {t("featuredProjects.heading")}
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("featuredProjects.headingtitle")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("featuredProjects.subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 card-item"
                style={{ "--item-index": index } as React.CSSProperties}
              >
                <div className="h-56 bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {project.id === "quotum" && (
                    <img
                      src="/images/projects/quotum/quotumcloud-cover.jpg"
                      alt="Quotum Platform"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "automations" && (
                    <img
                      src="/images/projects/shop/shopautomations-cover.jpg"
                      alt="Automations Platform"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "kyc" && (
                    <img
                      src="/images/projects/kyc/kycintegration-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "ai" && (
                    <img
                      src="/images/projects/ai/aisolutions-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "gdpr" && (
                    <img
                      src="/images/projects/gdpr/gdprcompliance-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "myteam" && (
                    <img
                      src="/images/projects/myteam/myteam-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "excel_automation" && (
                    <img
                      src="/images/projects/excel/excel-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === "debt-assistance" && (
                    <img
                      src="/images/projects/debt/debtassistance-cover.jpg"
                      alt="KYC Solution"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    {t("featuredProjects.viewCaseStudy")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project details modal - now using the separate component with portal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default FeaturedProjects;
