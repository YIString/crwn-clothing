import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const clearItemHandler = () => clearItemFromCart(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`name`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  )
}

export default CheckoutItem
