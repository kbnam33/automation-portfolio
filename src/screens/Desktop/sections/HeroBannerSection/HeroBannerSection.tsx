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
    <Card className="relative w-full h-[560px] rounded-3xl border-[0.3px] border-solid border-[#eeeeee52] mx-4">
      <CardContent className="p-0 h-full relative">
        <div className="absolute w-[459px] h-[102px] top-[29px] left-[23px]">
          <h2 className="absolute -top-px left-0 [font-family:'Literata',Helvetica] font-medium text-[#e4e4e4e4] text-[32px] tracking-[-0.70px] leading-[48px] whitespace-nowrap">
            AI-Transformation Partner
          </h2>

          <p className="absolute top-[59px] left-0 [font-family:'Inter',Helvetica] font-medium text-[#e4e4e4e4] text-sm tracking-[-0.31px] leading-[21px]">
            I build custom AI - Infrastructures for businesses that transforms
            them
            <br />
            in 90 days.
          </p>
        </div>

        <div className="absolute w-[207px] h-[42px] top-[487px] left-[1083px]">
          <p className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-medium text-[#e4e4e4b1] text-sm tracking-[-0.31px] leading-[21px]">
            Become an AI-powered <br />
            business
          </p>
        </div>

        <div className="absolute w-[442px] h-[341px] top-[167px] left-[435px] flex flex-col items-center">
          <div className="relative w-[111px] h-[136px]">
            <p className="absolute -top-px left-[11px] [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              Hi, I&apos;m Naman
            </p>
            <div className="absolute w-[117px] h-[109px] top-[30px] left-[-3px] bg-[#ffffff1c] rounded-xl overflow-hidden border-[3px] border-solid border-[#9cd594b1] flex items-center justify-center">
              <Avatar className="w-[111px] h-[103px]">
                <AvatarImage
                  src="/sm-profile-pic-cropped-2.png"
                  alt="Naman's profile"
                />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Button
            variant="ghost"
            className="mt-[168px] w-[442px] h-[116px] bg-[#eeeeee1c] rounded-3xl hover:bg-[#eeeeee30] transition-colors"
          >
            <span className="[font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-[32px] tracking-[-0.70px] leading-[48px] whitespace-nowrap">
              Book a call
            </span>
          </Button>

          <div className="mt-4 text-center">
            <p className="[font-family:'Inter',Helvetica] font-semibold text-[#9cd594] text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              Book a call to get a complete practical package.
            </p>
          </div>
        </div>

        <img
          className="absolute w-[57px] h-0.5 top-[508px] left-[692px]"
          alt="Decorative line"
          src="/vector-27.svg"
        />
      </CardContent>
    </Card>
  );
};
