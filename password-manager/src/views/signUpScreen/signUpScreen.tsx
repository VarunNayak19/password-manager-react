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
      {/* <form className="signInBox">
        <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>
        <input type="text" placeholder="Mobile Number" className="input username"/>
        <div className="mpinBox">
          <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin"/>
          <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
        </div>
        <div className="bottombox">
          <p className="forgotPasswordText">Forgot your password?</p>
          <button>SIGN IN</button>
          <p className="signUpText">Don’t have a Account? SIGNUP</p>
        </div>
      </form> */}
      <ReusableForm type="signUp" />
    </div>
    </div>
  )
}

export default SignUpScreen