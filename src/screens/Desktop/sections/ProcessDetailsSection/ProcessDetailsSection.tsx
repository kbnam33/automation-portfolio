import React from "react";

export const ProcessDetailsSection = (): JSX.Element => {
  const phases = [
    { number: "01", description: "Understanding & Discovery" },
    { number: "02", description: "Actionable Blueprint" },
    { number: "03", description: "Implementation" },
    { number: "04", description: "Launch & Expand" },
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
          PROCESS
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-sm tracking-[-0.31px] leading-[21px] mt-2">
          I walk you through phases
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl flex flex-col items-center text-center section-container transition-colors duration-300 hover:bg-white/[.05]"
            >
              <span className="[font-family:'Literata',Helvetica] text-accent font-bold text-2xl mb-4">
                  {phase.number}
              </span>
              <p className="[font-family:'Inter',Helvetica] font-medium text-white/90 text-xl leading-tight">
                  {phase.description}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};