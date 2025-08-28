// lib/getNews.ts
export async function getNews(page: number = 1, page_size: number = 12) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/?page=${page}&page_size=${page_size}`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");

  const data = await res.json();

  return {
    results: data.results,
    count: data.count, // umumiy son
  };
}

// lib/getPagination.ts
export function getPaginationPages(current: number, totalPages: number, maxVisible: number = 5) {
  let start = Math.max(1, current - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
