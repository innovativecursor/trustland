import React from 'react'
// import PropertiesColumn from './PropertiesColumn'
import PerfectHouseProperties from './PerfectHouseProperties'

const PerfectHouse = () => {
  return (
  <div className='bg-gray-100 flex justify-start'>
    <div className='max-w-7xl mx-auto mt-15'>  
      <h1 className='font-semibold text-[40px] p-4 md:p-0 md:pt-28 md:text-5xl'>Find Your Perfect House And Lot at the <br className='hidden md:block md:mt-4'/> Best Price!</h1>
      <p className='p-4 mt-2 md:p-0 md:mt-10'>Pre Selling Discount! - Upto 15% off on selected properties</p>
      {/* <PropertiesColumn /> */}
      <PerfectHouseProperties/>
    </div>
  </div>
  )
}

export default PerfectHouse
