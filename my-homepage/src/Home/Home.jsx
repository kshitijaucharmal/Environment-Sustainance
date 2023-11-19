import React from "react";
import Header from "./Header.jsx";
import MainBody from "./MainBody.jsx";
import TakeQ from "./TakeQ.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <MainBody />
      <TakeQ />
      <Footer />
    </div>
  );
}
