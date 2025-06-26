'use client'

import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import FloatingLabelSelect from './FloatingLabelSelect'
import toast from 'react-hot-toast'

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/buyer-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'quote-form',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      toast.success('Quote request submitted successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full px-6 py-12 md:mt-45 flex flex-col lg:flex-row justify-center gap-8">
      {/* Left Form */}
      <div className="w-full lg:w-140">
        <h2 className="text-2xl font-semibold mb-6">Get A Quote</h2>
        <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <FloatingLabelInput
              name="name"
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FloatingLabelInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <FloatingLabelInput
              name="phone"
              type="tel"
              label="Phone"
              placeholder="Enter Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <FloatingLabelSelect
              name="serviceType"
              value={formData.serviceType}
              label="Select Service Type"
              onChange={handleChange}
            >
              <option value="">Select Service Type</option>
              <option value="ResidentialConstruction">Residential Construction</option>
              <option value="RoadConstruction">Road Construction</option>
              <option value="LegalPaperWorkProcessing">Legal & Paper Work Processing</option>
              <option value="ArchitecturalDesign">Architectural Design</option>
            </FloatingLabelSelect>
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339438]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#339438] text-white py-3 px-8 rounded-md hover:bg-black transition"
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
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
