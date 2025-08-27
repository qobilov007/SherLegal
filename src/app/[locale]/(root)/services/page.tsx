import Service from "./_components/Service";
import { getService } from "@/lib/getServices";


export default async function page() {

  const servicesorg = await getService();    

  return (
    <div>
        <Service service={servicesorg}/>
    </div>
  )
}
