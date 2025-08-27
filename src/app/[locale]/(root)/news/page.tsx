import { getNews } from "@/lib/getNews";
import News from "./_components/News";

export default async function page() {
    const news = await getNews();
  return (
    <div>
        <News news={news}/>
    </div>
  )
}
