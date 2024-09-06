import React from "react";
import Logo from "../../img/logo.png";
import Bg from "../images/bg.png"
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* <img src={Logo} alt="" /> */}
      <img  className="tt" src={Bg} alt="" />
      
    </div>
  );
};

export default LogoSearch;
