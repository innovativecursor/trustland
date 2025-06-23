import { FaSearch } from 'react-icons/fa'

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  onSearch,
}: {
  searchQuery: string
  setSearchQuery: (val: string) => void
  onSearch: () => void
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter keyword here ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-75 h-8 md:w-170 md:h-10 border-2 border-gray-400 rounded-l-xl px-4 py-2 hover:border-[#339438]"
        />
        <button
          onClick={onSearch}
          className="px-2 md:px-6 bg-[#339438] text-white rounded-r-xl flex items-center cursor-pointer"
        >
          <FaSearch /> Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
