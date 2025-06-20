'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaWhatsapp, FaFacebook, FaLink } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import Share from '../../public/assets/InternalPropertyAssets/Share.png'

const ShareButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentUrl = typeof window !== 'undefined' ? window.location.origin + pathname : ''

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    alert('Link copied to clipboard!')
    setIsOpen(false)
  }

  const openButton = () => setIsOpen(true)
  const closeButton = () => setIsOpen(false)

  return (
    <>
      <button onClick={openButton} className="border px-3 py-1.5 rounded flex ">
        <Image src={Share} alt='Share' className='mr-4'/> Share
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Background */}
            <motion.div
              className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeButton}
            />

            {/* Centered Modal */}
            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div
                className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeButton}
                  className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>

                <h2 className="text-lg font-semibold text-center mb-4">Share this page</h2>

                <div className="grid grid-cols-3 gap-4">
                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="flex flex-col items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <FaLink className="text-blue-500 text-2xl" />
                    <span className="text-sm mt-1">Copy Link</span>
                  </button>

                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <FaWhatsapp className="text-green-500 text-2xl" />
                    <span className="text-sm mt-1">WhatsApp</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <FaFacebook className="text-blue-700 text-2xl" />
                    <span className="text-sm mt-1">Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ShareButton
