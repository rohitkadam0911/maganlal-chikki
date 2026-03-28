import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";

const products = [
    {
        "id": "12",
        "title": "Strawberry Groundnut Crushed Chikki – 200 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168101571.jpg"
        ],
        "price": "140",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Vegetable Ghee, Permitted Strawberry and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "11",
        "title": "Strawberry Peanut Malai Chikki – 250 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168101081.jpg"
        ],
        "price": "160",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Vegetable Ghee, Permitted Strawberry and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "9",
        "title": "Super Crush Mix Chikki – 500 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168100111.jpg"
        ],
        "price": "320",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Cocoa Powder, Peanuts, Sugar, Liquid Glucose, Cardomom Powder, Permitted Mango, Strawberry, Pineaaple flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "8",
        "title": "Til (Sesame) Chikki – 100 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168099751.jpg"
        ],
        "price": "50",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Seasame Seed, Sugar, Liquid Glucose, Permitted flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "7",
        "title": "Til (Sesame) Chikki – 200 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168099271.jpg"
        ],
        "price": "100",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Seasame Seed, Sugar, Liquid Glucose, Permitted flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "6",
        "title": "Whole Groundnut Chikki – 100 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168098861.jpg"
        ],
        "price": "50",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Permitted flavor and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "5",
        "title": "Whole Groundnut Chikki – 200 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168098411.jpg"
        ],
        "price": "100",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Permitted flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {
        "id": "4",
        "title": "Whole Groundnut Chikki – 250 Gm",
        "images": [
            "https://appy.trycatchtech.com/uploads/maganlalchikki/17168097801.jpg"
        ],
        "price": "125",
        "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Permitted flavor and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },
    {   "id":"2",
        "title":"Whole Groundnut Chikki 400 Gms",
        "images":["https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/17168050801.jpg"],
        "price":"200","small_description":"MRP Inclusive of All Taxes. Shipping Charges Additional.",
        "full_description":"The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This chikki contains the perfect melange of crunch from a generous serving of Roasted Peanuts, Sugar, Liquid Glucose, Permitted flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
    },

]

const ChikkiStore = () => {
    return (
        <>
            <div className='bg-gray-200 px-4 md:px-10 lg:px-12 ouline-none'>
                <div className="flex items-center justify-between border-t-2 border-[#e9597e] bg-white my-0">
                    <div className="bg-[#e9597e] text-white px-4 py-2 font-semi font-serif">
                        ❀ Chikki
                    </div>
                    <div className="text-black pr-4 text-sm font-medium">
                        <ul className="flex gap-3 cursor-pointer">
                            <li className='text-[#e9597e]'>Latest Product</li>
                            <li className='hover:text-[#e9597e]'>Best Selling</li>
                            <li className='hover:text-[#e9597e]'>Top Rating</li>
                            <li className='hover:text-[#e9597e]'>Featured Products</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-6 mb-0 pb-0">
                    {/* Left Banner */}
                    <div className="w-full lg:w-[25%]">
                        <img
                            src="/331940659-768x1365.jpg"
                            className="w-full h-auto rounded-lg"
                            alt="Promotional Banner"
                        />
                    </div>

                    {/* Product Grid */}
                    <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
                            >
                                {/* Using images[0] from your data */}
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full h-[180px] object-cover hover:scale-105 transition-transform"
                                />

                                <div className="p-4 flex flex-col flex-grow">
                                    {/* Using title from your data */}
                                    <h3 className="text-sm font-serif text-gray-800 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <hr />

                                    {/* Using price from your data */}
                                    <p className="text-red-500 font-bold mt-3">
                                        ₹{item.price}
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
                        View All Chikki <AiFillCaretRight />
                    </a>
                </div>

                {/* ***************************************** */}
            </div>
        </>
    );
};

export default ChikkiStore;