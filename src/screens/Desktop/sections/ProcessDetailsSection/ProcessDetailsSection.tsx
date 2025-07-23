import React from "react";

export const ProcessDetailsSection = (): JSX.Element => {
  const phases = [
    {
      number: "01",
      title: "Discovery & Understanding",
      description: "We dive deep into your business, identifying bottlenecks and opportunities for AI-driven improvement."
    },
    {
      number: "02",
      title: "Actionable Blueprint",
      description: "We design a custom AI strategy and architecture, creating a clear roadmap for transformation."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team builds and integrates the AI system, ensuring seamless integration with your existing workflows."
    },
    {
      number: "04",
      title: "Launch & Expansion",
      description: "We deploy the solution and monitor its performance, identifying opportunities for further expansion and optimization."
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="text-center mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
          Our Transformation Process
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-lg mt-4">
          A clear, collaborative journey to AI-powered success.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The vertical line running through the center */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10"></div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative flex items-center group"
            >
              {/* The content card */}
              <div className={`w-full p-8 rounded-3xl bg-white/[.03] border border-white/10 transition-all duration-500 ease-out transform group-hover:scale-105`}>
                <h3 className="[font-family:'Literata',Helvetica] font-bold text-accent text-2xl mb-2">
                  {phase.number}
                </h3>
                <h4 className="[font-family:'Literata',Helvetica] font-medium text-white text-3xl mb-4">
                  {phase.title}
                </h4>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* The dot on the timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-[#111111] transition-all duration-500 ease-out group-hover:scale-125"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};