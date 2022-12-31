import Flower3 from "../../assets/landing/flower3.png";

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
    </div>
  );
};

export default Content2;
