import Comments from "../../../components/Reviews/Reviews";
import Faq from "../../../components/Faq";
import News from "../../../components/News";
import OurService from "../../../components/OurService";
import Partners from "../../../components/Partners";
import Button from "../../../components/btn/Button";
import { ArrowRight } from "lucide-react";
import WhyChoose from "../../../components/WhyChoose";
import OurTeam from "./team/page";
import Ai from "../../../components/Ai"

type Stat = {
  number: string;
  label: string;
};

export default function Home() {
  const stats: Stat[] = [
    { number: "15+", label: "Years experience" },
    { number: "10K", label: "Project finished" },
    { number: "28+", label: "Closed deals" },
    { number: "12+", label: "Happy clients" },
  ];

  return (
    <div>
      <div className="home-prev relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container h-screen flex flex-col justify-center gap-10 sm:gap-12 md:gap-14 relative z-10">
          <div className="pt-[100px] sm:pt-[120px] md:pt-[130px]">
            <div className="inline-flex  max-w-full max-md:max-w-[100%] md:max-w-[80%] lg:max-w-[50%] flex-col justify-center text-white relative z-10">

              {/* Award badge */}
              <article className="w-fit flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-4 rounded-full glass border bg-red-400">
                <svg
                  className="relative z-[4]"
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1.5L8.39139 0.802279C8.14828 0.665907 7.85172 0.665907 7.60861 0.802279L8 1.5Z" />
                </svg>
                <span className="relative z-[4] font-inter text-sm sm:text-base md:text-lg">
                  Award winning Law Firm
                </span>
              </article>

              {/* Title */}
              <h2
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[120%] font-inter font-medium text-white mt-4"
              >
                Law and Attorney Firm in Tashkent -
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
                  Sher
                </p>
                <span
                  className="font-inter font-bold
                  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]
                  py-2 px-3"
                >
                  Legal
                </span>
              </article>

              {/* Description */}
              <p className="text-[#cacaca] font-inter text-sm sm:text-base md:text-lg font-normal leading-[130%] mb-5 mt-3">
                Our law firm combines legal expertise with personalized
                solutions to protect your rights and achieve your goals.
              </p>

              {/* Button */}
              <Button
                title="Get in touch"
                icon={
                  <ArrowRight
                    size={22}
                    className="group-hover:rotate-[0deg] transition-all duration-200 rotate-[-45deg]"
                  />
                }
                className="w-[160px] sm:w-[180px] text-sm sm:text-base"
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
                  <span
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[120%] font-bebas font-bold"
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[120%]"
                  >
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
        <OurTeam />
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
