export async function getPartners() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/team/`);

    if (!res.ok) throw new Error("OurTeam olishda xatolik");

    return res.json();
  }