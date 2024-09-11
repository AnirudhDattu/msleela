import React from "react";
import banner from "../assets/bookbanner.png"; // Import your local image

const BKa = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Image */}
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />

      {/* Breadcrumbs - Top Left */}
      <nav
        aria-label="Breadcrumb"
        className="absolute top-4 left-4 text-sm text-gray-300"
      >
        <ol className="flex items-center gap-1">
          <li>
            <a href="/" className="block transition hover:text-white">
              <span className="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
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
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="/projects" className="block transition hover:text-white">
              Projects
            </a>
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
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className="block text-white">Web Design</span>
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
