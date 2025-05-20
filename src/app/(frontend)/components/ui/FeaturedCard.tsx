'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface FeatureCardProps {
  image: StaticImageData
  title: string
  description: string
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, index }) => {
  return (
    <motion.div
      className="group bg-white p-6 rounded-2xl relative overflow-hidden min-h-[380px] sm:min-h-[350px] shadow-2xl hover:bg-[#339438] transition-colors duration-300 z-10"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Top Right Image */}
      <div className="absolute top-4 right-4 w-24 h-24 sm:w-28 sm:h-28 z-20">
        <Image src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Bottom Content */}
      <motion.div
        className="absolute bottom-6 left-6 right-6 z-30"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="font-bold text-[28px] mb-1 text-[#71AE4C] group-hover:text-white transition-colors">
          {index + 1}
        </div>

        {/* Enforced Height Title */}
        <h3 className="text-[13px] font-semibold leading-snug text-left min-h-[15px] text-black group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Enforced Height Description */}
        <p className="mt-2 text-[12px] leading-relaxed text-left min-h-[10px] text-[#5E5E5E] group-hover:text-white transition-colors font-light">
          {description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard
