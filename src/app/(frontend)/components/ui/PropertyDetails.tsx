'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AgentImage from '../../public/assets/InternalPropertyAssets/agent-image.png'
import Star1 from '../../public/assets/InternalPropertyAssets/Star 1.png'
import Phone from '../../public/assets/InternalPropertyAssets/Phone.png'
import Mail from '../../public/assets/InternalPropertyAssets/Mail.png'
import ContactButton from '../ui/ContactButton'
import Schedule from '../ui/ScheduleVisitButton'
import AgentCard from './AgentCard'
import { Agent, fetchAgent } from '../../utils/api'

interface PropertyDetailsProps {
  overview: string
  details: {
    propertyType: string | { name: string }
    floorArea: string
    unitTypes: string
    price: string
    status: string
    location: string
  }
  pricing: any
  locationPoints: any
}

export default function PropertyDetails({
  overview,
  details,
  pricing,
  locationPoints,
}: PropertyDetailsProps) {
  const [agent, setAgent] = useState<Agent | null>(null)

  useEffect(() => {
    const getAgent = async () => {
      const result = await fetchAgent()
      setAgent(result)
    }
    getAgent()
  }, [])

  const getPropertyTypeLabel = () => {
    if (typeof details.propertyType === 'object' && details.propertyType !== null) {
      return details.propertyType.name
    }
    return details.propertyType
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6 mt-15">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl">{overview}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-8">Property Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-22 text-[13px]">
            <div>
              <p className="text-gray-500">Property Type</p>
              <p className="font-semibold">{getPropertyTypeLabel()}</p>
              <hr className="text-gray-300 mt-8" />
            </div>
            <div>
              <p className="text-gray-500">Floor Area</p>
              <p className="font-semibold">{details.floorArea} sq.m.</p>
              <hr className="text-gray-300 mt-8 w-60" />
            </div>
            <div>
              <p className="text-gray-500">Unit Types</p>
              <p className="font-semibold">{details.unitTypes}</p>
              <hr className="text-gray-300 mt-8" />
            </div>
            <div>
              <p className="text-gray-500">Price</p>
              <p className="font-semibold">{details.price} M</p>
              <hr className="text-gray-300 mt-8 w-60" />
            </div>
            <div>
              <p className="text-gray-500">Property Status</p>
              <p className="font-semibold">{details.status}</p>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-semibold">{details.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4 mt-20 sm:mt-0">
        <h2 className="text-xl font-semibold">Contact Us for a Site Visit & Reservation</h2>

        {agent && (
          <AgentCard
            name={agent.name}
            email={agent.email}
            phone={agent.phone}
            rating={agent.rating}
            image={agent.image}
          />
        )}

        <div className="flex gap-2">
          <ContactButton />
          <Schedule />
        </div>
      </div>
    </div>
  )
}
