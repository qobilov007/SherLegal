import Image from "next/image";
import Frame from "../../../public/images/fi_1155628.svg";

export default function ReviewMediaCard({
  name,
  role,
  text,
  img,
}: {
  name: string;
  role: string;
  text: string;
  img: string;
}) {
  return (
    <article
      style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      className="
          relative cursor-pointer rounded-[32px] p-2 
            transition-all duration-300 shadow-effect border-2 border-[rgba(255,255,255,0.13)] backdrop-blur-[12px]
        "
    >
      <div className="relative z-[10] space-y-8 gap-4">
        <div className="w-[64px] h-[64px] bg-[rgba(255,255,255,0.10)] p-[20px] rounded-[1000px] border-r border-l ">
          <Image src={Frame} alt="Frame" />
        </div>
        <p className="mt-4 text-[#FFFFFF] font-inter text-[14px] font-[400]">
          {text}
        </p>
        <div className="flex gap-4">
          <img
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-[20px] text-[#fff] font-inter font-[600]">
              {name}
            </h4>
            <p className="text-[14px] font-inter font-[400] text-white">
              {role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
