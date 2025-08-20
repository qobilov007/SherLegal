import Button from "@/src/components/btn/Button";
import { ArrowRight } from "lucide-react";
import cardImg from "../../../public/icons/team1.png";
import Teamm from "./teamm"
import { TeamsType } from "@/src/app.type";

export default function   OurTeam() {
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
    <div className="bg-black pt-[100px]">
      <div className="container">
        <p className="font-inter font-normal leading-[26px] text-white mb-6">
          Meet Our Team of Lawyers and Attorneys
        </p>
        <p className="w-full h-[1px] bg-white/30 mb-[30px]"></p>

        <article className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-4">
          <h5 className="font-inter font-bold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white">
            Our team
          </h5>
          <Button
            title="All team"
            icon={
              <ArrowRight
                size={22}
                className="group-hover:rotate-[0deg] transition-all duration-200 rotate-[-45deg]"
              />
            }
          />
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
