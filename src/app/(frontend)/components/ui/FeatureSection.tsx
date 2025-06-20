'use client'

import Image from 'next/image'
import React from 'react'

import Bullet from "../../public/assets/InternalPropertyAssets/Star 6.png"
import Tick from "../../public/assets/InternalPropertyAssets/Group 1000005104.png"
import Card from "../../public/assets/InternalPropertyAssets/Card Payment.png"
import PriceTag from "../../public/assets/InternalPropertyAssets/Price Tag.png"

const FeaturesAndPricing = () => {
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
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Surrounded by lush pine trees & landscaped gardens
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Fresh mountain air & scenic views
            </li>
          </ul>
        </div>

        {/* Building & Unit Features */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Building Icon" width={20} height={20} />
            Building & Unit Features
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> High-speed elevators
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Balconies with scenic views (select units)
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Spacious & modern interiors
            </li>
          </ul>
        </div>

        {/* Recreational Facilities */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Recreation Icon" width={20} height={20} />
            Recreational Facilities
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Swimming pool & clubhouse
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Gym & wellness center
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Children’s play area & jogging paths
            </li>
          </ul>
        </div>

        {/* Convinience & Accessibility */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Image src={Bullet} alt="Accessibility Icon" width={20} height={20} />
            Convenience & Accessibility
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Underground parking & guest parking
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> On-site property management & concierge services
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Location Highlights */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-5">
            Location Highlights
          </h2>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 10 minutes to SM Baguio & Burnham Park
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> 15 minutes to Camp John Hay & Baguio Country Club
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> Close to top universities (Saint Louis University, University of the Cordilleras)
            </li>
          </ul>
        </div>

        {/* Pricing & Payment Plans */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
           Pricing & Payment Plans
          </h2>

          {/* Price Range */}
          <div>
            <p className='flex items-center gap-2 font-semibold text-sm mt-5 '><Image src={PriceTag} alt='Price-Tag' className='w-7' />Price Range</p>
          </div>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>Studio Units (30 sqm)</p> – Starts at PHP 3.5M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>1-Bedroom Units (50 sqm)</p> – Starts at PHP 5.8M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>2-Bedroom Units (80 sqm)</p> – Starts at PHP 9.5M
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>Penthouse Suites (120 sqm)</p> – Starts at PHP 15M
            </li>
          </ul>
        </div>

        {/*Flexible Payment Options */}
        <div>
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Image src={Card} alt='Card' />Flexible Payment Options
          </h3>
          <ul className="ml-6 space-y-1 mt-2 text-sm">
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>Spot Cash Discount </p>– Up to 10% off
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>Bank Financing Available</p> – Low monthly amortization
            </li>
            <li className="flex items-start gap-2">
              <Image src={Tick} alt="Check" width={16} height={16} /> <p className='font-medium'>In-House Financing </p>– Flexible terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeaturesAndPricing
