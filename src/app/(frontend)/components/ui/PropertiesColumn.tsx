'use client'

import React, { useRef } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiRuler, PiMapPin } from 'react-icons/pi'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'


import image1 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_1.png'
import image2 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_2.png'
import image3 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_3.jpg'
import image4 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_4.png'
import image5 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_5.jpg'
import image6 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_6.png'

const properties = [
  {
    id: 1,
    title: 'Titled Lot Residences',
    location: 'Marcos Highway, Baguio City',
    price: 'PHP 14.5M',
    beds: 3,
    baths: 1,
    area: 395,
    image: image1,
    badges: ['FOR SALE', 'FEATURED'],
  },
  {
    id: 2,
    title: 'Luxury House & Lot',
    location: 'Foggy Hills, Dontogan, Baguio City',
    price: 'PHP 17k per sqm',
    beds: 4,
    baths: 2,
    area: 450,
    image: image2,
    badges: ['FOR SALE', 'FEATURED'],
  },
  {
    id: 3,
    title: 'The Outlook Ridge Residences',
    location: 'Outlook Drive, Baguio City',
    price: 'PHP 12M',
    beds: 4,
    baths: 2,
    area: 400,
    image: image3,
    badges: ['FOR SALE'],
  },
  {
    id: 4,
    title: 'Titled Lot',
    location: 'Sto. Tomas Proper, Baguio City',
    price: 'PHP 13k per sqm',
    beds: 0,
    baths: 0,
    area: 450,
    image: image4,
    badges: ['FOR SALE'],
  },
  {
    id: 5,
    title: 'Cozy Cabin in the Woods',
    location: 'Marcos Highway, Baguio City',
    price: 'PHP 7M',
    beds: 4,
    baths: 1,
    area: 460,
    image: image5,
    badges: ['FOR SALE', 'FEATURED'],
  },
  {
    id: 6,
    title: 'Vacant Lot for Sale',
    location: '7802 20th Ave, Brooklyn',
    price: 'PHP 3.5M',
    beds: 4,
    baths: 2,
    area: 500,
    image: image6,
    badges: [],
  },
]

const FeaturedProperties: React.FC = () => {
  return (
    <section className="max-w-4xl h-4xl md:ml-30 px-8 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {properties.map((property) => {
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

          return (
            <div
              key={property.id}
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="relative rounded-xl overflow-hidden shadow-md group transition-all bg-white"
            >
              {/* Image */}
              <motion.div
                className="relative h-56 md:h-80"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  style={{ zIndex: 1 }}
                />
                <motion.div
                  className="absolute inset-0"
                  style={{ background: gradientOverlay }}
                />
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

              {/* Content */}
              <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md w-[90%] max-w-md z-10">
                <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                  <PiMapPin className="text-base" /> {property.location}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-green-600 text-[15px] font-semibold">{property.price}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
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
        })}
      </div>
    </section>
  )
}

export default FeaturedProperties
