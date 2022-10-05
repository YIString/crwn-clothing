import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import CheckoutItem from '../../component/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, Total } from './checkout.style'

const Checkout = () => {
  const { cartItem, totalPrice } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div className="header-block">products</div>
        <div className="header-block">description</div>
        <div className="header-block">quantity</div>
        <div className="header-block">price</div>
        <div className="header-block">remove</div>
      </CheckoutHeader>
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>{`TOTAL:$${totalPrice}`}</Total>
      <span>*Please use the following test credit card for payment *</span>
    </CheckoutContainer>
  )
}

export default Checkout
