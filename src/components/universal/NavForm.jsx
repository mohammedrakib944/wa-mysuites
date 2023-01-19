import React from "react";
import { RxCross2 } from "react-icons/rx";
import Content5 from "../home/Content5";
import "../../App.css";

export const showNavContractFrom = () => {
  document.getElementById("navform").classList.remove("translateByX");
};

const hideNavContractFrom = () => {
  document.getElementById("navform").classList.add("translateByX");
};

const NavForm = () => {
  return (
    <div
      className="w-full h-screen z-50 fixed duration-200 top-0 left-0 translateByX"
      id="navform"
    >
      <div className="lg:flex h-screen justify-between">
        <div className="lg:w-[50%] bg-black/20 flex lg:justify-end">
          <div
            className="w-[60px] h-[60px] bg-[#ca7dbb] grid place-items-center text-2xl text-white"
            onClick={hideNavContractFrom}
          >
            <RxCross2 />
          </div>
        </div>
        <div className="w-full lg:w-[50%] bg-white">
          <Content5 />
        </div>
      </div>
    </div>
  );
};

export default NavForm;
