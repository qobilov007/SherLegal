"use client"

import Navbar from "@/src/components/Navbar/NavbarLayout";
import LogoNotfound from "../../../public/icons/found404.svg"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="bg-black h-screen notfoundBG bg-center bg-cover bg-no-repeat overflow-hidden">
      <Navbar />
      <div className="pt-[130px] flex items-center h-full relative z-[20] container">
          <article className="">
            <h1 className="text-white text-[200px] font-bold font-inter leading-[260px]">404</h1>
            <p className="text-white/80 font-inter font-normal leading-[22px] textx-[16px] mb-6">The page you are looking for may have been deleted, its name has been changed, or it is temporarily unavailable.</p>
            <button
            onClick={handleClose}
            className="px-6 py-[10px] rounded-full bg-[#C61511] text-white"
          >
            Back to home page
          </button>
          </article>
          <Image src={LogoNotfound} alt="Not found"/>

      </div>
      <div className=" absolute bottom-0 w-full h-[300px] bg-custom-gradient"></div>
    </div>
  );
}
