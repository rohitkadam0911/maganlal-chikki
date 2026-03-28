"use client"

import Image from "next/image"
import { FaShoppingBag } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useCart } from "@/app/context/CartContext"
import Link from "next/link"

export default function Header() {

  const { totalQty, totalPrice } = useCart()   // ⭐ cart data

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur text-black">

      <div
        className={`max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-10
        flex flex-col lg:flex-row 
        items-center justify-between 
        gap-3 transition-all duration-300
        ${scrolled ? "py-2" : "py-4"}
        `}
      >

        {/* LOGO */}
        <Image
          src="/web-logo-3.webp"
          alt="logo"
          width={220}
          height={75}
          loading="eager"
          style={{ width: "auto", height: "auto" }}
          className={`transition-all duration-300 
          ${scrolled ? "scale-90" : "scale-100"}
          `}
        />

        {/* SEARCH */}
        <div className="flex w-full lg:w-[500px] border rounded overflow-hidden">

          <select className="px-2 border-r text-xs sm:text-sm outline-none">
            <option>All Categories</option>
            <option>Chikki</option>
            <option>Fudge</option>
            <option>Dry Fruit Roll</option>
            <option>Namkeens</option>
          </select>

          <input
            type="text"
            placeholder="Enter your keyword..."
            className="flex-1 px-2 py-2 text-xs sm:text-sm outline-none"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-4 text-xs sm:text-sm">
            Search
          </button>

        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3 sm:gap-5">

          <img
            src="/shuffle-compare.png"
            className="w-5 sm:w-6 cursor-pointer"
          />

          <img
            src="/icon-wishlist.png"
            className="w-7 sm:w-8 cursor-pointer"
          />

          {/* ⭐ CART */}
          
          <div className="flex items-center gap-2 cursor-pointer">

            
            <div className="bg-red-500 text-white p-2 sm:p-3 rounded relative">
              
              <Link href="/cart"><FaShoppingBag /></Link>

              {/* ⭐ Cart Count Bubble */}
              {/* {totalQty > 0 && (
                <span className="absolute -top-2 -right-5 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {totalQty}
                </span>
              )} */}
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold">My Cart</p>
              <p className="text-xs text-gray-500">
                {totalQty} Item(s) -
                <span className="text-red-500"> ₹{totalPrice}</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>

  )
}