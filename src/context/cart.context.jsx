import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItem, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  //if found increment quantity
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  //return new array with modified cartItems / new cart items
  return [...cartItem, { ...productToAdd, quantity: 1 }]
}
const removeItemCart = (cartItem, productToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToRemove.id
  )
  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== productToRemove.id)
  }
  return cartItem.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? (cartItem = { ...cartItem, quantity: cartItem.quantity - 1 })
      : cartItem
  )
}
const clearItemCart = (cartItem, productToClear) =>
  cartItem.filter((cartItem) => cartItem.id !== productToClear.id)

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
  clearItemFromCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    const newTotalPrice = cartItem.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
    setTotalPrice(newTotalPrice)
  }, [cartItem])

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd))
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItem(removeItemCart(cartItem, productToRemove))
  }
  const clearItemFromCart = (productToClear) => {
    setCartItem(clearItemCart(cartItem, productToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    cartCount,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
