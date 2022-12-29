import React from "react";
import HeroTitleImg from "../../assets/landing/hero-title.png";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
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
    </div>
  );
};

export default Hero;
