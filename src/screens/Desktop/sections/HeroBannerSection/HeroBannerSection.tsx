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

      {/* --- Left-aligned Content --- */}
      <div className="absolute top-12 left-12 text-left">
        <h2 className="[font-family:'Literata',Helvetica] font-medium text-white text-5xl tracking-tight text-gradient-subtle" style={{ lineHeight: '1.2' }}>
          I build AI systems <br />for sales teams
        </h2>
        <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-white/60 text-lg leading-relaxed max-w-md">
          Systems built for more conversions, rapid team growth, and complete transformation.
        </p>
      </div>

      {/* --- Center Content --- */}
      <div className="flex flex-col items-center justify-center w-full">
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
    </section>
  );
};
