import { CartItemContainer, Img, ItemDetails, Name } from './cart-item.style'

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x {`$${price}`}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
