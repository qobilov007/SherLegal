"use client";

import { TeamsType } from "@/app.types";
import Image from "next/image";
import { useLocale } from "next-intl";

interface TeamProps {
  infoTeam: TeamsType;
}

export default function Teams({ infoTeam }: TeamProps) {
  const locale = useLocale();

  // locale ga qarab backenddan name/desc olish
  const name =
    (infoTeam[`full_name_${locale}` as keyof TeamsType] as string) ||
    infoTeam.full_name;
  const description =
    (infoTeam[`description_${locale}` as keyof TeamsType] as string) ||
    infoTeam.description;

  return (
    <div className="relative top-0 z-[10] left-0 w-full h-[500px] rounded-[32px] border border-gray-400/30 overflow-hidden">
      <Image
        className="w-full h-full max-md:h-[700px] object-cover"
        src={infoTeam.image}
        alt={description}
        width={800}
        height={500}
      />
      <div className="w-full h-full absolute bottom-[20px] left-0 flex items-end justify-center ">
        <div className="w-full mx-[20px] rounded-2xl p-3 border-y border-white/60 backdrop-blur-[10px]">
          <h6 className="mb-[12px] font-inter text-2xl font-bold text-white">
            {name}
          </h6>
          <p className="text-white font-inter font-normal text-[16px] leading-[20px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
