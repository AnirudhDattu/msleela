import React from "react";
import ms1 from "../assets/ms1.png"; // Replace with the path to your image

const Ms2 = () => {
  return (
    <div className="flex flex-col items-center py-12 h-screen bg-black">
      {/* Centered Image */}
      <img
        src={ms1}
        alt="Book"
        className="w-full max-w-[900px] h-auto object-cover"
      />

      {/* Bold Text Below Image */}
      <p className="mt-9 mx-52 text-[30px] tracking-widest font-semibold font-play text-center text-white">
        Mind Sync is a meditation application designed fr fostering mental
        wellness.
      </p>
    </div>
  );
};

export default Ms2;
