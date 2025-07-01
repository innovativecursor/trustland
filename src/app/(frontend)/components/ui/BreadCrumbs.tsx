'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbsProps {
  title?: string
}

// Optional: Map of visible breadcrumb labels to actual href paths
const customRouteMap: Record<string, string> = {
  property: '/properties',
}

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const hrefSegments = pathSegments.slice(0, index + 1)
    const rawHref = '/' + hrefSegments.join('/')
    const mappedHref = customRouteMap[segment] || rawHref

    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    return (
      <span key={mappedHref} className="flex items-center">
        <span className="mx-2 text-gray-400">{'>'}</span>
        <Link href={mappedHref} className="text-black font-medium capitalize">
          {label}
        </Link>
      </span>
    )
  })

  return (
    <nav className="h-[160px] bg-[#71ae4c1a] w-full pt-7">
      <h1 className="max-w-7xl mx-auto px-8 text-2xl font-semibold p-4">
        {title ||
          pathSegments[pathSegments.length - 1]
            ?.replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()) ||
          'Home'}
      </h1>
      <div className="max-w-7xl mx-auto px-8 text-sm pb-5 flex items-center">
        <Link href="/" className="text-gray-500">
          Home
        </Link>
        {breadcrumbs}
      </div>
    </nav>
  )
}

export default Breadcrumbs
