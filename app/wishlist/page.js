"use client"

import { useWishlist } from "@/app/context/WishlistContext"
import Link from "next/link"

export default function WishlistPage() {

  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <div className="max-w-6xl mx-auto p-5 text-center my-5 ">

      <h1 className="text-2xl font-bold mb-5 text-red-400 ">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-black">No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {wishlist.map(item => (
            <div key={item.id} className="bg-white p-4 shadow rounded">

              <img src={item.images[0]} className="h-[150px] w-full object-cover" />

              <h3 className="mt-2 text-sm text-black">{item.title}</h3>
              <p className="text-green-600 font-bold">₹ {item.price}</p>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-[#e9597e] text-white w-full py-1 rounded"
              >
                Remove
              </button>

              {/* <Link href={`/product/${item.id}/${item.category_id}`}>
                <button className="mt-2 bg-black text-white w-full py-1 rounded">
                  View
                </button>
              </Link> */}

            </div>
          ))}

        </div>
      )}

    </div>
  )
}