import { RxCookie, RxCross2 } from "react-icons/rx";

const Cookies = () => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("cookies").style.display = "block";
    }, 2000);
  });

  function hiddenCookieDialog() {
    document.getElementById("cookies").style.display = "none";
  }

  return (
    <div
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 hidden"
      id="cookies"
    >
      <div className="bg-[#292929] p-[28px] border border-gray-100/10 rounded-lg lg:rounded-full flex flex-col gap-4 lg:flex-row items-center">
        <div className="flex items-center  gap-4">
          <div className="text-[50px] text-white">
            <RxCookie />
          </div>
          <p className="font-regular text-lg text-white ">
            Este sitio utiliza <span className="text-yellow-600">Cookies</span>{" "}
            para mejorar tu experiencia.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a className="text-semibold text-white underline px-4" href="#">
            Preferencias
          </a>
          <button
            className="bg-[#C4C4C4] min-w-[160px] p-[24px] text-[13px] text-[#333333] font-bold"
            onClick={hiddenCookieDialog}
          >
            Rechazar todo
          </button>
          <button
            className="bg-[#917145] min-w-[155px]  p-[24px] font-normal"
            onClick={hiddenCookieDialog}
          >
            Aceptar todo
          </button>
        </div>
        &nbsp; &nbsp;
        <button
          onClick={hiddenCookieDialog}
          className="max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] text-[18px] font-bold bg-gray-300 text-gray-800"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Cookies;
