import React from 'react'
import Image from 'next/image'
import BgImage from '../../public/assets/ContactAssets/hotel.png'
import Phone from '../../public/assets/ContactAssets/Phone.png'
import Mail from '../../public/assets/ContactAssets/Mail.png'
import Location from '../../public/assets/ContactAssets/Location.png'

const ImageSection = () => {
  return (
    <>
        {/* Background Image */}
        <div className='relative'>
            <Image src={BgImage} width={1525} alt='Background-Image' className='w-full h-auto md:h-[500px]' />
        {/* Black Background on Background Image */}
        <div className='hidden lg:flex flex-col items-center justify-center bg-black p-6 rounded-2xl shadow-lg h-72 min-w-292 absolute left-1/2 bottom-[-150px] transform -translate-x-1/2'>
            {/* Phone Column */}
            <div className="flex justify-center items-center gap-45 text-white">
                <div className="flex-col items-center gap-4">   
                    <Image src={Phone} alt="Phone" className='flex justify-center w-15 h-15 rounded-full border border-white p-4 mb-6'/> 
                    <div className="flex flex-col">
                        <span className="text-sm">Phone</span>
                        <hr className='text-gray-500 mt-3 mb-3 w-12'/>
                        <span className="text-md">+63 964 993 5618</span>
                    </div>
                </div>
                {/* Mail Column */}
                <div className="flex-col items-center gap-4">
                    <Image src={Mail} alt="Mail" className='flex justify-center w-15 h-15 rounded-full border border-white p-4 mb-6' />
                    <div className="flex flex-col">
                        <span className="text-sm">Email</span>
                        <hr className='text-gray-500 mt-3 mb-3 w-12'/>
                        <span className="text-md">epordido@gmail.com</span>
                    </div>
                </div>
                {/* Location Column */}
                <div className="flex-col items-center gap-4 max-w-80">
                    <Image src={Location} alt="Location" className='flex justify-center w-15 h-15 rounded-full border border-white px-2 mb-6'/>
                    <div className="flex flex-col">
                        <span className="text-sm ">Office</span>
                        <hr className='text-gray-500 mt-3 mb-3 w-12'/>
                        <span className="text-md">CBLG - Unit 17, Ghoshen Land Towers, Upper General Luna Street, Baguio City</span>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </>
  )
}

export default ImageSection
