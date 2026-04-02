"use client"

import { CartProvider } from "@/app/context/CartContext"
import { WishlistProvider } from "@/app/context/WishlistContext"
import { Toaster } from "react-hot-toast"

export default function MainProvider({ children }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <Toaster position="top-right" />
        {children}
      </WishlistProvider>
    </CartProvider>
  )
}