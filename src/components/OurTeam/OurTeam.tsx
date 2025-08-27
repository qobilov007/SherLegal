import Team from "./Team"
import { getTeam } from "@/lib/getTeam";

export default async function OurTeam() {

  const team =  await getTeam();

  return (
    <div className="white">
      <Team team={team}/>
    </div>
  );
}
