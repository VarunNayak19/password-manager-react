
import Buttons from "../buttons/buttons"
import Input from "../input/input"
import './form.css'
const Form = () => {
    return (
        <div>
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
                        <Buttons value="SIGN IN" />
                    </div>
                    <p className="signUpText">Don’t have a Account? SIGNUP</p>
                </div>
            </form>
        </div>
    )
}

export default Form
