'use client'

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import FloatingLabelSelect from './ui/FloatingLabelSelect'
import FloatingLabelInput from './ui/FloatingLabelInput'

const RealEstateInquiryForm: React.FC = () => {
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

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FloatingLabelSelect label="Personnel Role">
              <option value="">Nothing selected</option>
            </FloatingLabelSelect>

            <FloatingLabelInput label="Name" type="text" placeholder="Your Name" />

            <div className="sm:col-span-2">
              <FloatingLabelInput
                label="Email"
                type="email"
                placeholder="Exampleyoyolike@gmail.com"
              />
            </div>

            <div className="sm:col-span-2">
              <FloatingLabelSelect label="How to address you">
                <option value="">Nothing selected</option>
              </FloatingLabelSelect>
            </div>

            <FloatingLabelInput label="Budget (PHP)" type="text" placeholder="PHP 9M" />
            <FloatingLabelInput label="Min Size (Sq ft)" type="text" placeholder="300" />

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-[#339438] text-white font-medium py-3 px-6 rounded-lg border hover:bg-[#fff] hover:border-[#339438] hover:text-black text-xs transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

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
