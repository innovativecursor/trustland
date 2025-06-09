import React from 'react'
// import PropertiesColumn from './PropertiesColumn'
import PerfectHouseProperties from './PerfectHouseProperties'

const PerfectHouse = () => {
  return (
    <div className='bg-gray-100 mt-15'>
      <h1 className='font-semibold ml-30 p-8 pt-28 text-5xl'>Find Your Perfect House And Lot at the <br/> Best Price!</h1>
      <p className='ml-38'>Pre Selling Discount! - Upto 15% off on selected properties</p>
      {/* <PropertiesColumn /> */}
      <PerfectHouseProperties/>
    </div>
  )
}

export default PerfectHouse
