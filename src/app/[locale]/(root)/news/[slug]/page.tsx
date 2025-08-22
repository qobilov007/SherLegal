import { getNews } from "@/constants/page";

export default function page({ params }: { params: { slug: string } }) {
  const newsItem = getNews.find((n) => n.slug === params.slug);

  if (!newsItem) {
    return <h1>Not found</h1>;
  }

  return (
    <article className="p-6">
      <h1 className="text-2xl font-bold">{newsItem.title}</h1>
      <p className="text-gray-600"></p>
      <p>{newsItem.description}</p>
    </article>
  );
}
