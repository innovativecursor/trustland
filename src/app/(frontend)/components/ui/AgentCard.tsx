'use client'

import Image from 'next/image'
import Star1 from '../../public/assets/InternalPropertyAssets/Star 1.png'
import Mail from '../../public/assets/InternalPropertyAssets/Mail.png'
import Phone from '../../public/assets/InternalPropertyAssets/Phone.png'

interface AgentProps {
  name: string
  email: string
  phone: string
  rating: number
  image: string
}

export default function AgentCard({ name, email, phone, rating, image }: AgentProps) {
  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="w-25 lg:w-32 h-25 lg:h-32">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="w-25 lg:w-32 h-25 lg:h-32 rounded-lg object-cover"
        />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <div className="flex items-center space-x-1 my-3">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i}>
                <Image src={Star1} alt="star" width={12} height={12} />
              </span>
            ))}
        </div>
        <p className="text-gray-600 text-[12px] mt-4 flex">
          <Image src={Mail} alt="Mail" className="h-2 w-3 mt-1 mr-3" />
          {email}
        </p>
        <p className="text-gray-600 text-[12px] mt-2 flex">
          <Image src={Phone} alt="Phone" className="w-2.5 h-3 mr-3" />
          {phone}
        </p>
      </div>
    </div>
  )
}
