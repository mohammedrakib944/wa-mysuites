import { BsArrowUpRight } from "react-icons/bs";
import Border2 from "../../assets/landing/border2.svg";
import "../../App.css";
import GridImg1 from "../../assets/landing/g1.png";
import GridImg2 from "../../assets/landing/g2.png";
import GridImg3 from "../../assets/landing/g3.png";
import GridImg4 from "../../assets/landing/g4.png";
import BigMirror from "../../assets/landing/bigMirror.png";

// framer motion
import { motion } from "framer-motion";
import { FromBottom } from "../universal/Animation";

const Content1 = () => {
  return (
    <div className="setBG w-full min-h-screen">
      <br />
      <br />
      <br />
      <motion.div
        className=" max-w-[1100px] px-3 mx-auto py-20 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Border2})` }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p
          variants={FromBottom}
          className="max-w-[500px] font-light leading-10 text-2xl mt-10"
        >
          TODOS LOS ESPACIOS se han{" "}
          <span className="font-clasic italic">diseñado</span> para ser
          <span className="font-clasic italic">modernos</span>, de lujo &
          confortables, con todas las{" "}
          <span className="font-clasic italic">comodidades + amenidades</span>{" "}
          para una <span className="font-clasic italic">estancia</span> de
          ensueño.
        </motion.p>
        <br />
        <br />
        <button className="bg-white text-rose-900 hover:text-yellow-800 hover:bg-white p-0 text-lg font-light">
          VER SERVICIOS &nbsp;
          <BsArrowUpRight />
        </button>
        <br />
        <br />
        <motion.div
          variants={FromBottom}
          className="mt-10 px-3 grid xl:grid-cols-3 gap-4 "
        >
          <div className="w-full overflow-hidden">
            <img
              className="hover:scale-105 duration-200"
              src={GridImg1}
              alt=""
            />
          </div>
          <div>
            <div className="w-full overflow-hidden">
              <img
                className="hover:scale-105 duration-200"
                src={GridImg2}
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden mt-4">
              <img
                className="hover:scale-105 duration-200"
                src={GridImg4}
                alt=""
              />
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <img
              className="hover:scale-105 duration-200"
              src={GridImg3}
              alt=""
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="grid px-3 lg:grid-cols-2 mt-6 setBGBottom pb-32">
        <div></div>
        <div className="pb-20">
          <p className="max-w-[500px] font-light leading-10 text-2xl mt-10">
            <span className="font-clasic italic">diseñado</span>
            NUESTRA HOSPITALIDAD te{" "}
            <span className="font-clasic italic">ofrece una</span> estancia{" "}
            <span className="font-clasic italic">sostenible</span> con el máximo
            de confort + tranquilidad. Tu vida entre parques & lugares
            emblemáticos.
          </p>
          <br />
          <br />
          <button className="bg-white text-rose-900 hover:text-yellow-800 hover:bg-white p-0 text-lg font-light">
            VER SERVICIOS &nbsp;
            <BsArrowUpRight />
          </button>
        </div>
      </div>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={FromBottom}
        className="bg-[#241e15] relative flex items-top justify-center"
      >
        <img src={BigMirror} className="container -mt-24" alt="" />
      </motion.div>
    </div>
  );
};

export default Content1;
