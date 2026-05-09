
import React, { useEffect, useState } from "react";
import './Loading.css'; 
function Loading() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-1000 ${
        hide
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div className="text-center">
        
        {/* Small loading line */}
        <div className="w-32 h-[2px] bg-gray-800 mx-auto overflow-hidden mb-8 rounded-full">
          <div className="h-full w-full bg-white animate-loader"></div>
        </div>

        {/* Name */}
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-[8px] uppercase animate-fadeUp">
          Abhishek Sharma
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-lg tracking-[6px] mt-4 uppercase animate-fadeUp delay-300">
          Frontend Developer
        </p>
      </div>
    </div>
  );
}

export default Loading;
   
