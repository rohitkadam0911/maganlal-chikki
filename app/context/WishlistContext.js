"use client"

import { createContext, useContext, useState } from "react"

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id))
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)