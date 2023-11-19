import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home/Home.jsx";
import Quiz from "./Quiz/Quiz.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

// Either comment
// #<Navbar/>
// #<Home/>

// or

// #<Navbar/>
// #<Quiz/>

// to preview what a page looks like
