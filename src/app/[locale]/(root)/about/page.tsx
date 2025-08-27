import OurService from "../../../../components/OurService";
import OurTeam from "../../../../components/OurTeam";
import { useTranslations } from "next-intl";

type Stat = {
  number: string;
  label: string;
};

export default function Home() {
    const t = useTranslations("AboutPage")

  const stats: Stat[] = [
    { number: "15+", label: "Years experience" },
    { number: "10K", label: "Project finished" },
    { number: "28+", label: "Closed deals" },
    { number: "12+", label: "Happy clients" },
  ];
  return (
    <div className="">
      <div className="home-prev1">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div  className="container relative top-0 left-0">
          <div className="absolute top-64 -left-40 z-[2] w-[800px] h-[100px] blur-[150px]  bg-red-500/50 md:bg-red-500 md:rotate-[130deg] rotate-[90deg]"></div>
        </div>
        <div className="container h-full flex flex-col gap-14">
          <div className="pt-[130px]">
            <div className="w-full flex flex-col justify-center text-white relative z-10">
              <article className=" max-w-max flex items-center gap-2 px-6 py-3 md:py-4 rounded-full glass2 border">
                <svg width="20" height="20" viewBox="0 0 9 13" fill="white" className="relative z-[5]">
                  <path
                    d="M8.18332 0.5H0.859462C0.859462 0.5 0.81611 0.502296 0.794772 0.507655C0.753452 0.517606 0.697906 0.53789 0.640667 0.579608L0.638297 0.581139C0.550576 0.645437 0.50011 0.758342 0.50011 0.876606V8.41025C0.499433 8.47531 0.501465 8.58056 0.517722 8.70763C0.600363 9.35674 0.987487 10.0518 3.02641 11.5425C3.36036 11.7867 3.80709 12.1021 4.34798 12.4526C4.44485 12.5154 4.56441 12.5158 4.66161 12.4538C5.06161 12.1989 5.38912 11.9792 5.62282 11.82C7.95742 10.2259 8.37198 9.54274 8.47358 8.89593C8.49695 8.74743 8.5 8.62534 8.5 8.55875V0.857852C8.5 0.660364 8.35809 0.5 8.18332 0.5Z"
                    fill="white"
                  />
                </svg>
                <span className="relative z-[4] font-inter">
                  {t("title")}
                </span>
              </article>
              <article className="md:max-w-[50%]">
              <h2 className="md:text-[56px] sm:text-[46px] text-[40px] leading-[120%] font-inter font-medium text-white md:mb-6 mb-4">
                {t("subtitle")}
              </h2>
              <p className="text-[#cacaca] font-inter sm:text-[16px] text-[14px] font-normal leading-[130%] md:mb-5">
                {t("description1")}
                <br />
                <br />
                {t("description2")}
                <br /> <br />
                {t("description3")}
              </p>
              </article>
            </div>
          </div>
          <div className="relative z-[2] w-full flex justify-center items-center py-5">
            {/* Shaffof qora container ***** */}
            <div className="relative w-full grid grid-cols-4 justify-evenly gap-10 md:gap-16 px-6 py-6 border-gray-200 md:rounded-[40px] rounded-[20px] border-t border-b backdrop-blur-[6px] text-white">
              {stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="md:text-7xl text-[38px] leading-[120%] text-center font-bebas font-bold">
                    {item.number}
                  </span>
                  <span className="text-center md:text-2xl sm:text-[16px] text-[13px] font-inter font-medium leading-[120%]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurService />
      </div>
      <div className="w-full overflow-hidden bg-black team-overlay">
        <OurTeam />
      </div>
    </div>
  );
}
