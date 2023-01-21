import R1 from "../../assets/landing/R1.png";
import R2 from "../../assets/landing/R2.png";
import R3 from "../../assets/landing/R3.png";

import "../../App.css";

// framer motion
import { motion } from "framer-motion";
import { FromBottom, FromLeft, FromRight } from "../universal/Animation";

// AFTER PELLOW,THREE BED SECTOIN

const Content3 = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      className="BgBorder"
    >
      <div className="container">
        <div className="text-center pt-32 pb-20 ">
          <motion.p variants={FromBottom} className="text-yellow-700">
            E X PERIENCIAS CDM X
          </motion.p>
          <br />
          <motion.h3 variants={FromBottom} className="text-2xl font-light">
            EXPLORA una de las{" "}
            <span className="font-clasic italic">ciudades</span> + solicitadas
            para viajar,
          </motion.h3>
          <motion.h3 variants={FromBottom} className="text-2xl font-light">
            VIVIR & DISFRUTAR de todo México.
          </motion.h3>
        </div>
        <motion.div
          variants={FromBottom}
          className="mt-10 grid gap-6 md:grid-cols-3 max-w-[1100px] mx-auto"
        >
          <div className="relative rounded-full overflow-hidden group">
            <img src={R1} alt="" />
            <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200 bg-[#ce89c0] grid place-items-center">
              <div className="text-center p-2">
                <p className="text-white">CDMX</p>
                <h2 className="py-2 font-clasic">Pasio de la Reforma</h2>
                <a
                  href="#"
                  className="text-white hover:border-b border-black hover:text-black uppercase"
                >
                  Open New Tab
                </a>
              </div>
            </div>
          </div>
          <div className="relative rounded-full overflow-hidden group">
            <img src={R2} alt="" />
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
          <div className="relative rounded-full overflow-hidden group">
            <img src={R3} alt="" />
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
        </motion.div>
      </div>
      <div className="w-full h-[300px] bg-[#292929] -mt-52"></div>
    </motion.div>
  );
};

export default Content3;
