import { getAcademy } from "@/lib/getAcademy";
import AcademyMain from "./_components/AcademyMain";
import Course from "./_components/Course";
import Video from "./_components/Video";

export default async function page() {
    const academy = await getAcademy();

  return (
    <div>
        <AcademyMain/>
        <Video/>
        <Course course={academy}/>
    </div>
  )
}
