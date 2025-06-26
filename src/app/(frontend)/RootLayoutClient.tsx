'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import './styles.css'
import Loader from './components/ui/Loader'
import { Toaster } from 'react-hot-toast' // ✅ Import toaster

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true) // Show loader on route change
    const timer = setTimeout(() => setLoading(false), 600) // Fake delay for UX
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {/* ✅ React Hot Toast Toaster */}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

        {/* Show loader while loading */}
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Loader />
          </div>
        ) : (
          <main>{children}</main>
        )}

        <Footer />
      </body>
    </html>
  )
}
