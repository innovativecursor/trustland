import React from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import FilterBar from '../components/ui/FilterBar'
import SearchBar from '../components/ui/SearchBar'
import AdditionalInfo from '../components/ui/AdditionalInfo'
import PropertiesColumn from '../components/ui/PropertiesColumn'
import PerfectHouse from '../components/ui/PerfectHouse'
import ContactUs from '../components/ui/ContactUs'


const PropertiesSection = () => {
  return (
    <div className='pt-5'>
      <div className='h-[160px] bg-[#71ae4c1a] w-full py-3 pt-7'>
        {/* <h1 className='font-semibold text-3xl'>Properties</h1> */}
        <Breadcrumbs />
      </div>
        <FilterBar />
        <SearchBar />
        <PropertiesColumn />
        {/* <AdditionalInfo /> */}
        <PerfectHouse /> 
        <ContactUs />
    </div>
  )
}

export default PropertiesSection
