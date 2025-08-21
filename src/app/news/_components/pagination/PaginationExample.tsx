import { useState } from "react";

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {/* Previous button */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Page numbers */}
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

      {/* Next button */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
