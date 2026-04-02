"use client"

import { createContext, useContext, useState } from "react"

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <SearchContext.Provider
      value={{ search, setSearch, selectedCategory, setSelectedCategory }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)