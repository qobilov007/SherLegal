"use client";
import Image from "next/image";
import Imag from "../../public/images/fi_1155628.svg";
import { testimonials } from "@/constants/page";

export default function TestimonialsMarquee() {
    return (
        <section
            className="relative !min-h-[800px] text-white bg-black p-0">
            <div className="absolute top-0 left-0 w-full h-[700px] 
                  pointer-events-none z-20
                  bg-gradient-to-b from-red-800/50 via-black/80 to-transparent
                  [mask-image:radial-gradient(150%_100%at_50%_0%,black,transparent)] 
                  [mask-repeat:no-repeat] [mask-position:center] [mask-size:100%_100%]" />

            <div className="absolute bottom-0 left-0 w-full h-[220px] 
                bg-gradient-to-t 
                from-black/90 to-transparent
                pointer-events-none z-10" />

            <div className="container flex items-center gap-8 justify-between z-20">
                {/* Chap text */}
                <div className="w-1/3">
                    <article className="w-[270px] flex items-center gap-2 px-6 py-4 rounded-full glasses border bg-red-400">
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-2"
                        >
                            <path
                                d="M12.5 3L13.9302 8.31181C14.1047 8.96 14.192 9.28409 14.3642 9.54905C14.5166 9.78349 14.7165 9.98336 14.951 10.1358C15.2159 10.308 15.54 10.3953 16.1882 10.5698L21.5 12L16.1882 13.4302C15.54 13.6047 15.2159 13.692 14.951 13.8642C14.7165 14.0166 14.5166 14.2165 14.3642 14.451C14.192 14.7159 14.1047 15.04 13.9302 15.6882L12.5 21L11.0698 15.6882C10.8953 15.04 10.808 14.7159 10.6358 14.451C10.4834 14.2165 10.2835 14.0166 10.049 13.8642C9.78409 13.692 9.46 13.6047 8.81181 13.4302L3.5 12L8.81181 10.5698C9.46 10.3953 9.78409 10.308 10.049 10.1358C10.2835 9.98336 10.4835 9.78349 10.6358 9.54905C10.808 9.28409 10.8953 8.96 11.0698 8.31181L12.5 3Z"
                                fill="white"
                                fillOpacity="0.8"
                            />
                        </svg>

                        <span className="relative z-[4] font-inter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                            Award winning Law Firm
                        </span>
                    </article>


                    <h2 className="text-[48px] font-inter mt-4 leading-[120%] font-[700]">
                        What our<br />clients say
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md">
                        Legal support for public-private partnership (PPP) projects, tax
                        optimization within investment activities, and consultation on
                        antitrust regulation issues.
                    </p>
                </div>

                {/* Marquee qismi */}
                <div className="flex gap-10 w-2/3 relative">
                    {/* Yuqoriga harakatlanadigan */}
                    <marquee
                        direction="up"
                        behavior="scroll"
                        scrollamount={2}
                        scrolldelay={16}
                        loop={-1 as any}
                        className="h-[900px] overflow-hidden"
                    >
                        <div className="flex flex-col gap-5 h-full overflow-hidden">
                            {[...testimonials, ...testimonials].map((r, i) => (
                                <article
                                    key={i}
                                    className="cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/90 to-black/90 
                             border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-shadow duration-300"
                                >
                                    <Image
                                        src={Imag}
                                        alt="Imag"
                                        className="my-2 w-[64px] h-[64px] p-[20px] flex justify-center items-center 
                               rounded-[1000px] bg-[rgba(255,255,255,0.10)]"
                                    />
                                    <p className="text-white text-[14px] leading-relaxed mb-5">{r.text}</p>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={r.img}
                                            alt={r.name}
                                            width={44}
                                            height={44}
                                            className="w-11 h-11 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{r.name}</h4>
                                            <p className="text-gray-500 text-xs">{r.role}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </marquee>

                    {/* Pastga harakatlanadigan */}
                    <marquee
                        direction="down"
                        behavior="scroll"
                        scrollamount={2}
                        scrolldelay={16}
                        loop={-1 as any}
                        className="h-[900px] overflow-hidden"
                    >
                        <div className="flex flex-col gap-5 h-full overflow-hidden">
                            {[...testimonials, ...testimonials].map((r, i) => (
                                <article
                                    key={i}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/90 to-black/90 
                             border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                                >
                                    <Image
                                        src={Imag}
                                        alt="Imag"
                                        className="my-2 w-[64px] h-[64px] p-[20px] flex justify-center items-center 
                               rounded-[1000px] bg-[rgba(255,255,255,0.10)]"
                                    />
                                    <p className="text-white font-inter text-[14px] leading-relaxed mb-5">
                                        {r.text}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={r.img}
                                            alt={r.name}
                                            width={44}
                                            height={44}
                                            className="w-11 h-11 rounded-full ring-1 ring-white/10 object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{r.name}</h4>
                                            <p className="text-gray-500 text-xs">{r.role}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </marquee>
                </div>
            </div>
        </section>
    );
}
