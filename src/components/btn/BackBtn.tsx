import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function BackButton() {  
    const t = useTranslations("Common");
    const locale = useLocale();
    return (
        <div>
            <Link href={`/${locale}/services`}>
                <div className=" flex items-center max-w-max gap-2 py-1.5 md:py-3 px-7 rounded-full  mb-[24px] bg-[#FFFFFF] shadow-md cursor-pointer">
                    <FaArrowLeftLong className="text-[#137BEA] w-5 h-[20px]" />
                    <h1 className="font-medium font-inter text-[16px] leading-[130%]">
                        {t("back")}
                    </h1>
                </div>
            </Link>
        </div>
    )
}