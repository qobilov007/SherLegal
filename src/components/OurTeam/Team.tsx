"use client";
import Image from "next/image";
import { TeamsType } from "@/app.types";
import Link from "next/link";
import Teamm from "../../app/[locale]//(root)/team/teamm";
import BtnIcon from "../../../public/images/Button Icon.svg";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurTeam({ team }: { team: TeamsType[] }) {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="w-full overflow-hidden bg-black py-10 sm:py-12 md:py-16 team-overlay"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container">
        <p
          className="font-inter font-normal leading-[26px] text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("teamdes")}
        </p>
        <p
          className="w-full h-[1px] bg-white/30 mb-[30px]"
          data-aos="fade-up"
          data-aos-delay="200"
        ></p>
        <article
          className="flex max-smm:flex-col items-center justify-between mb-14 gap-4 relative z-[10]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h5 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
            {t("teamtitle")}
          </h5>
          <Link href={`/${locale}/team`}>
            <button className="group boxshadow md:inline-flex max-md:flex max-nx:py-[10px] rounded-[1000px] bg-[#C61511] p-[16px]">
              <p className="flex gap-[8px] items-center justify-between text-white max-smmmm:text-[16px] font-inter font-[600]">
                {t("teambtn")}
                <Image
                  src={BtnIcon}
                  alt="BtnIcon"
                  className="group-hover:rotate-[45deg] ease-linear duration-300"
                />
              </p>
            </button>
          </Link>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {team.slice(0, 6).map((team, id) => (
            <div
              key={id}
              data-aos="zoom-in"
              data-aos-delay={400 + id * 100}
              data-aos-duration="800"
            >
              <Teamm infoTeam={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
