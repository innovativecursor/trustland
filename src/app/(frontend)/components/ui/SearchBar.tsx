import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  searchHistory = [],
  setSearchHistory,
}: {
  searchQuery: string
  setSearchQuery: (val: string) => void
  onSearch: () => void
  searchHistory?: string[]
  setSearchHistory: (val: string[]) => void
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredHistory = searchHistory.filter((entry) =>
    entry.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const clearHistory = () => {
    setSearchHistory([])
    localStorage.removeItem('searchHistory')
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Search Input + Button */}
      <div className="flex z-10">
        <input
          type="text"
          placeholder="Enter keyword here ..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setShowSuggestions(true)
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-75 h-8 md:w-170 md:h-10 border-2 border-gray-400 rounded-l-xl px-4 py-2 hover:border-[#339438]"
        />
        <button
          onClick={onSearch}
          className="px-2 md:px-6 bg-[#339438] text-white rounded-r-xl flex items-center cursor-pointer"
        >
          <FaSearch /> Search
        </button>
      </div>

      {/* Recommendation Dropdown */}
      {showSuggestions && filteredHistory.length > 0 && (
        <div className="w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md z-0">
          <ul className="max-h-48 overflow-y-auto divide-y">
            {filteredHistory.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setSearchQuery(item)
                  onSearch()
                  setShowSuggestions(false)
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="text-right pr-2 py-1">
            <button
              onClick={clearHistory}
              className="text-xs text-red-500 hover:underline"
            >
              Clear history
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
