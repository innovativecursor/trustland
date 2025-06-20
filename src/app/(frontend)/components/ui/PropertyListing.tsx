"use client";

import Image from "next/image";
import image0 from '../../public/assets/InternalPropertyAssets/bigimage.png'
import image1 from '../../public/assets/InternalPropertyAssets/image1.png'
import image2 from '../../public/assets/InternalPropertyAssets/image2.png'
import image3 from '../../public/assets/InternalPropertyAssets/image3.png'
import image4 from '../../public/assets/InternalPropertyAssets/image4.png'
import Save from '../../public/assets/InternalPropertyAssets/Save.png'
import ShareButton from '../../components/ui/ShareButton'

const images = [image0,image1, image2, image3, image4,];

export default function PropertyListing() {
  return (
    <div className="mx-auto mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto md:flex md:justify-between md:items-center mb-4">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-3">
            Titled Lot – Your Dream Home near Baguio City
          </h1>
          <p className="text-gray-600">Baguio City, Philippines</p>
        </div>
        <div className="flex items-center gap-2 p-4">
          <span className="bg-[#339438] text-white px-6 py-2 rounded font-semibold hover:bg-black">
            PHP 14.5M
          </span>
          <div className="">
            <ShareButton />
          </div>
          <button className="border px-3 py-1.5 rounded hover:bg-black hover:text-white flex">
            <Image src={Save} alt="Save" className="mr-4 hover:text-white"/>Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
        <div className="md:col-span-2 row-span-2">
          <Image
            src={images[0]}
            alt="Main house"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {images.slice(1).map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`House image ${idx + 2}`}
            width={400}
            height={300}
            className=" w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
