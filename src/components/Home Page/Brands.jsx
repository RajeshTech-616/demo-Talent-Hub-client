import React from "react";
import logo4 from "../../assets/media/logo4.png";

function Brands() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Trusted by many Innovative Teams
      </h2>
      <img src={logo4} alt="Brand Logo" className="h-20 w-auto" />
    </div>
  );
}

export default Brands;
