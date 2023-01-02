import React from "react";
import Content1 from "../components/home/Content1";
import Content2 from "../components/home/Content2";
import Content3 from "../components/home/Content3";
import Content4 from "../components/home/Content4";
import Content5 from "../components/home/Content5";
import Hero from "../components/home/Hero";
import Footer from "../components/universal/Footer";
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
      <Content3 />
      <Content4 />
      <Content5 />
      <Footer />
    </div>
  );
};

export default Home;
