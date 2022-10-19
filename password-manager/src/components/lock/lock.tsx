import "../lock/lock.css"
import { useState } from "react"
import { Link } from "react-router-dom"
const Lock = () => {
  const [orange1, setorange1] = useState(true)
  const [orange2, setorange2] = useState(false)
  const switchTab1 = () => {
    setorange1(true)
    setorange2(false)
  }
  const switchTab2 = () => {
    setorange2(true)
    setorange1(false)
  }

  return (
    <div className="lockBox">
      <div className="logoBox">
        <img src={require("../../assets/image/logo.png")} alt="" className="lockboxLogo" />
        <div className="passmanagerLogoName">PASS MANAGER</div>
      </div>
      <div>
        <div className="switchingTab">
          <div >
            <Link to="/" onClick={switchTab1} className="signInTabDiv">
              <a className="signInTabDiv" >SIGN IN</a>
            </Link>
            {
              orange1 &&
              <div className="orangeUnder"></div>
            }
          </div>
          <div >
            <Link to="/signup" className="signInTabDiv">
              <a className="signUpTabDiv" onClick={switchTab2}>
                <p>SIGN UP</p>

              </a>
            </Link>
            {
              orange2 &&
              <div className="orangeUnder"></div>
            }

          </div>
        </div>
        <p className="protectSentence">Protect & Manage every password in your business</p>
      </div>
    </div>
  )
}

export default Lock