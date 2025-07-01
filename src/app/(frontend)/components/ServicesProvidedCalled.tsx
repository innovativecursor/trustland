'use client'

import { useEffect, useState } from 'react'
import ServiceProvidedCard from '../components/ui/ServicesProvidedCard'
import { ServiceCard, fetchServiceCards } from '../utils/api'

import bg1 from '../public/assets/ServicesAssets/real-estate-sector.png'
import number1 from '../public/assets/ServicesAssets/num1.png'
import bg2 from '../public/assets/ServicesAssets/monochrome-scene-depicting-life-workers-construction-industry-site.png'
import number2 from '../public/assets/ServicesAssets/num2.png'
import bg3 from '../public/assets/ServicesAssets/delimitation-two-land-plots.png'
import number3 from '../public/assets/ServicesAssets/num3.png'
import bg4 from '../public/assets/ServicesAssets/architect-working-blueprint-his-desk-office.png'
import number4 from '../public/assets/ServicesAssets/num4.png'

export default function HomePage() {
  const [services, setServices] = useState<ServiceCard[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchServiceCards()
      setServices(result.slice(0, 4)) // Only take first 4 entries
    }

    fetchData()
  }, [])

  const bgImages = [bg1, bg2, bg3, bg4]
  const numberImages = [number1, number2, number3, number4]

  return (
    <main className="p-4 mb-10">
      {services.map((service, index) => (
        <ServiceProvidedCard
          key={index}
          bgImage={bgImages[index]}
          numberImage={numberImages[index]}
          heading={service.heading}
          subheading={service.subheading}
          points={service.points}
        />
      ))}
    </main>
  )
}
