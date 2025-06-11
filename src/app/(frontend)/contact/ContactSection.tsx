import React from 'react'
import Breadcrumbs from '../components/ui/BreadCrumbs'
import ImageSection from '../components/ui/ImageSection'
import FormMap from '../components/ui/Form&Map'

const ContactSection = () => {
  return (
    <div className='pt-5'>
      <div className='h-[160px] bg-[#71ae4c1a] w-full py-3 pt-7'>
        <Breadcrumbs />
      </div>
      <ImageSection />
      <FormMap />
    </div>
  )
}

export default ContactSection
