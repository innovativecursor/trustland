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
export default function Footer() {
  return (
    <footer className="bg-[#f7fbf5] text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 border-t border-b border-gray-200">
        {/* Top Row: Logo & Social Icons */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <Image
              src={logo.src}
              width={200}
              height={200}
              alt="TrustLand Solutions Logo"
              className=""
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="border border-green-600 rounded-full p-2 cursor-pointer">
              <FaFacebookF className="text-green-700" />
            </div>
            <div className="border border-green-600 rounded-full p-2 cursor-pointer">
              <FaWhatsapp className="text-green-700" />
            </div>
            <div className="border border-green-600 rounded-full p-2 cursor-pointer">
              <FaViber className="text-green-700" />
            </div>
          </div>
        </div>

        {/* Middle Row: Description + Contact + Quick Links + Services */}
        <div className="border-t border-gray-200 mt-6 pt-10">
          <div className="">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-24">
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
                    <span className="font-medium">info@trustlandsolution.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-700" />
                    <span className="font-medium">
                      603 National Life Building, Upper
                      <br />
                      Session Road, Baguio City, Philippines
                    </span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-6 min-w-[300px]">
                  <h4 className="font-semibold text-gray-800">QUICK LINKS</h4>
                  <span>Home</span>
                  <span>Services</span>
                  <span>Projects</span>
                  <span>Contact</span>
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
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between text-xs text-gray-500 border-t border-gray-200">
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
