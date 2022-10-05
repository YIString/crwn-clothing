import { useContext, Fragment } from 'react'

import { CategoryContext } from '../../context/category.context'
import CategoryPreview from '../../component/category-preview/category-preview.component'

const CategoriesPreview = () => {
  const { category } = useContext(CategoryContext)

  return (
    <Fragment>
      {Object.keys(category).map((title) => {
        const products = category[title]
        return <CategoryPreview products={products} title={title} key={title} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview
