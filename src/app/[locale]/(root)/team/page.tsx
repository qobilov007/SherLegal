import Teams from "./_components/Teams"
import { getTeam } from "@/lib/getTeam";

export default async function Team() {

  const team =  await getTeam();

  return (
    <div className="white">
      <Teams team={team}/>
    </div>
  );
}
