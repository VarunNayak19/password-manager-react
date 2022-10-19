import Lock from "../../components/lock/lock"
import RectangleDiv from "../../components/rectangleDiv/rectangleDiv"
import "../loginScreen/loginScreen.css"
import "../../index.css"
import Form from "../../components/form/form"
import "./loginScreen.css"
import ReusableForm from "../../components/reusableForm/reusableForm"


const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <Lock />
        <RectangleDiv />
        <ReusableForm />
      </div>
    </div>
  )
}

export default LoginScreen