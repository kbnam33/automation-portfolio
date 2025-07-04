import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative section-container flex items-center justify-center min-h-[90vh]">

      {/* --- Left-aligned Content for XL screens and up --- */}
      {/* Changed from lg:block to xl:block to activate only on wider screens */}
      <div className="hidden xl:block absolute top-12 left-12 text-left">
        <h2 className="[font-family:'Literata',Helvetica] font-medium text-white text-5xl tracking-tight leading-[1.1] text-gradient-subtle">
          AI-Transformation<br />Partner
        </h2>
        <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-white/60 text-lg leading-relaxed max-w-md">
          I build custom AI - Infrastructures for businesses that transforms them in 90 days.
        </p>
      </div>

      {/* --- Center Content --- */}
      {/* On screens smaller than xl, it's in the normal flex flow. On xl and up, it's absolutely centered. */}
      <div className="flex flex-col items-center justify-center w-full xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">

        {/* This container now appears on all screens smaller than xl (including 1024px laptops) */}
        <div className="xl:hidden text-center mb-16">
          <div className="mb-4">
            <p className="bg-[#1A1A1A] px-3 py-1 rounded-full text-[10px] font-medium text-white/60 border border-white/10 inline-block">
              Become an AI-powered business
            </p>
          </div>
          <h2 className="[font-family:'Literata',Helvetica] font-medium text-white text-4xl tracking-tight leading-tight text-gradient-subtle">
            AI-Transformation Partner
          </h2>
          <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-white/60 text-base leading-relaxed max-w-md mx-auto">
            I build custom AI - Infrastructures for businesses that transforms them in 90 days.
          </p>
        </div>

        <div className="relative mb-6">
          <div className="w-24 h-28 bg-white/5 rounded-2xl overflow-hidden border-2 border-solid border-accent/50 flex items-center justify-center">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage
                src="/Profile Picture.jpg"
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

        <a href="https://cal.com/namankumar/30min" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
          <Button
            variant="ghost"
            className="button-glow w-full sm:max-w-md h-[100px] bg-white/5 rounded-full text-3xl [font-family:'Literata',Helvetica] font-normal text-white tracking-[-0.70px] leading-[48px]"
          >
            Book a call
          </Button>
        </a>

        <div className="mt-4 text-center">
          <p className="[font-family:'Inter',Helvetica] font-semibold text-accent text-sm tracking-[-0.31px] leading-relaxed">
            Book a call to get a complete practical package.
          </p>
        </div>
      </div>

      {/* --- Right-aligned Content for XL screens and up --- */}
      {/* Changed from lg:block to xl:block */}
      <div className="hidden xl:block absolute bottom-12 right-12 text-right">
        <p className="[font-family:'Inter',Helvetica] font-medium text-white/40 text-sm tracking-[-0.31px] leading-[21px]">
          Become an AI-powered<br />business
        </p>
      </div>
    </section>
  );
};