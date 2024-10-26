import React from "react";
import logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav className="nav">
          <a href="#">
            <img className="logo_1" src={logo} alt="logo" />
          </a>
          <p className="header_1">Student Portal</p>

          <div className="header_2">
            <p className="header_3">Hello Gabrisa !</p>
            <p className="header_4">class 7, Math + Sience</p>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
