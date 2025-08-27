import News from "./News"
import { getNews } from "@/lib/getNews";

export default async function PartnersSection() {

  const news =  await getNews();

  return (
    <div className="white">
      <News news={news}/>
    </div>
  );
}
