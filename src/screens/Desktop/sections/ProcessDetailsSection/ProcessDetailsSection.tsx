import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const ProcessDetailsSection = (): JSX.Element => {
  // Define the phases data to map over
  const phases = [
    {
      number: "01",
      description: "Understanding your business & bottlenecks",
    },
    {
      number: "02",
      description: "Creating actionable blueprint",
    },
    {
      number: "03",
      description: "Implementation",
    },
    {
      number: "04",
      description: "Launch & Expand",
    },
    {
      number: "05",
      description: "Continued partnership",
    },
  ];

  return (
    <section className="relative w-full py-16">
      <div className="[font-family:'Inter',Helvetica] font-normal text-[#e4e4e4e4] text-sm tracking-[-0.31px] leading-[21px]">
        I walk you through phases
      </div>

      <Card className="mt-12 w-full rounded-3xl overflow-hidden border border-solid border-[#eeeeee52]">
        <CardContent className="p-12 relative h-full">
          <h2 className="[font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-4xl tracking-[-0.70px] leading-[48px]">
            PROCESS
          </h2>

          <div className="mt-16 flex flex-col gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={`phase-${index}`}
                className="flex items-center gap-8 p-4 rounded-lg"
                whileHover={{
                  backgroundColor: "rgba(238, 238, 238, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#eeeeee1c] text-white font-bold text-lg">
                  {phase.number}
                </div>

                <div className="[font-family:'Inter',Helvetica] font-normal text-[#eeeeee] text-2xl tracking-[-0.35px] leading-6 whitespace-nowrap">
                  {phase.description}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};