import Map from "./_components/Map";
import SochealMedia from "./_components/SocialMedia";
import Forma from "../../../../components/Forma"

export default function Contacts() {
  return (
    <div className="">
      <div className="container">
        <div className="flex mt-24 flex-col gap-[4px] md:mb-[40px] mb-[20px]">
          <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl mt-3 text-[20px] text-[#3D445E] leading-[100%]">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container">
        <Map />
        <SochealMedia />
      </div>
      <Forma/>
    </div>
  );
}
