export async function getAcademy() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/info`,
      {
        next: { revalidate: 60 },
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");
    return res.json();
  }
