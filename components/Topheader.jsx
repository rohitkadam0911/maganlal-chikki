import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Topheader() {
  return (
    <div className="w-full bg-gray-200 text-xs border-b px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Welcome Text */}
        <div className="text-gray-700 text-center md:text-left">
          Welcome to{" "}
          <span className="font-semibold">Maganlal Chikki, Lonavla!</span>{" "}
          <span className="text-red-500 font-semibold cursor-pointer">
            Join Free
          </span>{" "}
          or{" "}
          <span className="text-red-500 font-semibold cursor-pointer">
            Sign in
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-gray-700">

          {/* Login */}
          <span className="cursor-pointer hover:text-red-500 border-r pr-2">
            🔒 Login
          </span>

          {/* My Account */}
          <div className="relative group border-r pr-2">
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
              <span>👤</span>
              <span>My Account</span>
            </div>

            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg border mt-3 w-40 z-100">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Cart
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Wishlist
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Checkout
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Account
              </li>
            </ul>
          </div>

          {/* Language */}
          <div className="flex items-center border-r pr-2">
            <img src="/logo.png" className="px-2 w-10" alt="flag" />
            English
          </div>

          {/* Currency */}
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1">
              INR
              <ChevronDown size={16} strokeWidth={2}/>
            </span>

            <ul className="absolute right-0 hidden group-hover:block bg-white shadow-md border rounded mt-2 w-24 text-sm z-100">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                INR
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                USD
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                EUR
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}