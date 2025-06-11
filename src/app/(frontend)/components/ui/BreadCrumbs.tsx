'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumbs = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = segment.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())

    return (
      <span key={href} className="flex items-center">
        <span className="mx-2 text-gray-400">{'>'}</span>
        <Link href={href} className="text-black font-medium capitalize">
          {label}
        </Link>
      </span>
    )
  })

  return (
    <nav>
      <h1 className='max-w-7xl mx-auto px-8 text-2xl font-semibold p-4'>
        {pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) || 'Home'}
      </h1>
      <div className="max-w-7xl mx-auto px-8 text-sm pb-5 flex items-center">
        <Link href="/" className="text-gray-500">Home</Link>
        {breadcrumbs}
      </div>
    </nav>
  )
}

export default Breadcrumbs
