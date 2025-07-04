'use client'

import React, { useEffect, useState } from 'react'
import AdditionalInfo from './AdditionalInfo'
import { ProjectOverview } from '../../utils/api'
import { Filter } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  properties: ProjectOverview[]
  onFilter: (filtered: ProjectOverview[]) => void
}

export default function AdditionalInfoWrapper({ properties, onFilter }: Props) {
  const [showDrawer, setShowDrawer] = useState(false)
  const [tempFilteredProjects, setTempFilteredProjects] = useState<ProjectOverview[]>([])
  const [resetTrigger, setResetTrigger] = useState(0)

  useEffect(() => {
    document.body.style.overflow = showDrawer ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showDrawer])

  const handleApply = () => {
    onFilter(tempFilteredProjects)
    setShowDrawer(false)
  }

  const handleReset = () => {
    setResetTrigger((prev) => prev + 1)
    onFilter(properties)
    setTempFilteredProjects(properties)
    setShowDrawer(false)
  }

  return (
    <div className="max-w-3xl">
      {/* Floating Button for Mobile */}
      <div className="lg:hidden fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setShowDrawer(true)}
          className="lg:hidden bg-[#339438] text-white px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-sm"
        >
          <Filter size={16} className="lg:hidden" />
          Filters
        </button>
      </div>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            key="drawer"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-end lg:hidden bg-white"
          >
            <div className="w-full max-h-[90%] bg-white rounded-t-2xl shadow-2xl p-4 flex flex-col overflow-y-auto relative">
              {/* Close */}
              <button
                onClick={() => setShowDrawer(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-medium"
              >
                &times;
              </button>

              <h2 className="lg:hidden text-lg font-medium text-gray-700 mb-4 mt-2">Filters</h2>

              <div className="flex-1 overflow-y-auto pb-4">
                <AdditionalInfo
                  properties={properties}
                  onFilter={setTempFilteredProjects}
                  key={resetTrigger}
                />
              </div>

              {/* Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2.5">
                <button
                  onClick={handleApply}
                  className="w-full bg-[#339438] text-white py-2.5 rounded-md text-sm"
                >
                  Apply Filters
                </button>
                <button
                  onClick={handleReset}
                  className="lg:hidden w-full border border-gray-300 text-gray-500 py-2 rounded-md text-sm"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center pr-4 mb-2">
          <h2 className="lg:hidden text-lg font-medium text-gray-700">Filters</h2>
          <button onClick={handleReset} className="lg:hidden text-sm text-gray-500">
            Reset Filters
          </button>
        </div>
        <AdditionalInfo properties={properties} onFilter={onFilter} key={resetTrigger} />
      </div>
    </div>
  )
}
