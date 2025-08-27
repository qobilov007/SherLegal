import cardImg from "../../../../../public/icons/team1.png";
import Teamm from "./teamm";
import { useTranslations } from "next-intl";
import Comments from "@/src/components/Reviews/Reviews";
import Partners from "@/src/components/Partners/Partners";
import Faq from "../../../../components/Faq"

export default function OurTeam() {


  const t = useTranslations("HomePage")

  return (
    <div>
      <div className="bg-black pt-[100px] pb-[100px]">
        <div className="container">
          <p className="font-inter font-normal leading-[26px] text-white mb-6">
            {t("teamdes")}
          </p>
          <p className="w-full h-[1px] bg-white/30 mb-[30px]"></p>

          <article className="flex items-center justify-between mb-14 gap-4 relative z-[10]">
            <h5 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
              {t("teamtitle")}
            </h5>
          </article>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* {teams.slice(0, 9).map((team, id) => (
              <Teamm key={id} infoTeam={team} />
            ))} */}
          </div>
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <div>
        <Comments />
      </div>
      <div>
        <Faq/>
      </div>
    </div>

  );
}
