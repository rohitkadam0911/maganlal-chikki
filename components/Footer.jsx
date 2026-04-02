"use client"
import { BsTwitter } from "react-icons/bs"; 
import { FaFacebookF } from "react-icons/fa"; 
import { Mail, Phone } from "lucide-react"
import { BsPinterest } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 

export default function Footer() {
  return (

    <footer className="bg-white mt-0 outline-none shadow-none">

      {/* Newsletter */}
      <div className="border-b border-red-400 py-6 px-4 md:px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6">

          <p className="text-xs md:text-sm text-gray-700 font-normal"><strong>✈ SIGN UP TO NEWSLETTER AND RECEIVE</strong>

            <span className="text-red-500 font-semibold text-sm"> SURPRISE COUPONS </span>
            <span className="text-sm">FOR FIRST SHOPPING</span>
          </p>

          <div className="flex items-center border rounded-full overflow-hidden">

            <input
              type="email"
              placeholder="Email Address here"
              className="px-4 py-2 outline-none text-black"
            />

            <button className="bg-red-500 px-5 py-3 text-white">
              <Mail size={18} />
            </button>

          </div>
            <ul className="flex justify-between items-center gap-4 text-gray-800">
              <li className="hover:text-red-600"><FaFacebookF /></li>
              <li className="hover:text-red-600"><BsTwitter /></li>
              <li className="hover:text-red-600"><BsPinterest /></li>
              <li className="hover:text-red-600"><BsInstagram /></li>

            </ul>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Logo */}
        <div>

          <img
            src="/web-logo-3.webp"
            className="w-48 mb-4"
          />

          <p className="text-gray-600 text-sm">
            A Legacy of 100+ years, sweetening people’s life...
          </p>

        </div>

        {/* Quick Navigation */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-[#666]">
            Quick Navigation
          </h3>

          <ul className="space-y-2 text-gray-600">

            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shop</li>

          </ul>

        </div>

        {/* Important Links */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-[#666]">
            Important Links
          </h3>

          <ul className="space-y-2 text-gray-600">

            <li>Disclaimer Policy</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Terms and Conditions</li>
            <li>Shipping and Delivery Policy</li>

          </ul>

        </div>

        {/* Contact Info */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-[#666] text-sm">
            Contact Info
          </h3>

          <p className=" text-[#666] text-sm font-bold mb-2">
            Maganlal Chikki Products Pvt Ltd
          </p>

          <p className="text-gray-600 text-sm mb-2">
            Shed No. 49A & B, Opp. Monsanto LICEL,
            Nangargaon, Lonavala 410401 Dist. Pune
          </p>

          <h1 className="text-gray-600 text-sm flex items-center gap-2">
            <Phone size={16} /> +912114274060
          </h1>

          <p className="text-gray-600 text-sm">
            Contact Time: 9 AM To 6 PM
          </p>

          <p className="text-gray-600 text-sm">
            Factory Closed – Thursday
          </p>

          <p className="text-gray-600 text-sm flex items-center gap-2 mt-2">
            <Mail size={16} /> sales@maganlalchikki.in
          </p>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-4 px-4 md:px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs">
            © 2020 <span className="text-red-400">www.maganlalchikki.in</span>. Powered By Reallaunchers.com. All Rights Reserved.
          </p>

          <div className="flex gap-3">

            <img src="/paypal.png" className="h-8 md:h-8 sm:h-4" />

          </div>

        </div>

      </div>

    </footer>

  )
}