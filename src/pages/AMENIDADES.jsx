import React from "react";
import Navbar from "../components/universal/Navbar";
import Topbar from "../components/universal/Topbar";
import "../App.css";
import Amenidades from "../components/Amenidades/Amenidades";
import IconsSection from "../components/Amenidades/IconsSection";
import Working from "../components/Amenidades/Working";
import Content5 from "../components/home/Content5";
import Footer from "../components/universal/Footer";

const AMENIDADES = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div>
        <Topbar />
        <Navbar />
      </div>
      <div>
        <Amenidades />
        <IconsSection />
        <Working />
        <Content5 />
        <Footer />
      </div>
    </div>
  );
};

export default AMENIDADES;
