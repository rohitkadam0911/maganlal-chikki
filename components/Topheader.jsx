"use client";

import { ChevronDown } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Topheader() {
  const wishlistContext = useWishlist();
  const wishlist = wishlistContext?.wishlist || [];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-gray-200 text-xs border-b px-4 md:px-10 relative z-[60]">
      <div className="max-w-7xl mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Welcome */}
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
          <div ref={dropdownRef} className="relative group border-r pr-2">

            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 cursor-pointer hover:text-red-500"
            >
              👤 My Account
            </div>

            {/* Dropdown */}
            <ul
              className={`absolute left-0 bg-white shadow-lg border mt-3 w-44 
              z-[9999]
              ${open ? "block" : "hidden"} 
              group-hover:block`}
            >
              <li className="hover:bg-gray-100">
                <Link href="/cart" className="block px-4 py-2">
                  Cart
                </Link>
              </li>

              <li className="hover:bg-gray-100">
                <Link
                  href="/wishlist"
                  className="flex justify-between px-4 py-2"
                >
                  Wishlist
                  <span className="text-red-500 font-semibold">
                    ({wishlist.length})
                  </span>
                </Link>
              </li>

              <li className="hover:bg-gray-100">
                <Link href="/checkout" className="block px-4 py-2">
                  Checkout
                </Link>
              </li>

              <li className="hover:bg-gray-100">
                <Link href="/account" className="block px-4 py-2">
                  My Account
                </Link>
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
              INR <ChevronDown size={16} />
            </span>

            <ul className="absolute right-0 hidden group-hover:block bg-white shadow-md border rounded mt-2 w-24 text-sm z-[9999]">
              <li className="px-3 py-2 hover:bg-gray-100">INR</li>
              <li className="px-3 py-2 hover:bg-gray-100">USD</li>
              <li className="px-3 py-2 hover:bg-gray-100">EUR</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}