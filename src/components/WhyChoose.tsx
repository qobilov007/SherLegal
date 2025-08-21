"use client"

import Image, { StaticImageData } from "next/image";
import why1 from "../../public/icons/why1.svg"
import why2 from "../../public/icons/why2.svg"
import why3 from "../../public/icons/why3.svg"
import why4 from "../../public/icons/why4.svg"
import why5 from "../../public/icons/why5.svg"
import why6 from "../../public/icons/why6.svg"

export default function WhyChoose() {
  interface WhyChooseType {
    title: string;
    desc: string;
    icon: StaticImageData;
    cardBg: string;
  }

  const items: WhyChooseType[] = [
    {
      title: "Professionalism and experience",
      desc: "Trusted for our proven expertise and years of experience.",
      icon: why1,
      cardBg: "#0795E2",
    },
    {
      title: "Individual approach to each client",
      desc: "We carefully study each client's needs and offer tailored legal solutions.",
      icon: why2,
      cardBg: "#073EE2",
    },
    {
      title: "Wide range of services",
      desc: "We offer a comprehensive suite of legal services across multiple areas of law.",
      icon: why3,
      cardBg: "#F82828",
    },
    {
      title: "Confidentiality and ethics",
      desc: "We strictly uphold client confidentiality and maintain the highest ethical standards.",
      icon: why4,
      cardBg: "#4B00C3",
    },
    {
      title: "Result-oriented",
      desc: "We focus on achieving the best possible outcome for every case we handle.",
      icon: why5,
      cardBg: "#039C2E",
    },
    {
      title: "Best Lawyers and Attorneys",
      desc: "Our team consists of highly qualified, experienced, and trusted legal professionals.",
      icon: why6,
      cardBg: "#F16800",
    },
  ];
  return (
    <div className="container">
      <article className="mb-12">
        <h4 className="font-inter text-center text-[#0795E2] font-bold lg:text-[40px] md:text-[32px] text-[28px] leading-[48px] mb-4">
          Why choose us
        </h4>
        <p className="font-inter md:text-[20px] text-[16px] font-normal leading-[26px] text-center">
          Solving Problems for Your Business in Tashkent and Across Uzbekistan
        </p>
      </article>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item: WhyChooseType, id: number) => (
          <div
            key={id}
            className={`p-6 rounded-[40px] bg-[#FAFAFA] cursor-pointer group transition-all duration-200`}>
            {/* Icon */}
              <Image src={item.icon} alt="Icons" className="w-20 h-20 mb-6" />

            {/* Title */}
            <h5 className="text-[18px] leading-[23.4px] font-bold font-inter text-black mb-2 group-hover:text-white transition-all duration-200">
              {item.title}
            </h5>

            {/* Description */}
            <p className="text-[#2E2E2E] text-sm font-normal font-inter group-hover:text-white transition-all duration-200">{item.desc}</p>
            {/* Overlay hover background */}
            <style jsx>{`
              div:hover {
                background-color: ${item.cardBg};
              }
            `}</style>
          </div>
          
        ))}
      </div>
    </div>
  );
}
