import React from "react";
import Hands from "../assets/Hands.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="head-Left">
        <h1>
          Offset your carbon footprint
          <br />
          with ease
        </h1>
        <p>
          Our website helps you/suggests you how to reduce your carbon emissions
          with a twist
        </p>
      </div>
      <img src={Hands} alt="Hands" />
    </div>
  );
}
