import React, { useEffect } from "react";
import tedbg from "../assets/tedbg.png"; // Replace with your image path

const Ted1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top
  }, []);

  return (
    <div
      className="relative h-[350px] flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${tedbg})`, // Using the imported image
      }}
    >
      {/* Breadcrumb placed in the top-left corner */}
      <nav
        aria-label="Breadcrumb"
        className="absolute top-8 left-10 text-white"
      >
        <ol className="flex items-center gap-1 text-sm text-gray-200">
          <li>
            <a href="/" className="block transition hover:text-gray-300">
              Home
            </a>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <a
              href="/projects"
              className="block transition hover:text-gray-300"
            >
              Projects
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <a
              href="/projects"
              className="block transition font-bold hover:text-gray-300"
            >
              TEDxBMU
            </a>
          </li>
        </ol>
      </nav>

      <div className="text-center">
        <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-play leading-10 tracking-wider">
          TEDxBMU
        </p>
      </div>
    </div>
  );
};

export default Ted1;
