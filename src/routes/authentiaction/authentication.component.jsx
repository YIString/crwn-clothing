// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import './authentication.style.sass'
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../component/sign-up-form/sign-up-form.component'
import Button from '../../component/button/button.component'

//import { useState } from 'react'
const Authentication = () => {
  //   const useEffect(async ()=>{
  //  const response = await getRedirectResult(auth)
  //  if(response){
  //   const userDocRef = await createUserDocumentFromAuth(response.user)
  //  }
  //   },[])

  // const defaultFormFields = {
  //   email: '',
  //   password: '',
  // }
  const logGoogleUser = async () => {
    // const [formFields, setFormFields] = useState(defaultFormFields)
    // const { email, password } = formFields
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setFormFields({ ...formFields, [name]: value })
  // }
  return (
    <div>
      <h2>I already have an account</h2>
      <span>sign in with email and password</span>

      <Button buttonType={'google'} onChange={logGoogleUser}>
        Sign In with Google Popup
      </Button>
      <Button buttonType={'inverted'} onChange={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </Button>
      <SignUpForm />
    </div>
  )
}

export default Authentication
