import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectItem = ({ project, isLast }) => (
  <motion.div
    className={`py-10 ${!isLast ? 'border-b border-white/10' : ''} rounded-lg`}
    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col md:flex-row gap-12 items-start px-4">
      <div className="flex flex-col w-full md:w-1/2">
        <h3 className="[font-family:'Inter',Helvetica] text-sm uppercase tracking-widest text-accent mb-2">
          {project.category}
        </h3>
        <h2 className="font-medium text-white text-4xl tracking-[-0.70px] leading-tight font-['Literata',Helvetica]">
          {project.title}
        </h2>
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-start">
        <p className="font-normal text-white/70 text-base tracking-[-0.27px] leading-[24px] font-sans">
          {project.description}
        </p>
        <div className="flex items-center justify-between w-full mt-8">
          <p className="font-medium text-white/40 text-sm tracking-[-0.27px] leading-[21px] font-sans">
            {project.date}
          </p>
          <Link to={project.link}>
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full font-medium text-white text-sm tracking-widest uppercase bg-transparent border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Case Study
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export const CallToActionSection = (): JSX.Element => {
  const projects = [
    {
      category: "Featured Project",
      title: "AI-Powered E-commerce Support Automation",
      description:
        "Revolutionizing customer support with an intelligent system that automates responses, categorizes queries, and logs customer interactions for unparalleled efficiency and insight.",
      date: "July, 2025",
      link: "/case-study",
    },
    {
      category: "Recent Project",
      title: "Automated Financial Reconciliation Engine",
      description:
        "A custom-built AI that cross-references invoices with bank statements, identifies discrepancies, and generates daily reconciliation reports, saving hundreds of man-hours.",
      date: "May, 2025",
      link: "#",
    },
  ];

  return (
    <section className="w-full section-container">
        <div className="text-center mb-10">
            <h2 className="[font-family:'Literata',Helvetica] font-normal text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
                Automations I Have Created
            </h2>
        </div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} isLast={index === projects.length - 1} />
      ))}
    </section>
  );
};