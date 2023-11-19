import React from "react";
import "./MainBody.css";
import TiltCard from "../Components/TiltCard.jsx";

export default function MainBody() {
  return (
    <div className="mainBody">
      <h1>Discover your Carbon Footprint</h1>
      <div className="outer">
        <div className="inner">
          <TiltCard
            heading="Receive Personalized Recommendations"
            subtext="Take our carbon footprint quiz to understand your
            impact on the environment."
            svgimg="1"
          />
          <TiltCard
            heading="Track Your Carbon Footprint"
            subtext="Monitor your carbon footprint reduction journey with
            our easy-to-use tools."
            svgimg="2"
          />
          <TiltCard
            heading="Learn more about sustainable practices"
            subtext="Explore our resources and tips to help you live a more
            eco-friendly lifestyle."
            svgimg="3"
          />
        </div>
      </div>
    </div>
  );
}
