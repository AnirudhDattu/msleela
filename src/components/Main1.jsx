import React from "react";
import Header from "../components/navbar";
import { Link } from "react-router-dom";

const Main1 = () => {
  return (
    <div className="h-screen bg-black">
      <Header />
      <div className="bg-gradient-to-b from-[#C98F60] to-[#8C37CF] h-4/5 flex justify-center items-center">
        <div className="text-center ">
          {/* <div className="w-32 h-0.5 bg-white mx-auto mb-2.5"></div> */}
          <p className="text-white text-xl sm:text-xl md:text-xl lg:text-5xl font-play leading-tight tracking-widest">
            I Create <span className="font-bold ">UX UI processes</span> <br />
            and <span className="font-bold">designs</span> intertwining <br />
            <span className="font-bold">Psychology</span> that resonate with
            users
          </p>
          <Link to="/projects">
            <button className="font-play tracking-widest mt-14 lg:px-20 lg:py-3 border-2 border-white text-white bg-transparent  text-2xl hover:bg-white hover:text-[#C98F60] transition-colors duration-300">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main1;
