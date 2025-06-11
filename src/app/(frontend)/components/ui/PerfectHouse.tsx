import React from 'react'
// import PropertiesColumn from './PropertiesColumn'
import PerfectHouseProperties from './PerfectHouseProperties'

const PerfectHouse = () => {
  return (
    <div className='bg-gray-100 mt-15'>
      <h1 className='font-semibold text-[40px] pt-28 ml-6 md:ml-30 md:p-8 md:pt-28 md:text-5xl'>Find Your Perfect House And Lot at the <br className='hidden sm:block'/> Best Price!</h1>
      <p className='p-6 mt-2 md:ml-38 md:p-0 md:mt-0'>Pre Selling Discount! - Upto 15% off on selected properties</p>
      {/* <PropertiesColumn /> */}
      <PerfectHouseProperties/>
    </div>
  )
}

export default PerfectHouse
