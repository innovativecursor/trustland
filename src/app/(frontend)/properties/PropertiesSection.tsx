'use client'
import React, { useState } from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import FilterBar from '../components/ui/FilterBar'
import SearchBar from '../components/ui/SearchBar'
import AdditionalInfo from '../components/ui/AdditionalInfo'
import PropertiesColumn from '../components/ui/PropertiesColumn'
import PerfectHouse from '../components/ui/PerfectHouse'
import ContactUs from '../components/ui/ContactUs'
// import Pagination from '../components/ui/Pagination'

const PropertiesSection = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <div className='pt-5'>
      <Breadcrumbs />
      <div className='flex justify-center'>
        <div className='pr-10'>
          <FilterBar view={view} setView={setView} />
          <SearchBar />
          <PropertiesColumn view={view} />
        </div>
        <AdditionalInfo />
      </div>
      {/* <Pagination /> */}
      <PerfectHouse /> 
      <ContactUs />
    </div>
  )
}

export default PropertiesSection
