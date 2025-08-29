// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { IoSearchSharp } from "react-icons/io5";
// import { CiCalendarDate } from "react-icons/ci";
// import { LuEye } from "react-icons/lu";
// import Link from "next/link";
// import { useLocale, useTranslations } from "next-intl";
// import { NewsCard } from "@/app.types";
// import { pickStringProps } from "@/lib/getLocalizedValue";
// import { getLocalizedValue } from "@/lib/getLocalization";
// import { getNews, getPaginationPages } from "@/lib/getNews";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// export default function News({
//   initialNews,
//   total,
// }: {
//   initialNews: NewsCard[];
//   total: number;
// }) {
//   const [allNews, setAllNews] = useState<NewsCard[]>([]); // 🔹 barcha news
//   const [filtered, setFiltered] = useState<NewsCard[]>([]); // 🔹 qidiruv natijasi
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const pageSize = 12;
//   const locale = useLocale();
//   const t = useTranslations("NewsPage");

//   const totalPages = Math.ceil(filtered.length / pageSize);

//   // 🔹 Barcha newslarni olish
//   useEffect(() => {
//     const fetchAll = async () => {
//       setLoading(true);
//       try {
//         // katta limit bilan barcha newslarni olish (backend bo‘yicha sozlashingiz mumkin)
//         const { results } = await getNews(1, 9999);
//         setAllNews(results);
//         setFiltered(results); // default – hammasi
//       } catch (err) {
//         console.error("Error fetching all news:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAll();
//   }, []);

//   // 🔹 Qidiruv
//   useEffect(() => {
//     if (!query) {
//       setFiltered(allNews);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       const results = allNews.filter((item) => {
//         const stringItem = pickStringProps(item);
//         const localTitle = getLocalizedValue(stringItem, "title", locale) || "";
//         return localTitle.toLowerCase().includes(query.toLowerCase());
//       });
//       setFiltered(results);
//       setPage(1); // har safar qidiruv bo‘lsa 1-sahifaga qaytadi
//     }, 400);

//     return () => clearTimeout(timeout);
//   }, [query, allNews, locale]);

//   // 🔹 Joriy sahifa uchun slice
//   const startIndex = (page - 1) * pageSize;
//   const paginated = filtered.slice(startIndex, startIndex + pageSize);

//   return (
//     <div className="container md:pt-[124px] pt-28">
//       {/* Title + Search */}
//       <div className="flex items-center justify-between pb-[36px]">
//         <h1 className=" font-bold font-inter md:text-[40px] text-[24px] leading-[120%]">
//           {t("title")}
//         </h1>
//         <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full ml-4 p-2.5 border border-transparent transition-all duration-200 focus-within:border-red-500/50">
//           <IoSearchSharp className="text-gray-500 md:w-6 md:h-6 w-4 h-4" />
//           <input
//             type="text"
//             placeholder={t("search")}
//             className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 md:text-[14px] font-medium font-inter leading-[140%] pr-2"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </article>
//       </div>

//       {/* News list */}
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[24px] gap-4">
//         {loading ? (
//           <div className="col-span-full flex justify-center items-center py-10">
//             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
//           </div>
//         ) : paginated.length > 0 ? (
//           paginated.map((item, id) => {
//             const stringItem = pickStringProps(item);
//             const localTitle = getLocalizedValue(stringItem, "title", locale);
//             const localDescription = getLocalizedValue(
//               stringItem,
//               "content",
//               locale
//             );

//             return (
//               <Link key={id} href={`/${locale}/news/${item.slug}`}>
//                 <div className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white ease-linear duration-300">
//                   <Image
//                     src={item.image}
//                     alt={localTitle}
//                     width={379}
//                     height={182}
//                     className="w-full object-cover h-[182px]"
//                   />

//                   <article className="px-4 py-2 flex flex-col justify-end h-[180px]">
//                     <h2 className="line-clamp-2 font-bold font-vela text-[16px] leading-[140%] pb-[4px] mb-2">
//                       {localTitle}
//                     </h2>
//                     <p className="line-clamp-2 text-[14px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
//                       {localDescription?.replace(/<[^>]+>/g, "")}
//                     </p>

//                     <div className="flex max-sm:flex-row max-md:flex-col md:items-center items-start gap-1 mt-8">
//                       <article className="flex items-center md:gap-[8.5px] gap-0.5 md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
//                         <CiCalendarDate className="text-[#6C6C6C]" />
//                         <time
//                           dateTime={item.created_at}
//                           suppressHydrationWarning
//                           className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter"
//                         >
//                           {item.created_at
//                             ?.slice(0, 10)
//                             .split("-")
//                             .reverse()
//                             .join("-")}
//                         </time>
//                       </article>
//                       <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
//                         <LuEye className="text-[#6C6C6C]" />
//                         <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
//                           {item.views}
//                         </span>
//                       </article>
//                     </div>
//                   </article>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <article className="col-span-full flex justify-center items-center py-10">
//             <IoSearchSharp className="mr-2 text-gray-500" />
//             <p className="text-gray-500 font-medium">{t("found")}</p>
//           </article>
//         )}
//       </div>

//       {/* 🔹 Pagination */}
//       {totalPages > 1 && (
//         <Pagination className="mt-10 flex justify-end">
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (page > 1) setPage(page - 1);
//                 }}
//                 className={page === 1 ? "pointer-events-none opacity-50" : ""}
//               />
//             </PaginationItem>

