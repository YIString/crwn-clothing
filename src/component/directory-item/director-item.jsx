import { useNavigate } from 'react-router-dom'
import {
  BackgroundImg,
  Body,
  DirectoryItemContainer,
} from './directory-item.style.jsx'

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate()

  const { title, imageUrl, route } = category
  const OnNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={OnNavigateHandler}>
      <BackgroundImg imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
