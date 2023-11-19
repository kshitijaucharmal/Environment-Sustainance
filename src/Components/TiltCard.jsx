import React, { useRef } from "react";
import "./TiltCard.css";
import Logo1 from "../assets/personal.svg";
import Logo2 from "../assets/carbon.svg";
import Logo3 from "../assets/suggestion.svg";

const TiltCard = (props) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = -(e.clientY - top - height / 2) / 10;

    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = (props) => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="cardm"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        <img
          src={props.svgimg == 1 ? Logo1 : props.svgimg == 2 ? Logo2 : Logo3}
        />
        <h2>{props.heading}</h2>
        <p>{props.subtext}</p>
      </div>
    </div>
  );
};

export default TiltCard;
