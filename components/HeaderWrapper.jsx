import axios from "axios"
import Header from "./Header"

export default async function HeaderWrapper() {
  try {
    const res = await axios.get(
      "https://appy.trycatchtech.com/v3/maganlalchikki/category_list"
    )

    const categories = res.data || []

    return <Header categories={categories} />
  } catch (error) {
    console.error("Header categories error:", error)
    return <Header categories={[]} />
  }
}