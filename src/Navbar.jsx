import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-Left">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="" className="logo11" />
          </Link>
        </div>
        <Link to="/" className="team-name">
          Green Choices
        </Link>
      </div>
      <div className="nav-Right">
        <Link to="/Quiz">
          <button to="/quiz">
            <span>Take the Quiz</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
