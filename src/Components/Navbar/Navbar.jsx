import React, { use } from "react";
import { Link, NavLink } from "react-router";
import usrImg from "../../assets/user.png";
import { AuthContext } from "../../AuthContext/AunContext";
import Loading from "../Loading";

const Navbar = () => {
  const { user, logOut,loading } = use(AuthContext);
  const handleLogin = () => {
    logOut();
  };
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="flex justify-around items-center">
      <section></section>
      <section className="flex gap-4 items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </section>
      <section className="flex items-center gap-3">
        <img className="rounded-full max-w-[80px]" src={`${user?.photoURL? user.photoURL:usrImg}`} alt="Iamge of user profile" />
        {user ? (
          <button className="btn btn-primary px-10 py-1" onClick={handleLogin}>LogOut</button>
        ) : (
          <Link to={"/auth/login"}>
            {" "}
            <button className="btn btn-primary px-10 py-1">Login</button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default Navbar;
