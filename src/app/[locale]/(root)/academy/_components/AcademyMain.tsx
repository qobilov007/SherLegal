import Image from "next/image";
import BtnIcon from "../../../../../../public/images/Button Icon.svg";
import SherLegalLogo from "../../../../../../public/icons/sherlegallogo.svg";
import { useTranslations } from "next-intl";

export default function AcademyMain() {
  const t = useTranslations("AcademyPage");
  const sh = useTranslations("HomePage");

  return (
    <div className="bg-academy bg-no-repeat bg-center bg-cover w-full xl:h-screen overflow-hidden">
      <div className="pt-[200px] container flex max-md:flex-col max-md:items-center xl:justify-between">
        <div className="max-lg:mb-10">
          <article className="w-[150px] flex items-center gap-2 px-6 py-3 md:py-4 rounded-full glass2 border">
            <svg
              width="20"
              height="20"
              viewBox="0 0 9 13"
              fill="white"
              className="relative z-[5]"
            >
              <path
                d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                fill="white"
              />
            </svg>
            <span className="relative z-[4] font-inter text-white font-medium">
              {t("course")}
            </span>
          </article>
          <h1 className="md:text-[56px] sm:text-[46px] text-[40px] font-medium text-white font-inter leading-[120%] md:pb-4 pb-2">
            {t("legalCourse")}
          </h1>
          <h1 className="md:text-[56px] sm:text-[46px] text-[40px] font-medium text-white font-inter leading-[120%] flex items-center gap-3 pb-4">
            <p className="font-inter flex items-center justify-center md:text-[56px] sm:text-[46px] text-[40px] border-[2px] border-solid border-[#ff6363] md:h-[75px] h-[65px] px-3 rounded-[20px] bg-[linear-gradient(90deg,#CB1612_0%,#650B09_100%)] font-bold">
              {sh("homesher")}
            </p>
            {sh("homelegal")}
          </h1>
          <p className="text-white font-inter font-normal sm:text-[16px] text-[14px] leading-[130%] pb-6">
            {t("authorsTitle")}
          </p>
          <button className="group boxshadow rounded-[1000px] bg-[#C61511] md:p-[16px] py-3 px-4">
            <p className="flex md:gap-[8px] gap-1 items-center justify-between text-white text-[20px] font-inter font-[600]">
              {t("buyacourse")}
              <Image
                src={BtnIcon}
                alt="BtnIcon"
                className="group-hover:rotate-[45deg] ease-linear duration-300"
              />
            </p>
          </button>
        </div>
        <div className="max-md:hidden">
          <Image
            src={SherLegalLogo}
            alt="sherLegalLogo"
            className=" xl:-translate-y-36 xl:translate-x-28"
            width={681}
            height={99}
          />
        </div>
      </div>
    </div>
  );
}
