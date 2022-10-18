import Buttons from "../buttons/buttons"
import Input from "../input/input"
import '../form/form.css'
import '../signUpForm/signUpForm.css'
import '../buttons/buttons.css'
import '../input/input.css'
import '../signUpForm/signUpForm.css'
import {Link} from 'react-router-dom';
import './reusableForm.css'

const ReusableForm = (props: any) => {
    return (
        <div className="formBox">
            {
                props.type === 'signUp' ?
                    <>
                        <form className="signInBox">
                            <p className="signUpHeading ">SIGN UP</p>
                            {/* <input type="text" placeholder="Mobile Number" className="input username" /> */}
                            <Input placeholder="Enter Mobile Number" />
                            <div className="mpinBox">
                                <Input placeholder="Enter 4 Digit MPin" />
                                {/* <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" /> */}
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                            </div>
                            <div className="mpinBox">
                                <Input placeholder="Re-Enter 4 Digit MPin" />
                                {/* <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" /> */}
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                            </div>
                            <div className="bottombox">
                                <Link to="/success">
                                <button className="signUpButton">SIGN UP</button>
                                </Link>
                                
                            </div>
                        </form>
                    </>
                    :
                    <>
                        <form className="signInBox">
                            <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>
                            {/* <input type="text" placeholder="Mobile Number" className="input username" /> */}
                            <Input placeholder="Mobile Number" />
                            <div className="mpinBox">
                                <Input placeholder="MPin" minValue={4} maxValue={4} />
                                {/* <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" /> */}
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                            </div>
                            <div className="bottombox">
                                <p className="forgotPasswordText">Forgot your password?</p>
                                {/* <button className="signInButton">SIGN IN</button> */}
                                <div className="buttonDiv">
                                   <Link to="/home"><Buttons value="SIGN IN" /></Link>
                                </div>
                                <p className="signUpText">Don’t have a Account?<Link to="/signup" className="signUpLink">SIGNUP</Link> </p>
                            </div>
                        </form>
                    </>
            }
        </div>
    )
}

export default ReusableForm