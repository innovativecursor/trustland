import React from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import ImgGridService from '../components/ui/ImgGridService'
import ServicesHeading from '../components/ui/ServicesHeading'
import ServicesProvidedCalled from '../components/ServicesProvidedCalled'
import ContactForm from '../components/ui/ContactUs'

const ServiceSection = () => {
  return (
    <div className='pt-5'>
      <div className='h-[160px] bg-[#71ae4c1a] w-full py-3 pt-7'>
        <Breadcrumbs />
      </div>
        <ImgGridService />
        <ServicesHeading />
        <ServicesProvidedCalled />
        <ContactForm />
    </div>
  )
}

export default ServiceSection
