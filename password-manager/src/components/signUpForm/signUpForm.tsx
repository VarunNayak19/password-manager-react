import "./signUpForm.css"
import Input from "../input/input"
const SignUpForm = () => {
    return (
        <div>
            <form className="signInBox">
                <p className="signInHeading">SIGN UP</p>
                {/* <input type="text" placeholder="Mobile Number" className="input username" /> */}
                <Input placeholder="Mobile Number" />
                <div className="mpinBox">
                    <Input placeholder="MPin" />
                    {/* <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" /> */}
                    <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                </div>
                <div className="mpinBox">
                    <Input placeholder="Re-Enter 4 Digit MPin" />
                    {/* <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" /> */}
                    <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                </div>
                <div className="bottombox">
                    <button className="signInButton">SIGN IN</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm