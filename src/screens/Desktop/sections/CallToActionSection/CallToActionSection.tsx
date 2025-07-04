import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

const ProjectItem = ({ project, isLast }) => (
  <div className={`py-10 ${!isLast ? 'border-b border-white/10' : ''}`}>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      <div className="flex flex-col w-full md:w-1/2">
        <h2 className="font-medium text-white text-3xl md:text-4xl tracking-[-0.70px] leading-tight font-['Literata',Helvetica]">
          {project.title}
        </h2>
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-start">
        <p className="font-normal text-white/70 text-base tracking-[-0.27px] leading-[24px] font-sans">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-8 gap-4">
          <p className="font-medium text-white/40 text-sm tracking-[-0.27px] leading-[21px] font-sans">
            {project.date}
          </p>
          <Link to={project.link} className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 rounded-full font-medium text-white text-sm tracking-widest uppercase bg-transparent border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Case Study
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export const CallToActionSection = (): JSX.Element => {
  const projects = [
    {
      title: "AI-Powered E-commerce Support Automation",
      description:
        "Revolutionizing customer support with an intelligent system that automates responses, categorizes queries, and logs customer interactions for unparalleled efficiency and insight.",
      date: "July, 2025",
      link: "/case-study",
    },
  ];

  return (
    <section>
        <div className="text-center mb-10">
            <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
                Automations I Have Created
            </h2>
        </div>
      <div className="section-container">
        {projects.map((project, index) => (
            <ProjectItem key={index} project={project} isLast={index === projects.length - 1} />
        ))}
      </div>
    </section>
  );
};