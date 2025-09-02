"use client";
import { useTranslations } from "next-intl"; // BEGIN: Add missing import
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MenyuLanguage from "./_components/MenyuLanguage";
import { useLocale } from "next-intl";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navbarist");
  const tt = useTranslations("FooterPage");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scrollni bloklash
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // scrollni o‘chiradi
    } else {
      document.body.style.overflow = "auto"; // qaytadan yoqadi
    }
  }, [isMenuOpen]);

  //sahifani tekshirish agar contacts yoki services bo'lsa fon qora
  const forceBlack =
    pathname === `/${locale}/terms-of-use` ||
    pathname === `/${locale}/privacy-policy` ||
    pathname === `/${locale}/contacts` ||
    pathname === `/${locale}/services` ||
    pathname.startsWith(`/${locale}/services/`) ||
    pathname === `/${locale}/news` ||
    pathname.startsWith(`/${locale}/news`);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-[99] transition-colors duration-300 ${
          scrolled || forceBlack ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          {/* Burger menu */}
          <div className="flex items-center gap-2">
            <article className="smd:hidden flex items-center justify-center   w-[30px] h-[30px] rounded-full border-r border-l backdrop-blur-md bg-white/10 border-[white]/60">
              <Menu
                className=" stroke-white cursor-pointer w-4 h-3"
                onClick={() => setIsMenuOpen(true)}
              />
            </article>
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <svg
                width="150"
                height="50"
                viewBox="0 0 150 50"
                fill="none"
                className="md:w-[140px] w-[90px]"
              >
                <rect width="150" height="50" fill="url(#pattern0_2001_297)" />
                <defs>
                  <pattern
                    id="pattern0_2001_297"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_2001_297"
                      transform="scale(0.00666667 0.02)"
                    />
                  </pattern>
                  <image
                    id="image0_2001_297"
                    width="150"
                    height="50"
                    preserveAspectRatio="none"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </Link>
          </div>

          {/* Menu */}
          <ul className="hidden smd:flex items-center gap-6 text-white font-inter">
            <li>
              <Link
                className="font-inter font-medium text-[14px]"
                href={`/${locale}/about`}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                className="font-inter font-medium text-[14px]"
                href={`/${locale}/services`}
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                className="font-inter font-medium text-[14px]"
                href={`/${locale}/team`}
              >
                {t("ourteam")}
              </Link>
            </li>
            <li>
              <Link
                className="font-inter font-medium text-[14px]"
                href={`/${locale}/academy`}
              >
                {t("academy")}
              </Link>
            </li>
            <li>
              <Link
                className="font-inter font-medium text-[14px]"
                href={`/${locale}/contacts`}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="hidden smd:flex">
              <MenyuLanguage />
            </div>
            {/* Contact button */}
            <Link
              href={`/${locale}/contacts`}
              className="px-5 py-2 rounded-full border-y backdrop-blur-sm border-[white]/40 text-white bg-[#FFFFFF0F]/10 hover:bg-[#FFFFFF0F]/20 transition"
            >
              Contact
            </Link>
          </div>
        </div>
        <hr className={`${isMenuOpen ? "block opacity-50" : "hidden"}`} />
      </nav>

      {/* Fullscreen menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-[100] bg-black/70 h-screen w-full"
        ></div>
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 z-[100] w-[70%] h-screen transition-all duration-200 ease-in-out bg-black shadow-md smd:hidden
        ${isMenuOpen ? "left-0 opacity-100" : "  -left-[700px] opacity-0"}

        `}
      >
        <div className="container px-5 pt-[40px] overflow-y-hidden h-screen flex flex-col justify-between">
          <div>
            <div className=" flex items-center justify-between mb-6 ">
              <MenyuLanguage />
              <article className="smd:hidden flex items-center justify-center w-[40px] h-[40px] rounded-full border-r border-l backdrop-blur-md bg-white/10 border-[white]/60">
                <X
                  className=" stroke-white cursor-pointer w-5 h-5"
                  onClick={() => setIsMenuOpen(false)}
                />
              </article>
            </div>
            <ul className="flex flex-col gap-4 mb-14">
              <li className="text-white">
                <Link
                  href={`/${locale}/about`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("about")}
                </Link>
              </li>
              <hr className=" opacity-35" />
              <li className="text-white">
                <Link
                  href={`/${locale}/services`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("services")}
                </Link>
              </li>
              <hr className=" opacity-35" />
              <li className="text-white">
                <Link
                  href={`/${locale}/team`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("ourteam")}
                </Link>
              </li>
              <hr className=" opacity-35" />
              <li className="text-white">
                <Link
                  href={`/${locale}/academy`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("academy")}
                </Link>
              </li>
              <hr className=" opacity-35" />
              <li className="text-white">
                <Link
                  href={`/${locale}/contacts`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="relative pb-[100px]">
              <p className="font-inter font-normal text-[14px] uppercase text-white mb-4">
                {tt("footersocials")}
              </p>
              <article className="flex items-center nx:gap-5 gap-1 absolute z-10">
                <Link
                  href={"https://www.instagram.com/sherlegal_lf/"}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 backdrop-blur-[150px] bg-white/10 rounded-[70px]"
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
                  className="flex justify-center items-center w-10 h-10 backdrop-blur-[150px] bg-white/10 rounded-[70px]"
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
                  className="flex justify-center items-center w-10 h-10 backdrop-blur-[150px] bg-white/10 rounded-[70px]"
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
                  className="flex justify-center items-center w-10 h-10  backdrop-blur-[150px] bg-white/10 rounded-[70px]"
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
                  className="flex justify-center items-center w-10 h-10  backdrop-blur-[150px] bg-white/10 rounded-[70px]"
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
            <div className="relative">
              <div className=" bg-white/70 w-full h-[255px] -z[1] absolute -bottom-[100px]  blur-[220px]"></div>

              <div className=" bg-red-700 w-full h-[255px] absolute  blur-[220px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
