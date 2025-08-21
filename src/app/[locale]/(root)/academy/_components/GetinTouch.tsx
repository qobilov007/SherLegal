import Image from "next/image";
import BtnIcon from "../../../../public/images/Button Icon.svg";

export default function GetinTouch() {
  return (
    <div className="bg-getintouch bg-no-repeat bg-cover bg-center w-full h-[320px] container border border-gray-600/15 rounded-[28px] flex flex-col items-center justify-center my-[40px]">
      <h1 className="pb-[32px] font-bold font-inter text-[40px] leading-[130%] w-2/3 text-center">Our experienced attorney are here to answer any questions</h1>

      <button className="group boxshadow rounded-[1000px] bg-[#C61511] p-[16px]">
        <p className="flex gap-[8px] items-center justify-between text-white text-[20px] font-inter font-[600]">
          Get in touch{" "}
          <Image
            src={BtnIcon}
            alt="BtnIcon"
            className="group-hover:rotate-[45deg] ease-linear duration-300"
          />
        </p>
      </button>
    </div>
  );
}
