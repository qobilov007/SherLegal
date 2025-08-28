"use client";
// import { getNews } from "@/constants/page";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import { useLocale } from "next-intl";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { NewsCard } from "@/app.types";
import { pickStringProps } from "@/lib/getLocalizedValue";
import { getLocalizedValue } from "@/lib/getLocalization";

export default function Marqueforslug({ news }: { news: NewsCard[] }) {
  const locale = useLocale();
  //   const news = getNews;
  const [gradient, setGradient] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setGradient(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1600px] m-auto w-full space-y-6 overflow-visible ">
      <Marquee
        direction="right"
        speed={30}
        gradient={gradient}
        gradientColor={"white"}
        gradientWidth={200}
        pauseOnHover
        className="mb-[18px]"
      >
        {news.map((item, id) => {
          const stringItem = pickStringProps(item);
          const localTitle = getLocalizedValue(stringItem, "title", locale);
          const localDescription = getLocalizedValue(
            stringItem,
            "content",
            locale
          );
          const createdAt = new Date(item.created_at);
          const day = String(createdAt.getDate()).padStart(2, "0");
          const month = String(createdAt.getMonth() + 1).padStart(2, "0");
          const year = createdAt.getFullYear();
          const date = `${day}-${month}-${year}`;
          return (
            <Link
              key={id}
              href={`/${locale}/news/${item.slug}`}
              className="mx-2 sm:mx-[18px] bg-white md:h-[367px] border-[#eaecef]/40 border-[3px] rounded-xl flex flex-col overflow-hidden w-[300px] max-sm:w-[240px] cursor-pointer hover:bg-white transition-all duration-200 hover:shadow-sm"
            >
              <Image
                src={item.image}
                alt="Image"
                width={379}
                height={182}
                className="w-full object-cover h-[182px]"
              />
              <div className=" flex flex-col justify-between md:h-[200px] h-[150px]">
                <article className="md:py-4 py-2 px-5">
                  <h2 className="sm:line-clamp-2 line-clamp-1 font-bold font-vela md:text-[16px] text-[13px] leading-[140%] pb-[4px]">
                    {localTitle}
                  </h2>
                  <p className="line-clamp-2 md:text-[14px] text-[12px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                    {localDescription?.replace(/<[^>]+>/g, "")}
                  </p>
                </article>
                <div className="flex max-nx:flex-row max-md:flex-col md:items-center items-start gap-1 md:py-4 py-2 px-5">
                  <article className="flex items-center md:gap-[8.5px]  gap-0.5 md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                    <CiCalendarDate className="text-[#6C6C6C]" />
                    <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
                      {date}
                    </span>
                  </article>
                  <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                    <LuEye className="text-[#6C6C6C]" />
                    <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
                      {item.views}
                    </span>
                  </article>
                </div>
              </div>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}
