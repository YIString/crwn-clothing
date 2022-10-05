//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.style'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon
