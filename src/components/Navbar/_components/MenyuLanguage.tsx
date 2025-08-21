"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const LANGUAGES = [
  {
    code: "Uz",
    label: "O‘zbekcha",
    flag: "/icons/uzbflag.svg",
  },
  {
    code: "En",
    label: "English",
    flag: "/icons/EngFlag.svg",
  },
  {
    code: "Ru",
    label: "Русский",
    flag: "/icons/RuFlag.svg",
  },
];

export default function MenyuLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // hozirgi path-dan tilni aniqlash
  const currentLangCode = pathname?.split("/")[1]; // masalan: /uz/about => uz
  const current = LANGUAGES.find((l) => l.code === currentLangCode);

  const handleLangChange = (code: string) => {
    const newPath = `/${code}${pathname.slice(3)}`; // eski til prefiksini olib tashlash
    router.push(newPath);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <li
          style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
          className="text-sm font-medium border backdrop-blur-md border-[#C61511] p-2 rounded-full text-white cursor-pointer flex items-center gap-[6px]"
        >
          {current ? (
            <>
              <Image
                src={current.flag}
                alt={current.label}
                width={20}
                height={20}
              />
              {current.code}
            </>
          ) : (
            "Lang"
          )}
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "-rotate-90 text-[#C61511]" : "rotate-90"
            }`}
          />
        </li>
      </PopoverTrigger>
      <PopoverContent className="p-0 ">
        <ul className="bg-[#080808] shadow-black border-t overflow-hidden shadow-md rounded-[20px]">
          {LANGUAGES.map((lang, id) => (
            <li
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className={`flex items-center gap-2 cursor-pointer hover:bg-[#2a2a2a] py-3 bg-[#080808] transition-all duration-200 px-4
              ${
                id !== LANGUAGES.length - 1
                  ? "border-b border-gray-100/20"
                  : ""
              }`}
            >
              <Image src={lang.flag} alt={lang.label} width={20} height={20} />
              <span className="text-sm font-medium text-white">
                {lang.label}
              </span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
