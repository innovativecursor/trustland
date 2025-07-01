'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiMapPin, PiRuler } from 'react-icons/pi'
import Image from 'next/image'
import { ProjectOverview } from '../../utils/api'
import Link from 'next/link'

interface Props {
  project: ProjectOverview
}

const PropertyPerfectCard: React.FC<Props> = ({ project }) => {
  const card = project.card_data
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    mouseX.set(e.clientX - bounds.left)
    mouseY.set(e.clientY - bounds.top)
  }

  const gradientOverlay = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 60%)`
  )

  const imageUrl =
    card?.image && typeof card.image === 'object' && 'url' in card.image
      ? card.image.url
      : null

  const locationData = project.property_details?.location
  const locationCity =
    typeof locationData === 'object' && locationData !== null
      ? locationData.location_city
      : ''
  const locationProvince =
    typeof locationData === 'object' && locationData !== null
      ? locationData.location_province
      : ''

  return (
    <Link href={`/property/${project.slug}`} className="block">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="mx-auto lg:mx-0 relative w-full rounded-xl overflow-hidden shadow-md group transition-all bg-white"
      >
        {/* Image */}
        <motion.div
          className="relative w-full h-80"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <motion.div className="absolute inset-0" style={{ background: gradientOverlay }} />
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          {card?.badges?.map((b, i) => (
            <span
              key={i}
              className={`text-white text-[10px] px-2 py-1 rounded-full font-medium ${
                b.badge === 'FOR SALE' ? 'bg-green-600' : 'bg-gray-800'
              }`}
            >
              {b.badge}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md w-[90%] z-10 max-w-xs sm:max-w-md">
          <h3 className="text-lg font-semibold mb-1">{project.title}</h3>

          <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
            <PiMapPin className="text-base" />
            {locationCity && locationProvince
              ? `${locationCity}, ${locationProvince}`
              : locationCity || locationProvince || '—'}
          </p>

          <div className="flex items-center justify-between flex-wrap">
            <div className="text-green-600 text-[15px] font-semibold">
              PHP {project.property_details?.price || '—'}M
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600 mt-2 sm:mt-0">
              {card?.beds !== undefined && card.beds !== 0 && (
                <div className="flex items-center gap-1">
                  <FaBed /> {card.beds}
                </div>
              )}
              {card?.baths !== undefined && card.baths !== 0 && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <FaBath /> {card.baths}
                  </div>
                </>
              )}
              {card?.area !== undefined && card.area !== 0 && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <PiRuler /> {card.area} sqm
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyPerfectCard
