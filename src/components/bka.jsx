import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported
import banner from "../assets/bookbanner.png";

const BKa = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top
  }, []);

  return (
    <div className="relative w-full h-[350px]">
      {/* Image */}
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />

      {/* Breadcrumbs - Top Left */}
      <nav
        aria-label="Breadcrumb"
        className="absolute top-4 left-4 text-sm text-gray-300"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link to="/" className="block transition hover:text-white">
              Home
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link to="/projects" className="block transition hover:text-white">
              Projects
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className=" text-white text-bold">Bookshelf</span>
          </li>
        </ol>
      </nav>

      {/* Web Design Heading */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-4xl sm:text-5xl font-play tracking-wider font-bold">
          Bookshelf
        </h1>
      </div>
    </div>
  );
};

export default BKa;
