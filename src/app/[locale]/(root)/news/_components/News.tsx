"use client";
import { useState } from "react";
import { getNews } from "@/constants/page";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function News() {
    const t = useTranslations("NewsPage")
  const locale = useLocale();
  const news = getNews;
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container md:pt-[124px] pt-28">
      <div className="flex items-center md:items-center justify-between pb-[36px]">
        <h1 className=" font-bold font-inter md:text-[40px] text-[24px] leading-[120%]">
          {t("title")}
        </h1>
        <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full ml-4 p-2.5">
          <IoSearchSharp className="text-gray-500 md:w-6 md:h-6 w-4 h-4" />
          <input
            type="text"
            placeholder={t("search")}
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 md:text-[14px] font-medium font-inter leading-[140%]"
          />
        </article>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[24px] gap-4">
        {currentNews.map((item, id) => (
          <Link key={id} href={`/${locale}/news/${item.slug}`}>
            <div
              key={id}
              className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white ease-linear duration-300 md:h-[367px] h-[343px]"
            >
              <Image
                src={item.img}
                alt="Image"
                width={379}
                height={182}
                className="w-full object-cover h-[182px]"
              />

              <article className=" flex flex-col justify-between md:h-[170px] h-[158px] px-4 py-2">
                <h2 className="line-clamp-2 font-bold font-vela text-[16px] leading-[140%] pb-[4px]">
                  {item.title}
                </h2>
                <p className="line-clamp-2 text-[14px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                  {item.description}
                </p>

              <div className="flex max-sm:flex-row max-md:flex-col md:items-center items-start gap-1">
                <article className="flex items-center md:gap-[8.5px] gap-0.5 md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
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
              </article>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center md:mt-10 mt-5 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === page
                ? "bg-red-500 text-white border-red-500"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
