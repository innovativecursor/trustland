'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiMapPin, PiRuler } from 'react-icons/pi'
import Image, { StaticImageData } from 'next/image'

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  area: number
  image: StaticImageData
  badges: string[]
}

const PropertyPerfectCard: React.FC<{ property: Property }> = ({ property }) => {
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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="mx-auto lg:mx-0 relative w-90 rounded-xl overflow-hidden shadow-md group transition-all bg-white"
    >
      {/* Image */}
      <motion.div
        className="relative w-full h-70 sm:h-72 md:h-80"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image src={property.image} alt={property.title} fill className="object-cover" priority />
        <motion.div className="absolute inset-0" style={{ background: gradientOverlay }} />
      </motion.div>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2 z-20">
        {property.badges.includes('FOR SALE') && (
          <span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded-full font-medium">
            FOR SALE
          </span>
        )}
        {property.badges.includes('FEATURED') && (
          <span className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded-full font-medium">
            FEATURED
          </span>
        )}
      </div>

      {/* Info */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md w-[90%] z-10 max-w-xs sm:max-w-md">
        <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
          <PiMapPin className="text-base" /> {property.location}
        </p>

        <div className="flex items-center justify-between flex-wrap">
          <div className="text-green-600 text-[15px] font-semibold">{property.price}</div>
          <div className="flex items-center gap-3 text-xs text-gray-600 mt-2 sm:mt-0">
            {property.beds !== 0 && (
              <div className="flex items-center gap-1">
                <FaBed /> {property.beds}
              </div>
            )}
            {property.baths !== 0 && (
              <>
                <div className="h-3 w-px bg-gray-300" />
                <div className="flex items-center gap-1">
                  <FaBath /> {property.baths}
                </div>
              </>
            )}
            <div className="h-3 w-px bg-gray-300" />
            <div className="flex items-center gap-1">
              <PiRuler /> {property.area}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPerfectCard
