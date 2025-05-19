'use client'

import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiViber } from 'react-icons/si'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
// Update these with your actual data
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Feature Properties', href: '/properties' },
  { name: 'Services', href: '/services' },

  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { href: 'https://facebook.com', icon: <FaFacebookF size={18} className="text-[#339438]" /> },
  { href: 'https://twitter.com', icon: <FaWhatsapp size={18} className="text-[#339438]" /> },
  { href: 'https://linkedin.com', icon: <SiViber size={18} className="text-[#339438]" /> },
]

// Sidebar Animation Variant
const sidebarVariants = {
  open: {
    clipPath: `circle(1500px at 90% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 90% 40px)',
    transition: {
      type: 'spring',
      stiffness: 300, // lowered stiffness for less abrupt end
      damping: 35, // reduced damping for smoother exit
      mass: 0.6, // added mass for softer pull
    },
  },
}

// Staggered List Animation
const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function AnimatedSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar with clipPath animation */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 w-full sm:w-[320px] h-full bg-[#121212] shadow-xl p-6 z-40 overflow-hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={28} className="text-white" />
              </button>
            </div>

            {/* Navigation List */}
            <motion.ul
              className="flex flex-col text-white font-medium text-lg sm:text-xl gap-6 sm:gap-8 mt-6"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer hover:text-gray-400 ${
                    pathname === item.href ? 'font-semibold' : ''
                  }`}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6 mt-10"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#339438] text-white  hover:bg-white hover:text-[#339438] transition-colors duration-300"
                  variants={menuItemVariants}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
