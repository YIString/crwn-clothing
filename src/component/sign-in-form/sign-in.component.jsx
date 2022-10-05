import { useState } from 'react'
import {
  signInWithGooglePopup,
  //createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { SignUp, ButtonsContainer } from './sign-in.style'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  //初始化表单 使用userState方法将字符设为默认值的空串
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  const handleSubmit = async function (event) {
    event.preventDefault()

    try {
      resetFormFields()
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user)
    } catch (err) {
      console.log(err)
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(err)
      }
    }
  }
  return (
    <SignUp>
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUp>
  )
}
export default SignInForm
