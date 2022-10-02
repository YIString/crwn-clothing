import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import CheckoutItem from '../../component/checkout-item/checkout-item.component'

import './checkout.style.scss'

const Checkout = () => {
  const { cartItem, totalPrice } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">products</div>
        <div className="header-block">description</div>
        <div className="header-block">quantity</div>
        <div className="header-block">price</div>
        <div className="header-block">remove</div>
      </div>
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">{`TOTAL:$${totalPrice}`}</div>
      <span>*Please use the following test credit card for payment *</span>
    </div>
  )
}

export default Checkout
