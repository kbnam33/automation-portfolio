import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full rounded-3xl overflow-hidden border border-solid border-[#eeeeee52] p-9 relative">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Project preview area */}
        <div className="w-full md:w-[612px] h-[470px] bg-[#eeeeee1c] rounded-3xl" />

        {/* Project information */}
        <div className="flex flex-col w-full md:w-[424px]">
          <h2 className="font-medium text-white text-[32px] tracking-[-0.70px] leading-[48px] font-sans">
            Project Title
          </h2>

          <p className="mt-1 font-normal text-[#e4e4e4e4] text-sm tracking-[-0.27px] leading-[21px] font-sans">
            Short description
          </p>

          <p className="mt-1.5 font-medium text-[#e4e4e480] text-sm tracking-[-0.27px] leading-[21px] font-sans">
            April, 2025
          </p>

          <Card className="mt-auto bg-[#eeeeee0d] border-[#e3e3e3e3] rounded-3xl">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full h-[88px] font-medium text-white text-sm tracking-[-0.27px] leading-[21px] font-sans"
              >
                View full case study
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
