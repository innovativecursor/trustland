'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()

  // Split and decode the path segments
  const pathSegments = pathname.split('/').filter(Boolean).map(decodeURIComponent)

  // Extract property name and destination
  const isPropertyPage = pathSegments[0] === 'property'
  const propertyName = isPropertyPage ? pathSegments[1]?.replace(/-/g, ' ') : ''
  const propertyDestination = isPropertyPage ? pathSegments[2]?.replace(/-/g, ' ') : ''

  return (
    <nav className="bg-[#71AE4C1A] w-full pt-7 pb-5">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-2 text-black">
          {propertyName || 'Property'}
        </h1>
        <div className="text-sm text-gray-600 flex items-center">
          <Link href="/" className="hover:underline text-gray-500">
            Home
          </Link>
          <span className="mx-2">{'>'}</span>
          <Link href="/properties" className="hover:underline text-gray-500">
            Properties
          </Link>
          {propertyDestination && (
            <>
              <span className="mx-2">{'>'}</span>
              <span>{propertyDestination}</span>
            </>
          )}
          {propertyName && (
            <>
              <span className="mx-2">{'>'}</span>
              <span className="font-semibold text-black">{propertyName}</span>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Breadcrumbs
