import React from "react";
import bksm from "../assets/booksm.png";
import book from "../assets/bkshlf.png";
import jl from "../assets/jule.png";
import tmls from "../assets/timeless.png";
import tedbg from "../assets/tedx.png";
import tedlg from "../assets/tedlg.png";
import mind from "../assets/myndsync.png";
import min from "../assets/mslogo.png";
import vly from "../assets/vallyimg.png";
import vlylg from "../assets/hvlg.png";
import { Link } from "react-router-dom";

const Webdes = () => {
  return (
    <div className="bg-black">
      <div className="bg-black py-10 text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-play tracking-wider font-bold mb-4">
          Web Design
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em]">
          Do you love Web design just because you got more space?
          <span className="text-[#BF81F0] pl-2">Huh! Just like me</span>
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
              className="w-[250px] h-30 object-cover mt-10" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className="mt-5 text-sm sm:text-base lg:text-lg text-center font-play text-[#EBD1FF]">
            <p>
              Internship Case study | E-Commerce, UX Research, Psychology, UI
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-7 text-center">
            <Link to="/Bookshelf">
              <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={tedbg}
              alt="Top Image"
              className="w-[370px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={tedlg}
              alt="Middle Image"
              className="w-[180px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className="mt-2 text-sm text-center sm:text-base lg:text-lg font-play text-[#EBD1FF]">
            <p>
              University Project | Real time, UI Design, Testing, Responsive
              Design
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <Link to="/TedxBMU">
              <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 justify-center mx-auto max-w-screen-lg ">
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
            <p>
              Internship Case study | E-Commerce, UX Process, Visual Design,
              Color Guide
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <Link to="/Timeless">
              <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}

      <div className="bg-black py-10 text-center mt-20">
        <h1 className="text-white text-3xl sm:text-4xl font-play tracking-wider font-bold mb-4">
          Mobile Design
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em] mb-16">
          Ever tried fitting big idea into small screen?
          <span className="text-[#BF81F0] pl-2">
            That’s my favorite kind of puzzle
          </span>
        </p>
      </div>

      {/* Grid for the cards, centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 justify-center mx-auto max-w-screen-lg">
        {/* First Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={mind}
              alt="Top Image"
              className="w-[330px] h-[250px] object-cover " // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={min}
              alt="Middle Image"
              className="w-[250px] h-30 object-cover mt-12" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className=" mt-8 text-sm sm:text-base lg:text-lg text-center font-play text-[#EBD1FF]">
            <p>
              Personal Project | Branding, Psychology, Cognition, Human
              behavior, UX process, UI Design
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <Link to="">
              <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
          {/* Top Image */}
          <div className="flex  justify-center">
            <img
              src={vly}
              alt="Top Image"
              className="w-[280px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
            />
          </div>

          {/* Middle Image */}
          <div className="flex  justify-center">
            <img
              src={vlylg}
              alt="Middle Image"
              className="w-[350px] h-30 object-cover mt-8" // Adjusted to match the height
            />
          </div>

          {/* Text Section */}
          <div className="mt-8 text-sm text-center sm:text-base lg:text-lg font-play text-[#EBD1FF]">
            <p>
              Academic Project | User research, User flows, Storyboards, UI
              Design, Testing, Iterations
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 text-center">
            <Link to="/Bookshelf">
              <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdes;
