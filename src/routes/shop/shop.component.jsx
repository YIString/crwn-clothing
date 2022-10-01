import { useContext } from 'react'
import { ProductsContext } from '../../context/products.context'
import ProductCard from '../../component/product-card/product-card.component'
import './shop.style.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)
  console.log('hit')
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Shop
