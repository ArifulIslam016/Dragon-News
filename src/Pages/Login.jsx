import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
        
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">Login your account</h1>
        <div className="card-body">
         <form>
             <fieldset className="fieldset">
            <label className="label text-lg text-black font-semibold">Email</label>
            <input type="email" className="input" placeholder="Email" name="email" />
            <label className="label text-lg text-black font-semibold">Password</label>
            <input type="password" className="input" placeholder="Password" name="password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
         </form>
         <p>
            Dont’t Have An Account ? <Link to={'/auth/register'} className="text-secondary">Register</Link>
         </p>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
