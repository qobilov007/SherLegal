import Partner from "./Service"
import { getService } from "@/lib/getServices";

export default async function PartnersSection() {

  const service =  await getService();

  return (
    <div className="white">
      <Partner service={service}/>
    </div>
  );
}
