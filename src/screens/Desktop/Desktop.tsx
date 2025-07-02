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
import { motion } from "framer-motion";

export const Desktop = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "WORK", href: "#" },
    { label: "PROCESS", href: "#" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#121312] flex flex-row justify-center w-full">
      <div className="bg-[#121312] w-full max-w-[1440px] relative px-16">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center py-9">
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
                    className="font-['Inter',Helvetica] font-medium text-[#e4e4e4e4] text-xs tracking-[-0.24px] leading-[16.5px] transition-colors hover:text-white"
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
            className="h-[47px] w-[127px] rounded-full border-[0.3px] border-solid border-[#eeeeee52] bg-transparent font-['Inter',Helvetica] font-medium text-[#e4e4e4e4] text-xs tracking-[-0.24px] leading-[16.5px] hover:bg-white hover:text-black transition-colors"
          >
            BOOK A CALL
          </Button>
        </header>

        {/* Main Content Sections */}
        <main className="flex flex-col gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={sectionVariants}
          >
            <HeroBannerSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <ProjectOverviewSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <CallToActionSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <ProcessDetailsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <FAQSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <AutomationShowcaseSection />
          </motion.div>
        </main>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <ContactSection />
          </motion.div>
      </div>
    </div>
  );
};