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
import { IntroductionSection } from "./sections/IntroductionSection";
import { ProcessDetailsSection } from "./sections/ProcessDetailsSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";

export const Desktop = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "WORK", href: "#" },
    { label: "PROCESS", href: "#" },
  ];

  return (
    <div className="bg-[#121312] flex flex-row justify-center w-full">
      <div className="bg-[#121312] w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center px-16 py-9">
          {/* Logo */}
          <div className="font-['Literata',Helvetica] font-normal text-[#eeeeeea1] text-2xl tracking-[-0.53px] leading-9">
            N
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-[45px]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-['Inter',Helvetica] font-medium text-[#e4e4e4e4] text-[11px] tracking-[-0.24px] leading-[16.5px]"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="h-[47px] w-[127px] rounded-2xl border-[0.3px] border-solid border-[#eeeeee52] bg-transparent font-['Inter',Helvetica] font-medium text-[#e4e4e4e4] text-[11px] tracking-[-0.24px] leading-[16.5px]"
          >
            BOOK A CALL
          </Button>
        </header>

        {/* Main Content Sections */}
        <main className="flex flex-col">
          <IntroductionSection />

          <ProjectOverviewSection />

          <CallToActionSection />

          <ProcessDetailsSection />

          <FAQSection />

          <AutomationShowcaseSection />

          <ContactSection />
        </main>
      </div>
    </div>
  );
};
