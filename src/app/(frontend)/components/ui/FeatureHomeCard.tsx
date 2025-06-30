'use client'

import React, { useRef } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { PiMapPin, PiRuler } from 'react-icons/pi'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ProjectOverview } from '../../utils/api'

interface Props {
  project: ProjectOverview
}

const FeatureHomeCard: React.FC<Props> = ({ project }) => {
  const card = project.card_data
  const containerRef = useRef<HTMLDivElement | null>(null)
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
        {card?.image && typeof card.image === 'object' && card.image.url?.trim() ? (
          <Image
            src={card.image.url}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : null}

        {/* Optional fallback: */}
        {/* <Image src={card?.image?.url?.trim() || '/placeholder.jpg'} alt={project.title} fill className="object-cover" /> */}

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
            {card?.beds !== 0 && card?.baths !== 0 && <div className="h-4 w-px bg-gray-300" />}
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
}

export default FeatureHomeCard
