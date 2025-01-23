import React, { useEffect } from "react";
import logo from "../assets/logo footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top
  }, []);

  return (
    <div id="footer" className="bg-[#151515] text-white p-8  font-play ">
      <div className="my-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section: Logo */}
        <Link to="/" className="w-full md:w-1/3 flex justify-start">
          <div>
            <img src={logo} alt="Logo" className="h-24" />
          </div>
        </Link>

        {/* Center Section: Contact Info */}
        <div className="w-full md:w-1/3 text-start ml-40 tracking-widest">
          <p className="text-lg">Say Hi! 👋</p>
          <p className="text-lg">sirisujala20042@gmail.com</p>
          {/* <p className="text-lg mt-2">+91 8790808292</p> */}
        </div>

        {/* Right Section: Page Links */}
        <div className="w-full md:w-1/3 flex justify-end tracking-widest mr-16">
          <div className="flex flex-col items-center space-y-2">
            <Link to="/">
              <a className="text-lg  hover:text-[#C38769]">Home</a>
            </Link>
            <a href="/About" className="text-lg  hover:text-[#C38769]">
              About
            </a>
            <a href="/projects" className="text-lg  hover:text-[#C38769]">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Xd_E5VAKKU2SH8KdCyczU7mTj50Nyfej/view?usp=sharing"
              className="text-lg  hover:text-[#C38769]"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
