import { getStatistics } from "@/lib/getStatistics";
import Homes from "./_components/Home";


export default async function page() {
    const statistics = await getStatistics();
  return (
    <div>
        <Homes statistics={statistics}/>
    </div>
  )
}
