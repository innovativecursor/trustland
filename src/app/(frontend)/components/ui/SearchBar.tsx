'use client'

import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('')
  
    return (
      <div className="flex ml-37">
        <input
          type="text"
          placeholder="Enter keyword here ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-180 border-2 border-gray-400 rounded-l-xl px-4 py-2 hover:border-[#339438]"
        />
        <button className="bg-[#339438] text-white px-6 rounded-r-xl flex items-center cursor-pointer">
          <FaSearch/> Search
        </button>
      </div>
  )
}

export default SearchBar

