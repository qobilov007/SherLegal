export async function getPartners() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/whychoice/`);

    if (!res.ok) throw new Error("WhyChooseus olishda xatolik");

    return res.json();
  }