"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const exist = prev.find(p => p.id === product.id)

      if (exist) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }
  

  function increaseQty(id) {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    )
  }

  function decreaseQty(id) {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter(p => p.qty > 0)
    )
  }

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0)

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * Number(item.price),
    0
  )

  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalQty,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}