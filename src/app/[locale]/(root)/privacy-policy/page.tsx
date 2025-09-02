import BackButton from "@/src/components/btn/BackBtn";
import { useTranslations } from "next-intl";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("privacy-policy");
  return (
    <section className="container md:mt-[124px] mt-[104px] ">
      <div className="mb-10">
        <BackButton />
      </div>
      <div className="m-auto md:p-6 p-4 rounded-2xl max-w-4xl smd:bg-white smd:shadow-xl lg:mb-[64px] md:mb-[44px] mb-[24px]">
        <h1 className="font-inter font-bold md:text-[28px] nx:text-[24px] text-[18px] leading-[130%] md:pb-[24px] pb-[16px]">
          {t("subtitle")}
        </h1>
        <div className="md:space-y-4 space-y-3">
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title1")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title2")}
          </p>

          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title3")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title4")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title5")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title6")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title7")}
          </p>
          <p className="font-inter font-normal leading-[140%] text-[14px]">
            {t("title8")}
          </p>
        </div>
      </div>
    </section>
  );
}
