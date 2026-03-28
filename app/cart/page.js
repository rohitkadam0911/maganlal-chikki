"use client"

import { useCart } from "@/app/context/CartContext"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart()

  const subtotal = cart.reduce((acc, item) => acc + item.qty * Number(item.price), 0)
  const discount = Math.round(subtotal * 0.1) // Fake 10% discount for UI
  const totalAmount = subtotal - discount
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f1f3f6] flex flex-col items-center text-black justify-center p-4">
        <div className="bg-white p-10 shadow-sm rounded-sm text-center max-w-md w-full">
          <img 
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d405a710-1043-466b-85ca-35c6d54145d4.png?q=90" 
            alt="empty" className="w-48 mx-auto mb-4" 
          />
          <h2 className="text-lg font-medium mb-2">Your cart is empty!</h2>
          <p className="text-sm text-gray-500 mb-6">Add items to it now.</p>
          <Link href="/">
            <button className="bg-amber-400 hover:bg-[#1f5dc1] text-black px-12 py-3 rounded-sm text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition duration-300 active:scale-95">
                Shop Now
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f1f3f6] min-h-screen pb-24 md:pb-10 text-black">
      <div className="max-w-[1200px] mx-auto md:p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Side: Items List */}
        <div className="lg:col-span-8 space-y-2">
          <div className="bg-white p-4 shadow-sm border-b flex justify-between items-center">
            <h1 className="text-lg font-medium">Maganlal Chikki ({cart.length})</h1>
            <div className="text-sm flex items-center gap-1 text-gray-600">
              <span>Deliver to:</span>
              <span className="font-medium text-black underline">Mumbai - 400001</span>
            </div>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 md:p-6 shadow-sm border-b last:border-0">
              <div className="flex gap-4 md:gap-6">
                {/* Small Image Section */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  {/* Qty Controls */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => decreaseQty(item.id)}
                      className="w-7 h-7 border rounded-full flex items-center justify-center disabled:opacity-50"
                      disabled={item.qty <= 1}
                    > – </button>
                    <input 
                      type="text" 
                      value={item.qty} 
                      readOnly 
                      className="w-9 border py-0.5 text-center text-sm font-medium" 
                    />
                    <button 
                      onClick={() => increaseQty(item.id)}
                      className="w-7 h-7 border rounded-full flex items-center justify-center"
                    > + </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg text-gray-900 hover:text-[#2874f0] cursor-pointer line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Seller: Appario Retail</p>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-gray-400 line-through text-sm">₹{(item.price * 1.2).toFixed(0)}</span>
                    <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                    <span className="text-green-600 text-xs font-bold font-sans">20% Off</span>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button className="uppercase text-sm font-bold hover:text-[#2874f0]">Save for later</button>
                    <button
  onClick={() => removeFromCart(item.id)}
  className="uppercase text-sm font-bold hover:text-red-500"
>
  Remove
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Place Order (Desktop Only) */}
          <div className="hidden md:flex justify-end bg-white p-4 shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)] sticky bottom-0">
            <button className="bg-[#fb641b] text-white px-16 py-4 rounded-sm font-bold uppercase tracking-wide shadow-sm">
              Place Order
            </button>
          </div>
        </div>

        {/* Right Side: Price Details (Sticky on Desktop) */}
        <div className="lg:col-span-4 h-fit sticky top-4">
          <div className="bg-white shadow-sm rounded-sm">
            <h2 className="text-gray-500 uppercase font-bold text-sm px-4 py-3 border-b">Price Details</h2>
            <div className="p-4 space-y-4 text-base border-b">
              <div className="flex justify-between">
                <span>Price ({cart.length} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">– ₹{discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-dashed pb-4">
                <span>Delivery Charges</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-lg font-bold py-2">
                <span>Total Amount</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="p-4 text-green-600 font-bold text-sm">
              You will save ₹{discount.toLocaleString()} on this order
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 p-4 text-gray-500 font-bold text-sm">
            <ShieldCheck size={28} className="text-gray-400" />
            <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex items-center justify-between z-50">
        <div>
          <p className="text-gray-400 line-through text-xs">₹{subtotal}</p>
          <p className="text-lg font-bold">₹{totalAmount}</p>
        </div>
        <button className="bg-[#fb641b] text-black px-10 py-3 rounded-sm font-bold uppercase text-sm shadow-md">
          Place Order
        </button>
      </div>
    </div>
  )
}