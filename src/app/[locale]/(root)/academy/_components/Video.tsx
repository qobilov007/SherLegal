"use client";

import Image from "next/image";
import button from "../../../../public/icons/buttonvideoAcademy.svg";
import { useState } from "react";
import { X } from "lucide-react";

export default function Video() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-academyVideo bg-no-repeat bg-center bg-cover w-full h-[500px] container my-[52px] rounded-[40px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 rounded-[40px]"></div>

      <Image
        src={button}
        alt="buttonvideo"
        width={118}
        height={118}
        className="absolute z-10 animate-pulse-video cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-[40px] right-[250px] border text-white rounded-full p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/sDuqCsiFV7M?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
