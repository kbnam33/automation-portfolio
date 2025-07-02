import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectOverviewSection = (): JSX.Element => {
  return (
    <Card className="w-full h-auto bg-[#0e0d0d] rounded-3xl overflow-hidden p-12 border border-solid border-[#eeeeee1a]">
      <CardContent className="relative h-full flex flex-col justify-between">
        <h2 className="font-medium text-4xl tracking-[-0.70px] leading-normal [font-family:'Literata',Helvetica]">
          <span className="text-[#e4e4e47e] tracking-[-0.23px]">
            Here&apos;s what{" "}
          </span>
          <span className="text-[#e4e4e4e4] tracking-[-0.23px]">you get..</span>
        </h2>

        <p className="w-full max-w-md ml-auto mt-32 [font-family:'Inter',Helvetica] font-normal text-[#e4e4e4e4] text-base tracking-[-0.27px] leading-[21px]">
          A complete AI system that combines all departments of your business
          that you can manage from once place.
        </p>
      </CardContent>
    </Card>
  );
};