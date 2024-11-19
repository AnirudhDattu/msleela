import React from "react";
import timebg2 from "../assets/timebg2.png"; // Replace with the path to your image

const Time2 = () => {
  return (
    <div className="flex flex-col items-center py-12 h-screen bg-black">
      {/* Centered Image */}
      <img
        src={timebg2}
        alt="Book"
        className="w-full max-w-[900px] h-auto object-cover"
      />

      {/* Bold Text Below Image */}
      <p className="mt-9 mx-52 text-[30px] tracking-widest font-semibold font-play text-center text-white">
        Timeless is a luxury jewelry e-commerce website designed to deliver an
        elegant, user-friendly shopping experience.
      </p>
    </div>
  );
};

export default Time2;
