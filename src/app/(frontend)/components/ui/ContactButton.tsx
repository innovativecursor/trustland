'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ContactAgent from '../../public/assets/InternalPropertyAssets/Administrator Male.png'
import FloatingLabelInput from './FloatingLabelInput'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import SuccessImage1 from '../../public/assets/InternalPropertyAssets/SuccessImage1.png'
import SuccessImage2 from '../../public/assets/InternalPropertyAssets/SuccessImage2.png'

const SuccessAnimation = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0))
    }, 600) // very fast transition
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-72 h-[300px] flex justify-center items-center">
      <motion.img
        src={SuccessImage1.src}
        alt="Success 1"
        className="absolute w-full h-auto"
        animate={{ opacity: current === 0 ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
      <motion.img
        src={SuccessImage2.src}
        alt="Success 2"
        className="absolute w-full h-auto"
        animate={{ opacity: current === 1 ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

const InquiryModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const openModal = () => {
    setIsSuccess(false)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
          budget: parseFloat(formData.budget),
          source: 'inquiry-modal',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        budget: '',
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
    <>
      {/* Trigger Button */}
      <button
        className="bg-[#339438] hover:bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
        onClick={openModal}
      >
        <Image src={ContactAgent} alt="Emo" className="w-6.5 h-7" />
        Contact Button
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="text-sm fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 px-4">
          <div className="bg-gray-200 p-8 rounded-2xl w-full max-w-3xl shadow-lg relative overflow-visible">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-red-600"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center">
                <SuccessAnimation />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Inquiry Form</h2>
                <p className="text-center mb-6 text-sm text-gray-600">
                  Interested in this property? Fill out the form below:
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingLabelInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Roderik yapapatu"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white"
                  />

                  <FloatingLabelInput
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="6273998776"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white"
                  />

                  <FloatingLabelInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="niceyolokukala@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white"
                  />

                  <FloatingLabelInput
                    label="Budget (PHP)"
                    name="budget"
                    type="text"
                    placeholder="200 – 800 PHP"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-white"
                  />

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Luxury Three-Bedroom Condo to buy."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#339438]"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-center mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#339438] hover:bg-black text-white px-6 py-3 rounded-md"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default InquiryModal
