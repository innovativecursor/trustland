'use client'

import Image from 'next/image'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import Mail from '../../public/assets/InternalPropertyAssets/Mail.png'
import Phone from '../../public/assets/InternalPropertyAssets/Phone.png'

interface AgentImage {
  url: string
}

interface AgentProps {
  name: string
  email: string
  phone: string
  rating: number
  image: AgentImage | null
}

export default function AgentCard({ name, email, phone, rating, image }: AgentProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="w-24 lg:w-32 h-24 lg:h-32 relative">
        {image?.url ? (
          <Image src={image.url} alt={name} fill className="rounded-lg object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="pl-4">
        <p className="font-semibold">{name}</p>

        <div className="flex items-center space-x-1 my-3 text-[#329633] text-xs">
          {Array.from({ length: fullStars }, (_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
          {hasHalfStar && <FaStarHalfAlt />}
          {Array.from({ length: emptyStars }, (_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>

        <p className="text-gray-600 text-[12px] mt-4 flex items-center">
          <Image src={Mail} alt="Mail" className="h-3 w-3 mr-2" />
          {email}
        </p>
        <p className="text-gray-600 text-[12px] mt-2 flex items-center">
          <Image src={Phone} alt="Phone" className="w-3 h-3 mr-2" />
          {phone}
        </p>
      </div>
    </div>
  )
}
