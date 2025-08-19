import Comments from "../components/Comments";
import Faq from "../components/Faq";
import News from "../components/News";
import OurService from "../components/OurService";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div>
      <div className="home-prev">
        <h1>Salom</h1>
      </div>
      <div>
        <OurService/>
        <Partners/>
        <Comments/>
        <News/>
        <Faq/>
      </div>
    </div>
  );
}
