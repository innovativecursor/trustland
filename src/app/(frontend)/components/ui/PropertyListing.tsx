'use client'

import Image from 'next/image'
import Save from '../../public/assets/InternalPropertyAssets/Save.png'
import ShareButton from '../../components/ui/ShareButton'

interface Props {
  images: {
    id: number
    url: string
    filename: string
  }[]
  video?: string | null
  title: string
  location: string
  price: string
}

export default function PropertyListing({ images, video, title, location, price }: Props) {
  return (
    <div className="mx-auto mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto md:flex md:justify-between md:items-center mb-4">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p className="text-gray-600">{location}</p>
        </div>
        <div className="flex items-center gap-2 p-4">
          <span className="bg-[#339438] text-white px-6 py-2 rounded font-semibold hover:bg-black">
            PHP {price}M
          </span>
          <div className="">
            <ShareButton />
          </div>
          {/* <button className="border px-3 py-1.5 rounded hover:bg-black hover:text-white flex">
            <Image src={Save} alt="Save" className="mr-4 hover:text-white" />
            Save
          </button> */}
        </div>
      </div>

      {/* Video Section - Optional */}
      {video && (
        <div className="max-w-7xl mx-auto p-4">
          <video controls className="w-full rounded-lg mb-4">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Gallery Images */}
      <div className=" grid grid-cols-1 md:grid-cols-4 md:gap-2">
        <div className=" md:col-span-2 row-span-2">
          <Image
            src={images?.[0]?.url || '/placeholder.jpg'}
            alt={images?.[0]?.filename || 'Main image'}
            width={800}
            height={600}
            className="w-full h-115 object-cover"
          />
        </div>

        {images
          ?.slice(1)
          .map((img, idx) => (
            <Image
              key={img.id}
              src={img.url}
              alt='grid images'
              width={400}
              height={30}
              className="w-full h-56 object-cover"
            />
          ))}
      </div>
    </div>
  )
}