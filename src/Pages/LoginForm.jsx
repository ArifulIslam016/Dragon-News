import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AunContext";

const Login = () => {
  const [error, seterror]=useState('')
  const location=useLocation();
const navigate=useNavigate();  
  const { signIN } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIN(email, password).then(()=>{
      {location.state? navigate(location.state):navigate('/')}
      
    }).catch(err=>{
      const code=err.code;
      const message=err.message;
      seterror(message)
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">
          Login your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label text-lg text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label text-lg text-black font-semibold">
                Password
              </label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-secondary">
              Register
            </Link>
          </p>
          {
            error && <p className="text-red-500">{error}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
