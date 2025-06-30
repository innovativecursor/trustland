'use client'

import { useRouter } from 'next/navigation'
import backgroundHero from '../../public/assets/ParallaxAssets/background_image_parallax.png'
import ContactUsButton from './ContactUsButton'

const ParallaxSection = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <section id="contact" className="relative h-[50vh] w-full pt-16 md:pt-24 lg:pt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundHero.src})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(6, 35, 7, 0) 0%, rgba(0, 32, 2, 0.58) 38.7%, rgba(0, 32, 2, 0.58) 65.89%, rgba(22, 137, 28, 0) 100%)',
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <p className="text-lg sm:text-2xl md:text-4xl font-semibold mt-4 mb-6 leading-tight">
          Your Trusted Real Estate Expert in Baguio
        </p>

        <h2 className="text-white text-xs sm:text-sm md:text-[15px] mb-6 flex flex-col font-extralight tracking-wide">
          Offering personalized real estate services to help you buy your dream property.
        </h2>

        <div onClick={handleClick}>
          <ContactUsButton>Schedule a Consultation</ContactUsButton>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
