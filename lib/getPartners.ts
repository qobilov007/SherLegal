export async function getPartners() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/partners/`);

    if (!res.ok) throw new Error("Partnyorlar olishda xatolik");

    return res.json();
  }