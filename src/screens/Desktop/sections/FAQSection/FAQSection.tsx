import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FAQSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "How do these automations improve business operations?",
      answer:
        "My automations streamline workflows, reduce manual tasks, and increase operational efficiency. This leads to cost savings, improved accuracy, and allows your team to focus on higher-value activities.",
    },
    {
      question: "What happens on the call?",
      answer:
        "During our call, we'll discuss your business needs, explore potential automation solutions, and I'll outline how my services can address your specific challenges. It's an opportunity to ask questions and determine the best path forward.",
    },
    {
      question:
        "How long does it take to create a complete AI Infrastructure?",
      answer:
        "The timeline varies based on your requirements and existing systems. Typically, I can implement basic solutions within weeks, while more comprehensive AI infrastructure may take 2-3 months to fully deploy and optimize.",
    },
  ];

  return (
    <section className="w-full section-container flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="w-full lg:w-1/3">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-tight lg:leading-[48px] text-gradient-subtle">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full lg:w-2/3">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-[1px] [border-bottom-style:solid] border-white/10 py-6"
            >
              <AccordionTrigger className="[font-family:'Inter',Helvetica] font-medium text-white/90 text-lg md:text-xl text-left hover:text-accent transition-colors duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-white/60 [font-family:'Inter',Helvetica] text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
