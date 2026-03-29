"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillCaretRight } from "react-icons/ai"
import Link from 'next/link'
import { FaHeart } from "react-icons/fa"
import toast from "react-hot-toast"
import { useWishlist } from "@/app/context/WishlistContext"

const Allproducts = ({ data, categoriesname, categoryimages }) => {

  const [products, setProducts] = useState([])

  // ✅ SAFE context (prevents crash)
  const wishlistContext = useWishlist()
  const wishlist = wishlistContext?.wishlist || []
  const addToWishlist = wishlistContext?.addToWishlist

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${data.id}`
        )
        setProducts(response.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [data.id])

  return (
    <div className='bg-gray-200 px-4 md:px-10 lg:px-12 py-0'>

      {/* Header */}
      <div className="flex items-center justify-between border-t-2 border-[#e9597e] bg-white">
        <div className="bg-[#e9597e] text-white px-4 py-2 font-semibold font-serif">
          ❀ {categoriesname}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-6">

        {/* Left Banner */}
        <div className="w-full lg:w-[25%]">
          <img
            src={categoryimages}
            className="w-full rounded-2xl shadow-md"
            alt="Category Banner"
          />
        </div>

        {/* Products */}
        <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {products.length > 0 ? (
            products.map((item) => {

              const exists = wishlist.some(p => p.id === item.id)

              return (
                <div
                  key={item.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
                >

                  {/* Image */}
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-full h-[180px] object-cover"
                  />

                  <div className="p-4 flex flex-col flex-grow">

                    <h3 className="text-sm font-serif text-red-800 mb-2 line-clamp-2 h-10">
                      {item.title}
                    </h3>

                    <p className="text-gray-800 font-bold text-lg">
                      ₹{item.price}
                    </p>

                    <div className="flex gap-2 mt-3">

                      {/* View */}
                      <Link
                        href={`/product/${item.id}/${data.id}`}
                        className="flex-1 text-sm text-center bg-gray-300 py-2 text-red-400 rounded hover:bg-[#e9597e] hover:text-white"
                      >
                        View
                      </Link>

                      {/* ❤️ Wishlist */}
                      <div
                        onClick={() => {

                          // ❌ If context not working
                          if (!addToWishlist) {
                            toast.error("Wishlist not ready ❌")
                            return
                          }

                          if (exists) {
                            toast("Already in wishlist ⚠️")
                          } else {
                            addToWishlist({
                              ...item,
                              images: [item.images]
                            })
                            toast.success("Added to wishlist ❤️")
                          }
                        }}
                        className="px-3 flex items-center justify-center text-red-300 bg-gray-300 rounded hover:bg-[#e9597e] hover:text-white cursor-pointer"
                      >
                        <FaHeart className={exists ? "text-red-500" : ""} />
                      </div>

                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p className="col-span-full text-center py-20">
              Loading products...
            </p>
          )}

        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center py-10">
        <button className="flex items-center gap-2 bg-white text-red-400 px-10 py-2 border rounded hover:bg-[#e9597e] hover:text-white">
          View All {categoriesname} <AiFillCaretRight />
        </button>
      </div>

    </div>
  )
}

export default Allproducts