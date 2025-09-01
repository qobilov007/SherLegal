"use client";

import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function FooterPage() {
  const tt = useTranslations("FooterPage");
  const t = useTranslations("Navbarist");
  const locale = useLocale();
  return (
    <div className="w-full footer-overlay">
      <div className="container">
        <article className="relative z-[11] md:pt-24 pt-[24px] max-w-[900px] m-auto md:mb-[129px] sm:mb-10 mb-[40px]">
          <h3 className="font-inter font-bold md:text-[64px] text-[32px] md:leading-[76px] leading-[100%] text-white text-center mb-6">
            {tt("footertitle")}
          </h3>
          <p className="md:max-w-[68%] m-auto font-normal md:text-[16px] text-[14px] font-inter leading-[20px] text-center text-white/80 mb-6">
            {tt("footerdes")}
          </p>
          <article className="flex items-center gap-5 justify-center">
            <Link href={`/${locale}/about`}>
              <button className="px-7 md:py-4 py-3 rounded-full border-gray-400/40 border-l border-t border-r backdrop-blur-[50px] text-[16px] font-medium font-inter leading-[20px] transition-all duration-200 bg-gray-400/10 hover:bg-gray-400/20 text-white">
                {tt("footerbtn")}
              </button>
            </Link>
            <Link href={`/${locale}/contacts`}>
              <button className="px-6 md:py-4 py-3 rounded-full bg-[#C61511] hover:shadow-lg transition-all duration-200 hover:shadow-[#C61511]/50 text-[16px] font-medium font-inter leading-[20px] text-white">
                {tt("footerbtn1")}
              </button>
            </Link>
          </article>
        </article>
      </div>
      <div className="container relative z-[11] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-24 gap-10">
        <div className="max-md:order-3">
          <Image
            className="md:mb-6 mb-4 max-md:w-[150px] max-md:h-[50px]"
            src={Logo}
            alt="Logo SherLegal"
          />
          <p className="font-inter font-normal text-[16px] leading-[22px] text-white/60 md:mb-9 mb-4">
            {tt("footerdes")}
          </p>
          <div>
            <p className="font-inter font-normal text-[14px] uppercase text-white mb-4">
              {tt("footersocials")}
            </p>
            <article className="flex items-center gap-5 max-md:mb-[40px]">
              <Link
                href={"https://www.instagram.com/sherlegal_lf/"}
                target="_blank"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex justify-center items-center w-10 h-10 border-2 border-white/20 backdrop-blur-[10px] rounded-[70px]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M13.5 4.5V4.51M1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H13C14.0609 1 15.0783 1.42143 15.8284 2.17157C16.5786 2.92172 17 3.93913 17 5V13C17 14.0609 16.5786 15.0783 15.8284 15.8284C15.0783 16.5786 14.0609 17 13 17H5C3.93913 17 2.92172 16.5786 2.17157 15.8284C1.42143 15.0783 1 14.0609 1 13V5ZM6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href={"https://t.me/sherlegal"}
                target="_blank"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex justify-center items-center w-10 h-10 border-2 border-white/20 backdrop-blur-[10px] rounded-[70px]"
              >
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                  <path
                    d="M13 7L9 11L15 17L19 1L1 8L5 10L7 16L10 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/sherlegal/"}
                target="_blank"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex justify-center items-center w-10 h-10 border-2 border-white/20 backdrop-blur-[10px] rounded-[70px]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M5 8V13M5 5V5.01M9 13V8M13 13V10C13 9.46957 12.7893 8.96086 12.4142 8.58579C12.0391 8.21071 11.5304 8 11 8C10.4696 8 9.96086 8.21071 9.58579 8.58579C9.21071 8.96086 9 9.46957 9 10M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V3Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.facebook.com/sher.legal.uz/"}
                target="_blank"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex justify-center items-center w-10 h-10 border-2 border-white/20 backdrop-blur-[10px] rounded-[70px]"
              >
                <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
                  <path
                    d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.youtube.com/@sherlegal4053"}
                target="_blank"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex justify-center items-center w-10 h-10 border-2 border-white/20 backdrop-blur-[10px] rounded-[70px]"
              >
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                  <path
                    d="M1 1V17L14 9L1 1Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </div>
        <article className="flex items-start justify-between max-md:order-1">
          <ul>
            <p className="font-inter font-bold text-[14px] uppercase text-white mb-4">
              {tt("footercompany")}
            </p>
            <li>
              <Link
                href={`/${locale}/about`}
                className="flex items-center gap-2 group cursor-pointer mb-3"
              >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                    className="group-hover:fill-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100"
                  />
                </svg>
                <span className="text-white font-inter text-[14px] font-normal group-hover:text-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100">
                  {t("about")}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services`}
                className="flex items-center gap-2 group cursor-pointer mb-3"
              >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                    className="group-hover:fill-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100"
                  />
                </svg>
                <span className="text-white font-inter text-[14px] font-normal group-hover:text-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100">
                  {t("services")}
                </span>
              </Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer mb-3">
              <Link
                href={`/${locale}/team`}
                className="flex items-center gap-2 group cursor-pointer mb-3"
              >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                    className="group-hover:fill-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100"
                  />
                </svg>
                <span className="text-white font-inter text-[14px] font-normal group-hover:text-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100">
                  {t("ourteam")}
                </span>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col max-md:justify-between">
            <p className="font-inter w-[170px] font-bold text-[14px] uppercase text-white mb-4">
              {tt("footersupport")}
            </p>
            <li>
              <Link
                href={`/${locale}/terms-of-use`}
                className="flex items-center gap-2 group cursor-pointer mb-3"
              >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                    className="group-hover:fill-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100"
                  />
                </svg>
                <span className="text-white font-inter text-[14px] font-normal group-hover:text-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100">
                  Terms of use
                </span>
              </Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer mb-3">
              <Link
                href={`/${locale}/privacy-policy`}
                className="flex items-center gap-2 group cursor-pointer mb-3"
              >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                    className="group-hover:fill-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100"
                  />
                </svg>
                <span className="text-white font-inter text-[14px] font-normal group-hover:text-[#137BEA] transition-all duration-200 opacity-50 group-hover:opacity-100">
                  Privacy policy
                </span>
              </Link>
            </li>
          </ul>
        </article>
        <div className="p-5 max-md:order-2 rounded-3xl backdrop-blur-[20px] flex flex-col gap-5 border-2 border-[rgba(255,255,255,0.10)] md:mb-20">
          <article className="flex flex-col gap-2">
            <p className="font-inter font-normal text-[14px] text-white/40">
              {tt("foterphone")}
            </p>
            <a
              href="tel:+998981003344"
              aria-label="Phone number"
              className="font-inter font-medium text-white text-[16px]"
            >
              +998 (98) 100-33-44
            </a>
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-inter font-normal text-[14px] text-white/40">
              {tt("footeremail")}
            </p>
            <a
              href="mailto:info@sher.legal"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter font-medium text-white text-[16px]"
            >
              info@sher.legal
            </a>
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-inter font-normal text-[14px] text-white/40">
              {tt("footeraddress")}
            </p>
            <Link
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.303946%2C41.318330&mode=whatshere&whatshere%5Bpoint%5D=69.303883%2C41.318303&whatshere%5Bzoom%5D=17&z=16"
              aria-label="Location"
              target="_blank"
              className="font-inter font-medium text-white text-[16px]"
            >
              Adham Raxmat street 15, Tashkent city, Uzbekistan
            </Link>
          </article>
        </div>
      </div>
      <p className="container relative z-[11] w-full h-[1px] bg-white/20 rounded-full mb-5"></p>
      <p className="container relative z-[11] text-white/60 pb-[23px]">
        Copyright 2024 - “Sherlegal” LLC
      </p>
    </div>
  );
}
