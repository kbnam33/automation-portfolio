import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const IntroductionSection = (): JSX.Element => {
  return (
    <Card className="w-full h-[560px] rounded-3xl border-[0.3px] border-solid border-[#eeeeee52] relative">
      <CardContent className="p-6">
        <div className="mb-10">
          <h2 className="[font-family:'Literata',Helvetica] font-medium text-[#e4e4e4e4] text-[32px] tracking-[-0.70px] leading-[48px]">
            AI-Transformation Partner
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#e4e4e4e4] text-sm tracking-[-0.31px] leading-[21px] mt-3">
            I build custom AI - Infrastructures for businesses that transforms
            them
            <br />
            in 90 days.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <div className="text-center mb-4">
            <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.31px] leading-[21px]">
              Hi, I&apos;m Naman
            </p>
          </div>

          <div className="relative w-[117px] h-[109px] bg-[#ffffff1c] rounded-xl overflow-hidden border-[3px] border-solid border-[#9cd594b1] mb-6">
            <Avatar className="w-[111px] h-[103px]">
              <AvatarImage
                src="/sm-profile-pic-cropped-2.png"
                alt="Naman's profile picture"
              />
            </Avatar>
          </div>

          <Card className="w-[442px] h-[116px] bg-[#eeeeee1c] rounded-3xl overflow-hidden mb-4">
            <CardContent className="flex items-center justify-center h-full p-0">
              <p className="[font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-[32px] tracking-[-0.70px] leading-[48px]">
                Book a call
              </p>
            </CardContent>
          </Card>

          <p className="[font-family:'Inter',Helvetica] font-semibold text-[#9cd594] text-sm tracking-[-0.31px] leading-[21px] text-center">
            Book a call to get a complete practical package.
          </p>
        </div>

        <div className="absolute bottom-6 right-6">
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#e4e4e4b1] text-sm tracking-[-0.31px] leading-[21px]">
            Become an AI-powered <br />
            business
          </p>
        </div>

        <div className="absolute bottom-[52px] left-1/2 transform -translate-x-1/2">
          <Separator className="w-[57px] h-0.5 bg-white opacity-50" />
        </div>
      </CardContent>
    </Card>
  );
};
