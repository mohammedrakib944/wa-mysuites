import { useState, useEffect } from "react";

const Pointer = () => {
  const logMousePosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let pointer = document.getElementById("MousePointer");
    if (y > window.innerHeight) {
      console.alert("hi");
      pointer.style.display = "none";
    }
    console.log(y);
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
  };

  useEffect(() => {
    return () => {
      document.addEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div
      className="w-10 h-10 border -mt-5 -ml-5 border-[#ce89c0] rounded-full grid place-items-center absolute z-50"
      id="MousePointer"
    >
      <div className="w-3 h-3 rounded-full bg-[#df8bce]"></div>
    </div>
  );
};

export default Pointer;
