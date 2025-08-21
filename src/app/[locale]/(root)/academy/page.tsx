import AcademyMain from "./_components/AcademyMain";
import Course from "./_components/Course";
import GetinTouch from "./_components/GetinTouch";
import Video from "./_components/Video";

export default function page() {
  return (
    <div>
        <AcademyMain/>
        <Video/>
        <Course/>
        <GetinTouch/>
    </div>
  )
}
