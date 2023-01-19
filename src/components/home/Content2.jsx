import Flower3 from "../../assets/landing/flower3.png";
import { BsArrowUpRight } from "react-icons/bs";
import H1 from "../../assets/landing/h1.png";
import H2 from "../../assets/landing/h2.png";
import H3 from "../../assets/landing/h3.png";

// framer motion
import { motion } from "framer-motion";
import { FromBottom, FromLeft, FromRight } from "../universal/Animation";

// AFTER BIG MIRROR SECTOIN

const Content2 = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[#241e15] pt-6 lg:pt-20"
    >
      <div className="container text-center">
        <br />
        <motion.div variants={FromBottom}>
          <img src={Flower3} className="mx-auto" alt="" />
        </motion.div>
        <br />
        <motion.p variants={FromBottom} className="text-rose-400 pb-4">
          NUESTROS DEPARTAMENTOS
        </motion.p>
        <motion.p
          variants={FromBottom}
          className="text-2xl font-light pt-2 text-white"
        >
          CONOCE <span className="font-clasic italic">nuestros</span>{" "}
          departamentos que están{" "}
        </motion.p>
        <motion.p
          variants={FromBottom}
          className="text-2xl font-light pt-2 text-white"
        >
          <span className="font-clasic italic"> diseñados</span> ESPECIALMENTE
          para tí.
        </motion.p>
        <br />
        <br />
      </div>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container grid gap-3 md:gap-6 md:grid-cols-3 pb-10"
      >
        <motion.div
          variants={FromLeft}
          className="relative group flex justify-center items-center"
        >
          <img
            className="group-hover:opacity-50 duration-200"
            src={H1}
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200 bg-[#ce89c0] grid place-items-center">
            <div className="text-center p-2">
              <p className="text-white">lorem</p>
              <h2 className="py-2 font-clasic">Lorem, ipsum dolor.</h2>
              <a
                href="#"
                className="text-white hover:border-b border-black hover:text-black uppercase"
              >
                Open New Tab
              </a>
            </div>
          </div>
        </motion.div>
        <div className="relative group flex justify-center items-center">
          <img
            className="group-hover:opacity-50 duration-200"
            src={H2}
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200 bg-[#ce89c0] grid place-items-center">
            <div className="text-center p-2">
              <p className="text-white">lorem</p>
              <h2 className="py-2 font-clasic">Lorem, ipsum dolor.</h2>
              <a
                href="#"
                className="text-white hover:border-b border-black hover:text-black uppercase"
              >
                Open New Tab
              </a>
            </div>
          </div>
        </div>
        <motion.div
          variants={FromRight}
          className="relative group flex justify-center items-center"
        >
          <img
            className="group-hover:opacity-50 duration-200"
            src={H3}
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200 bg-[#ce89c0] grid place-items-center">
            <div className="text-center p-2">
              <p className="text-white">lorem</p>
              <h2 className="py-2 font-clasic">Lorem, ipsum dolor.</h2>
              <a
                href="#"
                className="text-white hover:border-b border-black hover:text-black uppercase"
              >
                Open New Tab
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="pt-10 pb-20">
        <button className="mx-auto uppercase w-fit max-h-[60px] text-[14px] md:text-[16px] py-4 px-7 bg-transparent hover:bg-gray-100 hover:text-gray-800 border text-white">
          CONSULTAR DISPONIBILIDAD &nbsp; &nbsp; <BsArrowUpRight />
        </button>
      </div>
    </motion.div>
  );
};

export default Content2;
