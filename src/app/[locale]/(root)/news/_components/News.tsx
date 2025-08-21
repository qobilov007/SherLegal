// import { getNews } from "@/constants/page";
// import Image from "next/image";
// import { IoSearchSharp } from "react-icons/io5";
// import { CiCalendarDate } from "react-icons/ci";
// import { LuEye } from "react-icons/lu";

// export default function News() {
//   const news = getNews;
//   return (
//     <div className="container pt-[122px]">
//       <div className="flex  items-center justify-between pb-[32px]">
//         <h1 className=" font-bold font-inter text-[40px] leading-[120%]">
//           News
//         </h1>
//         <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full p-4">
//           <IoSearchSharp className="text-gray-500 w-6 h-6" />
//           <input
//             type="text"
//             placeholder="Izlash"
//             className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 text-[14px] font-medium font-inter leading-[140%]"
//           />
//         </article>
//       </div>

//       <div className="grid grid-cols-3 gap-[24px]">
//         {news.map((item, id) => (
//           <div
//             key={id}
//             className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white transition-colors duration-200 hover:scale-[1.01] hover:shadow-md transform transition-transform duration-500"
//             >
//             <Image
//               src={item.img}
//               alt="Image"
//               width={379}
//               height={182}
//               className="w-full object-cover"
//             />
//             <article className="py-4 px-5">
//               <h2 className=" line-clamp-2 font-bold font-vela pb-[8px]">
//                 {item.title}
//               </h2>
//               <p className="line-clamp-2 text-[14px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
//                 {item.description}
//               </p>
//             </article>
//             <div className="flex items-center gap-1 py-4 px-5">
//               <article className="flex items-center gap-[8.5px] py-[6px] px-3 border border-[#6C6C6C] rounded-full max-w-max">
//                 <CiCalendarDate />
//                 <span>{item.date}</span>
//               </article>
//               <article className="flex items-center gap-[8.5px] py-[6px] px-3 border border-[#6C6C6C] rounded-full max-w-max">
//                 <LuEye />
//                 <span>{item.views}</span>
//               </article>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { getNews } from "@/constants/page";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

export default function News() {
    const news = getNews;
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = news.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="container pt-[122px]">
      <div className="flex items-center justify-between pb-[32px]">
        <h1 className=" font-bold font-inter text-[40px] leading-[120%]">
          News
        </h1>
        <article className="flex items-center gap-2 bg-[#F3F3F3] rounded-full p-4">
          <IoSearchSharp className="text-gray-500 w-6 h-6" />
          <input
            type="text"
            placeholder="Izlash"
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 text-[14px] font-medium font-inter leading-[140%]"
          />
        </article>
      </div>

      <div className="grid grid-cols-3 gap-[24px]">
        {currentNews.map((item, id) => (
          <div
            key={id}
            className="rounded-2xl overflow-hidden border hover:border-red-700 w-full cursor-pointer bg-[#F3F3F3] hover:bg-white transition-all duration-200 hover:scale-[1.01] hover:shadow-md"
          >
            <Image
              src={item.img}
              alt="Image"
              width={379}
              height={182}
              className="w-full object-cover"
            />
            <article className="py-4 px-5">
              <h2 className=" line-clamp-2 font-bold font-vela pb-[8px]">
                {item.title}
              </h2>
              <p className="line-clamp-2 text-[14px] font-medium font-inter leading-[136%] text-[#6C6C6C]">
                {item.description}
              </p>
            </article>
            <div className="flex items-center gap-1 py-4 px-5">
              <article className="flex items-center gap-[8.5px] py-[6px] px-3 border border-[#6C6C6C] rounded-full max-w-max">
                <CiCalendarDate />
                <span>{item.date}</span>
              </article>
              <article className="flex items-center gap-[8.5px] py-[6px] px-3 border border-[#6C6C6C] rounded-full max-w-max">
                <LuEye />
                <span>{item.views}</span>
              </article>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === page
                ? "bg-red-500 text-white border-red-500"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
