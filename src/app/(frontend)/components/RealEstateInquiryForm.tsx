'use client'

import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import FloatingLabelSelect from './ui/FloatingLabelSelect'
import FloatingLabelInput from './ui/FloatingLabelInput'
import { BuyerInquiry, fetchBuyerInquiries } from '../utils/api'

const RealEstateInquiryForm: React.FC = () => {
  const [personnelRoles, setPersonnelRoles] = useState<string[]>([])
  const [addressTitles, setAddressTitles] = useState<string[]>([])

  const [formData, setFormData] = useState({
    personnelRole: '',
    name: '',
    email: '',
    howToAddress: '',
    budget: '',
    minSize: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchOptions = async () => {
      const inquiries: BuyerInquiry[] = await fetchBuyerInquiries()
      const roles = Array.from(new Set(inquiries.map((b) => b.personnelRole)))
      const addresses = Array.from(new Set(inquiries.map((b) => b.howToAddress)))

      setPersonnelRoles(roles)
      setAddressTitles(addresses)
    }

    fetchOptions()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          minSize: parseFloat(formData.minSize),
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      alert('Form submitted successfully!')
      setFormData({
        personnelRole: '',
        name: '',
        email: '',
        howToAddress: '',
        budget: '',
        minSize: '',
      })
    } catch (error) {
      console.error(error)
      alert('Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-wide text-[#1B201C] mb-2">
            Real Estate Inquiry Form
          </h2>
          <p className="text-[#565656] tracking-wide font-light text-[14px] mb-8">
            As the complexity of buildings to increase
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <FloatingLabelSelect
              label="Personnel Role"
              name="personnelRole"
              value={formData.personnelRole}
              onChange={handleChange}
            >
              <option value="">Nothing selected</option>
              {/* <option value="buyer" label='Buyer'>Buyer</option> */}
              <option value="agent" label='Agent'>Agent</option>
              <option value="investor" label='Investor'>Investor</option>
              <option value="other" label='Other'>Other</option>
              {personnelRoles.map((role) => (
                <option key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </option>
              ))}
            </FloatingLabelSelect>

            <FloatingLabelInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />

            <div className="sm:col-span-2">
              <FloatingLabelInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Exampleyoyolike@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <FloatingLabelSelect
                label="How to address you"
                name="howToAddress"
                value={formData.howToAddress}
                onChange={handleChange}
              >
                <option value="">Nothing selected</option>
                {/* <option value="Mr">Mr</option> */}
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
                <option value="Mx">Mx</option>
                <option value="Other">Other</option>
                {addressTitles.map((title) => (
                  <option key={title} value={title}>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </option>
                ))}
              </FloatingLabelSelect>
            </div>

            <FloatingLabelInput
              label="Budget (PHP)"
              type="text"
              name="budget"
              value={formData.budget}
              placeholder="PHP 9M"
              onChange={handleChange}
            />

            <FloatingLabelInput
              label="Min Size (Sq ft)"
              type="text"
              name="minSize"
              value={formData.minSize}
              placeholder="300"
              onChange={handleChange}
            />

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#339438] text-white font-medium py-3 px-6 rounded-lg border hover:bg-[#fff] hover:border-[#339438] hover:text-black text-xs transition-all duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Sidebar (Unchanged) */}
        <div className="flex-1 bg-[#F5FFF6] rounded-2xl p-10 flex flex-col">
          <div>
            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-1">Contact Us</h3>
            <p className="text-[14px] tracking-wide font-light text-[#464646] mb-6">
              Let’s Make Your Dream Property a Reality
            </p>
          </div>

          <div className="flex flex-col gap-y-15 text-sm text-gray-800">
            <div className="flex items-start gap-4">
              <div className="text-[#02b902] bg-[#33943824] p-3 rounded-xl">
                <FaPhoneAlt size={30} />
              </div>
              <div>
                <p className="font-medium text-[14px]">Phone</p>
                <hr className="mb-1 mt-1 border-t border-[#A7A7A766] inline-block w-[50px]" />
                <p className="text-[#1A1A1A] text-[20px]">+63 964 993 5618</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#02b902] bg-[#33943824] p-3 rounded-xl">
                <MdEmail size={30} />
              </div>
              <div>
                <p className="font-medium text-[14px]">Mail</p>
                <hr className="mb-1 mt-1 border-t border-[#A7A7A766] inline-block w-[50px]" />
                <p className="text-[#1A1A1A] text-[20px]">info@trustlandsolution.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#02b902] bg-[#33943824] p-3 rounded-xl">
                <MdLocationOn size={30} />
              </div>
              <div>
                <p className="font-medium text-[14px]">Address</p>
                <hr className="mb-1 mt-1 border-t border-[#A7A7A766] inline-block w-[50px]" />
                <p className="text-[#1A1A1A] text-[20px]">
                  603 National Life Building, Upper Session Road, Baguio City, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealEstateInquiryForm
