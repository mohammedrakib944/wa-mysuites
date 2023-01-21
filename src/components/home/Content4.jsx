import React from "react";
import Belun from "../../assets/landing/belun.png";
import Watermark from "../../assets/landing/watermark.png";

// framer motion
import { motion } from "framer-motion";
import { FromBottom, FromLeft, FromRight } from "../universal/Animation";

// BELUN SECTOIN

const Content4 = () => {
  return (
    <div className="bg-[#292929] pt-32 pb-20">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container flex flex-col md:flex-row gap-10 items-center justify-center"
      >
        <motion.p
          variants={FromLeft}
          className="max-w-[600px] text-2xl -mt-32 font-light text-white"
        >
          ¡Déjate sorprender! CDMX tiene la mayor{" "}
          <span className="Italic">oferta de turismo</span> en México + barrios
          llenos de historia, GRAN oferta gastronómica, museos, así como una
          gran diversidad de eventos para cada GUSTO.
        </motion.p>
        <div>
          <motion.div variants={FromRight}>
            <img src={Belun} alt="" />
          </motion.div>
          <motion.div variants={FromBottom}>
            <img
              className="w-[100px] md:w-[200px] -mt-10 pb-10 md:-mt-14 md:-ml-44"
              src={Watermark}
              alt=""
            />
          </motion.div>
          <p className=" text-gray-300 text-sm font-light max-w-[500px] float-right md:-mt-32 md:text-right">
            Quien elige a la Ciudad de México como su destino de viaje o de
            residencia disfrutará de raíces culturales llenas de magia,
            costumbres y grandes tradiciones en una urbe donde contrasta una
            metrópoli con espacios verdes llenos de vida.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Content4;
