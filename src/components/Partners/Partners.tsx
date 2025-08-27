import Partner from "./Partner"
import { getPartners } from "@/lib/getPartners";

export default async function PartnersSection() {

  const partners =  await getPartners();

  return (
    <div className="white">
      <Partner partners={partners}/>
    </div>
  );
}
