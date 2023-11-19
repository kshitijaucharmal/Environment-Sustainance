import React from "react";
import Logo from "./assets/Logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-Left">
        <div className="logo-container">
          <img src={Logo} alt="" className="logo11" />
        </div>
        <div className="team-name">Green Choices</div>
      </div>
      <div className="nav-Right">
        <button to="/quiz">
          <span>Take the Quiz</span>
        </button>
      </div>
    </div>
  );
}
