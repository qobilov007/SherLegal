"use client";

import { faqdata } from "@/constants/page";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex flex-col gap-4"
        >
          {faqdata.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#E3E8E9] lg:rounded-3xl rounded-xl hover:bg-[#fff]/10 hover:border-[#C61511] transition-all duration-200"
            >
              <AccordionTrigger className="md:text-2xl text-base text-[black] font-inter font-bold px-8 h-[80px] py-2 no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:text-[18px] text-[14px] font-normal leading-[140%] text-[black] font-inter px-8 md:py-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
