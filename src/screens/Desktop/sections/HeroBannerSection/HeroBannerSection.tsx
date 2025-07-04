import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto md:h-[600px] flex items-center justify-center text-center section-container py-24 md:py-12">
      <div className="absolute top-6 left-6 md:top-8 md:left-8 text-left max-w-md">
        <h2 className="[font-family:'Literata',Helvetica] font-medium text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight md:leading-[1.1] text-gradient-subtle">
          AI-Transformation Partner
        </h2>
        <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-white/60 text-sm md:text-base leading-relaxed">
          I build custom AI - Infrastructures for businesses that transforms them in 90 days.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-32 md:mt-0">
        <div className="relative mb-6">
          <div className="w-24 h-28 bg-white/5 rounded-2xl overflow-hidden border-2 border-solid border-accent/50 flex items-center justify-center">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage
                src="/sm-profile-pic-cropped-2.png"
                alt="Naman's profile"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
          </div>
           <p className="absolute -bottom-2 -right-2 bg-[#1A1A1A] px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium text-white/80 border border-white/10">
            Hi, I&apos;m Naman
          </p>
        </div>

        <Button
          variant="ghost"
          className="button-glow w-full max-w-xs md:max-w-md md:w-[442px] h-[90px] md:h-[116px] bg-white/5 rounded-full text-2xl md:text-4xl [font-family:'Literata',Helvetica] font-normal text-white tracking-[-0.70px] leading-[48px]"
        >
          Book a call
        </Button>

        <div className="mt-4 text-center">
          <p className="[font-family:'Inter',Helvetica] font-semibold text-accent text-sm tracking-[-0.31px] leading-relaxed">
            Book a call to get a complete practical package.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right">
        <p className="[font-family:'Inter',Helvetica] font-medium text-white/40 text-xs md:text-sm tracking-[-0.31px] leading-[21px]">
          Become an AI-powered <br />
          business
        </p>
      </div>
    </section>
  );
};