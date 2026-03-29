"use client"

import { IoChevronDownCircle } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function MenuCategory() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDept, setOpenDept] = useState(false)

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden flex justify-between items-center mx-4 mb-4 px-4 py-3 bg-[#ff395c] text-white">
        <span className="font-semibold">MENU</span>
        <FaBars 
          onClick={() => setOpenMenu(true)} 
          className="cursor-pointer text-xl" 
        />
      </div>

      {/* MOBILE DRAWER + OVERLAY */}
      {openMenu && (
        <div 
          className="fixed inset-0 z-50"
          onClick={() => setOpenMenu(false)}  // ✅ click outside closes
        >

          {/* DRAWER */}
          <div
            onClick={(e) => e.stopPropagation()} // ✅ prevent closing inside
            className={`w-[80%] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
          >

            {/* HEADER */}
            <div className="flex justify-between items-center p-4 border-b text-black">
              <span className="font-semibold">Menu</span>
              <FaTimes 
                onClick={() => setOpenMenu(false)} 
                className="cursor-pointer text-xl" 
              />
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col p-4 gap-4 text-sm font-medium text-black">
              <Link href="/" onClick={() => setOpenMenu(false)}>HOME</Link>
              <Link href="/About" onClick={() => setOpenMenu(false)}>ABOUT US</Link>
              <Link href="/Contact" onClick={() => setOpenMenu(false)}>CONTACT US</Link>
              <Link href="/Shop" onClick={() => setOpenMenu(false)}>SHOP</Link>
            </div>

            {/* ALL DEPARTMENTS */}
            <div className="border-t p-4 text-black">
              <div 
                onClick={() => setOpenDept(!openDept)}
                className="flex justify-between items-center cursor-pointer font-semibold"
              >
                ALL DEPARTMENTS
                <IoChevronDownCircle />
              </div>

              {openDept && (
                <ul className="mt-3 flex flex-col gap-3 text-sm">
                  <li onClick={() => setOpenMenu(false)}>Chikki</li>
                  <li onClick={() => setOpenMenu(false)}>Dry Fruit Roll</li>
                  <li onClick={() => setOpenMenu(false)}>Fudge</li>
                  <li onClick={() => setOpenMenu(false)}>Namkeens</li>
                </ul>
              )}
            </div>

          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

        </div>
      )}

      {/* DESKTOP MENU */}
      <div className="hidden lg:block border-none w-full pt-4 bg-white">
        <div className="max-w-6xl ml-11 pl-0 mr-4 flex flex-row items-center justify-around px-1">

          {/* ALL DEPARTMENTS */}
          <div className="relative w-[300px]">
            <div
              onClick={() => setOpenDept(!openDept)}
              className="bg-[#ff395c] text-white px-4 py-4 flex items-center gap-5 cursor-pointer"
            >
              <FaBars />
              ALL DEPARTMENTS
              <IoChevronDownCircle />
            </div>

            {openDept && (
              <ul className="absolute left-0 top-full w-full bg-white shadow-lg z-50 text-black">
                <li className="px-6 py-3 border-b hover:text-red-600">Chikki</li>
                <li className="px-6 py-3 border-b hover:text-red-600">Dry Fruit Roll</li>
                <li className="px-6 py-3 border-b hover:text-red-600">Fudge</li>
                <li className="px-6 py-3 hover:text-red-600">Namkeens</li>
              </ul>
            )}
          </div>

          {/* NAV LINKS */}
          <ul className="flex gap-7 font-semibold text-sm text-gray-800">
            <Link href="/" className="text-red-500">HOME</Link>
            <Link href="/About" className="hover:text-red-500">ABOUT US</Link>
            <Link href="/Contact" className="hover:text-red-500">CONTACT US</Link>
            <Link href="/Shop" className="hover:text-red-500">SHOP</Link>
          </ul>

          {/* OFFER */}
          <div className="flex items-center gap-2">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              Hot
            </span>
            <span className="text-gray-700 text-sm">
              Special Offer!
            </span>
          </div>

        </div>
      </div>
    </>
  )
}