import React from 'react'
import ServicesProvidedCalled from '../ServicesProvidedCalled'


const ServicesHeading = () => {
  return (
      
    <div className='mx-auto max-w-7xl'>
      <div className="lg:w-5xl lg:ml-10 md:my-12 my-8 px-2 md:px-0">
        <h1 className="px-4 font-bold text-3xl text-gray-900">Our Services</h1>
        <p className="px-4 pt-4 text-sm md:text-base text-gray-600">
          At TrustLand Solutions, we provide end-to-end real estate, legal, and construction services to make your property journey hassle-free and secure. Whether you are buying, selling, or developing property, we handle everything—from legal paperwork to construction and design.
        </p>
      </div>
      <ServicesProvidedCalled />
    </div>
  )
}

export default ServicesHeading
