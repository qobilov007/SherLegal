// import { getNews } from "@/constants/page";

import { FaArrowLeftLong } from "react-icons/fa6";
import Marqueforslug from "../_components/Marqueforslug";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { NewsCard } from "@/app.types";
import { pickStringProps } from "@/lib/getLocalizedValue";
import { getLocalizedValue } from "@/lib/getLocalization";
import { getNews } from "@/lib/getNews";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "Common" });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    console.error("API ERROR:", res.status);
    return <div>Error loading news...</div>;
  }
  const news = await getNews();

  const data: NewsCard = await res.json();

  const stringItem = pickStringProps(data);
  const name = getLocalizedValue(stringItem, "title", locale);
  const description = getLocalizedValue(stringItem, "content", locale);
  const createdAt = new Date(data.created_at);
  const day = String(createdAt.getDate()).padStart(2, "0");
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const year = createdAt.getFullYear();
  const date = `${day}-${month}-${year}`;

  function chunkText(text: string, sentencesPerParagraph = 2) {
    const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);

    const chunks: string[] = [];
    for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
      chunks.push(sentences.slice(i, i + sentencesPerParagraph).join(" "));
    }
    return chunks;
  }

  const paragraphs = chunkText(description, 2);

  return (
    <section>
      <article className="md:pt-[124px] pt-[100px] container">
        <Link href={`/${locale}/news`}>
          <div className="flex items-center max-w-max gap-2 py-1.5 md:py-3 px-7 rounded-full mb-[24px] bg-[#FFFFFF] shadow-md cursor-pointer">
            <FaArrowLeftLong className="text-[#137BEA] w-5 h-[20px]" />
            <h1 className="font-medium font-inter text-[16px] leading-[130%]">
              {t("back")}
            </h1>
          </div>
        </Link>

        <div
          className="w-full lg:h-[600px] md:h-[500px] nx:h-[400px] h-[260px] rounded-3xl bg-cover bg-center md:mb-[24px] nx:mb-[14px] mb-[12px] object-cover"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="flex items-end translate-y-[220px] nx:translate-y-[360px] md:translate-y-[430px] lg:translate-y-[530px] gap-1 md:py-4 py-2 md:px-5 px-2">
            <article className="flex items-center md:gap-[8.5px] gap-0.5 backdrop-blur-[10px] border border-white/20 shadow-lg md:py-[6px] py-0.5 px-3 border-[#6C6C6C] rounded-full max-w-max">
              <CiCalendarDate className="text-white" />
              <span className="text-white md:text-[12px] text-[10px] font-medium font-inter">
                {date}
              </span>
            </article>
            <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 backdrop-blur-[10px] border border-white/30 shadow-lg border-[#6C6C6C] rounded-full max-w-max">
              <LuEye className="text-white" />
              <span className="text-white md:text-[12px] text-[10px] font-medium font-inter">
                {data.views}
              </span>
            </article>
          </div>
        </div>

        <div className="lg:mb-[88px] md:mb-[60px] nx:mb-[40px] mb-[20px] md:px-[48px]">
          <h1 className="font-bold font-vela md:text-[28px] text-[16px] nx:text-[22px] leading-[130%] md:mb-[16px] mb-[12px]">
            {name}
          </h1>
          <div className="md:space-y-4 nx:space-y-3 space-y-2">
            {paragraphs.map((p, i) => {
              return (
                <p
                  key={i}
                  className="font-normal font-inter md:text-[18px] text-[14px] leading-[130%]"
                >
                  {p?.replace(/<[^>]+>/g, "")}
                </p>
              );
            })}
          </div>
        </div>
      </article>
      <Marqueforslug news={news.results} />
    </section>
  );
}
