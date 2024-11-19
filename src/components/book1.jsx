import React from "react";
import bookImage from "../assets/book1.png"; // Replace with the path to your image

const Book1 = () => {
  return (
    <div className="flex flex-col items-center py-12 h-screen bg-black">
      {/* Centered Image */}
      <img
        src={bookImage}
        alt="Book"
        className="w-full max-w-[900px] h-auto object-cover"
      />

      {/* Bold Text Below Image */}
      <p className="mt-9 text-[30px] tracking-widest font-semibold font-play text-center text-white">
        The Bookshelf is an e-commerce platform for everyone who want <br /> an
        engaging book shopping experience
      </p>
    </div>
  );
};

export default Book1;
