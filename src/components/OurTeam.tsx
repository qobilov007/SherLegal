import Image from "next/image"
import { TeamsType } from "@/src/app.type";
import cardImg from "../../public/icons/team1.png";
import Link from "next/link";
import Teamm from "../app/[locale]//(root)/team/teamm"
import BtnIcon from "../../public/images/Button Icon.svg";
import { useLocale, useTranslations } from "next-intl";

export default function OurTeam() {

  const locale = useLocale()
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
    <div className="w-full overflow-hidden bg-black py-10 sm:py-12 md:py-16 team-overlay">
      <div className="container">
        <p className="font-inter font-normal leading-[26px] text-white mb-6">
          {t("teamdes")}
        </p>
        <p className="w-full h-[1px] bg-white/30 mb-[30px]"></p>

        <article className="flex max-smm:flex-col items-center justify-between mb-14 gap-4 relative z-[10]">
          <h5 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
            {t("teamtitle")}
          </h5>
          <Link href={`/${locale}/team`}>
            <button className="group boxshadow md:inline-flex max-md:flex rounded-[1000px] bg-[#C61511] p-[16px]">
              <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">
                {t("teambtn")}
                <Image
                  src={BtnIcon}
                  alt="BtnIcon"
                  className="group-hover:rotate-[45deg] ease-linear duration-300"
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
  )
}
