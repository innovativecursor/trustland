import {
  FaFacebookF,
  FaWhatsapp,
  FaViber,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import logo from '../public/assets/logo_trustland.png'
import innocursor from '../public/assets/FooterAssets/innocursor.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-[#f7fbf5] text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 border-b border-gray-200">
        {/* Top Row: Logo & Social Icons */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <Image src={logo.src} width={200} height={200} alt="TrustLand Solutions Logo" />
          </div>
          <div className="flex items-center gap-3">
            <Link href='https://www.facebook.com/people/TrustLand-Solutions/61574562527534/' target='_blank' className="border border-[#339438] rounded-full p-2 cursor-pointer">
              <FaFacebookF size={20} className="text-[#339438]" />
            </Link>
            <Link href='https://wa.link/iwopy0' target='_blank' className="border border-[#339438] rounded-full p-2 cursor-pointer">
              <FaWhatsapp size={20} className="text-[#339438]" />
            </Link>
            <Link href='viber://chat?number=%2B639659543098' target='_blank' className="border border-[#339438] rounded-full p-2 cursor-pointer">
              <FaViber size={20} className="text-[#339438]" />
            </Link>
          </div>
        </div>

        {/* Middle Row: Description + Contact + Quick Links + Services */}
        <div className="border-t border-gray-200 mt-6 pt-10">
          <div className="">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-24">
              {/* Description & Contact */}
              <div className="flex-1 flex flex-col gap-6 max-w-md">
                <p className="text-[#1A1A1ACC] font-light text-[15px] leading-7">
                  TrustLand Solutions is your one-stop solution for real estate, legal processing,
                  construction, and architectural design. We ensure a smooth and hassle-free
                  property buying experience.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-green-700" />
                    <span className="font-medium">0965-954-3098</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-green-700" />
                    <span className="font-medium">epordido@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-700" />
                    <span className="font-medium">
                      CBLG - Unit 17, Ghoshen Land Towers,  
                      <br />
                      Upper General Luna Street, Baguio City
                    </span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-6 min-w-[300px]">
                  <h4 className="font-semibold text-gray-800">QUICK LINKS</h4>
                  <Link href="/" className="text-gray-600 hover:text-black transition">Home</Link>
                  <Link href="/properties" className="text-gray-600 hover:text-black transition">Feature Properties</Link>
                  <Link href="/services" className="text-gray-600 hover:text-black transition">Services</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link>
                </div>

                <div className="flex flex-col gap-6 min-w-[200px]">
                  <h4 className="font-semibold text-gray-800">POPULAR SERVICES</h4>
                  <span>Construction Services</span>
                  <span>Legal & Paperwork Processing</span>
                  <span>Land Surveying</span>
                  <span>Architectural Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 border-t border-gray-200 gap-2 text-center md:text-left">
        <span>© 2025 TrustLand Solutions. All rights reserved.</span>
        <p className="flex items-center">
          Designed & Developed
          <Image
            src={innocursor}
            className="mr-1 ml-1"
            width={20}
            height={20}
            alt="Innovative Cursor Logo"
          />
          <span className=""> Innovative Cursor</span>
        </p>
      </div>
    </footer>
  )
}
