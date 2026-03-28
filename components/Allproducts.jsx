import React from 'react';
import axios from 'axios';
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from 'next/link';
import { X } from 'lucide-react';
import AddCartButton from './AddCartButton';

const Allproducts = async ({ data, categoriesname, categoryimages, }) => {

    let products = [];
    try {
        const response = await axios.get(
            `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${data.id}`
        );
        products = response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    console.log(data.id)

    {
        products?.map((item) => {
            console.log(item); // Log here
            return (
                <div key={item.id} className="...">
                    {/* rest of your card code */}
                </div>
            );
        })
    }

    return (
        <div className='bg-gray-200 px-4 md:px-10 lg:px-12 outline-none py-0'>
            {/* Header with Title and Filter Links */}
            <div className="flex items-center justify-between border-t-2 border-[#e9597e] bg-white my-0">
                <div className="bg-[#e9597e] text-white px-4 py-2 font-semibold font-serif">
                    ❀ {categoriesname}
                </div>
                <div id={categoriesname.replace(/\s+/g, "-").toLowerCase()}
                    className='bg-gray-200 px-4 md:px-10 lg:px-12'>

                </div>
                <div className="hidden md:block text-black pr-4 text-sm font-medium">
                    <ul className="flex gap-3 cursor-pointer">
                        <li className='text-[#e9597e]'>Latest Product</li>
                        <li className='hover:text-[#e9597e] text-gray-600'>Best Selling</li>
                        <li className='hover:text-[#e9597e] text-gray-600'>Top Rating</li>
                        <li className='hover:text-[#e9597e] text-gray-600'>Featured Products</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-6 mb-0 pb-0">
                {/* Left Side Banner */}
                <div className="w-full lg:w-[25%]">
                    <img
                        src={categoryimages}
                        className="w-full h-100 rounded-2xl shadow-md"
                        alt="Category Banner"
                    />
                </div>

                {/* Main Product Grid */}
                <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products?.length > 0 ? (
                        products?.map((item) => (
                            console.log(item),
                            <div
                                key={item.id}
                                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                            >
                                {/* Product Image with Hover Zoom */}
                                <div className="overflow-hidden">
                                    <img
                                        src={item.images}
                                        alt={item.product_name}
                                        className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-4 flex flex-col flex-grow">
                                    {/* Product Title */}
                                    <h3 className="text-sm font-serif text-red-800 mb-2 line-clamp-2 h-10">
                                        {item.title}
                                    </h3>

                                    <hr className="border-gray-100" />

                                    {/* Price and Action Buttons */}
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-gray-800 font-bold text-lg">
                                            ₹{item.price}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 mt-3 cursor-pointer">
                                        <Link href={`/product/${item.id}/${data.id}`} key={item.id} scroll={true}
                                            className="flex-1 text-[11px] font-bold text-center rounded-sm uppercase tracking-tighter bg-gray-300 text-red-400 py-2 border border-gray-200 hover:bg-[#e9597e] hover:text-white transition">
                                            View
                                        </Link>
                                        {/* <div className="px-3 bg-gray-300 border text-red-300 border-gray-200 pt-2 rounded-sm transition hover:bg-[#e9597e] hover:text-white transition">
                                            <BsFillCartPlusFill />
                                        </div> */}
                                        <button className="px-3 bg-gray-300 text-red-300 border rounded-sm border-gray-200 hover:bg-[#e9597e] hover:text-white transition ">
                                            ♥
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-white rounded-lg text-gray-400">
                            Loading products for {categoriesname}...
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom "View All" Navigation */}
            <div className="flex items-center justify-center py-10">
                <button className="inline-flex items-center gap-2 text-sm text-gray-600 font-medium h-[45px] bg-white 
                                 border border-gray-200 px-10 rounded-sm hover:bg-[#e9597e] hover:text-white 
                                 hover:border-[#e9597e] transition-all duration-300 shadow-sm">
                    View All {categoriesname} <AiFillCaretRight />
                </button>
            </div>
        </div>
    );
};

export default Allproducts;