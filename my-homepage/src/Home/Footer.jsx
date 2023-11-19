// Footer.js

import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="Your Logo" />
        <h1>Hack Titans</h1>
      </div>
    </footer>
  );
};

export default Footer;
