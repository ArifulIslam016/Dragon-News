import React from "react";
import logoImg from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <img className="max-w-[471px]" src={logoImg} alt="Image of Dragon News" />
      <p className="">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "MMMM, d, y")}</p>
    </div>
  );
};

export default Header;
