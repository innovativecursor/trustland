'use client'
import { useEffect, useState } from 'react'
import ServiceProvidedCard from '../components/ui/ServicesProvidedCard'
import { ServiceCard, fetchServiceCards } from '../utils/api'

export default function HomePage() {
  const [services, setServices] = useState<ServiceCard[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchServiceCards()
      setServices(result)
    }

    fetchData()
  }, [])

  return (
    <main className="p-4 mb-10">
      {services.map((service, index) => (
        <ServiceProvidedCard
          key={index}
          bgImage={service.bgImage}
          numberImage={service.numberImage}
          heading={service.heading}
          subheading={service.subheading}
          points={service.points}
        />
      ))}
    </main>
  )
}
