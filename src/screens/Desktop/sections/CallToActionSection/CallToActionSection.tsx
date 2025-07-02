import React from "react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section
      className="w-full rounded-3xl overflow-hidden border border-solid border-[#eeeeee52] p-12 relative"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Project preview area */}
        <div className="w-full md:w-1/2 h-[470px] bg-[#eeeeee1c] rounded-3xl overflow-hidden">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random/800x600?ecommerce,support')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Project information */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="font-medium text-white text-4xl tracking-[-0.70px] leading-[48px] font-sans">
            AI-Powered E-commerce Support Automation
          </h2>

          <p className="mt-4 font-normal text-[#e4e4e4e4] text-base tracking-[-0.27px] leading-[24px] font-sans">
            Revolutionizing customer support with an intelligent system that
            automates responses, categorizes queries, and logs customer
            interactions.
          </p>

          <p className="mt-4 font-medium text-[#e4e4e480] text-sm tracking-[-0.27px] leading-[21px] font-sans">
            July, 2025
          </p>
          <Link to="/case-study">
            <Button
              variant="outline"
              className="mt-12 w-full h-16 rounded-full font-medium text-white text-base tracking-[-0.27px] leading-[21px] font-sans hover:bg-white hover:text-black transition-colors duration-300"
            >
              View full case study
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};