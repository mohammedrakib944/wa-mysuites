import React from "react";
import HeroTitleImg from "../../assets/landing/hero-title.png";
import { BsArrowUpRight } from "react-icons/bs";
import Banner from "../../assets/landing/BANNER.png";
import Border from "../../assets/landing/border.svg";
import Rec1 from "../../assets/landing/rac1.png";
import Rec2 from "../../assets/landing/rec2.png";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <h1 className="uppercase flex flex-col lg:flex-row items-center gap-6 font-clasic md:text-6xl lg:text-8xl font-light text-gray-600 mt-6 md:mt-12">
          departamentos
          <div>
            <img src={HeroTitleImg} alt="" />
          </div>
        </h1>

        <h1 className="uppercase text-center lg:text-left mt-4 font-clasic md:text-6xl lg:text-8xl  font-light text-gray-600 mb-12">
          BOUTIQUE AMUEBLADOS
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:pt-8 justify-between">
          <p className="lg:text-xl max-w-[500px]">
            Te ofrecemos los mejores alojamientos para brindarte una gran
            experiencia en tu próxima visita a Ciudad de México.
          </p>
          <button className="uppercase w-fit max-h-[60px] text-[14px] md:text-[16px] py-4 px-7 bg-white hover:bg-gray-300 border border-gray-600 text-gray-600">
            ver DEpartamentos &nbsp; &nbsp; <BsArrowUpRight />
          </button>
        </div>
        <br />
        <br />
        <img className="mx-auto lg:max-w-[1100px]" src={Banner} alt="" />
      </div>
      <div className="bg-[#241e15] h-[120px] -mt-24"></div>
      <div className="w-full bg-[#241e15]">
        <div className="container">
          <div className="relative">
            <img
              src={Border}
              className="md:max-w-[700px] hidden lg:block mx-auto relative -mt-20"
              alt=""
            />
            <p className="lg:w-[500px] md:text-xl py-6 text-white lg:absolute lg:mt-[-400px] lg:left-[450px]">
              Ubicados en los vecindarios más populares de CDMX
              <span className="font-clasic italic">
                La Condesa & Col. del Valle,
              </span>
              zonas repletas de COLORES + CULTURA & llenas de entretenimiento.
              MY SUITES BY LA CONDESA son unas sofisticadas residencias
              AMUEBLADAS con estilo MODERNO que combinan con lo clásico de la
              ciudad donde sus detalles artísticos le dan un toque cálido y un
              distintivo ÚNICO.
            </p>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row gap-6 lg:-mt-12">
          <div className="group">
            <div className="w-full overflow-hidden ">
              <img className="hover:scale-110 duration-200" src={Rec1} alt="" />
            </div>
            <p className="text-white text-lg border-b border-white mt-2 pb-2 mb-4 group-hover:text-rose-400">
              La Condesa, su estilo art déco le da un ambiente europeo.
            </p>
          </div>
          <div className="group">
            <div className="w-full overflow-hidden ">
              <img className="hover:scale-110 duration-200" src={Rec2} alt="" />
            </div>
            <p className="text-white text-lg border-b border-white mt-2 pb-2 mb-4 group-hover:text-rose-400">
              Col. del Valle, barrio céntrico, tranquilo y muy bien conectado.
            </p>
          </div>
        </div>
        <div className="py-20">
          <marquee behavior="smooth" direction="">
            <p className="text-[46px] xl:text-[100px] text-rose-400 font-clasic">
              <span className="italic">Welcome</span> &nbsp; Bienveni
            </p>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
