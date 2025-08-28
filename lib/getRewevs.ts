export async function getReviews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/reviews/`, {
    cache: "no-store", // har safar yangi ma'lumot olib keladi
  });

  if (!res.ok) throw new Error("Reviews olishda xatolik");

  return res.json(); // array of reviews
}
