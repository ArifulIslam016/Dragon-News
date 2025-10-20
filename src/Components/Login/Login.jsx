import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthContext/AunContext";

const Login = () => {
  const {name}=use(AuthContext);
  console.log(name)
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="font-bold text-2xl">Login With</h1>
      <button className="btn">
        <FcGoogle />
        Login with google
      </button>
      <button className="btn">
        <FaGithub />
        Login with google
      </button>
    </div>
  );
};

export default Login;
