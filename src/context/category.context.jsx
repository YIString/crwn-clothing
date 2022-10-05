import { createContext, useState } from 'react'


import SHOP_DATA from '../shop-data'

export const CategoryContext = createContext({ products: [] })
const categoryMap = SHOP_DATA.reduce((acc, data) => {
  const { title, items } = data
  acc[title.toLocaleLowerCase()] = items
  return acc
}, {})
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(categoryMap)

  const value = { category }
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}
