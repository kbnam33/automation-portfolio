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
        "Our automations streamline workflows, reduce manual tasks, and increase operational efficiency. This leads to cost savings, improved accuracy, and allows your team to focus on higher-value activities.",
    },
    {
      question: "What happens on the call?",
      answer:
        "During our call, we'll discuss your business needs, explore potential automation solutions, and outline how our services can address your specific challenges. It's an opportunity to ask questions and determine the best path forward.",
    },
    {
      question:
        "How long does it takes to create a complete AI Infrastructure.",
      answer:
        "The timeline varies based on your requirements and existing systems. Typically, we can implement basic solutions within weeks, while more comprehensive AI infrastructure may take 2-3 months to fully deploy and optimize.",
    },
  ];

  return (
    <section className="w-full max-w-[1312px] mx-auto rounded-3xl overflow-hidden border border-solid border-[#e4e4e452] p-16">
      <h2 className="mb-12 [font-family:'Literata',Helvetica] font-normal text-[#eeeeeeee] text-[32px] tracking-[-0.70px] leading-[48px]">
        Frequently Asked Questions
      </h2>

      <div className="flex justify-end">
        <div className="w-full max-w-[750px]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b [border-bottom-style:solid] border-[#eeeeee36] py-[51px]"
              >
                <AccordionTrigger className="[font-family:'Inter',Helvetica] font-normal text-[#eeeeeeee] text-base tracking-[-0.35px] leading-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#eeeeeecc] [font-family:'Inter',Helvetica]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
