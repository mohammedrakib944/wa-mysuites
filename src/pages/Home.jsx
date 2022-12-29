import React from "react";
import Hero from "../components/home/Hero";
import Navbar from "../components/universal/Navbar";
import Topbar from "../components/universal/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
