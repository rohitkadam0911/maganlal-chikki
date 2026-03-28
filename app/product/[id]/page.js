import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BsArrowLeft, BsFillCartPlusFill } from "react-icons/bs";

// 1. Robust Fetching Function
async function getProduct(id) {
    try {
        const response = await axios.get(
            "https://appy.trycatchtech.com/v3/maganlalchikki/product_list"
        );

        const products = Array.isArray(response.data)
            ? response.data
            : response.data.data;

        if (!products) return null;

        const found = products.find(
            (p) => String(p.id) === String(id)
        );

        console.log("FOUND PRODUCT:", found);

        return found;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }

    
}

export default async function ProductDetails({ params }) {

    const { id } = params;
    console.log("PARAM ID:", id);
    
    const product = await getProduct(id);
    console.log("ALL PRODUCTS:", product);

    

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
                <p className="text-gray-500 mb-6">We couldn't find the item with ID: {id}</p>
                <Link href="/" className="bg-[#e9597e] text-white px-6 py-2 rounded-lg">
                    Back to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-[#e9597e] mb-8 transition">
                <BsArrowLeft /> Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                {/* Left: Image */}
                <div className="bg-[#fcfcfc] rounded-2xl p-10 flex items-center justify-center">
                    <img 
                        src={product.images} 
                        alt={product.title} 
                        className="max-h-[400px] w-full object-contain mix-blend-multiply"
                    />
                </div>

                {/* Right: Details */}
                <div className="flex flex-col justify-center">
                    <span className="text-[#e9597e] font-bold text-sm uppercase tracking-widest mb-2">
                        {product.category_name || "Maganlal Special"}
                    </span>
                    <h1 className="text-4xl font-serif text-red-900 mb-4">
                        {product.title || product.product_name}
                    </h1>
                    
                    <p className="text-3xl font-bold text-gray-900 mb-6">
                        ₹{product.price}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        Experience the authentic taste of Lonavala with our premium {product.title}. 
                        Handcrafted using traditional recipes for that signature Maganlal crunch.
                    </p>

                    <button className="flex items-center justify-center gap-3 bg-[#e9597e] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-[#d4486d] transition-all active:scale-95">
                        <BsFillCartPlusFill size={22} /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ); 
}