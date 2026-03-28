"use client"

import { useCart } from "@/app/context/CartContext"
import { useRouter } from "next/navigation"

export default function AddCartButton({ product }) {

  const { addToCart } = useCart()
  const router = useRouter()

  function handleAdd() {
    addToCart(product)
    router.push("/cart")   // ⭐ navigate to cart page
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-black text-white px-8 py-3 mt-4 rounded-lg font-semibold"
    >
      🛒 Add To Cart
    </button>
  )
}