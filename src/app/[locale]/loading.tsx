"use client"
import Image from "next/image";
import LoadingLogo from "../../../public/images/loading.svg"


export default function Loading() {
    return (
      <div className="fixed top-0 left-0 overflow-hidden w-full h-full z-50 flex items-center justify-center bg-black">
        <Image src={LoadingLogo} alt="Loading Logo" />
      </div>
    );
  }
  