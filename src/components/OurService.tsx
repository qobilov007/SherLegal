"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/page";
import BtnIcon from "../../public/images/Button Icon.svg"

export default function ServicesSection() {
    return (
        <div className="bg-[#F9F9F9]">
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-[40px] font-bold font-inter text-gray-900">Our services</h2>
                        <p className="text-[#000] mt-2 text-[20px]">
                            Solving Problems for Your Business in Tashkent and Across Uzbekistan
                        </p>
                    </div>
                    <Link
                        href="/services"
                    >
                        <button className="group boxshadow rounded-[1000px] bg-[#C61511] p-[16px]">
                            <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">All Services <Image src={BtnIcon} alt="BtnIcon" className="group-hover:rotate-[45deg] ease-linear duration-300"/></p>
                        </button>
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {services.map((service, index) => (
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
        </div>
    );
}
