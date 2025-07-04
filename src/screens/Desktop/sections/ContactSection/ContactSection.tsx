import React from "react";

export const ContactSection = (): JSX.Element => {
  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "X", url: "#" },
  ];

  return (
    <footer className="w-full max-w-5xl mx-auto my-16 section-container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <h2 className="[font-family:'PP_Neue_Montreal-Medium',Helvetica] text-xl md:text-2xl tracking-[0.32px] leading-snug md:w-1/2">
          <span className="font-medium text-white/70 tracking-[0.10px]">
            I&apos;m always open to new{" "}
          </span>
          <span className="font-medium text-accent tracking-[0.10px]">
            connections
          </span>
          <span className="font-medium text-white/70 tracking-[0.10px]">
            . Feel free to reach out.
          </span>
        </h2>

        <div className="flex gap-8 md:gap-16">
          <div className="flex flex-col">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-white/50 text-xs uppercase tracking-widest leading-loose">
              Contact
            </h3>
            <a
              href="mailto:namankb10@gmail.com"
              className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-white text-base tracking-[0.14px] hover:text-accent transition-colors"
            >
              namankb10@gmail.com
            </a>
          </div>

          <div className="flex flex-col">
            <h3 className="[font-family:'Inter',Helvetica] font-medium text-white/50 text-xs uppercase tracking-widest leading-loose">
              Socials
            </h3>
            <div className="flex flex-col gap-1">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="[font-family:'PP_Neue_Montreal-Book',Helvetica] font-normal text-white text-base tracking-[0.14px] hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/10 text-white/30 text-xs [font-family:'Inter',Helvetica]">
        &copy; {new Date().getFullYear()} Naman. All rights reserved.
      </div>
    </footer>
  );
};