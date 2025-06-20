// "use client"

// import { FaThLarge, FaBars} from 'react-icons/fa'
// import { useState } from 'react'

// export default function FilterBar() {
//   const [view, setView] = useState<'grid' | 'list'>('grid')
//   const [sortOption, setSortOption] = useState('Popularity')
//   const [currentPage, setCurrentPage] = useState(1)

// return (
//     <div className="mt-5 space-y-6 md:mt-20">
//       {/* View, Sort, Page */}
//       <div className="flex space-y-4">
//         {/* View Toggle */}
//         <div>
//           <button
//             onClick={() => setView('grid')}
//             className={`p-2 ${view === 'grid' ? 'text-[#339438]' : 'text-gray-400'}`}
//           >
//             <FaThLarge size={25} />
//           </button>
//           <button
//             onClick={() => setView('list')}
//             className={`p-2 ${view === 'list' ? 'text-[#339438]' : 'text-gray-400'}`}
//           >
//             <FaBars size={25} />
//           </button>
//         </div>

        
//       </div>
//     </div>
// )}


'use client'

import { FaThLarge, FaBars } from 'react-icons/fa'
import { useState } from 'react'

interface Props {
  view: 'grid' | 'list'
  setView: (v: 'grid' | 'list') => void
}

export default function FilterBar({ view, setView }: Props) {
   const [sortOption, setSortOption] = useState('Popularity')
   const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="mt-5 space-y-6 md:mt-20">
      <div className="flex space-y-4">
        <div>
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
        <div className="flex flex-col md:flex md:flex-row md:space-x-4 ml-10 ">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-10 w-50 mb-3 border rounded p-2 text-gray-400"
          >
            <option>Sort by Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            {/* <option>Newest</option> */}
          </select>

          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="h-10 w-35 mb-3 border rounded p-2 text-gray-400"
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
  )
}
