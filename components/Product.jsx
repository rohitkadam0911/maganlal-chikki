"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Allproducts from "./Allproducts"
import { useSearch } from "@/app/context/SearchContext"

export default function ProductPage() {

  const { search, selectedCategory } = useSearch()

  const [categories, setCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const fetchData = async () => {
    try {
      const catRes = await axios.get(
        "https://appy.trycatchtech.com/v3/maganlalchikki/category_list"
      )

      const cats = catRes.data || []
      setCategories(cats)

      const allProductsData = await Promise.all(
        cats.map(async (cat) => {
          try {
            const res = await axios.get(
              `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${cat.id}`
            )

            // 🔥 IMPORTANT FIX
            const products = Array.isArray(res.data)
              ? res.data
              : res.data.data || []

            return products

          } catch (err) {
            console.error("Error category:", cat.id)
            return []
          }
        })
      )

      const merged = allProductsData.flat()

      console.log("FINAL PRODUCTS:", merged)

      setAllProducts(merged)

    } catch (error) {
      console.error("Main error:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

  // 🔥 FILTER LOGIC
  const filteredProducts = allProducts.filter((item) => {

  if (!item) return false // 🔥 prevent crash

  const name = (item.title || item.product_name || "").toLowerCase()

  const matchSearch = name.includes(search.toLowerCase())

  const matchCategory =
    !selectedCategory ||
    (item.category_name || "")
      .toLowerCase()
      .includes(selectedCategory.toLowerCase())

  return matchSearch && matchCategory
})

  return (
    <main>

      {loading ? (

        <p className="text-center py-20">Loading...</p>

      ) : (search || selectedCategory) ? (

        // 🔍 FILTERED VIEW
        <div className="px-4 md:px-10 lg:px-12 py-10 text-black">

          <h2 className="text-xl font-semibold mb-6">
            Showing Results
          </h2>

          {filteredProducts.length > 0 ? (

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                >

                  <img
                    src={item.images}
                    alt={item.title || item.product_name}
                    className="w-full h-[180px] object-cover"
                  />

                  <div className="p-3">

                    <h3 className="text-sm line-clamp-2 h-10">
                      {item.title || item.product_name}
                    </h3>

                    <p className="text-red-500 font-bold">
                      ₹{item.price}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          ) : (
            <p className="text-center py-20 text-gray-500">
              No products found 😢
            </p>
          )}

        </div>

      ) : (

        // 📦 NORMAL CATEGORY VIEW
        <div style={{ display: "grid", gap: "0px" }}>

          {categories.map((cat) => (
            <div key={cat.id} id={`category-${cat.id}`}>
              <Allproducts
                data={cat}
                categoriesname={cat.cat_name}
                categoryimages={cat.cat_image}
              />
            </div>
          ))}

        </div>

      )}

    </main>
  )
}