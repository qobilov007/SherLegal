"use client";
import { useLocale } from "next-intl";

const uzMonths = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
export default function CustomDate({
  created_at,
  className,
}: {
  created_at: string;
  className?: string;
}) {
  const locale = useLocale();
  const date = new Date(created_at);

  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  let month = "";

  if (locale === "uz") {
    month = uzMonths[monthIndex];
  } else {
    month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  }
  return (
    <time
      dateTime={created_at}
      suppressHydrationWarning
      className={`md:text-[12px] text-[10px] font-medium font-inter ${className}`}
    >
      {`${day} ${month}, ${year}`}
    </time>
  );
}
