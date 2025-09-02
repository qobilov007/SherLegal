"use client";

import Image from "next/image";
import Link from "next/link";
import BtnIcon from "../../../public/images/Button Icon.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ServiceItems } from "@/app.types";
// import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection({
  service,
}: {
  service: ServiceItems[];
}) {
  const t = useTranslations("HomePage");
  const locale = useLocale();
//   useEffect(() => {
//     AOS.init({
//       once: true,
//       duration: 1000,
//       easing: "ease-in-out",
//     });
//   }, []);

  return (
    <div className="">
      <section className="container px-6 py-16">
        {/* Desktop header */}
        <div
          className="lg:flex max-lg:hidden  justify-between items-center mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <h2
              className="lg:text-[40px] text-[24px] font-bold font-inter text-gray-900 md:text-[32px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("servicetitle")}
            </h2>
            <p
              className="text-[#000] mt-2 text-[20px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("servicedes")}
            </p>
          </div>
          <Link href={`/${locale}/services`}>
            <button
              className="group boxshadow md:inline-flex max-md:flex max-md:mx-auto max-md:mt-4 rounded-[1000px] bg-[#C61511] p-[16px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">
                {t("servicebtn")}{" "}
                <Image
                  src={BtnIcon}
                  alt="BtnIcon"
                  className="group-hover:rotate-[45deg] ease-linear duration-300"
                />
              </p>
            </button>
          </Link>
        </div>

        {/* Mobile header */}
        <div
          className="max-lg:block hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-inter max-smmmm:text-[20px] font-bold text-[28px] md:text-[40px] max-smmmm:leading-[25px] leading-[36px] md:leading-[48px]">
              {t("servicetitle")}
            </h2>
            <Link href={`/${locale}/services`}>
              <button className="group boxshadow md:inline-flex max-md:flex max-nx:py-[10px] rounded-[1000px] bg-[#C61511] p-[16px]">
                <p className="flex gap-[8px] items-center justify-between text-white max-smmmm:text-[16px] font-inter font-[600]">
                  {t("servicebtn")}{" "}
                  <Image
                    src={BtnIcon}
                    alt="BtnIcon"
                    className="group-hover:rotate-[45deg] ease-linear duration-300"
                  />
                </p>
              </button>
            </Link>
          </div>
          <p
            className="text-[#000] mt-2 text-[20px] max-smm:text-[15px] text-center mb-8 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("servicedes")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {service.slice(0, 6).map((item, index) => {
            // Locale ga qarab name / description olish
            const name =
              (item[`name_${locale}` as keyof ServiceItems] as string) ||
              item.name;
            const description =
              (item[`description_${locale}` as keyof ServiceItems] as string) ||
              item.description;

            return (
              <Link href={`/${locale}/services/${item.slug}`} key={index}>
                <div
                  className="group cursor-pointer h-[200px] max-md:h-[250px] max-sm:h-[200px] rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#fff] ease-linear duration-300"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                  data-aos-duration="800"
                >
                  <div className="flex items-center gap-10">
                    <div className="mb-4 min-w-[80px] max-md:min-w-[70px] max-md:max-w-[70px] border-[2px] ease-linear duration-300 h-[80px] p-[16px] max-md:h-[70px] rounded-[24px] group-hover:border-[#137BEA]">
                      <Image
                        src={item.icon}
                        alt="Service"
                        width={48}
                        height={48}
                        className="w-full h-full max-md:flex items-center justify-center rounded-full text-2xl mb-4"
                      />
                    </div>
                    <h3 className="text-[24px] max-md:text-[18px] line-clamp-2 font-semibold text-gray-900 mb-2">
                      {name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
