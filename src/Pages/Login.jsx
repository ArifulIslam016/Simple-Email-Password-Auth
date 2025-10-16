import {  sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";
import { FaAllergies } from "react-icons/fa";

const Login = () => {
    const emailRef=useRef()
    const [error, setError]=useState()
  const handleLogin = (e) => {
    setError('')
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const isChecked = e.target.cheeckBox.checked;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(!result.user.emailVerified){
           
            sendEmailVerification(result.user).then(()=> {alert("Please Verify Your Email")
              return
            }).catch(errr=>setError(errr.message))
        }
      }).catch((err) => {
        console.log(err);
        setError(err.message)
      });
      
  };
  const handlePassReset=()=>{
const ResPassword=emailRef.current.value;
console.log(ResPassword)

sendPasswordResetEmail(auth, ResPassword).then(()=>alert("Password reset email send"))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  ref={emailRef}
                />
                <label className="label">Password</label>

                <div className="relative">
                  <input
                    // type={showPassStatus ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  {/* {showPassStatus ? (
                    <FaEyeSlash
                    onClick={handleShowPassword}
                    className="absolute top-4 right-7"
                    ></FaEyeSlash>
                    ) : (
                        <FaEye
                        onClick={handleShowPassword}
                        className="absolute top-4 right-7"
                        ></FaEye>
                        )} */}
                </div>
                        <div onClick={handlePassReset}>
                          <a className="link link-hover">Forgot password?</a>
                        </div>
                <label className="label">
                  <input
                    type="checkbox"
                    name="cheeckBox"
                    className="checkbox"
                  />
                  Terms and policy
                </label>
                <h4>
                  You Dont have Acount?{" "}
                  <Link to={"/Register"} className="text-blue-700 underline">
                    Register Now
                  </Link>
                </h4>
                <button className="btn btn-neutral mt-4">Login Now</button>
              </fieldset>
              {
                error &&  <p>{error}</p>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
