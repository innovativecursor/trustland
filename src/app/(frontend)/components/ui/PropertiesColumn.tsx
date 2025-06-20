'use client'

import React, { useEffect, useState } from 'react'
import { ProjectOverview, fetchAllProjectSlugs, fetchProjectOverviewBySlug } from '../../utils/api'
import PropertyCard from './PropertyCard'

interface PropertiesColumnProps {
  view: 'grid' | 'list'
}

const PropertiesColumn: React.FC<PropertiesColumnProps> = ({ view }) => {
  const [properties, setProperties] = useState<ProjectOverview[]>([])

  useEffect(() => {
  const fetchProperties = async () => {
    const slugs = await fetchAllProjectSlugs()
    console.log("Slugs fetched from CMS:", slugs)

    const results = await Promise.all(slugs.map(fetchProjectOverviewBySlug))
    const filtered = results.filter(Boolean) as ProjectOverview[]
    console.log("Properties fetched:", filtered.map(p => p.title))

    setProperties(filtered)
  }

    fetchProperties()
  }, [])

  return (
    <section className="py-8 w-full">
      <div
        className={`grid ${
          view === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-25'
            : 'grid-cols-1 gap-6 mb-25'
        }`}
      >
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} view={view} />
        ))}
      </div>
    </section>
  )
}

export default PropertiesColumn
