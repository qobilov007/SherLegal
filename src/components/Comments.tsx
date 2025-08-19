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
                    <span className="inline-flex items-center gap-2 bg-red-600/90 text-white text-sm px-3 py-1 rounded-full shadow">
                        ★ 525 Reviews
                    </span>
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
