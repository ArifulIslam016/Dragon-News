import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AunContext";

const Register = () => {
const [error,setError]=useState()
  const { setUser, createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.PhotoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email,password).then(result=>{
        setError("")
     }).catch(err=>setError(err.message))
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name Section */}
              <label className="label text-lg text-black font-semibold">
                Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              {/* Photo Url Section */}
              <label className="label text-lg text-black font-semibold">
                Photo Url
              </label>
              <input
                type="text"
                className="input"
                placeholder="Paste Your Photo Url"
                name="PhotoUrl"
              />
              {/* Email Section */}
              <label className="label text-lg text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              {/* Password Section */}
              <label className="label text-lg text-black font-semibold"></label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Alredy Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-secondary">
              Login
            </Link>
            {error && <p className="text-red-600">{error}</p>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
