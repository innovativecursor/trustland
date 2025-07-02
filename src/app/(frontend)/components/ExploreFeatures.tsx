'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
// import Image from 'next/image'

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
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const MotionWrapper = isMobile ? 'div' : motion.div
  const MotionHeader = isMobile ? 'h2' : motion.h2
  const MotionSubHeader = isMobile ? 'h3' : motion.h3

  return (
    <div className="my-5 md:my-0">
      <MotionWrapper
        ref={ref}
        className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 sm:py-16"
        initial="hidden"
        animate={!isMobile && isInView ? 'visible' : 'hidden'}
        variants={!isMobile ? sectionVariants : undefined}
      >
        <MotionHeader
          className="text-black font-semibold tracking-wide text-[58px] flex flex-col justify-center items-center text-center"
          variants={!isMobile ? titleVariants : undefined}
        >
          Services
        </MotionHeader>

        <MotionSubHeader
          className="text-[12px] sm:text-[16px] md:text-[18px] w-full max-w-[47rem] font-light text-center mt-2 mb-[20px]"
          variants={!isMobile ? titleVariants : undefined}
        >
          At TrustLand Solutions, we make property ownership easy and stress-free by handling
          everything from legal paperwork to construction and design.
        </MotionSubHeader>

        <MotionWrapper
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full px-2 sm:px-4 md:px-0"
          variants={!isMobile ? sectionVariants : undefined}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </MotionWrapper>
      </MotionWrapper>
    </div>
  )
}

export default ExploreFeatures
