"use client"
import { IoChevronDownCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


export default function MenuCategory() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className="border-none w-full pt-4 bg-white">
                <div className="max-w-6xl ml-11 pl-0 mr-4 flex flex-col lg:flex-row items-center justify-around px-1">
                    <div className="relative w-full lg:w-[300px] ">
                        <div onClick={() => setOpenMenu(!openMenu)}
                            className="bg-[#ff395c] text-white px-4 py-4 flex mr-8 items-center gap-5 cursor-pointer"
                        >
                            <FaBars />
                            ALL DEPARTMENTS
                            <IoChevronDownCircle />
                        </div>
                        {/* Dropdown */}
                        <ul className={`absolute left-0 top-full z-2 w-67 bg-white text-black shadow-lg transition-all duration-300
                ${openMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
                            <li
                                onClick={() => {
                                    document.getElementById("chikki")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                    setOpenMenu(false)
                                }}
                                className="px-6 py-3 border-b hover:text-red-600 text-sm cursor-pointer"
                            >
                                Chikki
                            </li>

                            <li
                                onClick={() => {
                                    document.getElementById("dry-fruit-roll")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                    setOpenMenu(false)
                                }}
                                className="px-6 py-3 border-b hover:text-red-600 text-sm cursor-pointer"
                            >
                                Dry Fruit Roll
                            </li>

                            <li
                                onClick={() => {
                                    document.getElementById("fudge")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                    setOpenMenu(false)
                                }}
                                className="px-6 py-3 border-b hover:text-red-600 text-sm cursor-pointer"
                            >
                                Fudge
                            </li>

                            <li
                                onClick={() => {
                                    document.getElementById("namkeens")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                    setOpenMenu(false)
                                }}
                                className="px-6 py-3 hover:text-red-600 text-sm cursor-pointer"
                            >
                                Namkeens
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap justify-start gap-7 mx-auto font-semibold text-sm text-gray-800 py-4 lg:py-0">
                        <Link href="/" className="text-red-500 cursor-pointer">HOME</Link>
                        <Link href="/About" className="cursor-pointer hover:text-red-500">ABOUT US</Link>
                        <Link href="/Contact" className="cursor-pointer hover:text-red-500">CONTACT US</Link>
                        <Link href="/Shop" className="cursor-pointer hover:text-red-500">SHOP</Link>
                    </ul>
                    <div className="flex items-center gap-2 pb-4 lg:pb-0">
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