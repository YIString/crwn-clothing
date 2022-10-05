import { useParams } from 'react-router-dom'
import { useContext, useEffect, Fragment } from 'react'
import { CategoryContext } from '../../context/category.context'
import ProductCard from '../../component/product-card/product-card.component'
import { useState } from 'react'
import { CategoryContainer, Title } from './category.style'

const Category = () => {
  const { category } = useContext(CategoryContext)
  const { categories } = useParams()

  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(category[categories])
  }, [categories, category])

  return (
    <Fragment>
      <Title>{categories.toUpperCase()}</Title>
      <CategoryContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
