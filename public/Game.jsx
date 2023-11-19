import React from "react";

var ind = require("./index.html");
class Game extends React.Component {
  render() {
    return <iframe src={ind}></iframe>;
  }
}
export default Game;
