"use client";
import Image from "next/image";
import BtnIcon from "../../../public/images/Button Icon.svg";
import Frame from "../../../public/images/calendar.svg";
import Link from "next/link";
import { NewsCard } from "@/app.types";
import { LuEye } from "react-icons/lu";
import { useLocale, useTranslations } from "next-intl";

export default function NewsSection({ news }: { news: NewsCard[] }) {
    const t = useTranslations("HomePage");
    const locale = useLocale();

    return (
        <section className="py-20 font-inter bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="lg:flex max-lg:hidden max-md:flex-col justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{t("newstitle")}</h2>
                        <p className="text-gray-600 max-w-xl mt-2">{t("newsdes")}</p>
                    </div>
                    <Link href={`/${locale}/news`}>
                        <button className="group md:inline-flex max-md:flex max-md:mx-auto max-md:mt-4 boxshadow rounded-[1000px] bg-[#C61511] p-[16px]">
                            <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">
                                {t("newsbtn")}{" "}
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
                <div className="max-lg:block hidden">
                    <div className="flex gap-16 max-smm:gap-4 items-center justify-evenly mb-8">
                        <h2 className="lg:text-[40px] text-[24px] max-smm:text-[18px] font-bold font-inter text-gray-900 md:text-[32px]">
                            {t("newstitle")}
                        </h2>
                        <Link href={`/${locale}/news`}>
                            <button className="group boxshadow max-md:w-auto rounded-full bg-[#C61511] p-[16px] max-smm:px-[6px] smm:py-[12px]">
                                <p className="flex gap-[8px] items-center justify-between text-white max-md:text-[10px] md:text-[20px] font-inter font-[600]">
                                    {t("newsbtn")}{" "}
                                    <Image
                                        src={BtnIcon}
                                        alt="BtnIcon"
                                        className="group-hover:rotate-[45deg] ease-linear duration-300 max-md:w-[20px]"
                                    />
                                </p>
                            </button>
                        </Link>
                    </div>
                    <p className="text-[#000] mt-2 max-smm:text-[15px] text-[20px] text-center mb-8 mx-auto">
                        {t("newsdes")}
                    </p>
                </div>

                {/* 3 ta card */}
                <div className="flex max-lg:flex-col gap-8 mb-12">
                    <CardNormal item={news[0]} locale={locale} />
                    <CardBackground item={news[1]} locale={locale} />
                    <CardNormal item={news[2]} locale={locale} />
                </div>

                {/* Other News */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {news.slice(3, 7).map((item) => (
                        <CardOverlay key={item.id} item={item} locale={locale} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* Oddiy card */
function CardNormal({ item, locale }: { item: NewsCard; locale: string }) {
    const title =
        (item[`title_${locale}` as keyof NewsCard] as string) || item.title;
    const excerpt =
        (item[`content_${locale}` as keyof NewsCard] as string) || item.content;


    const createdAt = new Date(item.created_at);

    const date = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(createdAt);

    return (
        <div className="cursor-pointer group max-lg:h-[500px] flex flex-col rounded-2xl w-[278px] max-lg:w-full h-[379px] overflow-hidden shadow-md hover:shadow-xl transition-all bg-white">
            <div className="relative w-full h-[320px] overflow-hidden">
                <Image
                    src={item.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col flex-1 p-6">
                <h3 className="font-semibold text-gray-900 text-lg line-clamp-2 group-hover:text-red-600">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">{excerpt?.replace(/<[^>]+>/g, "")}</p>
                <div className="flex items-center mt-5 text-xs text-gray-500 border-t pt-3 gap-2">
                    <span className="flex py-[6px] px-[12px] items-center gap-[6px] rounded-[100px] border-[#EEE] border-[1px]">
                        <Image src={Frame} alt="Frame" /> {date}
                    </span>
                    <span className="flex py-[6px] px-[12px] items-center gap-[6px] rounded-[100px] border-[#EEE] border-[1px]">
                        <LuEye className="text-[#6C6C6C]" /> {item.views}
                    </span>
                </div>
            </div>
        </div>
    );
}

/* Katta background card */
function CardBackground({ item, locale }: { item: NewsCard; locale: string }) {
    const title =
        (item[`title_${locale}` as keyof NewsCard] as string) || item.title;

        const createdAt = new Date(item.created_at);

    const date = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(createdAt);


    return (
        <div className="cursor-pointer relative rounded-2xl overflow-hidden shadow-xl group h-[379px] max-lg:h-[500px] w-[520px] max-lg:w-full flex items-end">
            <Image
                src={item.image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold leading-snug mb-3 group-hover:text-red-400">
                    {title}
                </h3>
                <div className="flex gap-4 items-center mt-5 text-xs text-white">
                    <span className="flex py-[6px] px-[12px] items-center gap-[6px] rounded-[100px] border-[rgba(238,238,238,0.38)] border-[1px]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.5 8.33333H17.5M5.83333 2.5V4.16667M14.1667 2.5V4.16667M5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V6.83333C17.5 5.89991 17.5 5.4332 17.3183 5.07668C17.1586 4.76308 16.9036 4.50811 16.59 4.34832C16.2335 4.16667 15.7668 4.16667 14.8333 4.16667H5.16667C4.23325 4.16667 3.76654 4.16667 3.41002 4.34832C3.09641 4.50811 2.84144 4.76308 2.68166 5.07668C2.5 5.4332 2.5 5.89991 2.5 6.83333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        {date}
                    </span>
                    <span className="flex py-[6px] px-[12px] items-center gap-[6px] rounded-[100px] border-[rgba(238,238,238,0.38)] border-[1px]">
                        <LuEye className="text-[white]" /> {item.views}
                    </span>
                </div>
            </div>
        </div>
    );
}

/* Overlay card */
function CardOverlay({ item, locale }: { item: NewsCard; locale: string }) {
    const title =
        (item[`title_${locale}` as keyof NewsCard] as string) || item.title;

    return (
        <div className="cursor-pointer relative rounded-xl overflow-hidden group h-[260px] shadow-md hover:shadow-xl">
            <Image
                src={item.image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h4 className="text-white text-sm font-semibold line-clamp-2 group-hover:text-red-400">
                    {title}
                </h4>
            </div>
        </div>
    );
}
