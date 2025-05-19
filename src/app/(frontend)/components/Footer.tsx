import {
  FaFacebookF,
  FaWhatsapp,
  FaViber,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#f7fbf5] text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 border-t border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4 md:max-w-md">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="TrustLand Solutions Logo" className="w-12 h-12" />
            </div>
            <p className="text-gray-600">
              TrustLand Solutions is your one-stop solution for real estate, legal processing,
              construction, and architectural design. We ensure a smooth and hassle-free property
              buying experience.
            </p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-700" />
              <span>0965-954-3098</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-700" />
              <span>info@trustlandsolution.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-700" />
              <span>
                603 National Life Building, Upper
                <br />
                Session Road, Baguio City, Philippines
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-800">QUICK LINKS</h4>
              <span>Home</span>
              <span>Services</span>
              <span>Projects</span>
              <span>Contact</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-800">POPULAR SERVICES</h4>
              <span>Construction Services</span>
              <span>Legal & Paperwork Processing</span>
              <span>Land Surveying</span>
              <span>Architectural Design</span>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h4 className="font-semibold text-gray-800">FOLLOW US</h4>
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
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between text-xs text-gray-500 border-t border-gray-200">
        <span>© 2025 TrustLand Solutions. All rights reserved.</span>
        <span>
          Designed by <span className="text-purple-600 font-medium">Innovative Cursor</span>
        </span>
      </div>
    </footer>
  )
}
