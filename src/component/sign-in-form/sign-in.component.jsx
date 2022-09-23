// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import './sign-in.style.scss'
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../sign-up-form/sign-up-form.component'
const SignIn = () => {
  //   const useEffect(async ()=>{
  //  const response = await getRedirectResult(auth)
  //  if(response){
  //   const userDocRef = await createUserDocumentFromAuth(response.user)
  //  }
  //   },[])
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h2>SIGN IN</h2>
      <button onChange={logGoogleUser}>Sign In with Google Popup</button>
      <button onChange={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
