import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  NameAndPrice,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.style'

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const clearItemHandler = () => clearItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`name`} />
      </ImageContainer>
      <NameAndPrice>{name}</NameAndPrice>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <NameAndPrice>{price}</NameAndPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
