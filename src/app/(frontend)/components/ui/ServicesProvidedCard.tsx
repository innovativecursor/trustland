'use client'

import Image, { StaticImageData } from 'next/image'
import tick from '../../public/assets/ServicesAssets/Group 1000005079.png'

type ServicePoint = {
  title: string
  description: string
}

interface ServicesProvidedCardProps {
  bgImage: StaticImageData
  numberImage: StaticImageData
  heading: string
  subheading: string
  points: ServicePoint[]
}

export default function ServicesProvidedCard({
  bgImage,
  numberImage,
  heading,
  subheading,
  points,
}: ServicesProvidedCardProps) {
  return (
    <div className="w-full flex flex-col items-center mt-15">
      {/* Background Image */}
      <div className="relative w-full max-w-6xl rounded-xl">
        <Image
          src={bgImage}
          alt="Service Background"
          className="w-full h-60 sm:h-auto object-cover"
          width={1200}
          height={400}
        />

        {/* Number Image */}
        <div className="absolute h-20 w-20 bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white rounded-full md:w-40 md:h-40 md:bottom-[-80px] flex items-center justify-center">
          <Image
            src={numberImage}
            alt="Service Number"
            className="w-40 h-40 object-contain z-5"
            width={160}
            height={160}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-12 text-sm md:text-base">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-600 text-[14px] mb-6">{subheading}</p>

        {/* Descriptive Points */}
        <ul className="text-left space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex">
              <Image src={tick} alt="tick" className="mr-2 w-5 h-5" width={20} height={20} />
              <div>
                <span className="font-semibold">{point.title}</span> – {point.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
