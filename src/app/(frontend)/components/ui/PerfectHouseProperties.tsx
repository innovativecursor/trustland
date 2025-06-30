'use client'

import React from 'react'
import image1 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_1.png'
import image2 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_2.png'
import image3 from '../../public/assets/FeaturedPropertiesAssets/trustland_image_3.jpg'
import PropertyPerfectCard from './PropertyPerfectCard'

const properties = [
  {
    id: 1,
    title: 'Titled Lot Residences',
    location: 'Marcos Highway, Baguio City',
    price: 'PHP 14.5M',
    beds: 3,
    baths: 1,
    area: 395,
    image: image1,
    badges: ['FOR SALE', 'FEATURED'],
  },
  {
    id: 2,
    title: 'Luxury House & Lot',
    location: 'Foggy Hills, Dontogan, Baguio City',
    price: 'PHP 17k per sqm',
    beds: 4,
    baths: 2,
    area: 450,
    image: image2,
    badges: ['FOR SALE', 'FEATURED'],
  },
  {
    id: 3,
    title: 'The Outlook Ridge Residences',
    location: 'Outlook Drive, Baguio City',
    price: 'PHP 12M',
    beds: 4,
    baths: 2,
    area: 400,
    image: image3,
    badges: ['FOR SALE'],
  },
]

const PerfectHouseProperties: React.FC = () => {
  return (
    <section className="max-w-7xl flex justify-start">
      <div className="w-full lg:w-7xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyPerfectCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerfectHouseProperties
