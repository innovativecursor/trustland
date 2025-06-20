import React from "react";
import Image from "next/image";
import AgentImage from '../../public/assets/InternalPropertyAssets/agent-image.png'
import Star1 from '../../public/assets/InternalPropertyAssets/Star 1.png'
import Phone from '../../public/assets/InternalPropertyAssets/Phone.png'
import Mail from '../../public/assets/InternalPropertyAssets/Mail.png'
import Schedule from '../../public/assets/InternalPropertyAssets/Schedule.png'
import ContactAgent from '../../public/assets/InternalPropertyAssets/Administrator Male.png'

export default function PropertyDetails() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6 mt-15">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl">
            Potential for Residential, Vacation house, Warehouse, Business, Gathering, Church.
            For nature lovers with Privacy. Very nice mountain view. 5 minutes ride to Baguio City
            The Mansion House, Wright Park and Mines View. 400 meters from Police Station.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-8">Property Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-22 text-[13px]">
            <div>
              <p className="text-gray-500">Property Type</p>
              <p className="font-semibold">Residential Condominium</p>
              <hr className="text-gray-300 mt-8"/>
            </div>
            <div>
              <p className="text-gray-500">Floor Area</p>
              <p className="font-semibold">395 sqm</p>
              <hr className="text-gray-300 mt-8 w-60"/>
            </div>
            <div>
              <p className="text-gray-500">Unit Types</p>
              <p className="font-semibold">Studio, 1-Bedroom, 2-Bedroom, and Penthouse Suites</p>
              <hr className="text-gray-300 mt-8"/>
            </div>
            <div>
              <p className="text-gray-500">Price</p>
              <p className="font-semibold">PHP 14.5M</p>
              <hr className="text-gray-300 mt-8 w-60"/>
            </div>
            <div>
              <p className="text-gray-500">Property Status</p>
              <p className="font-semibold">Pre-Selling & Ready-for-Occupancy Units Available</p>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-semibold">Baguio City</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Us for a Site Visit & Reservation</h2>
        <div className="grid grid-cols-2 gap-0">
            <div className="w-32 h-32">
                <Image src={AgentImage} alt="Agent" className="w-32 h-32 rounded-lg object-cover" />
            </div>
            <div>
                <p className="font-semibold">Jetha Lal</p>
                <div className="flex items-center space-x-1 my-3">
                    {Array(5).fill(0).map((_, i) => (
                        <span key={i} className=""><Image src={Star1} alt="stars"/></span>
                    ))}
                </div>
                <p className="text-gray-600 text-[12px] mt-4 flex"><Image src={Mail} alt="Mail" className="h-2 w-3 mt-1 mr-3" />info@trustlandsolution.com</p>
                <p className="text-gray-600 text-[12px] mt-2 flex"><Image src={Phone} alt="Phone" className="w-2.5 h-3 mr-3" />+63 964 993 5618</p>
            </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-green-600 hover:bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">
            <Image src={ContactAgent} alt="Emo" className="w-6.5 h-7"/>Contact Agent
          </button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 hover:bg-black hover:text-white rounded-md flex items-center gap-2 text-sm">
            <Image src={Schedule} alt="Calendar" />Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
}
