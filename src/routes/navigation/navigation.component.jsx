import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../component/cart-icon/cart-icon.component'
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component'

import { userContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.style'

const Navigation = () => {
  const { currentUser } = useContext(userContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <Link to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon cartDropdown={CartDropdown} />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  )
}

export default Navigation

