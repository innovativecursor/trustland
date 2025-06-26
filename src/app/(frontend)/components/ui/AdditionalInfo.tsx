'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ProjectOverview } from '../../utils/api'

type Filters = {
  propertyType: string[]
  priceRange: string[]
  bedroom: string[]
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

const BEDROOMS = [
  { label: 'Single', match: (beds: number) => beds === 1 },
  { label: 'Double', match: (beds: number) => beds === 2 },
  { label: 'Up to 3', match: (beds: number) => beds <= 3 },
  { label: 'Up to 4', match: (beds: number) => beds <= 4 },
]

export default function AdditionalInfo({ properties, onFilter }: Props) {
  const [filters, setFilters] = useState<Filters>({
    propertyType: [],
    priceRange: [],
    bedroom: [],
  })

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const type = p.property_details?.property_type
      if (type) counts[type] = (counts[type] || 0) + 1
    })
    return counts
  }, [properties])

  const bedroomCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    properties.forEach((p) => {
      const beds = p.card_data?.beds ?? 0
      BEDROOMS.forEach(({ label, match }) => {
        if (match(beds)) counts[label] = (counts[label] || 0) + 1
      })
    })
    return counts
  }, [properties])

  useEffect(() => {
    const filtered = properties.filter((property) => {
      const details = property.property_details
      const type = details?.property_type || ''
      const price = parseFloat(details?.price || '0')
      const beds = property.card_data?.beds ?? 0

      const matchesType =
        filters.propertyType.length === 0 || filters.propertyType.includes(type)

      const matchesPrice =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label)
          return range && price >= range.min && price <= range.max
        })

      const matchesBedroom =
        filters.bedroom.length === 0 ||
        filters.bedroom.some((label) => {
          const matchFn = BEDROOMS.find((b) => b.label === label)?.match
          return matchFn ? matchFn(beds) : false
        })

      return matchesType && matchesPrice && matchesBedroom
    })

    onFilter(filtered)
  }, [filters, properties, onFilter])

  const handleCheckboxChange = (
    filterKey: keyof Filters,
    label: string
  ) => {
    setFilters((prev) => {
      const current = prev[filterKey]
      const updated = current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
      return { ...prev, [filterKey]: updated }
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
          ['House', 'Family Apartment', 'Lot', 'Villa'].map((label) => ({
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
          'Bedroom',
          BEDROOMS.map((b) => ({
            label: b.label,
            count: bedroomCounts[b.label] || 0,
          })),
          'bedroom',
          false
        )}
      </div>
    </aside>
  )
}
