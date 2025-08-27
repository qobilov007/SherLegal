"use client";

import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormType, useContactSchema } from "@/lib/zod";
import { useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const contactSchema = useContactSchema();
  const t = useTranslations("ContactPage");
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  const onSubmit = async (data: ContactFormType) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      toast.success("Xabaringiz muvaffaqiyatli yuborildi ✅");

      reset(); // 🔥 inputlarni tozalash
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi ❌");
    }
  };
  return (
    <div className="relative pb-20 xl:pt-16 pt-0 sm:pb-28 md:pb-32 bg-[rgba(255,255,255,1)]">
      <div className="bgcolorr container relative left-0 max-lg:p-4 xl:flex max-xl:flex-col items-center justify-between w-full bg-[#0653C9] lg:rounded-[36px] rounded-2xl">
        <div className="w-full lg:w-[450px] px-4 sm:px-6 lg:pl-14 sm:py-6 lg:py-14">
          <h6 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-semibold text-black mb-2 font-vk">
            {t("contacttitle")}
          </h6>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-black text-opacity-[60%] mb-4 sm:mb-6 lg:mb-9 font-vk">
            {t("contacttitdes")}
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Location */}
            <a
              href="mailto:info@clamo.uz"
              className="group bg-[rgba(243,243,243,1)] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-full cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-full bg-[rgba(19,123,234,0.12)]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 20.5L3.5 17.5V4.5L9.5 7.5M9.5 20.5L15.5 17.5M9.5 20.5V7.5M15.5 17.5L21.5 20.5V7.5L15.5 4.5M15.5 17.5V4.5M9.5 7.5L15.5 4.5"
                    stroke="#137BEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-vk text-opacity-[60%] text-black">
                  {t("contactaddress")}
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium font-vk text-black line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>

            {/* Phone */}
            <a
              href="mailto:info@clamo.uz"
              className="group bg-[rgba(243,243,243,1)] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-full cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-full bg-[rgba(19,123,234,0.12)]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.55 5.5C13.5268 5.69057 14.4244 6.16826 15.1281 6.87194C15.8318 7.57561 16.3095 8.47326 16.5 9.45M12.55 1.5C14.5793 1.72544 16.4716 2.63417 17.9163 4.07701C19.3609 5.51984 20.2721 7.41101 20.5 9.44M17 20.5C8.43959 20.5 1.5 13.5604 1.5 5C1.5 4.61378 1.51413 4.23086 1.54189 3.85173C1.57375 3.41662 1.58968 3.19907 1.7037 3.00103C1.79814 2.83701 1.9655 2.68146 2.13598 2.59925C2.34181 2.5 2.58188 2.5 3.06201 2.5H5.87932C6.28308 2.5 6.48496 2.5 6.65802 2.56645C6.81089 2.62515 6.94701 2.72049 7.05442 2.8441C7.17601 2.98403 7.245 3.17376 7.38299 3.55321L8.54911 6.76005C8.70965 7.20153 8.78992 7.42227 8.77629 7.6317C8.76427 7.81637 8.70125 7.99408 8.59423 8.14506C8.47286 8.31628 8.27145 8.43713 7.86863 8.67882L6.5 9.5C7.7019 12.1489 9.85014 14.2999 12.5 15.5L13.3212 14.1314C13.5629 13.7285 13.6837 13.5271 13.8549 13.4058C14.0059 13.2988 14.1836 13.2357 14.3683 13.2237C14.5777 13.2101 14.7985 13.2904 15.24 13.4509L18.4468 14.617C18.8262 14.755 19.016 14.824 19.1559 14.9456C19.2795 15.053 19.3749 15.1891 19.4335 15.342C19.5 15.515 19.5 15.7169 19.5 16.1207V18.938C19.5 19.4181 19.5 19.6582 19.4007 19.864C19.3185 20.0345 19.163 20.2019 18.999 20.2963C18.8009 20.4103 18.5834 20.4262 18.1483 20.4581C17.7691 20.4859 17.3862 20.5 17 20.5Z"
                    stroke="#137BEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-vk text-opacity-[60%] text-black">
                  {t("contactphone")}
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium font-vk text-black line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>

            {/* Email */}
            <a
              href="mailto:info@clamo.uz"
              className="group bg-[rgba(243,243,243,1)] transition-all duration-200 border border-opacity-[16%] border-white gap-2 inline-flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-full cursor-pointer"
            >
              <article className="p-2 sm:p-[9px] flex items-center gap-[10px] rounded-full bg-[rgba(19,123,234,0.12)]">
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 5.40027C3.12072 7.23516 6.5418 8.5 10.5 8.5C14.4582 8.5 17.8793 7.23516 19.5 5.40027M1.5 5.40027V12.3C1.5 13.4201 1.5 13.9802 1.71799 14.408C1.90973 14.7843 2.21569 15.0903 2.59202 15.282C3.01984 15.5 3.57989 15.5 4.7 15.5H16.3C17.4201 15.5 17.9802 15.5 18.408 15.282C18.7843 15.0903 19.0903 14.7843 19.282 14.408C19.5 13.9802 19.5 13.4201 19.5 12.3V5.40027M1.5 5.40027V4.7C1.5 3.57989 1.5 3.01984 1.71799 2.59202C1.90973 2.21569 2.21569 1.90973 2.59202 1.71799C3.01984 1.5 3.57989 1.5 4.7 1.5H16.3C17.4201 1.5 17.9802 1.5 18.408 1.71799C18.7843 1.90973 19.0903 2.21569 19.282 2.59202C19.5 3.01984 19.5 3.57989 19.5 4.7V5.40027"
                    stroke="#137BEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </article>
              <article>
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal font-vk text-opacity-[60%] text-black">
                  {t("contactemail")}
                </span>
                <p className="text-[13px] sm:text-[15px] md:text-[16px] font-medium font-vk text-black line-clamp-1">
                  info@clamo.uz
                </p>
              </article>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flexshrink w-full lg:w-[550px] max-md:py-0 py-6 px-8 sm:px-6 md:px-8 lg:mt-0 border xl:absolute xl:right-16 h-auto relative bg-[#fff] border-[rgba(255,255,255,0.5)] z-100 xl:rounded-[36px] rounded-2xl">
          <article>
            <h5 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-vk font-bold leading-[120%] text-[black] mb-2 sm:mb-3">
              {t("contacttitle1")}
            </h5>
            <p className="text-[#838CAF] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[130%] font-vk">
              {t("contactdess")}
            </p>
          </article>

          <form className="pb-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6">
              <label
                htmlFor="names"
                className="inline-flex mb-2 pt-[32px] font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#black]"
              >
                {t("contactname")}
              </label>
              <input
                id="names"
                {...register("names")}
                type="text"
                className="w-full bg-[rgba(243,243,243,1)] mb-1 focus:bg-white px-3 h-9 sm:h-10 rounded-[16px] text-[14px] sm:text-[15px] md:text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder={t("enterName")}
              />
              {errors.names && (
                <p className="text-red-500 text-[12px] ml-[6px]">
                  {errors.names.message}
                </p>
              )}
            </article>

            {/* Organization */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6">
              <label
                htmlFor="tashkilot"
                className="inline-flex mb-2 font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[black]"
              >
                {t("contacttash")}
              </label>
              <input
                id="tashkilot"
                {...register("tashkilot")}
                type="text"
                className="w-full bg-[rgba(243,243,243,1)] mb-1 focus:bg-white px-3 h-9 sm:h-10 rounded-[16px] text-[14px] sm:text-[15px] md:text-[16px] outline-none border border-transparent focus:border-[#C61511]"
                placeholder={t("organizationName")}
              />
              {errors.tashkilot && (
                <p className="text-red-500 text-[12px] ml-[6px]">
                  {errors.tashkilot.message}
                </p>
              )}
            </article>

            {/* Description */}
            <article className="w-full mb-4 sm:mb-5 md:mb-6 flex flex-col">
              <label
                htmlFor="description"
                className="inline-flex mb-2 font-vk text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#black]"
              >
                {t("contactdes")}
              </label>
              <textarea
                id="description"
                {...register("description")}
                className="bg-[rgba(243,243,243,1)] mb-1 focus:bg-white rounded-[16px] sm:rounded-[16px] md:rounded-[16px] py-[11px] sm:py-[11px] md:py-[11px] pl-[10px] sm:pl-[12px] outline-none pr-[100px] sm:pr-[120px] md:pr-[150px] border border-transparent resize-none focus:border-[#C61511]"
                placeholder={t("placeholderDescription")}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-[12px] ml-[6px]">
                  {errors.description.message}
                </p>
              )}
            </article>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="group flex items-center gap-1 text-[13px] sm:text-[14px] md:text-[15px] font-medium text-white px-4 sm:px-5 md:px-6 py-2 sm:py-[9px] md:py-[10px] rounded-lg bg-[rgba(198,21,17,1)] hover:bg-[#d81717] transition-all duration-300"
              >
                {t("contactbtn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
