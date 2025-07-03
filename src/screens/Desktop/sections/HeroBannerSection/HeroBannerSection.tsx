import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center section-container">
      <div className="absolute top-8 left-8 text-left">
        <h2 className="[font-family:'Literata',Helvetica] font-medium text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
          AI-Transformation Partner
        </h2>
        <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-white/60 text-base tracking-[-0.31px] leading-[21px]">
          I build custom AI - Infrastructures for businesses that transforms them
          <br />
          in 90 days.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-40 mb-6">
          <p className="absolute -top-8 left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
            Hi, I&apos;m Naman
          </p>
          <div className="w-32 h-40 bg-white/5 rounded-2xl overflow-hidden border-2 border-solid border-accent/50 flex items-center justify-center">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage
                src="/Portfolio"
                alt="Naman's profile"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Button
          variant="ghost"
          className="button-glow w-[442px] h-[116px] bg-white/5 rounded-full text-4xl [font-family:'Literata',Helvetica] font-normal text-white tracking-[-0.70px] leading-[48px]"
        >
          Book a call
        </Button>

        <div className="mt-4 text-center">
          <p className="[font-family:'Inter',Helvetica] font-semibold text-accent text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
            Book a call to get a complete practical package.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-right">
        <p className="[font-family:'Inter',Helvetica] font-medium text-white/40 text-sm tracking-[-0.31px] leading-[21px]">
          Become an AI-powered <br />
          business
        </p>
      </div>
    </section>
  );
};