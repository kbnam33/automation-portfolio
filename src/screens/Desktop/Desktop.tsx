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

export const Desktop = (): JSX.Element => {
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "WORK", href: "#" },
    { label: "PROCESS", href: "#" },
  ];

  return (
    <div className="bg-[#111111] flex flex-row justify-center w-full">
      <div className="bg-[#111111] w-full max-w-[1440px] relative px-16">
        <header className="flex justify-between items-center py-9">
          <div className="font-['Literata',Helvetica] font-normal text-white/70 text-2xl tracking-[-0.53px] leading-9">
            N
          </div>
          <NavigationMenu className="mx-auto">
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
          <Button
            variant="outline"
            className="h-[47px] w-auto px-6 rounded-full border-[1px] border-solid border-white/20 bg-transparent font-['Inter',Helvetica] font-medium text-white/80 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
          >
            BOOK A CALL
          </Button>
        </header>

        <main className="flex flex-col gap-32 my-16">
          <HeroBannerSection />
          <ProjectOverviewSection />
          <CallToActionSection />
          <ProcessDetailsSection />
          <FAQSection />
          <AutomationShowcaseSection />
        </main>
        
        <ContactSection />

      </div>
    </div>
  );
};