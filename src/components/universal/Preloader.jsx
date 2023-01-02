// import { useEffect } from "react";
import Logo from "../../assets/landing/logo-white.svg";
import "./preloader.css";

const Preloader = () => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 100);
  });

  return (
    <div
      className="w-full h-screen bg-red grid place-items-center bg-[#241e15] fixed z-50"
      id="preloader"
    >
      <div>
        <img src={Logo} alt="" />
        <div className="flex items-center gap-3 mt-8">
          <p className="text-2xl font-clasic text-gray-400 -mt-2">Loading </p>
          <div>
            <div className="rounded-full flex space-x-3 loader">
              <div className="w-2 h-2 bg-[#bf83b3] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#bf83b3] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#bf83b3] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
