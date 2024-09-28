import React from "react";
import logo from "../assets/Main Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center p-5 bg-black text-white">
        <div className="relative w-full max-w-7xl flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-auto w-auto max-h-20" />
            </Link>
          </div>
          <div className="absolute right-0 flex space-x-6">
            <a href="#footer" className="text-lg hover:underline">
              Contact
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
    </header>
  );
};

export default Header;
