import Map from "./_components/Map";
import SochealMedia from "./_components/SocialMedia";

export async function generateMetadata() {
  return {
    title: "Contact Us — CLAMO",
    description:
      "Have questions? Reach out to the CLAMO team quickly and easily. We’re here to help!",
  };
}

export default function Contacts() {
  return (
    <div className="container">
      <div className="flex flex-col gap-[4px] md:mb-[40px] mb-[20px]">
        <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl mt-3 text-[20px] text-[#3D445E] leading-[100%]">
          Contact Us
        </h1>
        <p className="font-medium font-vk sm:text-base text-sm md:text-[20px] text-[#012548CC] leading-[140%]">
          Have questions? Reach out to the CLAMO team quickly and easily. We’re here to help!
        </p>
      </div>

      <Map />
      <SochealMedia />
    </div>
  );
}
