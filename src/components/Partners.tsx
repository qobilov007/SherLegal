"use client";

import Image from "next/image";
import { partners } from "@/constants/page";

export default function PartnersSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Trusted by our partners
        </h2>
        <p className="text-gray-600 mt-2">
          Supported by the trust of our partners, we have build strong relationships
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 space-x-[1px] space-y-[1px]">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="group cursor-pointer relative flex items-center justify-center h-28 p-4 bg-white border border-transparent hover:border-red-400 ease-linear duration-300"
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
            <span className="absolute top-0 left-0 w-4 h-[2px] bg-red-400"></span>
            <span className="absolute top-0 left-0 h-4 w-[2px] bg-red-400"></span>

            <span className="absolute top-0 right-0 w-4 h-[2px] bg-red-400"></span>
            <span className="absolute top-0 right-0 h-4 w-[2px] bg-red-400"></span>

            <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-red-400"></span>
            <span className="absolute bottom-0 left-0 h-4 w-[2px] bg-red-400"></span>

            <span className="absolute bottom-0 right-0 w-4 h-[2px] bg-red-400"></span>
            <span className="absolute bottom-0 right-0 h-4 w-[2px] bg-red-400"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
