"use client"
import { AiFillCaretRight } from "react-icons/ai";

import "swiper/css";

const products = [
  {
    id: 1,
    name: "Diwali Celebration Green Box",
    price: "₹490.00",
    image: "/Untitled-design-8.jpg",
  },
  {
    id: 2,
    name: "Diwali Celebration Special Green Box",
    price: "₹1,200.00",
    image: "/Untitled-design-9.jpg",
  },
  {
    id: 3,
    name: "Special Diwali Combo",
    price: "₹1,200.00",
    image: "/Untitled-design-5.jpg",
  },
  {
    id: 4,
    name: "Diwali Gift Box",
    price: "₹1,130.00",
    image: "/Untitled-design-3.jpg",
  },
  {
    id: 5,
    name: "Diwali Celebration Red Box",
    price: "₹840.00",
    image: "/Untitled-design-10.jpg",
  },
  {
    id: 6,
    name: "Special Dryfruit Hamper",
    price: "₹1,450.00",
    image: "/Untitled-design-7.jpg",
  },
  {
    id: 7,
    name: "Dryfruit Hamper",
    price: "₹1,380.00",
    image: "/Untitled-design-4.jpg",
  },
  {
    id: 8,
    name: "Diwali Dryfruit Box",
    price: "₹1,370.00",
    image: "/Untitled-design-2.jpg",
  },
];

export default function DiwaliHamper() {
  return (
    <div className="bg-gray-200 px-4 md:px-10 lg:px-12 ouline-none">

      <div className="max-w-7xl mx-auto py-3">

        <div className="flex items-center justify-between border-t-2 border-[#e9597e] bg-gray-100">

          <div className="bg-[#e9597e] text-white px-4 py-2 font-semi font-serif">
            ❀ DIWALI HAMPER
          </div>

          <div className="text-[#e9597e] pr-4 text-sm font-medium">
            Latest Products
          </div>
        </div>
      </div>

{/* ***************************************** */}

      <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-6 mb-0 pb-0">
        {/* Left Banner */}
        <div className="w-full lg:w-[25%]">
          <img
            src="/Diwali-Gift-Packs.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-cover hover:scale-105 transition-transform"
              />

              <div className="p-4">

                <h3 className="text-sm font-serif text-gray-800 mb-2">
                  {item.name}
                </h3>

                <hr />

                <p className="text-red-500 font-bold mt-3">
                  {item.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
{/* ***************************************** */}
      <div className="flex items-center justify-center py-5">
        <a className="inline-flex items-center gap-1 text-sm text-[#666] capitalize h-[35px] bg-white 
                      border border-[#e1e1e1] px-8 leading-[35px] rounded-sm no-underline cursor-pointer 
                      text-center hover:bg-red-500 hover:text-white">
          View All Diwali Hamper <AiFillCaretRight />
        </a>
      </div>

{/* ***************************************** */}
        
{/* ***************************************** */} 
    </div>
  );
}