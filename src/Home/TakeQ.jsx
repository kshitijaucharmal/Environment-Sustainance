import React from "react";
import { Link } from "react-router-dom";
import "./TakeQ.css";

export default function TakeQ() {
  return (
    <div className="parallax" data-speed="0.5">
      <div className="Overl">
        <h2>Ready for the Quiz?</h2>
        <Link to="/Quiz">
          <button>
            <span>Take the Quiz</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
