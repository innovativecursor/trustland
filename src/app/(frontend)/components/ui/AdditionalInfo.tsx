'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ProjectOverview, fetchAllPropertyTypes, fetchLocationCities } from '../../utils/api'

type Filters = {
  propertyType: string[]
  priceRange: string[]
  location: string[]
}

type Props = {
  properties: ProjectOverview[]
  onFilter: (filtered: ProjectOverview[]) => void
}

const PRICE_RANGES = [
  { label: 'Low Budget', min: 3, max: 17 },
  { label: 'Medium Budget', min: 18, max: 24 },
  { label: 'High Budget', min: 25, max: 40 },
]

export default function AdditionalInfo({ properties, onFilter }: Props) {
  const [filters, setFilters] = useState<Filters>({
    propertyType: [],
    priceRange: [],
    location: [],
  })

  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])

  //  Fetch dynamic filter options
  useEffect(() => {
    const loadFilters = async () => {
      const types = await fetchAllPropertyTypes()
      const locs = await fetchLocationCities()
      console.log('Fetched Property Types:', types)
      console.log('Fetched Locations:', locs)
      setPropertyTypes(types.map((t) => t.name)) 
      setLocations(locs)
    }

    loadFilters()
  }, [])

  // Count property types
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const type = p.property_details?.property_type
      if (type) counts[type] = (counts[type] || 0) + 1
    })
    return counts
  }, [properties])

  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const loc = p.property_details?.location
      if (loc) counts[loc] = (counts[loc] || 0) + 1
    })
    return counts
  }, [properties])

  // Apply filters
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const details = property.property_details
      const type = details?.property_type || ''
      const price = parseFloat(details?.price || '0')
      const location = details?.location || ''

      const matchesType =
        filters.propertyType.length === 0 || filters.propertyType.includes(type)

      const matchesPrice =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label)
          return range && price >= range.min && price <= range.max
        })

      const matchesLocation =
        filters.location.length === 0 || filters.location.includes(location)

      return matchesType && matchesPrice && matchesLocation
    })

    onFilter(filtered)
  }, [filters, properties, onFilter])

  const handleCheckboxChange = (
    filterKey: keyof Filters,
    label: string
  ) => {
    setFilters((prev) => {
      const current = prev[filterKey]
      const isAlreadySelected = current.includes(label)
      return {
        ...prev,
        [filterKey]: isAlreadySelected ? [] : [label], // Only one value or none
      }
    })
  }

  const renderCheckboxGroup = (
    title: string,
    items: { label: string; count?: number; extraText?: string }[],
    filterKey: keyof Filters,
    showDivider: boolean = true
  ) => {
    const visibleItems = items.filter((i) => i.count === undefined || i.count > 0)

    if (visibleItems.length === 0) return null

    return (
      <div>
        <h3 className="font-medium p-4">{title}</h3>
        <div className="space-y-2 text-sm">
          {visibleItems.map((item) => (
            <label key={item.label} className="flex items-center justify-between">
              <div className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="ml-4 mr-2 accent-[#339438]"
                  checked={filters[filterKey].includes(item.label)}
                  onChange={() => handleCheckboxChange(filterKey, item.label)}
                />
                {item.label}
              </div>
              <span className="text-gray-400">
                {item.extraText || item.count?.toLocaleString() || ''}
              </span>
            </label>
          ))}
        </div>
        {showDivider && <hr className="p-3 mt-8 text-gray-400" />}
      </div>
    )
  }

  return (
    <aside className="max-w-3xl p-6 md:p-0 md:mt-20 mb-25 space-y-6 bg-white">
      <div>
        <h2 className="text-xl font-semibold">Additional Information</h2>
        <p className="text-sm text-gray-400">About {properties.length} results available</p>
      </div>

      <div className="border rounded-xl w-full p-5 md:mr-20">
        {renderCheckboxGroup(
          'Property Type',
          propertyTypes.map((label) => ({
            label,
            count: typeCounts[label] || 0,
          })),
          'propertyType'
        )}

        {renderCheckboxGroup(
          'Price Range',
          PRICE_RANGES.map((r) => ({
            label: r.label,
            extraText: `PHP ${r.min}M – ${r.max}M`,
          })),
          'priceRange'
        )}

        {renderCheckboxGroup(
          'Location',
          locations.map((label) => ({
            label,
            count: locationCounts[label] || 0,
          })),
          'location',
          false
        )}
      </div>
    </aside>
  )
}
