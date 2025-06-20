'use client'

import React from 'react'
import PrizeFilter from './PrizeFilter'

export default function AdditionalInfo() {
  return (
  <aside className="max-w-3xl p-6 md:p-0 md:mt-20 space-y-6 bg-white">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">Additional Information</h2>
        <p className="text-sm text-gray-400">About 1280 results searched</p>
      </div>

      {/* Property Type */}
      <div className='border rounded-xl w-100 p-5'>
      <div>
        <h3 className="font-medium p-4">Property Type</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              House
            </div>
            <span className="text-gray-400">2,080</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]"/>
              Family Apartment
            </div>
            <span className="text-gray-400">5,532</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Lot
            </div>
            <span className="text-gray-400">4,292</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Villa
            </div>
            <span className="text-gray-400">6,888</span>
          </label>
        </div>
        <hr className='p-3 mt-8 text-gray-400' />
      </div>

      {/* Price Range (Fixed Options) */}
      <div>
        <h3 className="font-medium p-4">Price Range</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Low Budget
            </div>
            <span className="text-gray-400">PHP 3M – PHP 17M</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Medium Budget
            </div>
            <span className="text-gray-400">PHP 18M – PHP 24M</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              High Budget
            </div>
            <span className="text-gray-400">PHP 25M – PHP 40M</span>
          </label>
        </div>
        <hr className='text-gray-400 p-3 mt-8' />
      </div>

      {/* Filter by Price (Slider Placeholder) */}
      <div>
        <PrizeFilter/>
      </div>

      {/* Bedroom Options */}
      <div>
        <h3 className="font-medium p-4">Bedroom</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Single
            </div>
            <span className="text-gray-400">3,080</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Double
            </div>
            <span className="text-gray-400">2,532</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Up to 3
            </div>
            <span className="text-gray-400">5,292</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <input type="checkbox" className="ml-4 mr-2 accent-[#339438]" />
              Up to 4
            </div>
            <span className="text-gray-400">2,868</span>
          </label>
        </div>
      </div>
      </div>
  </aside>
  )
}
