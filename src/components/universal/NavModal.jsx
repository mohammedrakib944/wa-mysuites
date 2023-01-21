import LogoWhite from "../../assets/landing/logo-white.svg";
import { closeNavModal } from "./Navbar";
import { RxCross2 } from "react-icons/rx";
import { FiPhoneCall } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import NavModalImg from "../../assets/landing/navmodal.svg";
import "../../App.css";

import { showNavContractFrom } from "./NavForm";
import { Link } from "react-router-dom";

const NavModal = () => {
  return (
    <div className="bg-[#292929] w-full h-screen md:setBGBottom">
      <div className="container flex flex-col items-center md:flex-row gap-6 justify-between pt-10">
        <div className="flex items-center gap-2 text-white">
          <FiPhoneCall />
          +52 55 33123123
        </div>

        <div className="flex flex-col items-center md:flex-row gap-6">
          <div className="flex gap-3">
            <button className="font-light" onClick={showNavContractFrom}>
              SOLICITAR LLAMADA
            </button>
            <button
              onClick={closeNavModal}
              className="text-xl hover:bg-[#f7e0f2] bg-transparent text-[#ce89c0] border border-[#ce89c0]"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row items-center  justify-between">
        <div>
          <img className="hidden md:block" src={NavModalImg} alt="" />
        </div>
        <div>
          <div>
            <img
              className="w-[100px] md:w-[200px] mt-10 md:mt-0"
              src={LogoWhite}
              alt=""
            />
          </div>
          <ul className="text-xl text-gray-400 font-clasic font-light flex flex-col gap-4 mt-10">
            <li>
              <Link to="/amenidades" className="hover:text-[#ce89c0]" href="#">
                AMENIDADES
              </Link>
            </li>
            <li>
              <a className="hover:text-[#ce89c0]" href="#">
                DEPARTAMENTOS
              </a>
            </li>
            <li>
              <a className="hover:text-[#ce89c0]" href="#">
                Galería
              </a>
            </li>
            <li>
              <a className="hover:text-[#ce89c0]" href="#">
                Experiencias
              </a>
            </li>
            <li>
              <a className="hover:text-[#ce89c0]" href="#">
                Nosotros
              </a>
            </li>
            <li>
              <a className="hover:text-[#ce89c0]" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="py-10 md:py-0 md:min-h-[300px]">
          <a href="#" className="uppercase text-[#ce89c0] text-2xl">
            ir a página principal
          </a>
        </div>
      </div>

      <div className="container items-center justify-between md:pt-14 text-sm text-gray-400">
        <ul className="flex gap-2 lg:gap-10">
          <li>2023 MY SUITES BY LA CONDESA</li>
          <li>
            <a className="hover:text-[#bf83b3]" href="#">
              AVISO DE PRIVACIDAD
            </a>
          </li>
          <li>
            <a className="hover:text-[#bf83b3]" href="#">
              DEPARTAMENTOS BASAIK
            </a>
          </li>
        </ul>
        <div className="mt-10 flex justify-center">
          <a href="#">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
