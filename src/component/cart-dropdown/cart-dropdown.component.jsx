import { useContext } from 'react'
import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'

import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT </Button>
    </div>
  )
}

export default CartDropdown
