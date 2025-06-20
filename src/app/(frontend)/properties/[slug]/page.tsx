// src/app/property/[id]/page.tsx

// import { notFound } from 'next/navigation'
import Breadcrumbs from '../../components/ui/BreadCrumbs'
import PropertyListing from '../../components/ui/PropertyListing'
import PropertyDetails from '../../components/ui/PropertyDetails'
import  FeatureSection  from '../../components/ui/FeatureSection'




interface Props {
  params: {
    id: string
  }
}

const properties = [
  { id: '1', title: 'Titled Lot Residences', slug: 'titled-lot' },
  { id: '2', title: 'Luxury House & Lot' },
  { id: '3', title: 'The Outlook Ridge Residences' },
  { id: '4', title: 'Titled Lot' },
  { id: '5', title: 'Cozy Cabin in the Woods' },
  { id: '6', title: 'Vacant Lot for Sale' }
]

export default function PropertyPage({ params }: Props) {
  const property = properties.find((p) => p.id === params.id)

  // if (!property) return notFound()

  return (
    <div className='pt-[80px]'>
      <div className='pt-5'>
        <Breadcrumbs />
        <PropertyListing />
        <PropertyDetails />
        <FeatureSection />
      </div>
    </div>
  );
}
