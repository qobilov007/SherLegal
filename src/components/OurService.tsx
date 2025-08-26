"use client";

import Image from "next/image";
import Link from "next/link";
import { servicess } from "@/constants/page";
import BtnIcon from "../../public/images/Button Icon.svg"
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function ServicesSection() {
    const t = useTranslations("HomePage")
    const locale = useLocale()
    return (
        <div className="">
            <section className="container px-6 py-16">
                <div className="lg:flex max-lg:hidden  justify-between items-center mb-10">
                    <div>
                        <h2 className="lg:text-[40px] text-[24px] font-bold font-inter text-gray-900 md:text-[32px]">{t("servicetitle")}</h2>
                        <p className="text-[#000] mt-2 text-[20px]">
                            {t("servicedes")}
                        </p>
                    </div>
                    <Link
                        href={`/${locale}/services`}
                    >
                        <button className="group boxshadow md:inline-flex max-md:flex max-md:mx-auto max-md:mt-4 rounded-[1000px] bg-[#C61511] p-[16px]">
                            <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">{t("servicebtn")} <Image src={BtnIcon} alt="BtnIcon" className="group-hover:rotate-[45deg] ease-linear duration-300" /></p>
                        </button>
                    </Link>
                </div>
                <div className="max-lg:block hidden">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="lg:text-[40px] text-[24px] max-smm:text-[16px] font-bold font-inter text-gray-900 md:text-[32px]">{t("servicetitle")}</h2>
                        <Link
                            href={`/${locale}/services`}
                        >
                            <button className="group boxshadow max-md:w-auto rounded-full bg-[#C61511] py-[14px] px-[6px] smm:p-[16px]">
                                <p className="flex gap-[8px] items-center justify-between text-white max-md:text-[10px] md:text-[20px] font-inter font-[600]">{t("servicebtn")} <Image src={BtnIcon} alt="BtnIcon" className="group-hover:rotate-[45deg] ease-linear duration-300 max-md:w-[20px]" /></p>
                            </button>
                        </Link>
                    </div>
                    <p className="text-[#000] mt-2 text-[20px] max-smm:text-[15px] text-center mb-8 mx-auto">
                        {t("servicedes")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {servicess.slice(0,6).map((service, index) => (
                        <Link href={`/${locale}/services/${service.slug}`} key={index}>
                            <div
                                key={index}
                                className="group cursor-pointer h-[200px] max-md:h-[250px] max-sm:h-[200px] rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#fff] ease-linear duration-300"
                            >
                                <div className="flex items-center gap-10">
                                    <div className=" mb-4 min-w-[80px] border-[2px] ease-linear duration-300 h-[80px] p-[16px] rounded-[24px] group-hover:border-[#137BEA] ">
                                        <Image
                                            src={service.icon}
                                            alt="Service"
                                            width={48}
                                            height={48}
                                            className="w-full h-full flex items-center justify-center rounded-full text-2xl mb-4"
                                        />
                                    </div>
                                    <h3 className="text-[24px] line-clamp-2 font-semibold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
