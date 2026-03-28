import axios from "axios";
import Allproducts from "./Allproducts";

// This runs on the server
export default async function ProductPage() {
  const res = await axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/category_list");
  const categories = res.data;

// Example: Fetching a specific ID from the list
//   const targetId = "4"; 
//   const singleProduct = categories.find(item => item.id === targetId);

  return (
    <main>
      <div style={{ display: 'grid', gap: '0px' }}>
        {categories.map((cat) => (
          <Allproducts key = {cat.id} data = {cat} categoriesname ={cat.cat_name} categoryimages = {cat.cat_image}/>
        ))}
      </div>
    </main>
  );
}

