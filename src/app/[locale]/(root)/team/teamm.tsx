import { TeamsType } from "@/src/app.type";
import Image from "next/image";

interface TeamProps {
  infoTeam: TeamsType;
}

export default function Teams({ infoTeam }: TeamProps) {
  return (
    <div className="relative top-0 z-[10] left-0 w-full h-[500px] rounded-[32px] bg-blue-500 overflow-hidden">
      <Image
        className="w-full h-full max-md:h-[700px] object-cover"
        src={infoTeam.teamImg}
        alt={infoTeam.desc}
      />
      <div className="w-full h-full absolute bottom-[20px] left-0 flex items-end justify-center ">
        <div className="w-full mx-[20px] rounded-2xl p-3 border-y border-white/60 backdrop-blur-[10px]">
          <h6 className="mb-[12px] font-inter text-2xl font-bold text-white">
            {infoTeam.names}
          </h6>
          <p className="text-white font-inter font-normal text-[16px] leading-[20px]">
            {infoTeam.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
