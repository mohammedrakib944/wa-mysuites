import R1 from "../../assets/landing/R1.png";
import R2 from "../../assets/landing/R2.png";
import R3 from "../../assets/landing/R3.png";

import "../../App.css";

const Content3 = () => {
  return (
    <div className="BgBorder">
      <div className="container">
        <div className="text-center pt-32 pb-20 ">
          <p className="text-yellow-700">E X PERIENCIAS CDM X</p>
          <br />
          <h3 className="text-2xl font-light">
            EXPLORA una de las{" "}
            <span className="font-clasic italic">ciudades</span> + solicitadas
            para viajar,
          </h3>
          <h3 className="text-2xl font-light">
            VIVIR & DISFRUTAR de todo México.
          </h3>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-[1100px] mx-auto">
          <img src={R1} alt="" />
          <img src={R2} alt="" />
          <img src={R3} alt="" />
        </div>
      </div>
      <div className="w-full h-[300px] bg-[#241e15] -mt-52"></div>
    </div>
  );
};

export default Content3;
