"use client"

import { FaThLarge, FaBars} from 'react-icons/fa'
import { useState } from 'react'

export default function FilterBar() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [sortOption, setSortOption] = useState('Popularity')
  const [currentPage, setCurrentPage] = useState(1)

return (
    <div className="ml-35 mt-20 space-y-6">
      {/* View, Sort, Page */}
      <div className="flex space-y-4">
        {/* View Toggle */}
        <div className="flex">
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

        {/* Sort + Page */}
        <div className="flex space-x-4 ml-10 ">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-10 w-50 border rounded p-2 text-gray-400"
          >
            <option>Sort by Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            {/* <option>Newest</option> */}
          </select>

          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="h-10 w-35 border rounded p-2 text-gray-400"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                Page: {i + 1} of 12
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
)}