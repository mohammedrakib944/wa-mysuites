import React from "react";
import HeroTitleImg from "../../assets/landing/hero-title.png";
import { BsArrowUpRight } from "react-icons/bs";
import Banner from "../../assets/landing/BANNER.png";
import Border from "../../assets/landing/border.svg";
import Rec1 from "../../assets/landing/rac1.png";
import Rec2 from "../../assets/landing/rec2.png";
import Marquee from "react-fast-marquee";

// Framer Motion
import { motion } from "framer-motion";
import { FromLeft, FromBottom, ZoomIn } from "../universal/Animation";

const Hero = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <motion.div
        className="container"
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="uppercase overflow-hidden flex flex-col lg:flex-row items-center gap-6  md:text-6xl font-clasic font-light lg:text-[112px] tracking-widest text-[#333333] mt-6 md:mt-12">
          <motion.div variants={FromBottom}>departamentos</motion.div>
          <motion.div variants={ZoomIn}>
            <img src={HeroTitleImg} alt="" />
          </motion.div>
        </h1>
        <div className="overflow-hidden">
          <motion.h1
            className="uppercase text-center tracking-wide lg:text-left mt-4 font-clasic md:text-6xl lg:text-[110px]  font-light text-[#333333] mb-12"
            variants={FromBottom}
          >
            BOUTIQUE AMUEBLADOS
          </motion.h1>
        </div>
        <motion.div
          variants={FromBottom}
          className="flex flex-col md:flex-row gap-6 md:pt-8 justify-between"
        >
          <p className="lg:text-[21px] max-w-[600px]">
            Te ofrecemos los mejores alojamientos para brindarte una gran
            experiencia en tu próxima visita a Ciudad de México.
          </p>
          <button className="uppercase w-fit max-h-[60px] text-[14px] md:text-[16px] py-4 px-7 bg-white hover:bg-gray-300 border border-gray-600 text-[#333333]">
            ver DEpartamentos &nbsp; &nbsp; <BsArrowUpRight />
          </button>
        </motion.div>
        <br />
        <br />
        <motion.div variants={FromBottom}>
          <img className="mx-auto lg:max-w-[1100px]" src={Banner} alt="" />
        </motion.div>
      </motion.div>
      <div className="bg-[#292929] h-[120px] -mt-24"></div>
      <div className="w-full bg-[#292929]">
        <div className="container">
          <motion.div
            className="relative"
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={Border}
              className="md:max-w-[700px] hidden lg:block mx-auto relative -mt-20"
              alt=""
            />
            <motion.p
              variants={ZoomIn}
              whileInView
              className="lg:w-[500px] md:text-xl pb-4 text-white lg:absolute lg:mt-[-400px] lg:left-[450px]"
            >
              Ubicados en los vecindarios más populares de CDMX
              <span className="font-clasic italic">
                La Condesa & Col. del Valle,
              </span>
              zonas repletas de COLORES + CULTURA & llenas de entretenimiento.
              MY SUITES BY LA CONDESA son unas sofisticadas residencias
              AMUEBLADAS con estilo MODERNO que combinan con lo clásico de la
              ciudad donde sus detalles artísticos le dan un toque cálido y un
              distintivo ÚNICO.
            </motion.p>
          </motion.div>
        </div>
        <motion.div className="container flex justify-center flex-col md:flex-row gap-6 lg:-mt-12">
          <div className="group">
            <motion.div className="w-full overflow-hidden ">
              <img className="hover:scale-105 duration-200" src={Rec1} alt="" />
            </motion.div>
            <p className="text-white text-lg border-b border-white mt-2 pb-2 mb-4 group-hover:text-rose-400">
              La Condesa, su estilo art déco le da un ambiente europeo.
            </p>
          </div>
          <div className="group">
            <div className="w-full overflow-hidden ">
              <img className="hover:scale-105 duration-200" src={Rec2} alt="" />
            </div>
            <p className="text-white text-lg border-b border-white mt-2 pb-2 mb-4 group-hover:text-rose-400">
              Col. del Valle, barrio céntrico, tranquilo y muy bien conectado.
            </p>
          </div>
        </motion.div>
        <div className="py-20">
          <Marquee
            className=""
            speed={100}
            pauseOnHover={false}
            gradient={false}
          >
            <p className="text-[46px] xl:text-[150px] text-rose-400 font-clasic">
              <span className="italic">Welcome</span> &nbsp; Bienvenidos
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
