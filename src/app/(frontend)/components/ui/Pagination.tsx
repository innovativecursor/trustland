'use client'

import React, { useState } from 'react'

const Pagination = () => {
  const totalPages = 12
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="w-full flex justify-center mt-10 mb-20">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
        //   disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md border ${
            currentPage === 1
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-[#339438] border-[#339438] hover:bg-green-100'
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-md border ${
              currentPage === page
                ? 'bg-[#339438] text-white border-[#339438]'
                : 'text-[#339438] border-[#339438] hover:bg-blue-100'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md border ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-[#339438] border-[#339438] hover:bg-blue-100'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
