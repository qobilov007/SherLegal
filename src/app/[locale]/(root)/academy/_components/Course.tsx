import { getLessonCard } from "@/constants/page";
import { useTranslations } from "next-intl";

export default function Course() {
  const t = useTranslations("AcademyPage");
  const lessons = getLessonCard;

  return (
    <div className="container">
      <h1 className="text-[#C61511] md:text-[40px] text-[35px] font-bold font-inter leading-[120%] pb-3">
        {t("programTitle")}
      </h1>
      <p className="md:text-[20px] text-[16px] font-normal font-inter leading-[130%] lg:w-[55%] md:pb-[40px] pb-[20px]">
        {t("programDescription")}
      </p>

      <div className="grid md:grid-cols-2 justify-between gap-[20px] lg:mb-[64px] mb-8">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="rounded-[16px] w-[56px] h-[56px] bg-[#C61511] flex items-center justify-center shadow-2xl mb-[24px] drop-shadow-[2px_3px_8px_red]">
              <span className="font-bold text-[28px] font-inter leading-[120%] text-white">
                {lesson.number}
              </span>
            </div>
            <h2 className="font-inter font-bold md:text-[24px] text-[20px] leading-[120%] pb-2">
              {lesson.title}
            </h2>
            <p className="md:text-[14px] text-[12px] font-inter font-normal leading-[120%]">
              {lesson.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
