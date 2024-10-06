import React, { useState } from "react";
import logo from "../assets/Main Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="flex justify-center items-center p-5 bg-black text-white">
        <div className="relative w-full max-w-7xl flex justify-between items-center pb-5">
          <div className="absolute left-0 flex items-center">
            <div
              onClick={toggleMenu}
              className="cursor-pointer flex items-center"
            >
              {!isMenuOpen ? (
                <svg
                  width="72"
                  height="17"
                  viewBox="0 0 72 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="url(#a)" strokeWidth="3" d="M0 1.5h71.959" />
                  <path stroke="url(#b)" strokeWidth="3" d="M.041 15.5H72" />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0"
                      y1="3.5"
                      x2="71.959"
                      y2="3.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C98F60" />
                      <stop offset=".665" stopColor="#8C37CF" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1=".041"
                      y1="17.5"
                      x2="72"
                      y2="17.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C98F60" />
                      <stop offset=".52" stopColor="#8C37CF" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="49"
                  height="33"
                  viewBox="0 0 49 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.16795"
                    y1="31.7519"
                    x2="46.1679"
                    y2="1.75192"
                    stroke="url(#paint0_linear_752_721)"
                    strokeWidth="3"
                  />
                  <line
                    x1="2.83205"
                    y1="1.75192"
                    x2="47.8321"
                    y2="31.7519"
                    stroke="url(#paint1_linear_752_721)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_752_721"
                      x1="2.27735"
                      y1="33.416"
                      x2="47.2774"
                      y2="3.41602"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C98F60" />
                      <stop offset="0.665" stopColor="#8C37CF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_752_721"
                      x1="1.72265"
                      y1="3.41603"
                      x2="46.7226"
                      y2="33.416"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C98F60" />
                      <stop offset="0.52" stopColor="#8C37CF" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
              <span className="ml-3 text-xl font-play tracking-widest">
                Menu
              </span>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-auto w-auto max-h-[70px]"
              />
            </Link>
          </div>

          <div className="absolute right-0 gap-7 flex space-x-6">
            <a
              href="https://drive.google.com/file/d/1Xd_E5VAKKU2SH8KdCyczU7mTj50Nyfej/view?usp=sharing"
              className="text-xl hover:text-[#BF81F0] font-play tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <button
              onClick={scrollToFooter}
              className="text-xl hover:text-[#BF81F0] font-play tracking-widest"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center text-white text-2xl space-y-6 z-50 transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div
          onClick={toggleMenu}
          className="absolute top-10 left-32 cursor-pointer"
        >
          <svg
            width="49"
            height="33"
            viewBox="0 0 49 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.16795"
              y1="31.7519"
              x2="46.1679"
              y2="1.75192"
              stroke="url(#paint0_linear_752_721)"
              strokeWidth="3"
            />
            <line
              x1="2.83205"
              y1="1.75192"
              x2="47.8321"
              y2="31.7519"
              stroke="url(#paint1_linear_752_721)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_752_721"
                x1="2.27735"
                y1="33.416"
                x2="47.2774"
                y2="3.41602"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C98F60" />
                <stop offset="0.665" stopColor="#8C37CF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_752_721"
                x1="1.72265"
                y1="3.41603"
                x2="46.7226"
                y2="33.416"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C98F60" />
                <stop offset="0.52" stopColor="#8C37CF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="font-play space-y-6 flex flex-col items-center tracking-widest">
          <Link
            to="/"
            className="block hover:text-[#C38769] hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className="block hover:text-[#C38769] hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            PROJECTS
          </Link>
          <Link
            to="/#about"
            className="block hover:text-[#C38769] hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            ABOUT
          </Link>
          <Link
            to="/#contact"
            className="block hover:text-[#C38769] hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            CONTACT
          </Link>
          <Link
            to="https://drive.google.com/file/d/1Xd_E5VAKKU2SH8KdCyczU7mTj50Nyfej/view?usp=sharing"
            className="block hover:text-[#C38769] hover:underline hover:decoration-2 hover:underline-offset-8"
            target="_blank"
          >
            RESUME
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
