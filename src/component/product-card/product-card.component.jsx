import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import {
  Image,
  Buttons,
  Name,
  Footer,
  Price,
  ProductCardContainer,
} from './product-card.style'
//import Button from '../button/button.component'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <Buttons buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Buttons>
    </ProductCardContainer>
  )
}

export default ProductCard
