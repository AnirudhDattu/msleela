import React from "react";
import bksm from "../assets/booksm.png";
import book from "../assets/bkshlf.png";
import jl from "../assets/jule.png";
import tmls from "../assets/timeless.png";

const Webdes = () => {
  return (
    <div className="bg-black">
      <div className="bg-black py-10 text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-play tracking-wider font-bold mb-4">
          Web Design
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em]">
          Websites which turn visitors into loyal users
        </p>
      </div>

      {/* Grid for the cards, centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 justify-center mx-auto max-w-screen-lg">
        {/* First Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={bksm}
              alt="Top Image"
              className="w-[300px] h-58 object-cover " // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={book}
              alt="Middle Image"
              className="w-[250px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className=" text-sm sm:text-base lg:text-lg text-center font-play text-[#EBD1FF]">
            <p>
              E-Commerce, UX Research, Psychology, UI Web Design, Responsive
              Design
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
              UX Research
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={jl}
              alt="Top Image"
              className="w-[400px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={tmls}
              alt="Middle Image"
              className="w-[200px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className="mt-2 text-sm text-center sm:text-base lg:text-lg font-play text-[#EBD1FF]">
            <p>E-Commerce, UX Research, UI Web Design, Branding, Color Guide</p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
              UX Research
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}

      <div className="bg-black py-10 text-center mt-20">
        <h1 className="text-white text-3xl sm:text-4xl font-play tracking-wider font-bold mb-4">
          Mobile Design
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em] mb-16">
          Crafting seamless mobile experiences, one tap at a time.
        </p>
      </div>

      {/* Grid for the cards, centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 justify-center mx-auto max-w-screen-lg">
        {/* First Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={bksm}
              alt="Top Image"
              className="w-[300px] h-58 object-cover " // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={book}
              alt="Middle Image"
              className="w-[250px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className=" text-sm sm:text-base lg:text-lg text-center font-play text-[#EBD1FF]">
            <p>
              E-Commerce, UX Research, Psychology, UI Web Design, Responsive
              Design
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
              UX Research
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={jl}
              alt="Top Image"
              className="w-[400px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={tmls}
              alt="Middle Image"
              className="w-[200px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className="mt-2 text-sm text-center sm:text-base lg:text-lg font-play text-[#EBD1FF]">
            <p>E-Commerce, UX Research, UI Web Design, Branding, Color Guide</p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
              UX Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdes;
