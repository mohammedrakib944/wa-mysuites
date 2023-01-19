import Title from "../../assets/landing/title.svg";
import { BsArrowUpRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { FromBottom } from "../universal/Animation";

// FORM SECTION

const Content5 = () => {
  return (
    <div className="px-4">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={FromBottom}
      >
        <img className="mx-auto pt-32 pb-20" src={Title} alt="" />
      </motion.div>
      <div className="max-w-[650px] pb-32 mx-auto">
        <form>
          <input
            type="text"
            className="w-full placeholder-yellow-700 mb-10 border-b-2 border-yellow-700/50 py-2 outline-none"
            placeholder="NOMBRE COMPLETO"
          />
          <input
            type="text"
            className="w-full placeholder-yellow-700 mb-10 border-b-2 border-yellow-700/50 py-2 outline-none"
            placeholder="TELÉFONO"
          />
          <input
            type="text"
            className="w-full placeholder-yellow-700 mb-4 border-b-2 border-yellow-700/50 py-2 outline-none"
            placeholder="CORREO ELECTRÓNICO"
          />

          <div className="flex items-center gap-6 mt-10">
            <input className="scale-150" type="radio" />
            <p>
              ACEPTO LAS CONDICIONES DE l TRATAMIENTO de INFORMACI Ó N PERSONAL
            </p>
          </div>

          <button className="uppercase w-fit max-h-[60px] mx-auto mt-20 text-[14px] md:text-[16px] py-4 px-7 bg-white hover:bg-yellow-900/20 border border-yellow-700 text-yellow-700">
            ver DEpartamentos &nbsp; &nbsp; <BsArrowUpRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Content5;
