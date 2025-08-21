"use client";
import { useState } from "react";
import { getNews } from "@/constants/page";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function News() {
  const locale = useLocale();
  const news = getNews;
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mt-[142px]">
      <div className="flex md:items-center justify-between md:pb-[32px] pb-6">
        <h1 className=" font-bold font-inter md:text-[40px] text-[30px] leading-[120%]">
          News
        </h1>
        <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full p-2.5">
          <IoSearchSharp className="text-gray-500 md:w-6 md:h-6 w-4 h-4" />
          <input
            type="text"
            placeholder="Izlash"
            className="bg-transparent outline-none text-sm md:w-full w-1/2 placeholder:text-gray-500 text-[14px] font-medium font-inter leading-[140%]"
          />
        </article>
      </div>

      <div className="grid lg:grid-cols-3 nx:grid-cols-2 gap-[24px]">
        {currentNews.map((item, id) => (
          <Link key={id} href={`/${locale}/news/${item.slug}`}>
            <div
              key={id}
              className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white transition-all duration-200 hover:scale-[1.01] hover:shadow-md"
            >
              <Image
                src={item.img}
                alt="Image"
                width={379}
                height={182}
                className="w-full object-cover"
              />
              <article className="md:py-4 py-2 px-5">
                <h2 className="sm:line-clamp-2 line-clamp-1 font-bold font-vela md:text-[16px] text-[13px] leading-[140%]  pb-[4px]">
                  {item.title}
                </h2>
                <p className="line-clamp-2 md:text-[14px] text-[12px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                  {item.description}
                </p>
              </article>
              <div className="flex max-nx:flex-row max-md:flex-col md:items-center items-start gap-1 md:py-4 py-2 px-5">
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
