import Gym from "../../assets/amene/Gym.png";
import { IconsAndTitle, Icons2 } from "./imports";

const IconsSection = () => {
  return (
    <div>
      <div className="container py-[150px]">
        <div className="text-center text-gray-800">
          <p className="text-yellow-800 font-semibold pt-10">
            NUESTRAS AMENIDADES
          </p>
          <p className="text-3xl pt-6 font-semibold">
            NUESTRAS <span className="font-clasic italic">amenidades</span>{" "}
            hacen que disfrutes <br /> de{" "}
            <span className="font-clasic italic">
              {" "}
              exclusivas áreas sociales{" "}
            </span>{" "}
            PENSADAS en tí.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 py-20">
          {IconsAndTitle.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img
                className="hover:scale-105 duration-200"
                src={data.icon}
                alt=""
              />
              <p className="text-yellow-800 uppercase">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <img className="mx-auto" src={Gym} alt="" />
      </div>
      <div className="bg-[#292929] min-h-[200px] -mt-24 q pb-12">
        <div className="h-[200px]"></div>
        <div className="container text-center">
          <p className="text-[#ce89c0] mb-4 mt-10">NUESTROS SERVICIOS</p>
          <h3 className="text-2xl mb-10 text-white font-normal">
            NUESTROS servicios están siempre atu <br /> disposición así como
            NUESTRO personal.
          </h3>
          <div className="max-w-[800px] mx-auto py-14 flex flex-col md:flex-row gap-6 justify-between ">
            {Icons2.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                <img
                  className="hover:scale-105 duration-200"
                  src={data.icon}
                  alt=""
                />
                <p className="text-[#ce89c0] uppercase">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
