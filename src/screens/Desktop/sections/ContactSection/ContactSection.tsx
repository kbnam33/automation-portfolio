import React from "react";

export const ContactSection = (): JSX.Element => {
  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "X", url: "#" },
  ];

  return (
    <footer className="w-full bg-[#0A0A0A] mt-32 -mx-16 px-16">
      <div className="w-full max-w-[1440px] mx-auto py-12">
        <div className="flex justify-between items-center">
          <h2 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] text-2xl tracking-[0.32px] leading-[48px] w-1/2">
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

          <div className="flex gap-16">
            <div className="flex flex-col">
              <h3 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-lg tracking-[0.16px] leading-[48px]">
                contact
              </h3>
              <a
                href="mailto:namankb10@gmail.com"
                className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-[#e4e4e4] text-base tracking-[0.14px] leading-[48px] hover:text-white transition-colors"
              >
                namankb10@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-lg tracking-[0.16px] leading-[48px]">
                socials
              </h3>
              <div className="flex flex-col">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-[#e4e4e4] text-base tracking-[0.14px] leading-[48px] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};