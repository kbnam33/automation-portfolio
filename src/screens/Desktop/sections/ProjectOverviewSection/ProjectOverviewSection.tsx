import React from "react";
import { motion } from "framer-motion";

export const ProjectOverviewSection = (): JSX.Element => {
  return (
    <motion.section
      className="w-full h-[400px] py-24 rounded-3xl flex flex-col justify-center items-center relative overflow-hidden group section-container"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(110 39% 65% / 0.15), transparent 50%)",
          animation: "pulse 4s infinite",
        }}
      />
      <div className="w-full max-w-4xl flex flex-col text-center z-10">
        <h2 className="font-medium text-4xl tracking-[-0.70px] leading-normal [font-family:'Literata',Helvetica]">
          <span className="text-white/50 tracking-[-0.23px]">
            Here&apos;s what{" "}
          </span>
          <span className="text-gradient-subtle tracking-[-0.23px]">you get..</span>
        </h2>
        <p className="w-full max-w-xl mx-auto mt-6 [font-family:'Inter',Helvetica] font-normal text-white/70 text-lg leading-relaxed">
          A complete AI system that combines all departments of your business
          that you can manage from one place.
        </p>
      </div>
    </motion.section>
  );
};