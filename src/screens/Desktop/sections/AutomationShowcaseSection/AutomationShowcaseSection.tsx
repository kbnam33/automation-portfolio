import React from "react";
import { Button } from "../../../../components/ui/button";

export const AutomationShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 md:py-24 flex flex-col items-center justify-center text-center section-container">
      <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-tight md:leading-[48px] mb-8 text-gradient-subtle">
        Ready to Automate Your Operations?
      </h2>
      {/* Paste your booking link in the href attribute of the <a> tag below */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Button
          variant="ghost"
          className="button-glow w-[320px] sm:w-[442px] h-[100px] md:h-[116px] bg-white/5 rounded-full mb-6 flex items-center justify-center text-white text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] font-normal [font-family:'Literata',Helvetica]"
        >
          Book a call
        </Button>
      </a>
      <p className="[font-family:'Inter',Helvetica] font-semibold text-accent text-sm tracking-[-0.31px] leading-[21px]">
        Let&apos;s build your AI-powered future.
      </p>
    </section>
  );
};