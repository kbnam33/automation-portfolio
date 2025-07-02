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
            className="w-[442px] h-[116px] bg-[#eeeeee1c] rounded-full mb-6 flex items-center justify-center text-[#eeeeeeee] text-4xl tracking-[-0.70px] leading-[48px] font-normal [font-family:'Literata',Helvetica] transition-all duration-300 hover:bg-[#eeeeee24] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Book a call
          </Button>

          <p className="[font-family:'Inter',Helvetica] font-semibold text-[#9cd594] text-sm tracking-[-0.31px] leading-[21px]">
            Book a call to get a complete practical package.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};