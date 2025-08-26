import Comments from "../../../components/Reviews/Reviews";
import Faq from "../../../components/Faq";
import News from "../../../components/News";
import BtnIcon from "../../../../public/images/Button Icon.svg";
import OurService from "../../../components/OurService";
import Partners from "../../../components/Partners";
import cardImg from "../../../../public/icons/team1.png";
import Button from "../../../components/btn/Button";
import { ArrowRight } from "lucide-react";
import { TeamsType } from "@/src/app.type";
import Teamm from "../../../app/[locale]/(root)/team/teamm";
import WhyChoose from "../../../components/WhyChoose";
import Ai from "../../../components/Ai";
import { useTranslations, useLocale } from "next-intl"; // BEGIN: Add missing import
import Image from "next/image";
import Link from "next/link"

type Stat = {
  number: string;
  label: string;
};

export default function Home() {

  const locale = useLocale()

  const stats: Stat[] = [
    { number: "15+", label: "Years experience" },
    { number: "10K", label: "Project finished" },
    { number: "28+", label: "Closed deals" },
    { number: "12+", label: "Happy clients" },
  ];

  const t = useTranslations("HomePage");

  const teams: TeamsType[] = [
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
    {
      teamImg: cardImg,
      names: "Sherzod Egamberdiyev",
      desc: "Managing Partner, advocate and Founder of Sher Legal",
    },
  ];

  return (
    <div>
      <div className="home-prev relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container h-full flex flex-col  gap-10 sm:gap-12 md:gap-14 relative z-10">
          <div className="pt-[100px] sm:pt-[120px] md:pt-[130px]">
            <div className="inline-flex  max-w-full max-md:max-w-[100%] md:max-w-[80%] lg:max-w-[50%] flex-col justify-center text-white relative z-10">
              {/* Award badge */}
              <article className="w-fit flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-4 rounded-full glass border-t border-r bg-red-400">
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  className="relative z-[4]"
                >
                  <path
                    d="M8 1.5L8.39139 0.802279C8.14828 0.665907 7.85172 0.665907 7.60861 0.802279L8 1.5ZM9.63056 2.41467L9.23917 3.11239C9.35579 3.17781 9.48695 3.21295 9.62065 3.21461L9.63056 2.41467ZM11.5 2.43782L12.1878 2.02927C12.0455 1.78962 11.7886 1.64134 11.5099 1.63788L11.5 2.43782ZM12.4548 4.04523L11.767 4.45378C11.8352 4.56874 11.9313 4.66475 12.0462 4.73304L12.4548 4.04523ZM14.0622 5L14.8621 4.99009C14.8587 4.71137 14.7104 4.45454 14.4707 4.31219L14.0622 5ZM14.0853 6.86944L13.2854 6.87935C13.287 7.01305 13.3222 7.14421 13.3876 7.26083L14.0853 6.86944ZM15 8.5L15.6977 8.89139C15.8341 8.64828 15.8341 8.35172 15.6977 8.10861L15 8.5ZM14.0853 10.1306L13.3876 9.73917C13.3222 9.85579 13.287 9.98695 13.2854 10.1207L14.0853 10.1306ZM14.0622 12L14.4707 12.6878C14.7104 12.5455 14.8587 12.2886 14.8621 12.0099L14.0622 12ZM12.4548 12.9548L12.0462 12.267C11.9313 12.3352 11.8352 12.4313 11.767 12.5462L12.4548 12.9548ZM11.5 14.5622L11.5099 15.3621C11.7886 15.3587 12.0455 15.2104 12.1878 14.9707L11.5 14.5622ZM9.63056 14.5853L9.62065 13.7854C9.48695 13.787 9.35579 13.8222 9.23917 13.8876L9.63056 14.5853ZM8 15.5L7.60861 16.1977C7.85172 16.3341 8.14828 16.3341 8.39139 16.1977L8 15.5ZM6.36944 14.5853L6.76083 13.8876C6.64421 13.8222 6.51305 13.787 6.37935 13.7854L6.36944 14.5853ZM4.5 14.5622L3.81219 14.9707C3.95454 15.2104 4.21137 15.3587 4.49009 15.3621L4.5 14.5622ZM3.54523 12.9548L4.23304 12.5462C4.16475 12.4313 4.06874 12.3352 3.95378 12.267L3.54523 12.9548ZM1.93782 12L1.13788 12.0099C1.14134 12.2886 1.28962 12.5455 1.52927 12.6878L1.93782 12ZM1.91467 10.1306L2.71461 10.1207C2.71295 9.98695 2.67781 9.85579 2.61239 9.73917L1.91467 10.1306ZM1 8.5L0.302279 8.10861C0.165907 8.35172 0.165907 8.64828 0.302279 8.89139L1 8.5ZM1.91467 6.86944L2.61239 7.26083C2.67781 7.14421 2.71295 7.01305 2.71461 6.87935L1.91467 6.86944ZM1.93782 5L1.52927 4.31219C1.28962 4.45454 1.14134 4.71137 1.13788 4.99009L1.93782 5ZM3.54523 4.04523L3.95378 4.73304C4.06874 4.66475 4.16475 4.56874 4.23304 4.45378L3.54523 4.04523ZM4.5 2.43782L4.49009 1.63788C4.21137 1.64134 3.95454 1.78962 3.81219 2.02927L4.5 2.43782ZM6.36944 2.41467L6.37935 3.21461C6.51305 3.21295 6.64421 3.17781 6.76083 3.11239L6.36944 2.41467ZM3.91667 22.5H3.11667C3.11667 22.7852 3.26847 23.0488 3.51513 23.1919C3.76178 23.3351 4.06598 23.3361 4.31358 23.1946L3.91667 22.5ZM8 20.1667L8.39691 19.4721C8.15096 19.3315 7.84903 19.3315 7.60309 19.4721L8 20.1667ZM12.0833 22.5L11.6864 23.1946C11.934 23.3361 12.2382 23.3351 12.4849 23.1919C12.7315 23.0488 12.8833 22.7852 12.8833 22.5H12.0833ZM8 1.5L7.60861 2.19772L9.23917 3.11239L9.63056 2.41467L10.0219 1.71695L8.39139 0.802279L8 1.5ZM9.63056 2.41467L9.62065 3.21461L11.4901 3.23776L11.5 2.43782L11.5099 1.63788L9.64047 1.61473L9.63056 2.41467ZM11.5 2.43782L10.8122 2.84637L11.767 4.45378L12.4548 4.04523L13.1426 3.63668L12.1878 2.02927L11.5 2.43782ZM12.4548 4.04523L12.0462 4.73304L13.6536 5.68781L14.0622 5L14.4707 4.31219L12.8633 3.35741L12.4548 4.04523ZM14.0622 5L13.2622 5.00991L13.2854 6.87935L14.0853 6.86944L14.8853 6.85953L14.8621 4.99009L14.0622 5ZM14.0853 6.86944L13.3876 7.26083L14.3023 8.89139L15 8.5L15.6977 8.10861L14.7831 6.47805L14.0853 6.86944ZM15 8.5L14.3023 8.10861L13.3876 9.73917L14.0853 10.1306L14.7831 10.5219L15.6977 8.89139L15 8.5ZM14.0853 10.1306L13.2854 10.1207L13.2622 11.9901L14.0622 12L14.8621 12.0099L14.8853 10.1405L14.0853 10.1306ZM11.5 14.5622L11.4901 13.7622L9.62065 13.7854L9.63056 14.5853L9.64047 15.3853L11.5099 15.3621L11.5 14.5622ZM6.36944 14.5853L6.37935 13.7854L4.50991 13.7622L4.5 14.5622L4.49009 15.3621L6.35953 15.3853L6.36944 14.5853ZM1.93782 12L2.73776 11.9901L2.71461 10.1207L1.91467 10.1306L1.11473 10.1405L1.13788 12.0099L1.93782 12ZM1.91467 10.1306L2.61239 9.73917L1.69772 8.10861L1 8.5L0.302279 8.89139L1.21695 10.5219L1.91467 10.1306ZM1 8.5L1.69772 8.89139L2.61239 7.26083L1.91467 6.86944L1.21695 6.47805L0.302279 8.10861L1 8.5ZM1.91467 6.86944L2.71461 6.87935L2.73776 5.00991L1.93782 5L1.13788 4.99009L1.11473 6.85953L1.91467 6.86944ZM1.93782 5L2.34637 5.68781L3.95378 4.73304L3.54523 4.04523L3.13668 3.35741L1.52927 4.31219L1.93782 5ZM3.54523 4.04523L4.23304 4.45378L5.18781 2.84637L4.5 2.43782L3.81219 2.02927L2.85741 3.63668L3.54523 4.04523ZM4.5 2.43782L4.50991 3.23776L6.37935 3.21461L6.36944 2.41467L6.35953 1.61473L4.49009 1.63788L4.5 2.43782ZM6.36944 2.41467L6.76083 3.11239L8.39139 2.19772L8 1.5L7.60861 0.802279L5.97805 1.71695L6.36944 2.41467ZM14.0622 12L13.6536 11.3122L12.0462 12.267L12.4548 12.9548L12.8633 13.6426L14.4707 12.6878L14.0622 12ZM3.54523 12.9548L3.95378 12.267L2.34637 11.3122L1.93782 12L1.52927 12.6878L3.13668 13.6426L3.54523 12.9548ZM9.63056 14.5853L9.23917 13.8876L7.60861 14.8023L8 15.5L8.39139 16.1977L10.0219 15.2831L9.63056 14.5853ZM8 15.5L8.39139 14.8023L6.76083 13.8876L6.36944 14.5853L5.97805 15.2831L7.60861 16.1977L8 15.5ZM3.91667 22.5L4.31358 23.1946L8.39691 20.8613L8 20.1667L7.60309 19.4721L3.51976 21.8054L3.91667 22.5ZM8 20.1667L7.60309 20.8613L11.6864 23.1946L12.0833 22.5L12.4802 21.8054L8.39691 19.4721L8 20.1667ZM12.0833 22.5H12.8833V13.5801H12.0833H11.2833V22.5H12.0833ZM12.4548 12.9548L11.767 12.5462L11.3955 13.1716L12.0833 13.5801L12.7711 13.9887L13.1426 13.3633L12.4548 12.9548ZM12.0833 13.5801L11.3955 13.1716L10.8122 14.1536L11.5 14.5622L12.1878 14.9707L12.7711 13.9887L12.0833 13.5801ZM3.91667 13.5801H3.11667V22.5H3.91667H4.71667V13.5801H3.91667ZM4.5 14.5622L5.18781 14.1536L4.60448 13.1716L3.91667 13.5801L3.22885 13.9887L3.81219 14.9707L4.5 14.5622ZM3.91667 13.5801L4.60448 13.1716L4.23304 12.5462L3.54523 12.9548L2.85741 13.3633L3.22885 13.9887L3.91667 13.5801ZM10.3333 8.5H9.53333C9.53333 9.34684 8.84684 10.0333 8 10.0333V10.8333V11.6333C9.73049 11.6333 11.1333 10.2305 11.1333 8.5H10.3333ZM8 10.8333V10.0333C7.15316 10.0333 6.46667 9.34684 6.46667 8.5H5.66667H4.86667C4.86667 10.2305 6.26951 11.6333 8 11.6333V10.8333ZM5.66667 8.5H6.46667C6.46667 7.65316 7.15316 6.96667 8 6.96667V6.16667V5.36667C6.26951 5.36667 4.86667 6.76951 4.86667 8.5H5.66667ZM8 6.16667V6.96667C8.84684 6.96667 9.53333 7.65316 9.53333 8.5H10.3333H11.1333C11.1333 6.76951 9.73049 5.36667 8 5.36667V6.16667Z"
                    fill="white"
                  />
                </svg>

                <span className="relative z-[4] font-inter text-sm sm:text-base md:text-lg">
                  {t("homebadge")}
                </span>
              </article>

              {/* Title */}
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[120%] font-inter font-medium text-white mt-4">
                {t("hometitle")}
              </h2>

              {/* Brand name */}
              <article className="flex items-center gap-1 mt-2">
                <p
                  className="font-inter flex items-center justify-center
                  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]
                  border-[2px] border-solid border-[#ff6363]
                  h-[55px] sm:h-[65px] md:h-[70px] lg:h-[75px]
                  px-3 rounded-[20px]
                  bg-[linear-gradient(90deg,#CB1612_0%,#650B09_100%)]
                  font-bold"
                >
                  {t("homesher")}
                </p>
                <span
                  className="font-inter font-bold
                  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]
                  py-2 px-3"
                >
                  {t("homelegal")}
                </span>
              </article>

              {/* Description */}
              <p className="text-[#cacaca] font-inter text-sm sm:text-base md:text-lg font-normal leading-[130%] mb-5 mt-3">
                {t("homedes")}
              </p>

              {/* Button */}
              <Button
                title={t("homebtn")}
                icon={
                  <ArrowRight
                    size={22}
                    className="group-hover:rotate-[0deg] transition-all duration-200 rotate-[-45deg]"
                  />
                }
                className="w-[135px] sm:w-[180px] text-[10px] sm:text-[20px]"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative w-full flex justify-center items-center py-4 sm:py-5">
            <div
              className="relative w-[90%] sm:w-full grid sm:grid-cols-4 max-sm:grid-cols-2 justify-evenly gap-10 sm:gap-10 md:gap-16
              px-4 sm:px-6 py-4 sm:py-6
              border-gray-200/80 rounded-[20px] sm:rounded-[30px] md:rounded-[40px]
              border-t border-b backdrop-blur-[6px] text-white"
            >
              {stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[120%] font-bebas font-bold">
                    {item.number}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[120%]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <div className="w-full py-10 sm:py-12 md:py-16">
        <WhyChoose />
      </div>
      <div className="w-full overflow-hidden bg-black py-10 sm:py-12 md:py-16 team-overlay">
        <div className="container">
          <p className="font-inter font-normal leading-[26px] text-white mb-6 max-smm:text-[15px]">
            {t("teamdes")}
          </p>
          <p className="w-full h-[1px] bg-white/30 mb-[30px]"></p>

          <article className="flex items-center justify-between mb-14 gap-4 relative z-[10]">
            <h5 className="font-inter font-bold text-[28px] max-smm:text-[20px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
              {t("teamtitle")}
            </h5>
            <Link href={`/${locale}/team`}>
              <button className="group boxshadow md:inline-flex max-md:flex rounded-[1000px] bg-[#C61511] smm:py-[16px] smm:px-[16px] px-[10px] py-[12px]">
                <p className="flex gap-[8px] items-center justify-between text-white text-[13px] smm:text-[20px] font-inter font-[600]">
                  {t("teambtn")}
                  <Image
                    src={BtnIcon}
                    alt="BtnIcon"
                    className="group-hover:rotate-[45deg] max-smm:w-[20px] ease-linear duration-300"
                  />
                </p>
              </button>

            </Link>
          </article>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {teams.slice(0, 6).map((team, id) => (
              <Teamm key={id} infoTeam={team} />
            ))}
          </div>
        </div>
      </div>
      <OurService />
      <Ai />        
      <Partners />
      <Comments />
      <News />
      <Faq />
    </div>
  );
}
