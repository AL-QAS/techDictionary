import { Link } from "react-router-dom"
import "./stylesheets/forgotPassword.css"
const ForgotPassword = () => {
  return (
    <div className="pass-fgrt-main">
       <div className="forgt-name">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="custom-size">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
</svg>
<h3>Tech-dictionary</h3>
</div>
    <div className="forgt-pss-ctn-main-1">
      <h2>Forgot Password?</h2>
      <p>Forgot password? Don’t worry, we will send reset instructions to your registered email address. The verification email will be sent to the mailbox. Please check it.</p>
        <div className="bg-white">
      <div className=" login-inputs-ctn">
        <input type="email" placeholder="Username" className="input-fields"/>


<button className="button-style">Send</button>
<div className="forgot-rem">
    <p>Remember Password?</p>
<Link to="/login-page">login</Link>

      </div>

        </div>
        </div>
    
    </div>
    </div>
  )
}

export default ForgotPassword
