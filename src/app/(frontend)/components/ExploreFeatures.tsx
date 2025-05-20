'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import correctImage from '../public/assets/ServicesAssets/correct_image.png'
import workerImage from '../public/assets/ServicesAssets/worker_image.png'
import cameraImage from '../public/assets/ServicesAssets/camera_image.png'
import scaleImage from '../public/assets/ServicesAssets/scale_image.png'

import FeatureCard from './ui/FeaturedCard'

// Feature data
const features = [
  {
    image: correctImage,
    title: 'Done-for-You Legal & Paperwork Processing',
    description: 'We take care of the complex legalities involved in buying or selling a property.',
  },
  {
    image: workerImage,
    title: 'Construction Services',
    description: `We provide full-scale construction services tailored to meet your project’s needs.`,
  },
  {
    image: cameraImage,
    title: 'Land Surveying Services',
    description:
      'We provide precise land measurement and verification to ensure clear property boundaries.',
  },
  {
    image: scaleImage,
    title: 'Architectural Design Services',
    description:
      'Our expert architectural team brings your vision to life with innovative and functional designs.',
  },
]

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } },
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const ExploreFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="bg-[#F5FFF6]">
      <motion.section
        className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-18"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        onViewportEnter={() => setIsVisible(true)}
        onViewportLeave={() => setIsVisible(false)}
        viewport={{ amount: 0.5 }}
        variants={sectionVariants}
      >
        {/* Title */}
        <motion.h2
          className="text-black font-semibold tracking-wide text-[58px] flex flex-col justify-center items-center text-center"
          variants={titleVariants}
        >
          Services
        </motion.h2>

        <motion.h3
          className="text-[12px] sm:text-[16px] md:text-[18px] w-full max-w-[47rem] font-light text-center mt-2 mb-[20px]"
          variants={titleVariants}
        >
          At TrustLand Solutions, we make property ownership easy and stress-free by handling
          everything from legal paperwork to construction and design.
        </motion.h3>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full px-2 sm:px-4 md:px-0"
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default ExploreFeatures
