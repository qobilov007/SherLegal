import BtnIcon from "../../../../../public/images/Button Icon.svg";
import Image from "next/image";
import cardImg from "../../../../../public/icons/team1.png";
import Teamm from "./teamm";
import { TeamsType } from "@/src/app.type";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function OurTeam() {
  const locale = useLocale()

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
    <div className="bg-black pt-[100px] pb-[100px]">
      <div className="container">
        <p className="font-inter font-normal leading-[26px] text-white mb-6">
          Meet Our Team of Lawyers and Attorneys
        </p>
        <p className="w-full h-[1px] bg-white/30 mb-[30px]"></p>

        <article className="flex items-center justify-between mb-14 gap-4 relative z-[10]">
          <h5 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
            Our team
          </h5>
          <Link href={`/${locale}/team`}>
            <button className="group boxshadow md:inline-flex max-md:flex rounded-[1000px] bg-[#C61511] p-[16px]">
              <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">
                All team
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
  );
}
