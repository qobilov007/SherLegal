"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-28 md:pb-32 bg-[#080808]">
      {/* 🔴 Responsive Gradient */}
      <div
        className="
          absolute inset-0 
          -bottom-20 h-[280px] blur-[30px]           /* 📱 default (mobile) */
          sm:-bottom-28 sm:h-[380px] sm:blur-[50px]  /* 📱 sm ekranlar (640px+) */
          md:-bottom-32 md:h-[500px] md:blur-[70px]  /* 💻 md ekranlar (768px+) */
          lg:-bottom-40 lg:h-[700px] lg:blur-[100px] /* 🖥 lg ekranlar (1024px+) */
          bg-gradient-to-b from-[#C61511]/30 via-[#080808]/40 to-transparent
        "
      ></div>

      <div className="bgcolorr container relative left-0 max-lg:p-4 flex flex-col lg:flex-row items-center justify-between w-full bg-[#0653C9] lg:rounded-[36px] rounded-2xl">
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] px-4 sm:px-6 lg:pl-14 py-8 sm:py-10 lg:py-14">
          <h6 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-white mb-2 font-vk">
            Biz bilan bog‘laning
          </h6>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-4 sm:mb-6 lg:mb-9 font-vk">
            Savollaringizni yuboring va tez orada javob beramiz
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Location */}
            <a
              href="https://yandex.uz/maps/10335/tashkent/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-2xl cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-[8px] bg-[rgba(198,21,17,0.12)]">
                <Image
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/icons/Address Icon.svg"
                  alt="Location"
                  width={100}
                  height={100}
                />
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal text-opacity-[60%] text-white">
                  Manzil
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium text-white line-clamp-1">
                  Toshkent, O‘zbekiston
                </p>
              </article>
            </a>

            {/* Phone */}
            <a
              href="tel:+998712007007"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-2xl cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-[8px] bg-[rgba(198,21,17,0.12)]">
                <Image
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/icons/Address Icon.svg"
                  alt="Phone"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  Telefon
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium font-vk text-white line-clamp-1">
                  +998 (71) 200 70 07
                </p>
              </article>
            </a>


            {/* Email */}
            <a
              href="mailto:info@clamo.uz"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-2xl cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-[8px] bg-[rgba(198,21,17,0.12)]">
                <Image
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/icons/Address Icon.svg"
                  alt="Email"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  Email
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium font-vk text-white line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flexshrink w-[360px] py-6 px-4 sm:px-6 md:px-8 lg:mt-0 border border-[rgba(255,255,255,0.20)] smm:w-[360px] md:w-[500px] lg:absolute lg:right-16 h-auto lg:h-[550px] relative bg-black/70 z-100 lg:rounded-[36px] rounded-2xl">
          <article className="mb-5 sm:mb-6 md:mb-[26px]">
            <h5 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-vk font-bold leading-[120%] text-[#fff] mb-2 sm:mb-3">
              Aloqa formasi
            </h5>
            <p className="text-[#838CAF] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[130%] font-vk">
              Quyidagi ma’lumotlarni to‘ldiring va biz bilan bog‘laning
            </p>
          </article>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form yuborildi!");
            }}
          >
            {/* Full Name */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#fff]"
              >
                To‘liq ism
              </label>
              <input
                id="names"
                type="text"
                className="w-full bg-[rgba(255,255,255,0.10)] px-3 h-9 sm:h-10 rounded-lg text-[14px] sm:text-[15px] md:text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder="Ismingizni kiriting"
              />
            </article>

            {/* Organization */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#fff]"
              >
                Tashkilot
              </label>
              <input
                id="tashkilot"
                type="text"
                className="w-full bg-[rgba(255,255,255,0.10)] px-3 h-9 sm:h-10 rounded-lg text-[14px] sm:text-[15px] md:text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder="Tashkilot nomi"
              />
            </article>


            {/* Description */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6 flex flex-col">
              <label
                htmlFor="description"
                className="inline-flex mb-2 font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#fff]"
              >
                Description
              </label>
              <textarea
                id="description"
                className="bg-[rgba(255,255,255,0.10)] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] py-[9px] sm:py-[10px] md:py-[11px] pl-[10px] sm:pl-[12px] outline-none pr-[100px] sm:pr-[120px] md:pr-[150px] border border-transparent resize-none focus:border-[#C61511]"
                placeholder="Enter your description"
              ></textarea>
            </article>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="group flex items-center gap-1 text-[13px] sm:text-[14px] md:text-[15px] font-medium text-white px-4 sm:px-5 md:px-6 py-2 sm:py-[9px] md:py-[10px] rounded-lg bg-[#ce3325] hover:bg-[#d81717] transition-all duration-300"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
