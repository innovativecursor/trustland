'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface DropdownProps {
  options: string[]
  loading?: boolean
  withBorder?: boolean
  onSelect?: (selected: string) => void
}

const Dropdown = ({ options, loading = false, withBorder = false, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0] || '')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (onSelect && selectedOption) onSelect(selectedOption)
  }, [selectedOption, onSelect])

  useEffect(() => {
    const handleCloseDropdowns = () => setIsOpen(false)
    if (isMobile && isOpen) {
      window.dispatchEvent(new Event('dropdown-close-all'))
    }

    window.addEventListener('dropdown-close-all', handleCloseDropdowns)
    return () => window.removeEventListener('dropdown-close-all', handleCloseDropdowns)
  }, [isOpen, isMobile])

  return (
    <div
      className={`relative flex-1 ${withBorder ? 'border-l border-r border-black' : ''} w-full md:w-auto`}
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div
        className="flex items-center justify-center gap-10 w-full pr-[20px] pl-[20px] py-2 cursor-pointer text-black md:text-[#000000] transition rounded-lg bg-white md:bg-transparent"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span>{loading ? 'Loading...' : selectedOption}</span>
        <div>{isOpen ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}</div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-2 z-60 border border-gray-400 rounded-lg overflow-hidden bg-white text-black shadow-md"
          >
            {loading ? (
              <div className="p-4 text-center text-gray-500 flex justify-center items-center gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </div>
            ) : (
              <div className="max-h-60 overflow-y-auto scroll-smooth">
                {options
                  .filter((option) => option !== selectedOption)
                  .map((option, index) => (
                    <div
                      key={index}
                      className={`group px-4 py-2 transition-all duration-200 cursor-pointer border-b border-white/10
                    ${
                      isMobile
                        ? 'hover:bg-gray-100 hover:text-black'
                        : 'hover:bg-white/20 hover:pl-6 rounded-md'
                    }`}
                      onClick={() => {
                        setSelectedOption(option)
                        setIsOpen(false)
                      }}
                    >
                      <span className="truncate">{option}</span>
                    </div>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
