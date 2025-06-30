'use client'

import React, { useEffect, useState } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiRuler, PiMapPin } from 'react-icons/pi'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import LiquidHoverButton from './ui/SearchButton'
import { useRouter } from 'next/navigation'
import { ProjectOverview, fetchAllProjects } from '../utils/api'

const FeaturedProperties: React.FC = () => {
  const router = useRouter()
  const [projects, setProjects] = useState<ProjectOverview[]>([])

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchAllProjects()
      const filtered = data.filter((proj) => proj.card_data && proj.card_data.image)
      setProjects(filtered)
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
        {projects.map((project) => {
          const card = project.card_data
          const containerRef = React.useRef<HTMLDivElement | null>(null)
          const mouseX = useMotionValue(0)
          const mouseY = useMotionValue(0)

          const handleMouseMove = (e: React.MouseEvent) => {
            const bounds = containerRef.current?.getBoundingClientRect()
            if (!bounds) return
            const x = e.clientX - bounds.left
            const y = e.clientY - bounds.top
            mouseX.set(x)
            mouseY.set(y)
          }

          const gradientOverlay = useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          )

          return (
            <div
              key={project.slug}
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="relative group rounded-xl overflow-hidden shadow-lg h-[400px]"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image src={card?.image} alt={project.title} fill className="object-cover" />
                <motion.div className="absolute inset-0" style={{ background: gradientOverlay }} />
              </motion.div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2 z-10">
                {card?.badges?.map((b, i) => (
                  <span
                    key={i}
                    className={`text-white text-[10px] px-2.5 py-2.5 rounded-2xl font-medium ${
                      b.badge === 'FOR SALE' ? 'bg-[#339438]' : 'bg-gray-800'
                    }`}
                  >
                    {b.badge}
                  </span>
                ))}
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md z-20">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                  <PiMapPin className="text-base" /> {project.property_details?.location || '—'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-[#339438] text-lg font-medium">
                    {project.property_details?.price}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    {card?.beds !== 0 && (
                      <div className="flex items-center gap-1">
                        <FaBed /> {card?.beds}
                      </div>
                    )}

                    {card?.beds !== 0 && card?.baths !== 0 && (
                      <div className="h-4 w-px bg-gray-300" />
                    )}

                    {card?.baths !== 0 && (
                      <div className="flex items-center gap-1">
                        <FaBath /> {card?.baths}
                      </div>
                    )}

                    {(card?.beds || card?.baths) && <div className="h-4 w-px bg-gray-300" />}

                    {card?.area && (
                      <div className="flex items-center gap-1">
                        <PiRuler /> {card.area}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedProperties
