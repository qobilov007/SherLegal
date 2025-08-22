import { servicess } from "@/constants/page";
import { useTranslations } from "next-intl";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function page({ params }: { params: { slug: string } }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations("Common");

    const serviceSlug = servicess.find((s) => s.slug === params.slug);

  return (
    <section>
      <article className="pt-[124px] container">
        <div className=" flex items-center max-w-max gap-2 py-3 px-7 rounded-full  mb-[24px] bg-[#FFFFFF] shadow-md cursor-pointer">
          <FaArrowLeftLong className="text-[#137BEA] w-5 h-[20px]" />
          <h1 className="font-medium font-inter text-[16px] leading-[130%]">
            {t("back")}
          </h1>
        </div>

        <div className="lg:mb-[88px] md:mb-[60px] nx:mb-[35px] mb-[20px]">
          <h1 className="font-bold font-inter md:text-[40px] leading-[130%] mb-[12px] ">
            {serviceSlug?.title}
          </h1>
          <p className="font-normal font-inter text-[20px] leading-[130%]">{serviceSlug?.description}</p>
        </div>
      </article>
    </section>
  )
}
