'use client'

import React, { useState } from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import FilterBar from '../components/ui/FilterBar'
import SearchBar from '../components/ui/SearchBar'
import AdditionalInfo from '../components/ui/AdditionalInfo'
import PropertiesColumn from '../components/ui/PropertiesColumn'
import PerfectHouse from '../components/ui/PerfectHouse'
import ContactUs from '../components/ui/ContactUs'
import PropertyCard from '../components/ui/PropertyCard'

import {
  fetchAllProjectSlugs,
  fetchProjectOverviewBySlug,
  fetchAllPropertyTypes,
  fetchAllLocations,
  ProjectOverview,
} from '../utils/api'

const PropertiesSection = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProjects, setFilteredProjects] = useState<ProjectOverview[]>([])

  const handleSearch = async () => {
    const [slugs, types, locations] = await Promise.all([
      fetchAllProjectSlugs(),
      fetchAllPropertyTypes(),
      fetchAllLocations(),
    ])

    const matchingTypes = types.filter(
      (type) =>
        type.property_type && type.property_type.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const matchingCities = locations.filter(
      (loc) =>
        loc.location_city && loc.location_city.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const matchedSlugs: string[] = []

    for (const slug of slugs) {
      const overview = await fetchProjectOverviewBySlug(slug)
      if (!overview) continue

      const matchesTitle =
        overview.title && overview.title.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesOverview =
        overview.overview && overview.overview.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesPropertyType = matchingTypes.some(
        (t) => t.property_type === overview.property_details?.property_type,
      )

      const matchesLocation = matchingCities.some(
        (l) => l.location_city === overview.property_details?.location,
      )

      if (matchesTitle || matchesOverview || matchesPropertyType || matchesLocation) {
        matchedSlugs.push(slug)
      }
    }

    const matchedProjects = await Promise.all(
      matchedSlugs.map((slug) => fetchProjectOverviewBySlug(slug)),
    )

    setFilteredProjects(matchedProjects.filter(Boolean) as ProjectOverview[])
  }

  const FilteredPropertiesColumn = ({
    view,
    projects,
  }: {
    view: 'grid' | 'list'
    projects: ProjectOverview[]
  }) => (
    <section className="py-8 w-full">
      {projects.length === 0 ? (
        <p className="text-gray-600 italic">No properties match your search.</p>
      ) : (
        <div
          className={`grid ${
            view === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-25'
              : 'grid-cols-1 gap-6 mb-25'
          }`}
        >
          {projects.map((property, index) => (
            <PropertyCard key={index} property={property} view={view} />
          ))}
        </div>
      )}
    </section>
  )

  return (
    <div className="pt-5">
      <Breadcrumbs />
      <div className="flex justify-center">
        <div className="pr-10">
          <FilterBar view={view} setView={setView} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
          />
          {searchQuery.trim() && filteredProjects.length > 0 ? (
            <FilteredPropertiesColumn view={view} projects={filteredProjects} />
          ) : (
            <PropertiesColumn view={view} />
          )}
        </div>
        <AdditionalInfo />
      </div>
      <PerfectHouse />
      <ContactUs />
    </div>
  )
}

export default PropertiesSection
