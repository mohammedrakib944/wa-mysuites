import React from "react";
import LogoDark from "../../assets/landing/logo-dark.svg";
import { RiMenu3Fill } from "react-icons/ri";
import "../../App.css";
import NavModal from "./NavModal";

export const closeNavModal = () => {
  document.getElementById("navmodal").classList.remove("toggleModal");
  window.scrollTo(0, 0);
};

const Navbar = () => {
  const OpenNavModal = () => {
    document.getElementById("navmodal").classList.add("toggleModal");
  };

  return (
    <div className="container">
      <div className="w-full h-screen fixed left-0 navmodal" id="navmodal">
        <NavModal />
      </div>
      <div className="flex flex-col items-center md:flex-row gap-6 justify-between py-3">
        <div>
          <img className="w-[100px] md:w-[130px]" src={LogoDark} alt="" />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6">
          <div className="flex gap-6 text-[12px] text-gray-600 md:text-[15px]">
            <p className="hover:text-gray-900 cursor-pointer">TAMAULIPAS 80</p>
            <p className="hover:text-gray-900 cursor-pointer">
              BAJA CALIFORNIA 262
            </p>
            <p className="hover:text-gray-900 cursor-pointer">AMORES 127</p>
          </div>
          <div className="flex gap-3">
            <button className="font-light">RESERVER</button>
            <button
              onClick={OpenNavModal}
              className="text-xl hover:bg-[#f7e0f2] bg-white text-[#ce89c0] border border-[#ce89c0]"
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
