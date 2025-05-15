'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import backgroundHero from '../public/assets/HeroAssets/hero_section_image.png'
import Search from './ui/Search'

const Hero = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundHero}
        alt="Hero Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Hero Content Wrapper */}
      <motion.div
        className="relative z-10 px-4 w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="font-albertSans text-[28px] sm:text-[32px] md:text-4xl lg:text-[43px] font-bold mb-[30px] md:mb-[50px]">
          Building Trust, One Property at a Time.
        </h1>

        <motion.div
          className="w-full flex justify-center px-4 md:px-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <Search />
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Hero
