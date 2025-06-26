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
    <div className="mt-5 space-y-6 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 justify-between">
        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setView('grid')}
            className={`p-2 ${view === 'grid' ? 'text-[#339438]' : 'text-gray-400'}`}
          >
            <FaThLarge size={25} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 ${view === 'list' ? 'text-[#339438]' : 'text-gray-400'}`}
          >
            <FaBars size={25} />
          </button>
        </div>

        {/* Sort & Pagination */}
        <div className="p-4 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 w-full md:w-auto">
          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-10 w-full md:w-52 border rounded p-2 text-gray-400"
          >
            <option value="Popularity">Sort by Popularity</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select>

          {/* Page Selector */}
          {totalPages > 1 && (
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="h-10 w-full md:w-40 border rounded p-2 text-gray-700"
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i} value={i + 1}>
                  Page: {i + 1} of {totalPages}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Next/Previous Buttons */}
        {totalPages > 1 && (
          <div className="flex items-center space-x-2 px-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded border ${
                currentPage === 1 ? 'text-gray-300 border-gray-200' : 'text-black border-gray-400'
              }`}
            >
              Previous
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded border ${
                currentPage === totalPages ? 'text-gray-300 border-gray-200' : 'text-black border-gray-400'
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
