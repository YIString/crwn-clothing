import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  } 
  return (
    <div>
      <h2>SIGN IN</h2>
      <button onChange={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn
