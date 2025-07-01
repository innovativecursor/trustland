'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ProjectOverview, fetchAllPropertyTypes, fetchLocationCities } from '../../utils/api'
import { motion } from 'framer-motion'

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
  { label: 'Low Budget', min: 0, max: 3 },
  { label: 'Medium Budget', min: 3.01, max: 5 },
  { label: 'High Budget', min: 5.01, max: 10 },
]

export default function AdditionalInfo({ properties, onFilter }: Props) {
  const [filters, setFilters] = useState<Filters>({
    propertyType: [],
    priceRange: [],
    location: [],
  })

  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFilters = async () => {
      setIsLoading(true)
      const types = await fetchAllPropertyTypes()
      const locs = await fetchLocationCities()
      setPropertyTypes(
        types
          .map((t) =>
            typeof t === 'string'
              ? t
              : typeof t.name === 'string'
              ? t.name
              : typeof t.property_type === 'string'
              ? t.property_type
              : ''
          )
          .filter(Boolean)
      )
      setLocations(locs)
      setIsLoading(false)
    }

    loadFilters()
  }, [])

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const typeRaw = p.property_details?.property_type
      const type = typeof typeRaw === 'object' ? (typeRaw as any).name : typeRaw
      if (type) counts[type] = (counts[type] || 0) + 1
    })
    return counts
  }, [properties])

  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const locRaw = p.property_details?.location
      const loc = typeof locRaw === 'object' ? (locRaw as any).location_city : locRaw
      if (loc) counts[loc] = (counts[loc] || 0) + 1
    })
    return counts
  }, [properties])

  useEffect(() => {
    const filtered = properties.filter((property) => {
      const details = property.property_details
      const typeRaw = details?.property_type
      const type = typeof typeRaw === 'object' ? (typeRaw as any).name : typeRaw

      const price = parseFloat(details?.price || '0')

      const locationRaw = details?.location
      const location = typeof locationRaw === 'object'
        ? (locationRaw as any).location_city
        : locationRaw

      const matchesType = filters.propertyType.length === 0 || filters.propertyType.includes(type)
      const matchesPrice =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label)
          return range && price >= range.min && price <= range.max
        })
      const matchesLocation = filters.location.length === 0 || filters.location.includes(location)

      return matchesType && matchesPrice && matchesLocation
    })

    onFilter(filtered)
  }, [filters, properties, onFilter])

  const handleCheckboxChange = (filterKey: keyof Filters, label: string) => {
    setFilters((prev) => {
      const current = prev[filterKey]
      const isAlreadySelected = current.includes(label)
      return {
        ...prev,
        [filterKey]: isAlreadySelected ? [] : [label],
      }
    })
  }

  const renderLoadingSkeleton = (count: number = 3) => (
    <div className="space-y-2 px-4 py-2">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="h-4 w-3/4 bg-gray-200 rounded"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      ))}
    </div>
  )

  const renderCheckboxGroup = (
    title: string,
    items: { label: string; count?: number; extraText?: string }[],
    filterKey: keyof Filters,
    showDivider: boolean = true
  ) => {
    const visibleItems = items.filter((i) => i.count === undefined || i.count > 0)

    return (
      <div>
        <h3 className="font-light text-sm text-gray-500 px-4 pb-2">{title}</h3>

        {isLoading ? (
          renderLoadingSkeleton()
        ) : (
          <div className="space-y-2 text-sm text-gray-500">
            {visibleItems.map((item) => (
              <label key={item.label} className="flex items-center justify-between px-4">
                <div className="flex items-center text-gray-500">
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#339438]"
                    checked={filters[filterKey].includes(item.label)}
                    onChange={() => handleCheckboxChange(filterKey, item.label)}
                  />
                  {item.label}
                </div>
                <span className="text-gray-400 text-xs">
                  {item.extraText || item.count?.toLocaleString() || ''}
                </span>
              </label>
            ))}
          </div>
        )}

        {showDivider && <hr className="my-6 border-gray-200" />}
      </div>
    )
  }

  return (
    <aside className="max-w-3xl p-6 md:p-0 md:mt-20 mb-25 space-y-6 bg-white">
      <div>
        <h2 className="text-lg font-normal text-gray-700">Additional Information</h2>
        <p className="text-sm text-gray-400">About {properties.length} results available</p>
      </div>

      <div className="border border-gray-200 rounded-xl w-full p-5 md:mr-20 bg-white">
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
