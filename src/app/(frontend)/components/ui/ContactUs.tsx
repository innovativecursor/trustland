'use client'

import React from 'react'

export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-2xl font-semibold text-center mb-10">
          Get in Touch with Us!
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#339438]"
          />
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#339438]"
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="w-full border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <select
            className="w-full border border-gray-200 rounded-lg px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#339438]"
            defaultValue=""
          >
            <option>Select Service Type</option>
            <option value="ResidentialConstruction">Residential Construction</option>
            <option value="RoadConstruction">Road Construction</option>
            <option value="LegalPaperWorkProcessing">Legal & Paper Work Processing</option>
            <option value="ArchitecturalDesign">Architectural Design</option>
          </select>
          <textarea
            placeholder="Enter Message"
            className="md:col-span-2 w-full border border-gray-200 rounded-lg px-5 py-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#339438]"
          />
          <div className='ml-100'>
          <button
            type="submit"
            className="md:col-span-2 w-70 bg-[#339438] hover:bg-black text-white font-medium py-4 rounded-lg"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}
