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
    <div className="w-full flex flex-col items-center text-sm">
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
          className="w-75 h-8 md:w-170 md:h-10 border border-gray-300 rounded-l-lg px-4 py-2 focus:border-[#339438] focus:outline-none transition-colors"
        />
        <button
          onClick={onSearch}
          className="px-3 md:px-5 bg-[#339438] text-white rounded-r-lg flex items-center gap-2 hover:bg-[#2b7c2f] transition-colors"
        >
          <FaSearch className="text-xs" />
          <span className="text-sm">Search</span>
        </button>
      </div>

      {/* Recommendation Dropdown */}
      {showSuggestions && filteredHistory.length > 0 && (
        <div className="w-full mt-2 bg-white border border-gray-200 rounded-md shadow-sm z-0 max-w-md">
          <ul className="max-h-48 overflow-y-auto divide-y divide-gray-100 text-sm">
            {filteredHistory.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setSearchQuery(item)
                  onSearch()
                  setShowSuggestions(false)
                }}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="text-right pr-3 py-1.5">
            <button onClick={clearHistory} className="text-xs text-red-500 hover:underline">
              Clear history
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
