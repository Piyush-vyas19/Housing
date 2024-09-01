import React from "react";
import "./signup.css";
import "./login.css";
import logo from "../icons/logo.jpg";
import Login from "./Login";
import { useState, useEffect } from "react";

export default function Signup() {
  const [CreateEmail, setCreateEmail] = React.useState("");
  const [CreateName, setCreateName] = React.useState("");
  const [CreatePassword, setCreatePassword] = React.useState("");
  const [CreatePhone, setCreatePhone] = React.useState("");

  return (
    <>
      <div className="signup-container">
        <div className="grid-item2">
          <div className="signupbox">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="form">
              <form>
                <label htmlFor="Name" className="fontfor">
                  Name
                </label>
                <br></br>
                <input
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
                  type="Password"
                  placeholder="Enter your Password"
                  value={CreatePassword}
                  onChange={(e) => {
                    setCreatePassword(e.target.value);
                  }}
                />

                <button type="submit" className="button" >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
