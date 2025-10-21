import React from "react";
import logoImg from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <img className="max-w-[465px] px-4 ml-5 md:ml-0 md:px-0" src={logoImg} alt="Image of Dragon News" />
      <p className="">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "MMMM, d, y")}</p>
    </div>
  );
};

export default Header;
