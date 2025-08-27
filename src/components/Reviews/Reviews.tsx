"use client";

import { useState, useEffect } from "react";
import { getReviews } from "@/lib/getRewevs";
import { Marque } from "../magicui/marquee";
import ReviewCard from "./ReviewsCard";
import ReviewMediaCard from "./ReviewsMediaCard";
import Marquee from "react-fast-marquee";
import { useTranslations, useLocale } from "next-intl";
import { Review } from "@/app.types";

export default function TestimonialsMarquee() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews()
      .then((data) => setReviews(data))
      .catch((err) => console.error("Fetch xatolik:", err));
  }, []);

  return (
    <section className="relative !min-h-[800px] text-white bg-black p-0 bg-reviews bg-no-repeat bg-cover bg-center">
      <div className="container md:flex max-md:flex-col items-center gap-8 justify-between z-20">
        {/* Chap text */}
        <div className="md:w-1/3 md:text-left max-md:mb-16 pt-10 md:pt-0 text-center w-full relative z-20">
          <article className="inline-flex border-r border-l border-t items-center gap-2 px-5 border-gray-300/5 py-3 rounded-full glass">
            <span className="font-inter font-semibold text-[18px] leading-[21px] text-white">
              {reviews.length} {t("rewievs")}
            </span>
          </article>

          <h2 className="md:max-w-[90%] w-full lg:text-[48px] md:text-[32px] text-[24px] font-inter mt-4 leading-[120%] font-[700] text-white">
            {t("reviewstitle")}
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed w-full md:max-w-md">
            {t("reviewsdes")}
          </p>
        </div>

        {/* Marquee qismi */}
        <div className="flex flex-col gap-10 md:w-2/3 w-auto relative">
          {/* Tepaga harakatlanadigan (desktop) */}
          <div className="relative hidden md:flex h-[900px] w-full flex-row items-center justify-center overflow-hidden">
            <Marque pauseOnHover vertical className="[--duration:20s]">
              {reviews.map((review, id) => (
                <ReviewCard key={id} review={review} locale={locale} />
              ))}
            </Marque>
            <Marque reverse pauseOnHover vertical className="[--duration:20s]">
              {reviews.map((review, id) => (
                <ReviewCard key={id} review={review} locale={locale} />
              ))}
            </Marque>
          </div>

          {/* Mobile uchun */}
          <div className="max-md:block hidden overflow-hidden">
            <Marquee className="mb-10">
              {reviews.map((review, id) => (
                <ReviewMediaCard key={id} review={review} locale={locale} />
              ))}
            </Marquee>
            <Marquee direction="right" className="space-x-8 pb-[120px]">
              {reviews.map((review, id) => (
                <ReviewMediaCard key={id} review={review} locale={locale} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
