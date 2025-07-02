import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectOverviewSection = (): JSX.Element => {
  return (
    <Card className="w-full h-[388px] bg-[#0e0d0d] rounded-3xl overflow-hidden">
      <CardContent className="p-0 relative h-full">
        <h2 className="absolute top-[35px] left-9 font-medium text-[32px] tracking-[-0.70px] leading-normal [font-family:'Literata',Helvetica]">
          <span className="text-[#e4e4e47e] tracking-[-0.23px]">
            Here&apos;s what{" "}
          </span>
          <span className="text-[#e4e4e4e4] tracking-[-0.23px]">you get..</span>
        </h2>

        <p className="absolute w-[400px] top-[274px] left-[891px] [font-family:'Inter',Helvetica] font-normal text-[#e4e4e4e4] text-sm tracking-[-0.27px] leading-[21px]">
          A complete AI system that combines all departments of your business
          that you can manage from once place.
        </p>
      </CardContent>
    </Card>
  );
};
