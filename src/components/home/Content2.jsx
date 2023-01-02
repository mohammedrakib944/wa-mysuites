import Flower3 from "../../assets/landing/flower3.png";
import { BsArrowUpRight } from "react-icons/bs";
import H1 from "../../assets/landing/h1.png";
import H2 from "../../assets/landing/h2.png";
import H3 from "../../assets/landing/h3.png";

const Content2 = () => {
  return (
    <div className="bg-[#241e15] pt-6 lg:pt-20">
      <div className="container text-center">
        <br />
        <img src={Flower3} className="mx-auto" alt="" />
        <br />
        <p className="text-rose-400 pb-4">NUESTROS DEPARTAMENTOS</p>
        <p className="text-2xl font-light pt-2 text-white">
          CONOCE <span className="font-clasic italic">nuestros</span>{" "}
          departamentos que están{" "}
        </p>
        <p className="text-2xl font-light pt-2 text-white">
          <span className="font-clasic italic"> diseñados</span> ESPECIALMENTE
          para tí.
        </p>
        <br />
        <br />
      </div>
      <div className="container grid gap-3 md:gap-6 md:grid-cols-3 pb-10">
        <div className="relative group flex justify-center items-center">
          <img
            className="group-hover:opacity-50 duration-200"
            src={H1}
            alt=""
          />
          <p className="w-contain text-white text-xl top-[50%] absolute hidden group-hover:block">
            AMORES 127
          </p>
        </div>
        <div className="relative group flex justify-center items-center">
          <img
            className="group-hover:opacity-50 duration-200"
            src={H2}
            alt=""
          />
          <p className="w-contain text-white text-xl top-[50%] absolute hidden group-hover:block">
            BAJA CALIFORNIA 262
          </p>
        </div>
        <div className="relative group flex justify-center items-center">
          <img
            className="group-hover:opacity-50 duration-200"
            src={H3}
            alt=""
          />
          <p className="w-contain text-white text-xl top-[50%] absolute hidden group-hover:block">
            AMORES 127
          </p>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <button className="mx-auto uppercase w-fit max-h-[60px] text-[14px] md:text-[16px] py-4 px-7 bg-transparent hover:bg-gray-100 hover:text-gray-800 border text-white">
          CONSULTAR DISPONIBILIDAD &nbsp; &nbsp; <BsArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Content2;
