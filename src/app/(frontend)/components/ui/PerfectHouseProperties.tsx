'use client'

import React, { useEffect, useState } from 'react'

import PropertyPerfectCard from './PropertyPerfectCard'
import { ProjectOverview, fetchAllProjects } from '../../utils/api'

const PerfectHouseProperties: React.FC = () => {
  const [offerProjects, setOfferProjects] = useState<ProjectOverview[]>([])

  useEffect(() => {
    const getOfferProjects = async () => {
      const allProjects = await fetchAllProjects()
      const filtered = allProjects.filter(
        (project) => project.prop_offer === true && project.card_data?.image,
      )
      setOfferProjects(filtered)
    }

    getOfferProjects()
  }, [])
  return (
    <section className="max-w-7xl flex justify-start">
      <div className="w-full lg:w-7xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerProjects.map((property) => (
            <PropertyPerfectCard
              key={property.slug}
              property={{
                id: property.slug.length, // or use a UUID or any unique fallback
                title: property.title,
                location: property.property_details?.location || 'N/A',
                price: property.property_details?.price || 'N/A',
                beds: property.card_data?.beds || 0,
                baths: property.card_data?.baths || 0,
                area: property.card_data?.area || 0,
                image: property.card_data?.image,
                badges: property.card_data?.badges?.map((b) => b.badge) || [],
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerfectHouseProperties
