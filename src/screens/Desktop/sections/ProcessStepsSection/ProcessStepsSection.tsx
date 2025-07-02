import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProcessStepsSection = (): JSX.Element => {
  // Data for process phases to enable mapping
  const phases = [
    {
      number: "01",
      description: "Understanding your business & bottlenecks",
      left: "left-0",
      top: "top-0",
    },
    {
      number: "02",
      description: "Creating actionable blueprint",
      left: "left-[57px]",
      top: "top-[81px]",
    },
    {
      number: "03",
      description: "Implementation",
      left: "left-[151px]",
      top: "top-[161px]",
    },
    {
      number: "04",
      description: "Launch & Expand",
      left: "left-[281px]",
      top: "top-[241px]",
    },
    {
      number: "05",
      description: "Continued partnership",
      left: "left-[416px]",
      top: "top-[321px]",
    },
  ];

  return (
    <section className="relative w-full h-[650px] my-16">
      <div className="[font-family:'Inter',Helvetica] font-normal text-[#e4e4e4e4] text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
        I walk you through phases
      </div>

      <Card className="relative w-full max-w-[1091px] h-[596px] mt-[54px] ml-auto rounded-3xl overflow-hidden border border-solid border-[#eeeeee52]">
        <CardContent className="p-0">
          <div className="absolute top-[34px] left-10 [font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-[32px] tracking-[-0.70px] leading-[48px] whitespace-nowrap">
            PROCESS
          </div>

          <div className="relative w-full max-w-[916px] h-[353px] mt-[168px] mx-auto">
            {phases.map((phase, index) => (
              <div
                key={`phase-${index}`}
                className={`absolute ${phase.top} ${phase.left} w-[500px] h-8`}
              >
                <img
                  className="absolute w-[500px] h-px top-[31px] left-0 object-cover"
                  alt="Line"
                  src="/line-45.svg"
                />

                <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                  <span className="text-[#eeeeeeb2] tracking-[-0.06px]">
                    Phase
                  </span>
                  <span className="text-[#eeeeee] tracking-[-0.06px]">
                    {" "}
                    {phase.number}
                  </span>
                </div>

                <div className="absolute -top-px left-[85px] [font-family:'Inter',Helvetica] font-normal text-[#eeeeee] text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
                  {phase.description}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
