'use client'

import React from 'react'
import Image from 'next/image'

import Bullet from '../../public/assets/InternalPropertyAssets/Star 6.png'
import Tick from '../../public/assets/InternalPropertyAssets/Group 1000005104.png'
import Card from '../../public/assets/InternalPropertyAssets/Card Payment.png'
import PriceTag from '../../public/assets/InternalPropertyAssets/Price Tag.png'

type FeaturePoint = {
  id: string
  point: string
}

type FeaturesType = {
  nature_living: FeaturePoint[]
  building_unit_features: FeaturePoint[]
  recreational_facilities: FeaturePoint[]
  convenience_accessibility: FeaturePoint[]
}

type Props = {
  features: FeaturesType
}

const FeaturesAndPricing: React.FC<Props> = ({ features }) => {
  return (
    <div className="max-w-7xl mx-auto bg-[#71ae4c1a] p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 my-25">
      {/* Left Column */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Features & Amenities</h2>

        {/* Nature-Inspired Living */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Nature Icon" width={20} height={20} />
            Nature-Inspired Living
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            {features.nature_living.map((item) => (
              <li key={item.id} className="flex items-start gap-2">
                <Image src={Tick} alt="Check" width={16} height={16} />
                {item.point}
              </li>
            ))}
          </ul>
        </div>

        {/* Building & Unit Features */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Building Icon" width={20} height={20} />
            Building & Unit Features
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            {features.building_unit_features.map((item) => (
              <li key={item.id} className="flex items-start gap-2">
                <Image src={Tick} alt="Check" width={16} height={16} />
                {item.point}
              </li>
            ))}
          </ul>
        </div>

        {/* Recreational Facilities */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Recreation Icon" width={20} height={20} />
            Recreational Facilities
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            {features.recreational_facilities.map((item) => (
              <li key={item.id} className="flex items-start gap-2">
                <Image src={Tick} alt="Check" width={16} height={16} />
                {item.point}
              </li>
            ))}
          </ul>
        </div>

        {/* Convenience & Accessibility */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Accessibility Icon" width={20} height={20} />
            Convenience & Accessibility
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            {features.convenience_accessibility.map((item) => (
              <li key={item.id} className="flex items-start gap-2">
                <Image src={Tick} alt="Check" width={16} height={16} />
                {item.point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column - Placeholder (optional static or prop-based content) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-5">
            Location Highlights
          </h2>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 10 minutes to SM Baguio &
              Burnham Park
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 15 minutes to Camp John Hay &
              Baguio Country Club
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Close to top universities
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">Pricing & Payment Plans</h2>
          <p className="flex items-center gap-2 font-semibold text-sm mt-5">
            <Image src={PriceTag} alt="Price Tag" className="w-7" /> Price Range
          </p>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Studio Units – PHP 3.5M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 1-Bedroom Units – PHP 5.8M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 2-Bedroom Units – PHP 9.5M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Penthouse – PHP 15M
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Image src={Card} alt="Card" /> Flexible Payment Options
          </h3>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Spot Cash Discount – Up to 10%
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Bank Financing – Low
              amortization
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> In-House Financing – Flexible
              terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeaturesAndPricing
