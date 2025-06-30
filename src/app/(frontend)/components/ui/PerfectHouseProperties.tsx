'use client'

import React, { useEffect, useState } from 'react'
import { fetchAllProjects, ProjectOverview } from '../../utils/api'
import PropertyPerfectCard from '../ui/PropertyPerfectCard'

const PerfectHouseProperties = () => {
  const [projects, setProjects] = useState<ProjectOverview[]>([])

  useEffect(() => {
    const loadProjects = async () => {
      const allProjects = await fetchAllProjects()
      const filtered = allProjects.filter((p) => p.prop_offer === true)
      setProjects(filtered)
    }

    loadProjects()
  }, [])

  return (
    <section className="max-w-7xl flex justify-start">
      <div className="w-full lg:w-7xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <PropertyPerfectCard key={i} project={project} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No properties available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PerfectHouseProperties
