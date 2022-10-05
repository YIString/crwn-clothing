import { useNavigate } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.style'

const CategoryPreview = ({ title, products }) => {
  const navigation = useNavigate()

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title
          onClick={() => {
            navigation(`${title}`)
          }}
        >
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
