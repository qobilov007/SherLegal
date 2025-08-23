"use client";

import Image from "next/image";
import { servicess } from "@/constants/page";
import Comments from "@/src/components/Reviews/Reviews";
import Partners from "@/src/components/Partners";
import { useTranslations } from "next-intl";

export default function ServicesSection() {

    const t = useTranslations("HomePage")

    return (
        <div className="bg-[#F9F9F9] pt-[68px]">
            <section className="container mx-auto px-6 py-16">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-[40px] font-bold font-inter text-gray-900">{t("servicetitle")}</h2>
                        <p className="text-[#000] mt-2 text-[20px]">
                            {t("servicedes")}
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {servicess.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#fff] ease-linear duration-300"
                        >
                            <div className="bg-[#fff] w-[80px] border-[2px] ease-linear duration-300 h-[80px] p-[16px] rounded-[24px] group-hover:border-[#137BEA] ">
                                <Image
                                    src={service.icon}
                                    alt="Service"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 flex items-center justify-center rounded-full text-2xl mb-4"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div>
                <Comments/>
            </div>
            <div>
                <Partners/>
            </div>
        </div>
    );
}
