import React from "react";
import LogoWhite from "../../assets/landing/logo-white.svg";
import { BsChevronDown, BsArrowUp } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { FromBottom } from "../universal/Animation";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  // bring to top
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  const bringTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#241e15] text-gray-100 pt-12 pb-6">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container"
      >
        <motion.div
          variants={FromBottom}
          className="flex justify-between border-b pb-8 border-[#bf83b3]"
        >
          <ul className="flex flex-col md:flex-row gap-6 lg:gap-10">
            <li>
              <a className="hover:text-[#bf83b3]" href="#">
                TAMAULIPAS 80
              </a>
            </li>
            <li>
              <a className="hover:text-[#bf83b3]" href="#">
                BAJA CALIFORNIA 262
              </a>
            </li>
            <li>
              <a className="hover:text-[#bf83b3]" href="#">
                AMORES 127
              </a>
            </li>
            <li>
              <a className="hover:text-[#bf83b3]" href="#">
                RESERVACIONES
              </a>
            </li>
            <li>
              <a className="hover:text-[#bf83b3]" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 hover:text-[#bf83b3] cursor-pointer">
            ENG
            <span className="text-[#bf83b3]">
              <BsChevronDown />
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={FromBottom}
          className="pt-14 flex items-start justify-between"
        >
          <div>
            <div className="flex gap-4 items-center">
              <p className="border-2 border-[#bf83b3] font-bold rounded-full py-4 text-[#bf83b3] p-3">
                PDF
              </p>
              BROCHURE
            </div>
          </div>
          <div>
            <img src={LogoWhite} alt="" />
          </div>
          <div className="flex gap-4 items-center" onClick={bringTop}>
            SUBIR
            <p className="border-2 border-[#bf83b3] font-bold rounded-full text-[#bf83b3] p-3">
              <BsArrowUp />
            </p>
          </div>
        </motion.div>
        <motion.h1
          variants={FromBottom}
          className="font-clasic font-light text-center mt-14 text-[#bf83b3]"
        >
          +52 55 4204 70 91
        </motion.h1>
        <motion.div
          variants={FromBottom}
          className="text-center py-4 pb-3 mt-6"
        >
          <p>RESERVACIONES</p>
          <p>& DEPARTAMENTOS</p>
        </motion.div>
        <FooterLinks />
      </motion.div>
    </div>
  );
};

export default Footer;
