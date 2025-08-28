"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pickStringProps } from "@/lib/getLocalizedValue";
import { getLocalizedValue } from "@/lib/getLocalization";
import { useLocale } from "next-intl";

type Question = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ question }: { question: Question[] }) {
    const locale = useLocale();

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex flex-col gap-4"
        >
          {question.map((item, index) => {
            const stringItem = pickStringProps(item);
            const question = getLocalizedValue(stringItem, "question", locale);
            const answer = getLocalizedValue(stringItem, "answer", locale);


            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E3E8E9] lg:rounded-3xl rounded-xl
                         hover:bg-[#fff]/10 hover:border-[#C61511]
                         transition-all duration-200
                         data-[state=open]:border-[#C61511]"
              >
                <AccordionTrigger className="md:text-2xl text-base text-[black] font-inter font-bold px-8 h-[80px] py-2 no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="md:text-[18px] text-[14px] font-normal leading-[140%] text-[black] font-inter px-8 md:py-2">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
