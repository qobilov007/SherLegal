import Partner from "./WhyChooseUs"
import { getPartners } from "@/lib/getWhychooseUs";

export default async function PartnersSection() {

  const partners =  await getPartners();

  return (
    <div className="white">
      <Partner partners={partners}/>
    </div>
  );
}
