"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="pt-16 pb-32 bg-[#080808]">
      <div className="bgcolorr container top-14 relative left-0 z-[40] max-lg:p-4 flex flex-col md:flex-row items-center justify-between w-full bg-[#0653C9] lg:rounded-[36px] rounded-2xl">
        {/* Contact Info */}
        <div className="w-full lg:w-[450px] md:pl-6 md:pr-6 py-10 lg:pl-14 lg:py-14">
          <h6 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white mb-2 font-vk">
            Biz bilan bog‘laning
          </h6>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-white text-opacity-[60%] mb-6 lg:mb-9 font-vk">
            Savollaringizni yuboring va tez orada javob beramiz
          </p>

          <div className="flex flex-col gap-3">
            {/* Location */}
            <a
              href="https://yandex.uz/maps/10335/tashkent/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex justify-center items-center rounded-lg">
                <Image
                  className="w-6 h-5"
                  src="/icons/Address Icon.svg"
                  alt="Location"
                  width={100}
                  height={100}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal text-opacity-[60%] text-white">
                  Manzil
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium text-white line-clamp-1">
                  Toshkent, O‘zbekiston
                </p>
              </article>
            </a>

            {/* Phone */}
            <a
              href="tel:+998712007007"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex items-center justify-center rounded-lg">
                <Image
                  className="w-6 h-5"
                  src="/icons/Address Icon.svg"
                  alt="Phone"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  Telefon
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium font-vk text-white line-clamp-1">
                  +998 (71) 200 70 07
                </p>
              </article>
            </a>

            {/* Email */}
            <a
              href="mailto:info@clamo.uz"
              className="group hover:bg-[white]/[8%] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-3 px-4 rounded-2xl cursor-pointer"
            >
              <article className="bg-white p-3 inline-flex rounded-lg">
                <Image
                  className="w-6 h-5"
                  src="/icons/Address Icon.svg"
                  alt="Email"
                  width={50}
                  height={50}
                />
              </article>
              <article>
                <span className="text-[13px] sm:text-[14px] font-normal font-vk text-opacity-[60%] text-white">
                  Email
                </span>
                <p className="text-[14px] sm:text-[16px] font-medium font-vk text-white line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>
          </div>
        </div>

        {/* Contact Form (pure static) */}
        <div className="flexshrink py-6 px-4 sm:px-8 lg:mt-0 border border-[rgba(255,255,255,0.20)] w-full sm:w-[500px] lg:absolute lg:right-16 h-auto lg:h-[550px] relative bg-[rgba(255,255,255,0.01)] lg:rounded-[36px] rounded-2xl">
          <article className="mb-[26px]">
            <h5 className="text-[24px] sm:text-[28px] font-vk lg:text-[32px] font-bold leading-[120%] text-[#fff] mb-3">
              Aloqa formasi
            </h5>
            <p className="text-[#838CAF] text-[14px] font-vk sm:text-[15px] lg:text-[16px] font-normal leading-[130%]">
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
            <article className="w-full mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 font-vk text-[14px] sm:text-[16px] font-medium text-[#fff]"
              >
                To‘liq ism
              </label>
              <input
                id="names"
                type="text"
                className="w-full bg-[rgba(255,255,255,0.10)] px-3 h-10 rounded-lg text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder="Ismingizni kiriting"
              />
            </article>

            {/* Organization */}
            <article className="w-full mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 font-vk text-[14px]  sm:text-[16px] font-medium text-[#fff]"
              >
                Tashkilot
              </label>
              <input
                id="tashkilot"
                type="text"
                className="w-full bg-[rgba(255,255,255,0.10)] px-3 h-10 rounded-lg text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder="Tashkilot nomi"
              />
            </article>

            {/* Phone Number */}
            <article className="w-full mb-6 flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="inline-flex mb-2 font-vk text-[14px] sm:text-[16px] font-medium text-[#fff]"
              >
                Description
              </label>
              <textarea className="bg-[rgba(255,255,255,0.10)] rounded-[16px] py-[11px] pl-[12px] pr-[150px] resize-none" placeholder="Enter your description">

              </textarea>
            </article>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="group flex items-center gap-1 text-[14px] font-medium text-white px-6 py-[10px] rounded-lg bg-[#0653C9] hover:bg-[#0761e9] transition-all duration-300"
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
