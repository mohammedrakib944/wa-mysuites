import React from "react";
import Content1 from "../components/home/Content1";
import Content2 from "../components/home/Content2";
import Hero from "../components/home/Hero";
import Navbar from "../components/universal/Navbar";
import Topbar from "../components/universal/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Content1 />
      <Content2 />
    </div>
  );
};

export default Home;
