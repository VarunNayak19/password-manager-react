import Buttons from "../buttons/buttons"
import Input from "../input/input"
import '../form/form.css'
import '../signUpForm/signUpForm.css'
import '../buttons/buttons.css'
import '../input/input.css'
import '../signUpForm/signUpForm.css'
import {Link,useNavigate} from 'react-router-dom';
import './reusableForm.css'
import { useState } from "react"

const ReusableForm = (props: any) => {
    const [password, setPassword] = useState(false);
    const [password2, setPassword2] = useState(false);
  const togglePassword = () => {
    setPassword(!password);
  };
  const togglePassword2 = () => {
    setPassword2(!password2);
  };
  type usersType = { mobileNo: number; mPin: number };

  const navigate = useNavigate();

  if (localStorage.getItem("users") === null) {
    localStorage.setItem(
      "user Data",
      JSON.stringify(
        localStorage.setItem(
          "users",
          JSON.stringify([
            { mobileNo: "9945810342", mPin: "9945" },
            { mobileNo: "9945810341", mPin: "9945" },
          ])
        )
      )
    );
  }

  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNo: number = e.target.mobileNumber.value;
    const newMPin: number = e.target.mPin.value;
    const confirmMpin: number = e.target.cmPin.value;

    const userData = { mobileNo, mPin: newMPin };

    const previousData: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    console.log("userData", previousData);

    if (previousData.length > 0 && mobileNo) {
      const mappedUser = previousData.map((user) => {
        if (user.mobileNo === mobileNo) {
          return "user";
        }
        return "no user";
      });

      if (newMPin === confirmMpin) {
        if (mappedUser.includes("user")) {
          alert("user already exist");
        } else if (mappedUser.includes("no user")) {
          previousData.push(userData);
          sessionStorage.setItem("signUpSuccess", "true");
          navigate("/success");

          localStorage.setItem(JSON.stringify(mobileNo), "[]");
          window.location.reload();
        }
      } else {
        alert("mPin does not match");
      }

      console.log("pre", previousData);
      localStorage.setItem("users", JSON.stringify(previousData));
    } else if ((previousData.length = 0 && mobileNo)) {
    }
  };

//   const navigate = useNavigate();
//   const [password, setPassword] = useState<boolean>(false);

//   const togglePassword = () => {
//     setPassword(!password);
//   };

  if (localStorage.getItem("users") === null) {
    localStorage.setItem(
      "user Data",
      JSON.stringify(
        localStorage.setItem(
          "users",
          JSON.stringify([
            { mobileNo: "9945810342", mPin: "9945" },
            { mobileNo: "9945810341", mPin: "9945" },
          ])
        )
      )
    );
  }

  const onsubmitHandler = (e: any) => {
    e.preventDefault();
    type usersType = { mobileNo: number; mPin: number };

    const mobileNo = e.target.mobile.value;
    const mPin = e.target.mpin.value;

    const userData = { mobileNo, mPin };
    console.log("userData", userData);

    const users: usersType[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    console.log("users", users);

    for (let i = 0; i < users.length; i++) {
      if (userData.mobileNo === users[i].mobileNo) {
        if (userData.mPin === users[i].mPin) {
          localStorage.setItem("auth", "authenticated");
          navigate("/home");
          localStorage.setItem("currentUser", mobileNo);
          window.location.reload();
        }
      }
    }
  };

    return (
        <div className="formBox">
            {
                props.type === 'signUp' ?
                    <>
                        <form className="signInBox" onSubmit={signUpHandler}>
                            <p className="signUpHeading ">SIGN UP</p>
                            <input type="text" placeholder="Mobile Number" className="username" name="mobileNumber"/>
                            {/* <Input placeholder="Enter Mobile Number" /> */}
                            <div className="mpinBox">
                                {/* <Input placeholder="Enter 4 Digit MPin" /> */}
                                <input type={password?"text":"password"} placeholder="MPin" minLength={6} maxLength={6} className="input mpin" name="mPin"/>
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" onClick={togglePassword}/>
                            </div>
                            <div className="mpinBox">
                                {/* <Input placeholder="Re-Enter 4 Digit MPin" /> */}
                                <input type={password2?"text":"password"} placeholder="MPin" minLength={6} maxLength={6} className="input mpin"  name="cmPin"/>
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" onClick={togglePassword2} />
                            </div>
                            <div className="bottombox">
                                {/* <Link to="/success"> */}
                                <button type="submit" className="signUpButton">SIGN UP</button>
                                {/* </Link> */}
                                
                            </div>
                        </form>
                    </>
                    :
                    <>
                        <form className="signInBox signUpBox" onSubmit={onsubmitHandler}>
                            <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>
                            <input type="text" placeholder="Mobile Number" className="input username" name="mobile" />
                            {/* <Input placeholder="Mobile Number" /> */}
                            <div className="mpinBox">
                                {/* <Input placeholder="MPin" minValue={4} maxValue={4} /> */}
                                <input type="password" placeholder="MPin" minLength={6} maxLength={6} className="input mpin" name="mpin" />
                                <img src={require("../../assets/image/eye_on.png")} alt="eye" className="toggleEye" />
                            </div>
                            <div className="bottombox">
                                <p className="forgotPasswordText">Forgot your password?</p>
                                {/* <button className="signInButton">SIGN IN</button> */}
                                <div className="buttonDiv">
                                   {/* <Link to="/home"> */}
                                    <Buttons value="SIGN IN" type="submit"/>
                                    {/* </Link> */}
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