'use client'

import React from 'react'

export default function GetAQuote() {
  return (
    <section className="w-full px-6 py-12 md:mt-45 flex flex-col lg:flex-row justify-center gap-8">
      {/* Left Form */}
      <div className="w-full lg:w-140">
        <h2 className="text-2xl font-semibold mb-6">Get A Quote</h2>
        <form className="space-y-4 text-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <select
              className="w-full p-4 text-gray-400 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option className='text-gray-300'>Select Service Type</option>
              <option className='text-gray-300'>Service 1</option>
              <option className='text-gray-300'>Service 2</option>
            </select>
          </div>
          <textarea
            rows={5}
            placeholder="Enter Message"
            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-8 rounded-md hover:bg-black transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Map */}
      <div className="w-full lg:w-140">
        <h2 className="text-2xl font-semibold mb-6">Location On Map</h2>
        <div className="w-full h-96 rounded-md overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Baguio&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
