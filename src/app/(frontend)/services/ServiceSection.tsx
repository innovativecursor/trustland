import React from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import ImgGridService from '../components/ui/ImgGridService'
import ServicesHeading from '../components/ui/ServicesHeading'
// import ServicesProvidedCalled from '../components/ServicesProvidedCalled'
import ContactForm from '../components/ui/ContactUs'

const ServiceSection = () => {
  return (
    <div className='pt-5'>
      <Breadcrumbs />
      <ImgGridService />
      <div className=''>
        <ServicesHeading />
        {/* <ServicesProvidedCalled /> */}
      </div>
      <ContactForm />
    </div>
  )
}

export default ServiceSection
