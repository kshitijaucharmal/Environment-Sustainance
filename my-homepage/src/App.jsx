import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home/Home.jsx";
import Quiz from "./Quiz/Quiz.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Navbar />
      <Quiz />
    </div>
  );
}