import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { userContext } from '../../context/user.context'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.style.scss'

const Navigation = () => {
  const { currentUser } = useContext(userContext)
  
  console.log(currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
