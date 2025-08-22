"use client";
import { getNews } from "@/constants/page";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import { useLocale } from "next-intl";
import Marquee from "react-fast-marquee";

export default function Marqueforslug() {
  const locale = useLocale();
  const news = getNews;

  return (
    <div className="max-w-[1600px] m-auto w-full space-y-6 overflow-visible max-md:pb-10">
      <Marquee
        direction="right"
        speed={30}
        gradient={true}
        gradientColor={"white"}
        gradientWidth={200}
        pauseOnHover
        className="mb-[18px]"
      >
        {news.map((item, id) => (
          <Link
            key={id}
            href={`/${locale}/news/${item.slug}`}
            className="mx-2 sm:mx-[18px] bg-white border-[#eaecef]/40 border-[3px] rounded-xl flex flex-col overflow-hidden w-[300px] max-sm:w-[240px] cursor-pointer hover:bg-white transition-all duration-200 hover:shadow-sm"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={379}
              height={182}
              className="w-full object-cover"
            />
            <article className="md:py-4 py-2 px-5">
              <h2 className="sm:line-clamp-2 line-clamp-1 font-bold font-vela md:text-[16px] text-[13px] leading-[140%] pb-[4px]">
                {item.title}
              </h2>
              <p className="line-clamp-2 md:text-[14px] text-[12px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                {item.description}
              </p>
            </article>
            <div className="flex max-nx:flex-row max-md:flex-col md:items-center items-start gap-1 md:py-4 py-2 px-5">
              <article className="flex items-center md:gap-[8.5px]   gap-0.5 md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                <CiCalendarDate className="text-[#6C6C6C]" />
                <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
                  {item.date}
                </span>
              </article>
              <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                <LuEye className="text-[#6C6C6C]" />
                <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
                  {item.views}
                </span>
              </article>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
