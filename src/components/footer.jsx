import React from "react";
import logo from "../assets/Main Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#151515] text-white p-8  font-play ">
      <div className="my-9 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section: Logo */}
        <div className="w-full md:w-1/3 flex justify-start">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

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
              <a className="text-lg hover:underline">Home</a>
            </Link>
            <a href="#about" className="text-lg hover:underline">
              About
            </a>
            <a href="/projects" className="text-lg hover:underline">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Xd_E5VAKKU2SH8KdCyczU7mTj50Nyfej/view?usp=sharing"
              className="text-lg hover:underline"
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
