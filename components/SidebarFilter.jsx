"use client"

import { useSearch } from "@/app/context/SearchContext"

export default function SidebarFilter() {

  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory
  } = useSearch()

  const categories = [
    "chikki",
    "fudge",
    "roll",
    "sev"
  ]

  return (
    <div className="w-full lg:w-[250px] bg-white p-4 rounded-xl shadow h-100">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">FILTERS</h3>

        <button
          onClick={() => {
            setSearch("")
            setSelectedCategory("")
          }}
          className="text-sm text-orange-500"
        >
          RESET
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 mb-2">SEARCH</p>

        <input
          type="text"
          placeholder="Find your favorite..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm outline-none"
        />
      </div>

      {/* CATEGORY */}
      <div>
        <p className="text-xs text-gray-500 mb-2">COLLECTIONS</p>

        <ul className="space-y-2">

          <li
            onClick={() => setSelectedCategory("")}
            className={`cursor-pointer ${
              selectedCategory === "" ? "text-orange-500 font-semibold" : ""
            }`}
          >
            All Products
          </li>

          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer capitalize ${
                selectedCategory === cat
                  ? "text-orange-500 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {cat}
            </li>
          ))}

        </ul>
      </div>

    </div>
  )
}