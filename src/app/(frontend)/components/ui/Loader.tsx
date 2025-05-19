'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../../public/assets/logo_trustland.png'

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo */}
      <Image src={logo} alt="TrustLand Solutions" width={200} height={200} className="mb-4" />

      {/* Animated Dots */}
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-[#71ae4c] rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [-5, 0, -5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
