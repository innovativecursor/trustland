import Link from 'next/link'

interface BreadcrumbsProps {
  propertyName: string
  propertyDestination: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  return (
    <nav className="">
      <h1 className='max-w-7xl mx-auto px-8 text-2xl font-semibold p-4'>Properties</h1>
      <div className="max-w-7xl mx-auto px-8 text-sm pb-5">
        <Link href="/" className=" text-gray-500">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/properties" className="font-medium text-black">
          Featured Properties
        </Link>
      </div>
    </nav>
  )
}

export default Breadcrumbs
