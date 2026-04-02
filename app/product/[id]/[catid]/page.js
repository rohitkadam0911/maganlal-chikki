import axios from "axios"
import Link from "next/link"
import AddCartButton from "@/components/AddCartButton"

export default async function ProductPage({ params }) {

  const { id, catid } = await params

  let products = []

  try {
    const res = await axios.get(
      `https://appy.trycatchtech.com/v3/maganlalchikki/product_list?category_id=${catid}`
    )
    products = res.data
  } catch (error) {
    console.log(error)
  }

  const product = products.find(item => item.id == id)
  const relatedProducts = products.filter(item => item.id != id)

  if (!product) return <h2>No Product Found</h2>

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 text-black">

      {/* ⭐ SINGLE PRODUCT */}
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-2xl shadow p-6 md:p-10 mb-12">

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.images[0]}
            className="w-full h-[320px] object-cover rounded"
          />

          <div>
            <h1 className="text-3xl font-bold text-black">{product.title}</h1>
            <p className="text-2xl text-green-600 font-bold mt-2">
              ₹ {product.price}
            </p>

            <p className="mt-5 text-black">{product.small_description}</p>
            <p className="mt-5 text-black">{product.full_description}</p>


            <AddCartButton product={product} />

          </div>

        </div>
      </div>

      {/* ⭐ RELATED */}
      <div className="max-w-6xl mx-auto">

        <h2 className="text-xl font-bold mb-5">Related Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {relatedProducts.slice(0,8).map(item => (
            <div key={item.id} className="bg-white p-4 rounded shadow">

              <img
                src={item.images[0]}
                className="h-[150px] w-full object-cover"
              />

              <h3 className="mt-2 text-sm">{item.title}</h3>
              <p className="text-green-600 font-bold">₹ {item.price}</p>

              <Link href={`/product/${item.id}/${catid}`}>
                <button className="mt-2 bg-gray-200 text-black w-full py-2 rounded hover:bg-[#ff395c]">
                  View
                </button>
              </Link>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}