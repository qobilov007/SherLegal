import { servicess } from "@/constants/page";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function page({ params }: { params: { slug: string } }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("Common");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  const serviceSlug = servicess.find((s) => s.slug === params.slug);

  return (
    <section>
      <article className="md:pt-[124px] pt-[100px] container">
        <Link href={`/${locale}/services`}>
          <div className=" flex items-center max-w-max gap-2 py-3 px-7 rounded-full  mb-[24px] bg-[#FFFFFF] shadow-md cursor-pointer">
            <FaArrowLeftLong className="text-[#137BEA] w-5 h-[20px]" />
            <h1 className="font-medium font-inter text-[16px] leading-[130%]">
              {t("back")}
            </h1>
          </div>
        </Link>

        <div className="md:mb-[40px] sm:mb-5 mb-3">
          <h1 className="font-bold font-inter md:text-[40px] sm:text-[32px] text-[24px] leading-[130%] md:mb-[12px] mb-1">
            {serviceSlug?.title}
          </h1>
          <p className="font-normal font-inter md:text-[20px] text-[14px] leading-[130%]">
            {serviceSlug?.description}
          </p>
        </div>

        <div>
          <h1 className="font-inter font-bold md:text-[32px] sm:text-[26px] text-[22px] leading-[120%] text-[#080808] md:pb-[32px] pb-4">
            What we offer?
          </h1>
          <article className="md:space-y-5 space-y-2.5">
            <div className="md:p-[24px] bg-[#FFFFFF] shadow-sm md:rounded-[12px] md:border md:border-transparen">
              <h1 className="font-bold font-inter md:text-[24px] text-[20px] leading-[130%] text-[#080808] md:pb-[12px] pb-1.5">
                {serviceSlug?.title1}
              </h1>
              <p className="md:text-[14px] text-[12px] font-normal font-inter text-[#080808] leading-[130%]">
                {serviceSlug?.description1}
              </p>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
}
