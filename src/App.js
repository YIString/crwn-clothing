import Home from './component/routes/home/home.component.jsx'
import { Routes, Route } from 'react-router-dom'
import Navigation from './component/routes/navigation/navigation.component.jsx'
import SignIn from './component/routes/sign-in/sign-in.component.jsx'
const Shop = () => {
  return (
    <div>
      <h2>I'm shopping</h2>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
export default App
