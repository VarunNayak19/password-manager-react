import React from 'react'
import RectangleDiv from "../../components/rectangleDiv/rectangleDiv"
import Lock from "../../components/lock/lock"
import "../loginScreen/loginScreen.css"
import "../../index.css"
import SignUpForm from '../../components/signUpForm/signUpForm'
import ReusableForm from '../../components/reusableForm/reusableForm'
import './signUpScreen.css'

const SignUpScreen = () => {
  return (
    <div className='signUpContainer'>
      <div className="loginBox">
        <Lock />
        <RectangleDiv />
        <ReusableForm type="signUp" />
      </div>
    </div>
  )
}

export default SignUpScreen