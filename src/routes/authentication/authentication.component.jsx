// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignUpForm from '../../component/sign-up-form/sign-up-form.component'
import SignInForm from '../../component/sign-in-form/sign-in.component'
import { AuthenticationContainer } from './authentication.style'

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

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
