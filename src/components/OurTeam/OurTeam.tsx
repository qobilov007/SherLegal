import Partner from "./Team"
import { getPartners } from "@/lib/getTeam";

export default async function PartnersSection() {

  const team =  await getPartners();

  return (
    <div className="white">
      <Partner team={team}/>
    </div>
  );
}
