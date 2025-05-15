'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import './styles.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/NavBar'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true) // Show loader
    const timer = setTimeout(() => setLoading(false), 600) // Fake delay for UX

    return () => clearTimeout(timer)
  }, [pathname]) // Run on route change

  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Show Loader when loading */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
