import react from "@heroicons/react";

const products = [
  {
    "id": "20",
    "title": "Kaju Fudge – 1 Kg",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168105811.jpg"
    ],
    "price": "1",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Kaju, Pure Ghee, Milkmaid, Butter, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  }, {
    "id": "19",
    "title": "Kaju Fudge – 250 Gm",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168105321.jpg"
    ],
    "price": "320",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Kaju, Pure Ghee, Milkmaid, Butter, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "18",
    "title": "Mango Fudge – 250 Gm",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168104951.jpg"
    ],
    "price": "300",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Mango Pulp, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "17",
    "title": "Mango Fudge 1 Kg",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168104661.jpg"
    ],
    "price": "1",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Mango Pulp, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "16",
    "title": "Plain Chocolate Fudge – 1 Kg",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168104291.jpg"
    ],
    "price": "1",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Cocoa Powder, Drinking Chocolate Powder, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "15",
    "title": "Plain Chocolate Fudge – 250 Gm",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168103991.jpg"
    ],
    "price": "320",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Cocoa Powder, Drinking Chocolate Powder, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "14",
    "title": "Strawberry Fudge – 250 Gm",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168103561.jpg"
    ],
    "price": "300",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Strawberry Pulp, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  },
  {
    "id": "13",
    "title": "Strawberry Fudge 1 Kg",
    "images": [
      "https://appy.trycatchtech.com/uploads/maganlalchikki/17168103011.jpg"
    ],
    "price": "1",
    "small_description": "MRP Inclusive of All Taxes. Shipping Charges Additional.",
    "full_description": "The choicest and most popular Maganlal Chikki from Lonavla now at your doorstep! This fudge contains the perfect melange of crunch from a generous serving of Strawberry Pulp, Pure Ghee, Milkmaid, Butter, Kaju, Liquid Glucose, Permitted Flavour and endless health benefits of Jaggery. A mouthful of goodness, bite after bite!"
  }
]

const FudgeStore = () => {
    return (
        <>
            <div className='bg-gray-200 px-4 md:px-10 lg:px-12 ouline-none'>
                <div className="flex items-center justify-between border-t-2 border-[#449df0] bg-white my-0">
                    <div className="bg-[#449df0] text-white px-4 py-2 font-semi font-serif uppercase">
                        ❀ fudge
                    </div>
                    <div className="text-black pr-4 text-sm font-medium">
                        <ul className="flex gap-3 cursor-pointer">
                            <li className='text-[#449df0]'>Latest Product</li>
                            <li className='hover:text-[#449df0]'>Featured Products</li>
                        </ul>
                    </div>
                </div>
            

            {/* ***************************************************************** */}

            <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-6 mb-0 pb-0">
                    {/* Left Banner */}
                    <div className="w-full lg:w-[25%]">
                        <img
                            src="/33194065912.jpg"
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
              </div>
        </>
    )
}

export default FudgeStore;