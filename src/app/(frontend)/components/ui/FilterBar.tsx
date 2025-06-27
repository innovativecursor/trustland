'use client'

import { FaThLarge, FaBars } from 'react-icons/fa'
import { useMemo } from 'react'

interface Props {
  view: 'grid' | 'list'
  setView: (v: 'grid' | 'list') => void
  sortOption: string
  setSortOption: (value: string) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  totalProperties: number
}

export default function FilterBar({
  view,
  setView,
  sortOption,
  setSortOption,
  currentPage,
  setCurrentPage,
  totalProperties,
}: Props) {
  const totalPages = useMemo(() => Math.ceil(totalProperties / 6), [totalProperties])

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="px-4 md:px-0 mt-5 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        {/* Left: View toggle + Sort */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md border ${
                view === 'grid'
                  ? 'text-[#339438] border-[#339438]'
                  : 'text-gray-400 border-gray-300'
              }`}
              title="Grid View"
            >
              <FaThLarge size={20} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md border ${
                view === 'list'
                  ? 'text-[#339438] border-[#339438]'
                  : 'text-gray-400 border-gray-300'
              }`}
              title="List View"
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex flex-col">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="h-10 w-60 md:min-w-[180px] border border-gray-300 rounded-md px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#339438]"
            >
              <option value="Popularity">Sort By Popularity</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Page Selector */}
          {totalPages > 1 && (
            <div className="flex flex-col">
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="h-10 w-60 md:min-w-[180px] border border-gray-300 rounded-md px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#339438]"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i} value={i + 1}>
                    Go to Page {i + 1} of {totalPages}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Right: Pagination Buttons */}
        {totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border ${
                currentPage === 1
                  ? 'text-gray-300 border-gray-200 bg-gray-100 cursor-not-allowed'
                  : 'text-black border-gray-400 hover:bg-gray-100'
              }`}
            >
              Previous
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border ${
                currentPage === totalPages
                  ? 'text-gray-300 border-gray-200 bg-gray-100 cursor-not-allowed'
                  : 'text-black border-gray-400 hover:bg-gray-100'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
