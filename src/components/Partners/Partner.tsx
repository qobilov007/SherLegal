"use client";

import Image from "next/image";
import { Partner } from "@/app.types";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PartnersSection({ partners }: { partners: Partner[] }) {
  const t = useTranslations("HomePage");
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="white">
      <section
        className="container mx-auto px-6 py-16 bg-white"
        data-aos="fade-up"
      >
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("partnertitle")}
          </h2>
          <p className="text-gray-600 mt-2">{t("partnerdes")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group cursor-pointer relative flex items-center justify-center h-28 p-4 bg-white border border-transparent hover:border-red-400 ease-linear duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Logo */}
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 transition"
              />

              {/* 🔴 Corner lines (doimiy) */}
              <span className="absolute top-0 left-0 w-4 h-[0.5px] bg-red-400"></span>
              <span className="absolute top-0 left-0 h-4 w-[0.5px] bg-red-400"></span>

              <span className="absolute top-0 right-0 w-4 h-[0.5px] bg-red-400"></span>
              <span className="absolute top-0 right-0 h-4 w-[0.5px] bg-red-400"></span>

              <span className="absolute bottom-0 left-0 w-4 h-[0.5px] bg-red-400"></span>
              <span className="absolute bottom-0 left-0 h-4 w-[0.5px] bg-red-400"></span>

              <span className="absolute bottom-0 right-0 w-4 h-[0.5px] bg-red-400"></span>
              <span className="absolute bottom-0 right-0 h-4 w-[0.5px] bg-red-400"></span>
            </div>
          ))}
        </div>
        <div className="max-md:block hidden"></div>
      </section>
    </div>
  );
}
