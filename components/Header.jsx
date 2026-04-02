"use client"

import Image from "next/image"
import { FaShoppingBag } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useCart } from "@/app/context/CartContext"
import { useSearch } from "@/app/context/SearchContext"
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa6";
import { IoShuffleOutline } from "react-icons/io5";
import { useWishlist } from "@/app/context/WishlistContext";


export default function Header() {

    const wishlistContext = useWishlist();
    const wishlist = wishlistContext?.wishlist || [];

  const { totalQty, totalPrice } = useCart()

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory
  } = useSearch()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur text-black">

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-3 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>

        {/* LOGO */}
        <Image
          src="/web-logo-3.webp"
          alt="logo"
          width={scrolled ? 180 : 220}
          height={scrolled ? 60 : 75}
          priority
          className="transition-all duration-300"
        />

        {/* SEARCH + CATEGORY */}
        <div className="flex w-full lg:w-[500px] border rounded overflow-hidden">

          {/* ✅ CATEGORY DROPDOWN */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-2 border-r text-xs sm:text-sm outline-none"
          >
            <option value="">All Categories</option>
            <option value="chikki">Chikki</option>
            <option value="fudge">Fudge</option>
            <option value="roll">Roll</option>
            <option value="sev">Sev</option>
          </select>

          {/* 🔍 SEARCH INPUT */}
          <input
            type="text"
            placeholder="Enter your keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-2 py-2 text-xs sm:text-sm outline-none"
          />

          <button className="bg-red-500 text-white px-4 text-xs sm:text-sm">
            Search
          </button>

        </div>

        <div className="flex gap-5 text-2xl">
          <Link href="/wishlist" className="relative">
            <FaRegHeart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
          </Link>
          <IoShuffleOutline />
        </div>

        {/* CART */}
        <div className="flex items-center gap-3">

          <Link href="/cart" className="bg-red-500 text-white p-3 rounded">
            <FaShoppingBag />
          </Link>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">My Cart</p>
            <p className="text-xs text-gray-500">
              {totalQty || 0} Item(s) -
              <span className="text-red-500"> ₹{totalPrice || 0}</span>
            </p>
          </div>

        </div>

      </div>
    </header>
  )
}