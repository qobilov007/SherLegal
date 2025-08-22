"use client";
import { testimonials } from "@/constants/page";
import { Marque } from "../magicui/marquee";
import ReviewCard from "./ReviewsCard";
import ReviewMediaCard from "./ReviewsMediaCard";
import Marquee from "react-fast-marquee";

export default function TestimonialsMarquee() {
  return (
    <section className="relative !min-h-[800px] text-white bg-black p-0 bg-reviews bg-no-repeat bg-cover bg-center">
      <div className="container md:flex max-md:flex-col items-center gap-8 justify-between z-20">
        {/* Chap text */}
        <div className="md:w-1/3 md:text-left  max-md:mb-16 pt-10 md:pt-0 text-center w-full relative z-20">
          <article className="inline-flex border-r border-l border-t items-center gap-2 px-5 border-gray-300/5  0 py-3 rounded-full glass">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-[20]"
            >
              <path
                d="M8.39076 2.67592C8.58369 2.2431 8.68015 2.0267 8.81448 1.96005C8.93116 1.90215 9.0682 1.90215 9.18488 1.96005C9.3192 2.0267 9.41566 2.2431 9.60859 2.67592L11.1453 6.12336C11.2023 6.25131 11.2308 6.31529 11.275 6.36428C11.314 6.40763 11.3617 6.4423 11.415 6.46604C11.4753 6.49287 11.5449 6.50022 11.6842 6.51492L15.4378 6.91109C15.9091 6.96083 16.1447 6.9857 16.2496 7.09285C16.3407 7.18593 16.383 7.31626 16.364 7.44512C16.3422 7.59346 16.1661 7.75208 15.8141 8.06931L13.0103 10.5961C12.9062 10.6899 12.8542 10.7368 12.8212 10.7939C12.7921 10.8444 12.7738 10.9005 12.7677 10.9585C12.7608 11.0241 12.7754 11.0926 12.8044 11.2297L13.5876 14.922C13.6859 15.3855 13.735 15.6173 13.6656 15.7502C13.6052 15.8656 13.4943 15.9461 13.3659 15.9679C13.2181 15.9929 13.0128 15.8745 12.6023 15.6378L9.33276 13.752C9.21141 13.682 9.15073 13.647 9.08623 13.6333C9.02917 13.6212 8.97019 13.6212 8.91312 13.6333C8.84862 13.647 8.78794 13.682 8.66659 13.752L5.39702 15.6378C4.98654 15.8745 4.7813 15.9929 4.63345 15.9679C4.50503 15.9461 4.39416 15.8656 4.3338 15.7502C4.2643 15.6173 4.31346 15.3855 4.41178 14.922L5.19492 11.2297C5.22399 11.0926 5.23852 11.0241 5.23162 10.9585C5.22551 10.9005 5.20729 10.8444 5.17812 10.7939C5.14516 10.7368 5.09313 10.6899 4.98907 10.5961L2.18522 8.06931C1.83321 7.75208 1.6572 7.59346 1.63532 7.44512C1.61632 7.31626 1.65867 7.18593 1.74978 7.09285C1.85468 6.9857 2.0903 6.96083 2.56155 6.91109L6.31513 6.51492C6.45444 6.50022 6.5241 6.49287 6.58433 6.46604C6.63762 6.4423 6.68534 6.40763 6.72439 6.36428C6.76851 6.31529 6.79703 6.25131 6.85407 6.12336L8.39076 2.67592Z"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="relative z-[20] font-inter font-semibold text-[18px] leading-[21px] text-white">
              525 Reviews
            </span>
          </article>

          <h2 className="md:max-w-[70%] w-full text-[48px] font-inter mt-4 leading-[120%] font-[700] text-white">
            What our clients say
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed w-full md:max-w-md">
            Legal support for public-private partnership (PPP) projects, tax
            optimization within investment activities, and consultation on
            antitrust regulation issues.
          </p>
        </div>

        {/* Marquee qismi */}
        <div className="flex flex-col gap-10 md:w-2/3 w-auto relative">
          {/* Tepaga harakatlanadigan */}
          <div className="relative hidden md:flex h-[900px] w-full flex-row items-center justify-center overflow-hidden">
            <Marque pauseOnHover vertical className="[--duration:20s]">
              {testimonials.map((review, id) => (
                <ReviewCard key={id} {...review} />
              ))}
            </Marque>
            <Marque reverse pauseOnHover vertical className="[--duration:20s]">
              {testimonials.map((review, id) => (
                <ReviewCard key={id} {...review} />
              ))}
            </Marque>
          </div>
        </div>
        <div className="max-md:block hidden">
          <Marquee className="mb-10">
            {testimonials.map((review, id) => (
              <ReviewMediaCard key={id} {...review} />
            ))}
          </Marquee>
          <Marquee direction="right">
            {testimonials.map((review, id) => (
              <ReviewMediaCard key={id} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
