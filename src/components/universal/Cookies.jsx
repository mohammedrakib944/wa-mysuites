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
      <div className="bg-[#241e15] py-4 px-6 border border-gray-100/50 rounded-lg lg:rounded-full flex flex-col lg:flex-row items-center gap-3">
        <div className="flex items-center  gap-4">
          <div className="text-[50px] text-white">
            <RxCookie />
          </div>
          <p className="font-regular text-lg text-white ">
            Este sitio utiliza <span className="text-yellow-600">Cookies</span>{" "}
            para mejorar tu experiencia.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-500 " onClick={hiddenCookieDialog}>
            Rechazar todo
          </button>
          <button className="bg-yellow-600 " onClick={hiddenCookieDialog}>
            Aceptar todo{" "}
          </button>
        </div>
        <button
          onClick={hiddenCookieDialog}
          className="min-w-[50px] min-h-[50px] text-[18px] bg-gray-300 text-gray-800"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Cookies;
