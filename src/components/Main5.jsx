import React from "react";
import { Link } from "react-router-dom";
import bookshelf from "../assets/bookshelf.png";
import mind from "../assets/myndsync.png";

const Main5 = () => {
  return (
    <div className="bg-black">
      <div className="bg-black py-10 text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-play tracking-wider font-bold mb-4">
          FEATURED PROJECTS
        </h1>
        <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em]">
          These unveiled the beginning of my Journey
        </p>
      </div>
      <div className="bg-[#151515] flex items-center justify-between p-8 h-[450px]">
        {/* Left side image */}
        <div className="w-1/2">
          <img src={bookshelf} alt="Bookshelf" className=" h-auto" />
        </div>

        <div className="flex flex-col items-end w-1/2 space-y-4">
          <div className="flex flex-col items-center ">
            <h1 className="text-[#C19162] text-3xl font-bold flex justify-center font-play">
              The Bookshelf
            </h1>
            <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em] text-center">
              An E-commerce web design for books
            </p>
            <Link to="/Bookshelf">
              <button className="px-16 py-2 mt-8 bg-[#151515] text-white border font-play border-white rounded-lg text-lg ">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#151515] flex items-center justify-between p-8 mt-14 h-[450px]">
        <div className="flex flex-col items-start w-1/2 space-y-4">
          <div className="flex flex-col items-center ">
            <h1 className="text-[#C19162] text-3xl font-bold font-play  text-center">
              MIND SYNC
            </h1>
            <p className="text-white text-lg font-play sm:text-lg text-opacity-80 tracking-[0.25em] text-center">
              A mental wellness mobile application design
            </p>
            <button className="px-16 py-2 mt-8 bg-[#151515] text-white border font-play border-white rounded-lg text-lg ">
              View
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-1/2 flex justify-end">
          <img src={mind} alt="Bookshelf" className="h-[365px] w-auto" />
        </div>
      </div>
      <div className="flex items-center justify-center h-[300px]">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => (window.location.href = "/target-page")}
        >
          <p className="text-white text-lg font-semibold">Click for more</p>
          {/* Custom arrow using borders for a larger tail */}
          <span className="flex items-center justify-center">
            <div className="w-[30px] h-0.5 bg-[#C19162]"></div> {/* Tail */}
            <div className="border-t-[5px] border-r-[5px] border-[#C19162] rotate-45 ml-1"></div>{" "}
            {/* Arrowhead */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main5;
