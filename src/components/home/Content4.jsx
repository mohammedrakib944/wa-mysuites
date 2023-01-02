import React from "react";
import Belun from "../../assets/landing/belun.png";
import Watermark from "../../assets/landing/watermark.png";

const Content4 = () => {
  return (
    <div className="bg-[#241e15] pt-32 pb-20">
      <div className="container flex flex-col md:flex-row gap-10 items-center justify-center">
        <p className="max-w-[600px] text-2xl -mt-32 font-light text-white">
          ¡Déjate sorprender! CDMX tiene la mayor{" "}
          <span className="Italic">oferta de turismo</span> en México + barrios
          llenos de historia, GRAN oferta gastronómica, museos, así como una
          gran diversidad de eventos para cada GUSTO.
        </p>
        <div>
          <img src={Belun} alt="" />
          <img
            className="w-[100px] md:w-[200px] -mt-10 pb-10 md:-mt-14 md:-ml-44"
            src={Watermark}
            alt=""
          />
          <p className=" text-gray-300 text-sm font-light max-w-[500px] float-right md:-mt-32 md:text-right">
            Quien elige a la Ciudad de México como su destino de viaje o de
            residencia disfrutará de raíces culturales llenas de magia,
            costumbres y grandes tradiciones en una urbe donde contrasta una
            metrópoli con espacios verdes llenos de vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content4;
