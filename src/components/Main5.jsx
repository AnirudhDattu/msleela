import React from "react";
import { Link } from "react-router-dom";
import bookshelf from "../assets/bookshelf.png";
import mind from "../assets/myndsync.png";

const Main5 = () => {
  return (
    <div className="bg-black">
      <div className="bg-black py-10 pt-20 text-center">
        <h1 className="text-white text-2xl sm:text-3xl font-play tracking-widest font-bold mb-4">
          FEATURED PROJECTS
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.20em] pb-12">
          These unveiled the beginning of my Journey
        </p>
      </div>
      <div className="bg-[#151515] flex items-center justify-between p-8 h-[450px]">
        {/* Left side image */}
        <div className="w-2/3">
          <img src={bookshelf} alt="Bookshelf" className=" h-[400px]" />
        </div>

        <div className="flex flex-col items-end w-1/3 space-y-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-[#C19162] text-3xl tracking-wide font-medium flex justify-center font-playfair ">
              THE BOOKSHELF
            </h1>
            <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.18em] text-center">
              An E-commerce web design for books
            </p>
            <Link to="/Bookshelf">
              <button className=" hover:border-[#C19162] hover:text-[#C19162] px-14 py-1 mt-8 bg-[#151515] text-white  font-play border-white border-2 text-2xl tracking-widest ">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#151515] flex items-center justify-between py-8 px-24 mt-14 h-[450px]">
        <div className="flex flex-col items-start w-2/3 ">
          <div className="flex flex-col items-center ">
            <h1 className="text-[#C19162] text-3xl tracking-wide font-medium flex justify-center font-playfair ">
              MIND SYNC
            </h1>
            <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.18em] text-center">
              A mental wellness mobile application design
            </p>
            <Link to="/Mindsync">
              <button className="hover:border-[#C19162] hover:text-[#C19162] px-14 py-1 mt-8 bg-[#151515] text-white border-2 font-play border-white text-2xl tracking-widest">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-2/3 flex justify-end">
          <img src={mind} alt="Bookshelf" className="h-[400px] " />
        </div>
      </div>
      <div className="flex items-start justify-center h-[300px] mt-10">
        <Link to="/projects">
          <div className="flex justify-start items-center space-x-4 cursor-pointer">
            <p className="text-white text-2xl tracking-wider font-medium hover:text-[#C19162]">
              Check out more
            </p>
            {/* Custom Arrow using a line and SVG */}
            <span className="flex items-center ">
              {/* Line before the arrow */}
              <div className="w-[40px] h-0.5 bg-[#C19162]"></div>
              {/* Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#C19162] "
                fill="none"
                viewBox="2 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main5;
