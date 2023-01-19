import React from "react";
import LogoDark from "../../assets/landing/logo-dark.svg";
import { RiMenu3Fill } from "react-icons/ri";
import "../../App.css";
import NavModal from "./NavModal";
import NavForm from "./NavForm";
import NavDropdownCard from "./navcards/NavDropdownCard";
import "../../App.css";

import { For1, For2, For3 } from "./navcards/Data";

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
      <NavForm />
      <div className="w-full h-screen fixed left-0 navmodal" id="navmodal">
        <NavModal />
      </div>
      <div className="flex flex-col items-center md:flex-row gap-6 justify-between py-3">
        <div>
          <img className="w-[100px] md:w-[130px]" src={LogoDark} alt="" />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-6">
          <div className="flex gap-6 text-[12px] text-gray-600 md:text-[15px]">
            <div className="hover:text-gray-900 cursor-pointer group">
              <div className="relative">
                TAMAULIPAS 80
                <div className="w-6 h-6 rotate-45 top-14 left-[40%] absolute bg-[#f3b3e6] hidden group-hover:block"></div>
              </div>
              <div
                className="w-full bg-transparent rounded-lg fixed left-0 hidden group-hover:block"
                id="NavMenuCards"
              >
                <div className="max-w-fit  mx-auto p-16 flex gap-6 flex-col lg:flex-row justify-between rounded-2xl bg-[#f3b3e6] mt-10">
                  {For1.map((data, index) => (
                    <NavDropdownCard key={index} data={data} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hover:text-gray-900 cursor-pointer group">
              <div className="relative">
                BAJA CALIFORNIA 262
                <div className="w-6 h-6 rotate-45 top-14 left-[40%] absolute bg-[#f3b3e6] hidden group-hover:block"></div>
              </div>
              <div
                className="w-full bg-transparent rounded-lg fixed left-0 hidden group-hover:block"
                id="NavMenuCards"
              >
                <div className="max-w-fit  mx-auto p-16 flex gap-6 flex-col lg:flex-row justify-between rounded-2xl bg-[#f3b3e6] mt-10">
                  {For2.map((data, index) => (
                    <NavDropdownCard key={index} data={data} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hover:text-gray-900 cursor-pointer group">
              <div className="relative">
                AMORES 127
                <div className="w-6 h-6 rotate-45 top-14 left-[40%] absolute bg-[#f3b3e6] hidden group-hover:block"></div>
              </div>
              <div
                className="w-full bg-transparent rounded-lg fixed left-0 hidden group-hover:block"
                id="NavMenuCards"
              >
                <div className="max-w-fit  mx-auto p-16 flex gap-6 flex-col lg:flex-row justify-between rounded-2xl bg-[#f3b3e6] mt-10">
                  {For3.map((data, index) => (
                    <NavDropdownCard key={index} data={data} />
                  ))}
                </div>
              </div>
            </div>
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
