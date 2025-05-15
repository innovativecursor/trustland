'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { SiViber } from 'react-icons/si'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../public/assets/logo_trustland.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isPropertiesPage = pathname.includes('properties') || pathname.includes('property')

  const navbarBg = isHome ? 'bg-transparent' : 'bg-[#fffff]'

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Feature Properties', href: '/properties' },
    { name: 'Services', href: isPropertiesPage ? '/' : '#services' },
    {
      name: 'Contact',
      href: isPropertiesPage ? 'https://www.facebook.com/paulbalitarealtyservicespbrs' : '#contact',
    },
  ]

  const socialLinks = [
    {
      icon: <FaFacebookF size={18} className="text-[#339438]" />,
      href: 'https://www.facebook.com/paulbalitarealtyservicespbrs',
    },
    {
      icon: <FaWhatsapp size={18} className="text-[#339438]" />,
      href: 'https://wa.me/yourNumber', // Replace with actual number
    },
    {
      icon: <SiViber size={18} className="text-[#339438]" />,
      href: 'viber://chat?number=yourNumber', // Replace with actual Viber number
    },
  ]

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 ${navbarBg}`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={'/'}>
            <Image src={logo} width={200} height={200} alt="PBRS-Image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-10 xl:gap-12 font-medium text-base xl:text-[15px]">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative cursor-pointer transition-colors duration-300 hover:text-[#339438] ${
                pathname === item.href ? 'font-light text-[#339438]' : 'text-[#1A1A1A] font-light'
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#339438] text-white hover:bg-white hover:text-[#339438] transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <RxHamburgerMenu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-[260px] sm:w-[280px] md:w-[320px] h-full bg-[#121212] shadow-xl p-6 flex flex-col gap-6"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <IoMdClose size={28} className="text-white" />
                </button>
              </div>

              <ul className="flex flex-col text-white font-medium text-lg sm:text-xl gap-6 sm:gap-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`cursor-pointer hover:text-gray-400 ${
                      pathname === item.href ? 'font-semibold' : ''
                    }`}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Icons - Mobile */}
              <div className="flex gap-6 mt-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-[#339438] text-white bg-[#339438] hover:bg-white hover:text-[#339438] transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
