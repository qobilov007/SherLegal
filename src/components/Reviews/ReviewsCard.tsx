import Image from "next/image";
import Frame from "../../../public/images/fi_1155628.svg";
import { Review } from "@/app.types";

export default function ReviewCard({
  review,
  locale,
}: {
  review: Review;
  locale: string;
}) {
  const text = review[`review_text_${locale}` as keyof Review] || review.review_text_uz;
  const profession = review[`profession_${locale}` as keyof Review] || review.profession_uz;

  return (
    <article
      style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      className="relative cursor-pointer rounded-[32px] p-6 transition-all duration-300 shadow-effect border-2 border-[rgba(255,255,255,0.13)] backdrop-blur-[12px]"
    >
      <div className="relative z-[10] space-y-8 gap-4">
        <div className="w-[64px] h-[64px] bg-[rgba(255,255,255,0.10)] p-[20px] rounded-full border-r border-l">
          <Image src={Frame} alt="Frame" />
        </div>
        <p className="mt-4 text-[#FFFFFF] font-inter text-[14px] font-[400] line-clamp-2">{text}</p>
        <div className="flex gap-4">
          <img src={review.image} alt={profession} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="text-[14px] font-inter font-[400] text-white">{profession}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
