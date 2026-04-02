"use client"

import React, { useEffect, useState } from "react"
import ListingsTitle from "@/components/Listingstitle"
import SidebarFilter from "@/components/SidebarFilter"
import { useSearch } from "@/app/context/SearchContext"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import { useWishlist } from "@/app/context/WishlistContext"
import toast from "react-hot-toast"

const CATEGORY_MAP = {
  chikki: 1,
  fudge: 2,
  roll: 4,
  sev: 5,
}

const BASE_URL = "https://appy.trycatchtech.com/v3/maganlalchikki"

const Shop = () => {
  const { search, selectedCategory } = useSearch()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const wishlistContext = useWishlist()
  const wishlist = wishlistContext?.wishlist || []
  const addToWishlist = wishlistContext?.addToWishlist

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        if (selectedCategory && CATEGORY_MAP[selectedCategory]) {
          const res = await fetch(
            `${BASE_URL}/product_list?category_id=${CATEGORY_MAP[selectedCategory]}`
          )
          const data = await res.json()
          setProducts(Array.isArray(data) ? data : [])
        } else {
          const results = await Promise.all(
            Object.values(CATEGORY_MAP).map((id) =>
              fetch(`${BASE_URL}/product_list?category_id=${id}`).then((r) =>
                r.json()
              )
            )
          )
          setProducts(results.flat().filter(Boolean))
        }
      } catch (err) {
        console.error("Failed to fetch products:", err)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  const filteredProducts = products.filter((item) =>
    item?.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <ListingsTitle title="Shop" />

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 lg:px-12 py-10 text-black">

        {/* LEFT SIDEBAR */}
        <SidebarFilter />

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">

          <h2 className="text-xl font-semibold mb-6">
            {selectedCategory
              ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
              : "All Products"}
            {search && ` — "${search}"`}
          </h2>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {filteredProducts.map((item) => {
                const exists = wishlist.some((p) => p.id === item.id)
                const categoryId =
                  CATEGORY_MAP[item.category] || Object.values(CATEGORY_MAP)[0]

                return (
                  <div
                    key={item.id}
                    className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
                  >
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-full h-[180px] object-cover"
                    />

                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="text-sm font-serif text-red-800 mb-2 line-clamp-2 h-10">
                        {item.title}
                      </h3>

                      <p className="text-gray-800 font-bold">₹{item.price}</p>

                      <div className="flex gap-2 mt-3">
                        <Link
                          href={`/product/${item.id}/${categoryId}`}
                          className="flex-1 text-sm text-center bg-gray-300 py-2 text-red-400 rounded hover:bg-[#e9597e] hover:text-white"
                        >
                          View
                        </Link>

                        <div
                          onClick={() => {
                            if (!addToWishlist) {
                              toast.error("Wishlist not ready ❌")
                              return
                            }
                            if (exists) {
                              toast("Already in wishlist ⚠️")
                            } else {
                              addToWishlist({ ...item, images: [item.images] })
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
              })}
            </div>
          ) : (
            <p className="text-gray-500">No products found 😢</p>
          )}

        </div>
      </div>
    </>
  )
}

export default Shop