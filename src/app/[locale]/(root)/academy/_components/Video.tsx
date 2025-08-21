"use client";

import Image from "next/image";
import button from "../../../../../../public/icons/buttonvideoAcademy.svg";
import { useState } from "react";
import { X } from "lucide-react";

export default function Video() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container">
      <div className="relative bg-academyVideo bg-no-repeat bg-center bg-cover w-full md:h-[500px] sm:h-[350px] h-[300px] lg:my-[52px] my-[32px] rounded-[40px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 rounded-[40px]"></div>

        <Image
          src={button}
          alt="buttonvideo"
          width={118}
          height={118}
          className="absolute z-10 animate-pulse-video cursor-pointer max-md:w-[80px] max-md:h-[80px]"
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
    </section>
  );
}
