import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import googleIcon from "../icons/google.png";
import logo from "../icons/logo.jpg";
import Signup from "./Signup";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showSignupText, setShowSignupText] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowSignupText(!showSignupText);
  };
  const handleloginnext = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: Email, password: Password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        navigate('/');
      } else {
        console.error(data.message);
        setErrorMessage(data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);

      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  
  return (
    <div className="gridcontainer">
      <div className="grid-item1">
        <h5 className="new">
          {showSignupText ? (
            <>
              New to the app?{" "}
              <button className="signupbtn" onClick={handleSignupClick}>
                Signup
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="signupbtn" onClick={handleSignupClick}>
                Login
              </button>
            </>
          )}
        </h5>
      </div>
      <div className="grid-item2">
        {!showSignup ? (
          <div className="myloginbox">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="myform">
              <form>
                <label htmlFor="Email" className="fontfor">
                  Email
                </label>
                <br></br>
                <input
                  className="myinput"
                  type="text"
                  placeholder="Enter Email"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <label htmlFor="Password" className="fontfor">
                  Password
                </label>
                <br></br>
                <input
                  className="myinput"
                  type="Password"
                  placeholder="Enter your Password"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <button type="submit" className="button" onClick={handleloginnext} >
                  Next
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="google-signup">
                  --------Or login using--------
                  <div className="google-icon">
                    <img src={googleIcon} alt="Google" />
                    <p>google</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Signup />
        )}
      </div>
    </div>
  );
}
