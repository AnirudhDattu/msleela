import React from "react";
import logo from "../assets/Main Logo.png";

const Footer = () => {
  return (
    <div className="bg-[#151515] text-white p-8  font-play ">
      <div className="my-9 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section: Logo */}
        <div className="w-full md:w-1/3 flex justify-start">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Center Section: Contact Info */}
        <div className="w-full md:w-1/3 text-center">
          <p className="text-lg">sirisujala20042@gmail.com</p>
          <p className="text-lg mt-2">+91 8790808292</p>
        </div>

        {/* Right Section: Page Links */}
        <div className="w-full md:w-1/3 flex justify-end">
          <div className="flex flex-col items-center space-y-2">
            <a href="#home" className="text-lg hover:underline">
              Home
            </a>
            <a href="#about" className="text-lg hover:underline">
              About
            </a>
            <a href="#projects" className="text-lg hover:underline">
              Projects
            </a>
            <a href="#resume" className="text-lg hover:underline">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
