import { getNews } from "@/lib/getNews";
import News from "./_components/News";

export default async function PartnersSection() {
  const { results, count } = await getNews(1, 12);

  return (
    <div className="white">
      <News initialNews={results} total={count} />
    </div>
  );
}
