import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AutomationShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 rounded-3xl overflow-hidden border border-solid border-[#e4e4e452] flex flex-col items-center justify-center">
      <Card className="bg-transparent border-none">
        <CardContent className="flex flex-col items-center justify-center">
          <Button
            variant="outline"
            className="w-[442px] h-[116px] bg-[#eeeeee1c] rounded-3xl mb-6 flex items-center justify-center"
          >
            <span className="[font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-[32px] tracking-[-0.70px] leading-[48px]">
              Book a call
            </span>
          </Button>

          <p className="[font-family:'Inter',Helvetica] font-semibold text-[#9cd594] text-sm tracking-[-0.31px] leading-[21px]">
            Book a call to get a complete practical package.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
