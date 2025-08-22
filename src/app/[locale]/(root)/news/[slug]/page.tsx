import { getNews } from "@/constants/page";
import { FaArrowLeftLong } from "react-icons/fa6";
import GetinTouch from "../../academy/_components/GetinTouch";
import Marqueforslug from "../_components/Marqueforslug";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

export default function page({ params }: { params: { slug: string } }) {
  const newsItem = getNews.find((n) => n.slug === params.slug);

  const paragraphs = newsItem?.description.split("\n");

  return (
    <section>
      <article className="pt-[124px] container">
        <div className=" flex items-center w-[126px] gap-2 py-3 px-7 rounded-full  mb-[24px] bg-[#FFFFFF] shadow-md cursor-pointer">
          <FaArrowLeftLong className="text-[#137BEA] w-5 h-[20px]" />
          <h1 className="font-medium font-inter text-[16px] leading-[130%]">
            Back
          </h1>
        </div>
        <div
          className="w-full h-[600px] rounded-3xl bg-cover bg-center mb-[24px]"
          style={{ backgroundImage: `url(${newsItem?.img})` }}
        >
          <div className="flex items-end translate-y-[530px] gap-1 md:py-4 py-2 px-5">
            <article className="flex items-center md:gap-[8.5px] gap-0.5 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg md:py-[6px] py-0.5 px-3 border-[#6C6C6C] rounded-full max-w-max">
              <CiCalendarDate className="text-white" />
              <span className="text-white md:text-[12px] text-[10px] font-medium font-inter">
                {newsItem?.date}
              </span>
            </article>
            <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 bg-white/5 backdrop-blur-md border border-white/30 shadow-lg border-[#6C6C6C] rounded-full max-w-max">
              <LuEye className="text-white" />
              <span className="text-white md:text-[12px] text-[10px] font-medium font-inter">
                {newsItem?.views}
              </span>
            </article>
          </div>
        </div>
        <div className="mb-[88px] px-[48px]">
          <h1 className="font-bold font-vela text-[28px] leading-[130%] mb-[16px]">
            {newsItem?.title}
          </h1>
          <p></p>
          <div className="space-y-4">
            {paragraphs?.map((p, i) => (
              <p
                key={i}
                className="font-normal font-vela text-[18px] leading-[130%]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </article>
      <div>
        <Marqueforslug />
      </div>

      <GetinTouch />
    </section>
  );
}
