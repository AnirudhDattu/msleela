import React from "react";
import ted1 from "../assets/ted1.png"; // Replace with the path to your image

const Ted2 = () => {
  return (
    <div className="flex flex-col items-center py-12 h-screen bg-black">
      {/* Centered Image */}
      <img
        src={ted1}
        alt="Book"
        className="w-full max-w-[900px] h-auto object-cover"
      />

      {/* Bold Text Below Image */}
      <p className="mt-9 mx-52 text-[30px] tracking-widest font-semibold font-play text-center text-white">
        The TEDxBMU 2023 website was designed to reflect the bold and inspiring
        essence of TEDx.
      </p>
    </div>
  );
};

export default Ted2;
