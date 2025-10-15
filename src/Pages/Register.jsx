import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";

const Register = () => {
    const [Error, setError]=useState();
    const [sucessStatus, setStatus]=useState(false)
  const handleLogin = (e) => {
    // status of sucess and error here reinitilazided
    setError('')
    setStatus(false)
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
          const SpeacialCharecterSet=/^(?=.*[!@#$&]).+$/

    if(!SpeacialCharecterSet.test(password)
){
    setError("Password must be strong by using special charecter")
    return;
}
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) =>{ console.log(userInfo)
        setStatus(true)
        e.target.reset()
      })
      .catch((err) => setError(err.message));

    };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register Now</button>
              </fieldset>
              {
                sucessStatus && <p className="text-green-500">Acount Created Successfully</p>
              }
              {
                Error && <h6 className="text-red-500">{Error}</h6>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
