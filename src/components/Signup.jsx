import React from "react";
import "./signup.css";
import "./login.css";
import logo from "../icons/logo.jpg";
import Login from "./Login";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [CreateEmail, setCreateEmail] = React.useState("");
  const [CreateName, setCreateName] = React.useState("");
  const [CreatePassword, setCreatePassword] = React.useState("");
  const [CreatePhone, setCreatePhone] = React.useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handlesignupnext  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: CreateName,
          phone: CreatePhone,
          email: CreateEmail,
          password: CreatePassword,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        navigate('/home');
        
      } else {
        setErrorMessage(data.message);
         // Clear the success message
      }
    } catch (error) {
      setErrorMessage("Error during signup");
      
    }

    // Remove messages after 3 seconds
    setTimeout(() => {
      setErrorMessage("");
      
    }, 3000);
  };

  return (
    <>
      <div className="signup-container">
        <div className="grid-item2">
          <div className="mysignupbox">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="myform">
              <form>
                <label htmlFor="Name" className="fontfor">
                  Name
                </label>
                <br></br>
                <input
                  className="myinput"
                  type="text"
                  placeholder="Enter Name"
                  value={CreateName}
                  onChange={(e) => {
                    setCreateName(e.target.value);
                  }}
                />
                <label htmlFor="Phone" className="fontfor">
                  Phone
                </label>
                <br></br>
                <input
                  className="myinput"

                  type="text"
                  placeholder="Enter Mobile No."
                  value={CreatePhone}
                  onChange={(e) => {
                    setCreatePhone(e.target.value);
                  }}
                />

                <label htmlFor="Email" className="fontfor">
                  Email
                </label>
                <br></br>
                <input
                  className="myinput"
                  type="text"
                  placeholder="Enter Email"
                  value={CreateEmail}
                  onChange={(e) => {
                    setCreateEmail(e.target.value);
                  }}
                />

                <label htmlFor="Password" className="fontfor">
                  Create Password
                </label>
                <br></br>
                <input
                  className="myinput"
                  type="Password"
                  placeholder="Enter your Password"
                  value={CreatePassword}
                  onChange={(e) => {
                    setCreatePassword(e.target.value);
                  }}
                />

                <button type="submit" className="button" onClick={handlesignupnext} >
                  Next
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
