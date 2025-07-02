import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <Card className="relative w-full h-[560px] rounded-3xl border-[0.3px] border-solid border-[#eeeeee52]">
      <CardContent className="p-8 h-full relative flex flex-col justify-between">
        {/* Top-left content */}
        <div>
          <h2 className="[font-family:'Literata',Helvetica] font-medium text-[#e4e4e4e4] text-4xl tracking-[-0.70px] leading-[48px]">
            AI-Transformation Partner
          </h2>
          <p className="mt-4 [font-family:'Inter',Helvetica] font-medium text-[#e4e4e4e4] text-base tracking-[-0.31px] leading-[21px]">
            I build custom AI - Infrastructures for businesses that transforms them
            <br />
            in 90 days.
          </p>
        </div>

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="relative w-32 h-40 mb-4">
            <p className="absolute -top-8 left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              Hi, I&apos;m Naman
            </p>
            <div className="w-32 h-40 bg-[#ffffff1c] rounded-2xl overflow-hidden border-4 border-solid border-[#9cd594b1] flex items-center justify-center">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage
                  src="/sm-profile-pic-cropped-2.png"
                  alt="Naman's profile"
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-[442px] h-[116px] bg-[#eeeeee1c] rounded-full transition-all duration-300 hover:bg-[#eeeeee24] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span className="[font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-4xl tracking-[-0.70px] leading-[48px] whitespace-nowrap">
              Book a call
            </span>
          </Button>

          <div className="mt-4 text-center">
            <p className="[font-family:'Inter',Helvetica] font-semibold text-[#9cd594] text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              Book a call to get a complete practical package.
            </p>
          </div>
        </div>

        {/* Bottom-right content */}
        <div className="self-end">
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#e4e4e4b1] text-sm tracking-[-0.31px] leading-[21px] text-right">
            Become an AI-powered <br />
            business
          </p>
        </div>
      </CardContent>
    </Card>
  );
};