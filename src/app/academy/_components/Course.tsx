import { getLessonCard } from "@/constants/page";

export default function Course() {
  const lessons = getLessonCard;
  return (
    <div className="container">
      <h1 className="text-[#C61511] text-[40px] font-bold font-inter leading-[120%] pb-3">
        Kurs dasturi
      </h1>
      <p className="text-[20px] font-normal font-inter leading-[130%] w-[55%] pb-[40px]">
        Legal Course kursi huquqiy savodxonlikni rivojlantiruvchi umumiy dastur
        bo&apos;lib, 12 ta video-ma&apos;ruza (modul)ni o&apos;z ichiga oladi.
      </p>

      <div className="grid grid-cols-2 justify-between gap-[20px] mb-[64px]">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="rounded-[16px] w-[56px] h-[56px] bg-[#C61511] flex items-center justify-center shadow-2xl mb-[24px]"><span className="font-bold text-[28px] font-inter leading-[120%] text-white">{lesson.number}</span></div>
            <h2 className="font-inter font-bold text-[24px] leading-[120%] pb-2">{lesson.title}</h2>
            <p className="text-[14px] font-inter font-normal leading-[120%]">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
