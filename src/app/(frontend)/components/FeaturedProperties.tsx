'use client'

import React, { useRef } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiRuler, PiMapPin } from 'react-icons/pi'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import LiquidHoverButton from './ui/SearchButton'

import image1 from '../public/assets/FeaturedPropertiesAssets/trustland_image_1.png'
import image2 from '../public/assets/FeaturedPropertiesAssets/trustland_image_2.png'
import image3 from '../public/assets/FeaturedPropertiesAssets/trustland_image_3.jpg'
import image4 from '../public/assets/FeaturedPropertiesAssets/trustland_image_4.png'
import image5 from '../public/assets/FeaturedPropertiesAssets/trustland_image_5.jpg'
import image6 from '../public/assets/FeaturedPropertiesAssets/trustland_image_6.png'

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
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-6 md:px-8 py-16 my-12 relative">
      <div className="flex justify-between items-center mb-6 w-full">
        <div>
          <h2 className="text-[58px] font-semibold">Featured Properties</h2>
          <p className="text-[#5C5C5C] leading-8 mt-1 text-[17px] font-light max-w-5xl">
            At TrustLand Solutions, we make property ownership easy and stress-free by handling
            everything from legal paperwork to construction and design.
          </p>
        </div>
        <LiquidHoverButton>View All</LiquidHoverButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
        {properties.map((property) => {
          const containerRef = useRef<HTMLDivElement | null>(null) // ✅ Fixed Type
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
              key={property.id}
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="relative group rounded-xl overflow-hidden shadow-lg h-[400px]"
            >
              {/* Background Image with Framer Motion Zoom */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none" // 👈 Added pointer-events-none
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image src={property.image} alt={property.title} fill className="object-cover" />
                <motion.div className="absolute inset-0" style={{ background: gradientOverlay }} />
              </motion.div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2 z-10">
                {property.badges.includes('FOR SALE') && (
                  <span className="bg-[#339438] text-white text-[10px] px-2.5 py-2.5 rounded-2xl font-medium">
                    FOR SALE
                  </span>
                )}
                {property.badges.includes('FEATURED') && (
                  <span className="bg-gray-800 text-white text-[10px] px-2.5 py-2.5 rounded-2xl font-medium">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md z-20">
                <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                  <PiMapPin className="text-base" /> {property.location}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-[#339438] text-lg font-medium">{property.price}</div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    {property.beds !== 0 && (
                      <div className="flex items-center gap-1">
                        <FaBed /> {property.beds}
                      </div>
                    )}

                    {property.beds !== 0 && property.baths !== 0 && (
                      <div className="h-4 w-px bg-gray-300" />
                    )}

                    {property.baths !== 0 && (
                      <div className="flex items-center gap-1">
                        <FaBath /> {property.baths}
                      </div>
                    )}

                    {(property.beds !== 0 || property.baths !== 0) && (
                      <div className="h-4 w-px bg-gray-300" />
                    )}

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
