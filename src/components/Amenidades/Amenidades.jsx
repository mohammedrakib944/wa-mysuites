import Img1 from "../../assets/amene/img1.png";

const Amenidades = () => {
  return (
    <div className="BgBorder">
      <div className="container text-gray-800">
        <div className="text-right max-w-[1100px] py-16">
          <p className="text-[#ce89c0]">INICIO /</p>
          <h3 className="mt-4 text-3xl">AMENIDADES</h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold">ESPACIOS</h1>
          <h1 className="ml-14 my-2 font-semibold">
            que <span className="italic font-clasic">se adaptan a</span>
          </h1>
          <h1 className="ml-8 font-semibold">
            tu estilo de <span className="italic font-clasic ">vida.</span>
          </h1>
          <br />
          <br />
        </div>
      </div>
      <div>
        <img className="w-full mt-10" src={Img1} alt="" />
      </div>
      <div className="bg-[#292929]">
        <div className="container">
          <div className="max-w-[700px] py-[170px] float-right">
            <p className="font-semibold text-3xl text-white">
              TODOS LOS ESPACIOS se han{" "}
              <span className="font-clasic italic">diseñado</span> para ser
              modernos, de lujo & confortables, con todas las comodidades +
              amenidades para una estancia de ensueño.
            </p>
          </div>
        </div>
        <marquee behavior="smooth" direction="">
          <p className="text-[46px] xl:text-[100px] text-[#ce89c0] font-clasic">
            <span className="italic">Welcome</span> &nbsp; Bienveni
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default Amenidades;
