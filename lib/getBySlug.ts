import { NewsCard } from "@/app.types";

export async function getBySlug(slug:NewsCard[] ){
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/${slug}`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");
  const data = await res.json();

  return data.results;
}
