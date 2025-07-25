import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AutomationShowcaseSection } from "./sections/AutomationShowcaseSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ProcessDetailsSection } from "./sections/ProcessDetailsSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";
import { Link } from "react-router-dom";

export const Desktop = (): JSX.Element => {
  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "WORK", href: "#work" },
    { label: "PROCESS", href: "#process" },
  ];

  return (
    <div className="bg-[#111111] flex flex-row justify-center w-full">
      <div className="bg-[#111111] w-full max-w-[1440px] relative px-6 sm:px-8 md:px-16">
        <header className="flex justify-between items-center py-6 md:py-9">
          <Link to="/" className="font-['Literata',Helvetica] font-normal text-white/70 text-2xl tracking-[-0.53px] leading-9 transition-colors hover:text-white">
            N
          </Link>
          <NavigationMenu className="mx-auto hidden md:flex">
            <NavigationMenuList className="flex gap-[45px]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-['Inter',Helvetica] font-medium text-white/80 text-xs tracking-widest uppercase transition-colors hover:text-white"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* This link now opens your Cal.com page in a new tab */}
          <a href="https://cal.com/namankumar/30min" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="h-[42px] md:h-[47px] w-auto px-5 md:px-6 rounded-full border-[1px] border-solid border-white/20 bg-transparent font-['Inter',Helvetica] font-medium text-white/80 text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
            >
              BOOK A CALL
            </Button>
          </a>
        </header>

        <main className="flex flex-col gap-24 md:gap-32 my-12 md:my-16">
          <div id="home">
            <HeroBannerSection />
          </div>
          <ProjectOverviewSection />
          <div id="work">
            <CallToActionSection />
          </div>
          <div id="process">
            <ProcessDetailsSection />
          </div>
          <FAQSection />
          {/* The final CTA section */}
          <div id="book-a-call">
            <AutomationShowcaseSection />
          </div>
        </main>
        
        <ContactSection />

      </div>
    </div>
  );
};
