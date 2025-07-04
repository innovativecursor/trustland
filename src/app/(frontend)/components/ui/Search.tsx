'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import SearchButton from './SearchButton'

import { fetchLocationCities, fetchPropertyTypeNames } from '../../utils/api'
import LiquidHoverButton from './SearchButton'

const Search = () => {
  const router = useRouter()

  const [locations, setLocations] = useState(['Location'])
  const [budgets, setBudgets] = useState(['Budget'])
  const [propertyTypes, setPropertyTypes] = useState(['Property Type'])
  const [loading, setLoading] = useState(true)
  const [selectedPropertyType, setSelectedPropertyType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const fetchedLocations = await fetchLocationCities()
        const fetchedPropertyTypes = await fetchPropertyTypeNames()

        console.log('Fetched Property Types:', fetchedPropertyTypes) // Add this

        const getBudgetRangeLabel = ['Under 3M', 'Under 5M', 'Under 10M']

        setLocations(['Location', ...fetchedLocations])
        setBudgets(['Budget', ...getBudgetRangeLabel])
        setPropertyTypes(['Property Type', ...fetchedPropertyTypes])
      } catch (error) {
        console.error('Error fetching filters:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFilters()
  }, [])

  const handleSearch = () => {
    const queryParams = new URLSearchParams()

    if (selectedPropertyType && selectedPropertyType !== 'Property Type') {
      queryParams.append('propertyType', selectedPropertyType)
    }

    if (selectedLocation && selectedLocation !== 'Location') {
      queryParams.append('location', selectedLocation)
    }

    if (selectedBudget && selectedBudget !== 'Budget') {
      let budgetValue = '0'
      switch (selectedBudget) {
        case 'Under 3M':
          budgetValue = '2999999'
          break
        case 'Under 5M':
          budgetValue = '4999999'
          break
        case 'Under 10M':
          budgetValue = '9999999'
          break
      }
      queryParams.append('budget', budgetValue)
    }

    sessionStorage.setItem('searchFilters', queryParams.toString())
    router.push('/properties')
  }

  return (
    <div className="relative z-10 mt-8 bg-white  border-[1px] border-[#000000] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg w-full max-w-5xl px-4 md:px-0">
      <div className="flex-1 min-w-[160px] w-full">
        <Dropdown loading={loading} options={propertyTypes} onSelect={setSelectedPropertyType} />
      </div>
      <div className="flex-1 min-w-[160px] w-full border-black sm:border-l sm:border-r">
        <Dropdown loading={loading} withBorder options={locations} onSelect={setSelectedLocation} />
      </div>
      <div className="flex-1 min-w-[160px] w-full">
        <Dropdown loading={loading} options={budgets} onSelect={setSelectedBudget} />
      </div>
      <div className="w-full md:w-auto mr-0 sm:mr-4">
        <LiquidHoverButton onClick={handleSearch}>Search</LiquidHoverButton>
      </div>
    </div>
  )
}

export default Search
