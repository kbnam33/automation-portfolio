import React from "react";

export const ProjectOverviewSection = (): JSX.Element => {
  return (
    <section
      className="w-full h-auto md:h-[400px] p-8 sm:p-12 md:py-24 rounded-3xl flex flex-col justify-center items-center relative overflow-hidden group section-container"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(110 39% 65% / 0.15), transparent 50%)",
        }}
      />
      <div className="w-full max-w-4xl flex flex-col text-center z-10 gap-6">
        <h2 className="font-medium text-3xl md:text-4xl tracking-[-0.70px] leading-normal [font-family:'Literata',Helvetica]">
          <span className="text-white/50 tracking-[-0.23px]">
            Here&apos;s what{" "}
          </span>
          <span className="text-gradient-subtle tracking-[-0.23px]">you get..</span>
        </h2>
        <p className="w-full max-w-xl mx-auto [font-family:'Inter',Helvetica] font-normal text-white/70 text-base md:text-lg leading-relaxed">
          A complete AI system that combines all departments of your business
          that you can manage from one place.
        </p>
      </div>
    </section>
  );
};