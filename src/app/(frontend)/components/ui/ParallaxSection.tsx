'use client'

import Link from 'next/link'
import backgroundHero from '../../public/assets/ParallaxAssets/background_image_parallax.png'
import LiquidHoverButton from './SearchButton'
import ContactUsButton from './ContactUsButton'

const ParallaxSection = () => {
  return (
    <section id="contact" className="relative h-[50vh] w-full pt-16 md:pt-24 lg:pt-32 ">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundHero.src})`,
        }}
      ></div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(113, 174, 76, 0.35) 0%, rgba(10, 8, 8, 0.35) 51.61%, rgba(113, 174, 76, 0.35) 100%)',
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <p className=" text-lg sm:text-2xl md:text-4xl font-semibold mt-4 mb-4 leading-tight">
          Your Trusted Real Estate Expert in baguio
        </p>

        <h2 className="text-white tracking-wide text-xs sm:text-sm md:text-base flex flex-col">
          Offering personalized real estate services to help you buy your dream property.
        </h2>

        <ContactUsButton>Schedule a Consultation</ContactUsButton>
      </div>
    </section>
  )
}

export default ParallaxSection
