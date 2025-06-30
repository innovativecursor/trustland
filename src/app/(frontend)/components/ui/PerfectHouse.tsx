import React from 'react'
import PerfectHouseProperties from './PerfectHouseProperties'

const PerfectHouse = () => {
  return (
    <div className="bg-gray-100 flex justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl py-16 mt-20">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl ">
          Find Your Perfect House And Lot at the <br className="hidden md:inline py-16" />
          Best Price!
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          Pre Selling Discount! – <strong className='text-[#339438]'>Up to 15%</strong> off on selected properties
        </p>
        <div className="mt-10">
          <PerfectHouseProperties />
        </div>
      </div>
    </div>
  )
}

export default PerfectHouse
