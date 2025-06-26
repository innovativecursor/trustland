'use client'

import React, { useState } from 'react'
import FloatingLabelInput from './FloatingLabelInput'
import FloatingLabelSelect from './FloatingLabelSelect'
import toast from 'react-hot-toast'

export default function ContactForm() {
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
          source: 'contact-form',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      toast.success('Message sent successfully!')
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
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-2xl font-semibold text-center mb-10">
          Get in Touch with Us!
        </h2>

        <form
          className="text-sm grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
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

          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-5 py-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#339438]"
            />
          </div>

          <div className="md:ml-100">
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 w-70 bg-[#339438] hover:bg-black text-white font-medium py-4 rounded-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
