import Image from "next/image";
import BtnIcon from "../../../../../../public/images/Button Icon.svg";

export default function GetinTouch() {
  return (
    <div className="container">
      <div className="bg-getintouch bg-no-repeat bg-cover bg-center w-full md:h-[320px] py-16 border border-gray-600/15 rounded-[28px] flex flex-col items-center justify-center lg:my-[40px] my-8">
        <h1 className="md:pb-[32px] pb-[15px] font-bold font-inter lg:text-[40px] sm:text-[35px] text-[18px] leading-[130%] w-2/3 text-center">
          Our experienced attorney are here to answer any questions
        </h1>

        <button className="group boxshadow rounded-full bg-[#C61511] lg:p-[16px] px-4 py-2">
          <p className="flex md:gap-[8px] gap-1 items-center justify-between text-white md:text-[20px] text-[14px] font-inter font-[600]">
            Get in touch{" "}
            <Image
              src={BtnIcon}
              alt="BtnIcon"
              className="group-hover:rotate-[45deg] ease-linear duration-300"
            />
          </p>
        </button>
      </div>
    </div>
  );
}
