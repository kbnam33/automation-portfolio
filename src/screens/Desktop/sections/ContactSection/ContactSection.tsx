import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "X", url: "#" },
  ];

  return (
    <Card className="w-full max-w-[1312px] mx-auto my-16 bg-[#02030266] rounded-3xl overflow-hidden">
      <CardContent className="p-12">
        <div className="mb-12">
          <h2 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] text-[32px] tracking-[0.32px] leading-[48px]">
            <span className="font-medium text-[#e4e4e4cc] tracking-[0.10px]">
              I&apos;m always open to new{" "}
            </span>
            <span className="font-medium text-[#9cd594] tracking-[0.10px]">
              connections
            </span>
            <span className="font-medium text-[#e4e4e4cc] tracking-[0.10px]">
              . Feel free to reach out.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-end gap-12">
          <div className="flex flex-col">
            <h3 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-base tracking-[0.16px] leading-[48px]">
              contact
            </h3>
            <a
              href="mailto:namankb10@gmail.com"
              className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-[#e4e4e4] text-sm tracking-[0.14px] leading-[48px]"
            >
              namankb10@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-base tracking-[0.16px] leading-[48px]">
              socials
            </h3>
            <div className="flex flex-col">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-[#e4e4e4] text-sm tracking-[0.14px] leading-[48px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
