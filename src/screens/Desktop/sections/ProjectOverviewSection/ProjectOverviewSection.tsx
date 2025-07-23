import { BarChart, Telescope, TrendingUp, Zap } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Scale Your Coaching Efforts",
    description:
      "Eliminate manual call reviews. Our AI generates detailed reports to help you scale your coaching and training, effortlessly.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Drive Consistent Growth",
    description:
      "Unlock a 10% monthly improvement in your team's performance. The AI pinpoints key areas for growth, helping reps close more effectively.",
  },
  {
    icon: <Telescope className="w-8 h-8 text-accent" />,
    title: "Uncover Hidden Insights",
    description:
      "Capture what the human ear might miss. Get deep insights on primary objections, client signals, and critical pain points.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: "Amplify Your Strengths",
    description:
      "The AI identifies what your top reps are doing right, allowing you to replicate their success across the entire team.",
  },
];

export const ProjectOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-24">
      <div className="text-center mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle" style={{ lineHeight: 1.3 }}>
          The AI-Powered Sales Advantage
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group relative p-8 flex flex-col rounded-3xl bg-white/[.03] border border-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02] hover:border-accent/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="[font-family:'Literata',Helvetica] font-medium text-2xl text-white mb-4">
                {benefit.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-base leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
