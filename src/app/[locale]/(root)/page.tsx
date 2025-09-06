import { getStatistics } from "@/lib/getStatistics";
import Homes from "./_components/Home";
import OurTeam from "../../../components/OurTeam/OurTeam";
import WhyChoose from "../../../components/WhyChooseUs/WhyChoose";
import Ai from "../../../components/Ai";
import OurService from "../../../components/OurService/Ourservice";
import Partners from "../../../components/Partners/Partners";
import Comments from "../../../components/Reviews/Reviews";
import News from "../../../components/News/OurNews";
import Faq from "../../../components/Faq";


export default async function page() {
    const statistics = await getStatistics();
  return (
    <div>
        <Homes statistics={statistics}/>
        <div className="w-full py-10 sm:py-12 md:py-16">
        <WhyChoose />
      </div>
      <div className="w-full overflow-hidden bg-black team-overlay">
        <OurTeam />
      </div>
      <OurService />
      <Ai />
      <Partners />
      <Comments />
      <News />
      <Faq />
    </div>
  )
}