//             {getPaginationPages(page, totalPages, 5).map((p) => (
//               <PaginationItem key={p}>
//                 <PaginationLink
//                   href="#"
//                   isActive={p === page}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     if (p !== page) setPage(p);
//                   }}
//                 >
//                   {p}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}

//             <PaginationItem>
//               <PaginationNext
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (page < totalPages) setPage(page + 1);
//                 }}
//                 className={
//                   page === totalPages ? "pointer-events-none opacity-50" : ""
//                 }
//               />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       )}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { NewsCard } from "@/app.types";
import { pickStringProps } from "@/lib/getLocalizedValue";
import { getLocalizedValue } from "@/lib/getLocalization";
import { getNews, getPaginationPages } from "@/lib/getNews";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Skeleton } from "@/components/ui/skeleton"; // 🔹 qo‘shildi

export default function News({
  initialNews,
  total,
}: {
  initialNews: NewsCard[];
  total: number;
}) {
  const [allNews, setAllNews] = useState<NewsCard[]>([]);
  const [filtered, setFiltered] = useState<NewsCard[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageSize = 12;
  const locale = useLocale();
  const t = useTranslations("NewsPage");

  const totalPages = Math.ceil(filtered.length / pageSize);

  // 🔹 Barcha newslarni olish
  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const { results } = await getNews(1, 9999);
        setAllNews(results);
        setFiltered(results);
      } catch (err) {
        console.error("Error fetching all news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // 🔹 Qidiruv
  useEffect(() => {
    if (!query) {
      setFiltered(allNews);
      return;
    }

    const timeout = setTimeout(() => {
      const results = allNews.filter((item) => {
        const stringItem = pickStringProps(item);
        const localTitle = getLocalizedValue(stringItem, "title", locale) || "";
        return localTitle.toLowerCase().includes(query.toLowerCase());
      });
      setFiltered(results);
      setPage(1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, allNews, locale]);

  // 🔹 Joriy sahifa uchun slice
  const startIndex = (page - 1) * pageSize;
  const paginated = filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container md:pt-[124px] pt-28">
      {/* Title + Search */}
      <div className="flex items-center justify-between pb-[36px]">
        <h1 className=" font-bold font-inter md:text-[40px] text-[24px] leading-[120%]">
          {t("title")}
        </h1>
        <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full ml-4 p-2.5 border border-transparent transition-all duration-200 focus-within:border-red-500/50">
          <IoSearchSharp className="text-gray-500 md:w-6 md:h-6 w-4 h-4" />
          <input
            type="text"
            placeholder={t("search")}
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 md:text-[14px] font-medium font-inter leading-[140%] pr-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </article>
      </div>

      {/* News list */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[24px] gap-4">
        {loading ? (
          // 🔹 Skeleton loader
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border w-full bg-[#F3F3F3] p-4"
            >
              <Skeleton className="w-full h-[182px] mb-4" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <div className="flex gap-2 mt-6">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-12 rounded-full" />
              </div>
            </div>
          ))
        ) : paginated.length > 0 ? (
          paginated.map((item, id) => {
            const stringItem = pickStringProps(item);
            const localTitle = getLocalizedValue(stringItem, "title", locale);
            const localDescription = getLocalizedValue(
              stringItem,
              "content",
              locale
            );

            return (
              <Link key={id} href={`/${locale}/news/${item.slug}`}>
                <div className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white ease-linear duration-300">
                  <Image
                    src={item.image}
                    alt={localTitle}
                    width={379}
                    height={182}
                    className="w-full object-cover h-[182px]"
                  />

                  <article className="px-4 py-2 flex flex-col justify-end h-[180px]">
                    <h2 className="line-clamp-2 font-bold font-vela text-[16px] leading-[140%] pb-[4px] mb-2">
                      {localTitle}
                    </h2>
                    <p className="line-clamp-2 text-[14px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                      {localDescription?.replace(/<[^>]+>/g, "")}
                    </p>

                    <div className="flex max-sm:flex-row max-md:flex-col md:items-center items-start gap-1 mt-8">
                      <article className="flex items-center md:gap-[8.5px] gap-0.5 md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                        <CiCalendarDate className="text-[#6C6C6C]" />
                        <time
                          dateTime={item.created_at}
                          suppressHydrationWarning
                          className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter"
                        >
                          {item.created_at
                            ?.slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </time>
                      </article>
                      <article className="flex items-center gap-[8.5px] md:py-[6px] py-0.5 px-3 border border-[#6C6C6C] rounded-full max-w-max">
                        <LuEye className="text-[#6C6C6C]" />
                        <span className="text-[#6C6C6C] md:text-[12px] text-[10px] font-medium font-inter">
                          {item.views}
                        </span>
                      </article>
                    </div>
                  </article>
                </div>
              </Link>
            );
          })
        ) : (
          <article className="col-span-full flex justify-center items-center py-10">
            <IoSearchSharp className="mr-2 text-gray-500" />
            <p className="text-gray-500 font-medium">{t("found")}</p>
          </article>
        )}
      </div>

      {/* 🔹 Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-10 flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {getPaginationPages(page, totalPages, 5).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  onClick={(e) => {
                    e.preventDefault();
                    if (p !== page) setPage(p);
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < totalPages) setPage(page + 1);
                }}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
