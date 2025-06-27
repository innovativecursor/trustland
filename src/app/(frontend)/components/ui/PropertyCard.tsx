'use client'
import React, { useRef } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiRuler, PiMapPin } from 'react-icons/pi'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ProjectOverview } from '../../utils/api'

interface PropertyCardProps {
  property: ProjectOverview
  view: 'grid' | 'list'
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, view }) => {
  const card = property.card_data
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
      `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 60%)`,
  )

  return (
    <Link href={`/properties/${property.slug}`}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`mx-auto md:mx-0 relative rounded-xl overflow-hidden shadow-md group transition-all bg-white ${
          view === 'list' ? 'flex flex-row w-full h-[170px] sm:h-[200px]' : 'h-70 w-90 md:w-full md:h-auto'
        }`}
      >
        {/* Image */}
        <motion.div
          className={`relative ${
            view === 'list' ? 'w-40 h-auto sm:w-1/3 sm:h-full' : 'h-70 sm:h-64 md:h-80'
          }`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {card?.image?.url && (
            <Image
              src={card.image.url}
              alt={property.title}
              fill
              className="object-cover"
              style={{ zIndex: 1 }}
            />
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

        {/* Content */}
        <div
          className={`bg-white p-4 shadow-md z-10 ${
            view === 'list'
              ? 'flex-1 flex flex-col justify-center'
              : 'absolute bottom-[20px] left-1/2 transform -translate-x-1/2 rounded-md w-[90%] max-w-md'
          }`}
        >
          <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
            <PiMapPin className="text-base" /> {property.property_details?.location}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-green-600 text-[15px] font-semibold">
              PHP {property.property_details?.price}M
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
              {card?.beds !== 0 && card?.beds !== undefined && (
                <div className="flex items-center gap-1">
                  <FaBed /> {card.beds}
                </div>
              )}
              {card?.baths !== 0 && card?.baths !== undefined && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <FaBath /> {card.baths}
                  </div>
                </>
              )}
              {card?.area && (
                <>
                  <div className="h-3 w-px bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <PiRuler /> {card.area}
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

export default PropertyCard
