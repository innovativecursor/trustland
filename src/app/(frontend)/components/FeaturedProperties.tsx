'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ProjectOverview, fetchAllProjects } from '../utils/api'

import LiquidHoverButton from './ui/SearchButton'
import FeatureHomeCard from './ui/FeatureHomeCard'

const FeaturedProperties: React.FC = () => {
  const router = useRouter()
  const [projects, setProjects] = useState<ProjectOverview[]>([])

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchAllProjects()
      const featured = data.filter((proj) => proj.prop_featured === true && proj.card_data?.image)
      setProjects(featured)
    }

    getProjects()
  }, [])

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-6 md:px-8 py-16 my-12 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 w-full">
        <div>
          <h2 className="font-semibold text-[35px] md:text-[58px]">Featured Properties</h2>
          <p className="text-[#5C5C5C] leading-8 mt-1 text-[17px] font-light max-w-5xl">
            At TrustLand Solutions, we make property ownership easy and stress-free by handling
            everything from legal paperwork to construction and design.
          </p>
        </div>
        <LiquidHoverButton onClick={() => router.push('/properties')}>View All</LiquidHoverButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
        {projects.map((project) => (
          <FeatureHomeCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProperties
