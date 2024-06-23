import { Link } from "react-router-dom";
import "./stylesheets/login.css";
import circle from "../../images/circle.jpg";
import rectangle from "../../images/rectangle.svg";
import eye from "../../images/eye.svg";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow(!show);
  }
  return (
    <div className="login-main">
      <div className="login-ctn-1  text-white">
        <div className="login-ctn-item-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="custom-size"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <h3>Tech-dictionary</h3>
        </div>
        <div>
          <h2 className="ctn-1-h1">Your Ultimate Tech Language Companion.</h2>
          <p className="ctn-1-p">
            Learn a new tech word everyday to become more fluent in the tech
            space lingual
          </p>
        </div>
        <div className="carousel-icon">
          <img src={circle} alt="circle" className="bgd-none"/>
          <img src={rectangle} alt="rectangle" className="bgd-none" />
          <img src={circle} alt="circle" className="bgd-none" />
        </div>
      </div>
      <div className="login-ctn-22">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="custom-size-40"
          viewBox="0 0 16 16"
        >
          <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
        </svg>
        <h2>Sign in</h2>
        <p>Get started with our tech-dictionary!</p>
        <div className=" login-inputs-ctn">
          <div className="password-field">
            <input
              type="text"
              placeholder="Username"
              className="input-fields"
            />
          </div>
          <div className="password-field">
            <input
              type="email"
              placeholder="Email Address"
              className="input-fields"
            />
          </div>

          <div className="password-field">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="input-fields"
            />
            <img src={eye} alt="" onClick={showPassword} className="click"/>
          </div>

          <div className="login-rem-forg-ctn">
            <div className="login-remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="button-style">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
