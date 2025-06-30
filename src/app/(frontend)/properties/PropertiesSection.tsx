'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import FilterBar from '../components/ui/FilterBar'
import SearchBar from '../components/ui/SearchBar'
import AdditionalInfo from '../components/ui/AdditionalInfoWrapper'
import PerfectHouse from '../components/ui/PerfectHouse'
import ContactUs from '../components/ui/ContactUs'
import PropertyCard from '../components/ui/PropertyCard'
import SkeletonCard from '../components/ui/SkeletonCard'

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
  const [projects, setProjects] = useState<ProjectOverview[]>([])
  const [filteredProjects, setFilteredProjects] = useState<ProjectOverview[]>([])
  const [loading, setLoading] = useState(true)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [searchActive, setSearchActive] = useState(false)

  const [sortOption, setSortOption] = useState('Popularity')
  const [currentPage, setCurrentPage] = useState(1)

  // Load search history from localStorage
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
    setSearchHistory(storedHistory)
  }, [])

  // Load all properties initially
  useEffect(() => {
    const loadInitial = async () => {
      setLoading(true)
      const slugs = await fetchAllProjectSlugs()
      const allProjects = await Promise.all(
        slugs.map((slug) => fetchProjectOverviewBySlug(slug))
      )
      const validProjects = allProjects.filter(Boolean) as ProjectOverview[]
      setProjects(validProjects)
      setFilteredProjects(validProjects)
      setLoading(false)
    }

    loadInitial()
  }, [])

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setSearchActive(true)
    setLoading(true)

    const updatedHistory = [searchQuery, ...searchHistory.filter(q => q !== searchQuery)].slice(0, 5)
    setSearchHistory(updatedHistory)
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))

    const [slugs, types, locations] = await Promise.all([
      fetchAllProjectSlugs(),
      fetchAllPropertyTypes(),
      fetchAllLocations(),
    ])

    const query = searchQuery.toLowerCase()
    const matchedSlugs: string[] = []

    for (const slug of slugs) {
      const overview = await fetchProjectOverviewBySlug(slug)
      if (!overview) continue

      const { title, overview: desc, property_details } = overview

      const matchesTitle = title?.toLowerCase().includes(query)
      const matchesOverview = desc?.toLowerCase().includes(query)
      const matchesType = property_details?.property_type?.toLowerCase().includes(query)
      const matchesLocation = property_details?.location?.toLowerCase().includes(query)
      const matchesPrice = property_details?.price?.toString().includes(query)

      if (matchesTitle || matchesOverview || matchesType || matchesLocation || matchesPrice) {
        matchedSlugs.push(slug)
      }
    }

    const matchedProjects = await Promise.all(
      matchedSlugs.map((slug) => fetchProjectOverviewBySlug(slug))
    )

    setTimeout(() => {
      setFilteredProjects(matchedProjects.filter(Boolean) as ProjectOverview[])
      setLoading(false)
    }, 1000)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchActive(false)
    setFilteredProjects(projects)
  }

  useEffect(() => {
    const filters = sessionStorage.getItem('searchFilters')
    if (!filters || projects.length === 0) return

    const params = new URLSearchParams(filters)
    const selectedType = params.get('propertyType')
    const selectedLocation = params.get('location')
    const maxBudget = params.get('budget') ? parseInt(params.get('budget') || '0') : undefined

    const filtered = projects.filter((property) => {
      const { property_details } = property

      const matchesType =
        !selectedType || property_details?.property_type === selectedType

      const matchesLocation =
        !selectedLocation || property_details?.location === selectedLocation

      const matchesBudget =
        !maxBudget ||
        (property_details?.price &&
          Number(property_details.price) <= maxBudget)

      return matchesType && matchesLocation && matchesBudget
    })

    setFilteredProjects(filtered)
    sessionStorage.removeItem('searchFilters')
  }, [projects])

  
  // Sort logic
  const sortedProjects = useMemo(() => {
  const sorted = [...filteredProjects]
  if (sortOption === 'LowToHigh') {
    sorted.sort(
      (a, b) =>
        Number(a.property_details?.price || 0) - Number(b.property_details?.price || 0)
    )
  } else if (sortOption === 'HighToLow') {
    sorted.sort(
      (a, b) =>
        Number(b.property_details?.price || 0) - Number(a.property_details?.price || 0)
    )
  }
  return sorted
}, [filteredProjects, sortOption])

  // Pagination logic
  const totalPages = Math.ceil(sortedProjects.length / 6)
  const paginatedProjects = sortedProjects.slice((currentPage - 1) * 6, currentPage * 6)

  // Reset page if filteredProjects change
  useEffect(() => {
    setCurrentPage(1)
  }, [filteredProjects])

  const PropertyCardsWrapper = ({
    projects,
    view,
    loading,
  }: {
    projects: ProjectOverview[]
    view: 'grid' | 'list'
    loading: boolean
  }) => (
    <section className="py-8 w-full">
      {loading ? (
        <div
          className={`grid ${
            view === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-25'
              : 'grid-cols-1 gap-6 mb-25'
          }`}
        >
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : projects.length === 0 ? (
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
        <div className="lg:pr-10">
          <FilterBar
            view={view}
            setView={setView}
            sortOption={sortOption}
            setSortOption={setSortOption}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProperties={filteredProjects.length}
          />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            searchHistory={searchHistory}
            setSearchHistory={setSearchHistory}
          />
          {searchActive && (
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleClearSearch}
                className="text-sm text-[#339438] underline hover:text-black"
              >
                Clear search
              </button>
            </div>
          )}
          <PropertyCardsWrapper
            view={view}
            loading={loading}
            projects={paginatedProjects}
          />
        </div>
        <AdditionalInfo properties={projects} onFilter={setFilteredProjects} />
      </div>
      <PerfectHouse />
      <ContactUs />
    </div>
  )
}

export default PropertiesSection
