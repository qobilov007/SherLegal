"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { WhyChooseType } from "@/app.types";
import { useLocale } from "next-intl";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function WhyChoose({ partners }: { partners: WhyChooseType[] }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container">
      <article className="mb-12">
        <h4
          className="font-inter text-center text-[#0795E2] font-bold lg:text-[40px] md:text-[32px] text-[28px] leading-[48px] mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {t("whychooseus")}
        </h4>
        <p
          className="font-inter md:text-[20px] text-[16px] font-normal leading-[26px] text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("whytitle")}
        </p>
      </article>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((item: WhyChooseType, id: number) => {
          // locale ga qarab backenddan title/desc olish
          const title =
            (item[`name_${locale}` as keyof WhyChooseType] as string) ||
            item.name;
          const description =
            (item[`description_${locale}` as keyof WhyChooseType] as string) ||
            item.description;

          return (
            <div
              key={id}
              className={`p-6 rounded-[40px] bg-[#FAFAFA] cursor-pointer group transition-all duration-200`}
              data-aos="fade-up"
              data-aos-delay={id * 100}
              data-aos-duration="800"
            >
              <Image
                src={item.icon}
                alt="Icons"
                width={20}
                height={20}
                className="w-20 h-20 mb-6"
              />
              <h5 className="text-[18px] leading-[23.4px] font-bold font-inter text-black mb-2 group-hover:text-white transition-all duration-200">
                {title}
              </h5>

              <p className="text-[#2E2E2E] text-sm font-normal font-inter group-hover:text-white transition-all duration-200">
                {description}
              </p>
              <style jsx>{`
                div:hover {
                  background-color: ${item.color};
                }
              `}</style>
            </div>
          );
        })}
      </div>
    </div>
  );
}
