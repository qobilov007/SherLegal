"use client";

import Image from "next/image";
import button from "../../../../../../public/icons/buttonvideoAcademy.svg";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Video() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 500);
  };

  return (
    <section className="container">
      <div className="relative bg-academyVideo bg-no-repeat bg-center bg-cover w-full md:h-[500px] sm:h-[350px] h-[240px] lg:my-[52px] my-[32px] rounded-[40px] flex items-center justify-center">
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
          <div
            className={`fixed inset-0 z-[111] flex items-center justify-center transition-opacity duration-300 ${
              closing ? "opacity-0" : "opacity-100"
            } bg-black/60`}
          >
            <button
              onClick={handleClose}
              className="absolute md:top-[40px] top-[100px] right-[10px] border text-white rounded-full p-2"
            >
              <X className="md:w-6 md:h-6 w-4 h-4" />
            </button>

            <div
              className={`relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 ${
                closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            >
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
