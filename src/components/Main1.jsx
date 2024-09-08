import React from "react";

const Main1 = () => {
  return (
    <div className="bg-gradient-to-b from-[#C98F60] to-[#8C37CF] h-screen flex justify-center items-center">
      <div className="text-center">
        {/* <div className="w-32 h-0.5 bg-white mx-auto mb-2.5"></div> */}
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-play leading-10 tracking-wider">
          I Create <span className="font-bold">UX UI processes</span> <br />
          and <span className="font-bold">designs</span> intertwining <br />
          <span className="font-bold">Psychology</span> that resonate with users
        </p>
        <button className="font-play mt-32 lg:px-24 lg:py-4 border-2 border-white text-white bg-transparent  text-3xl hover:bg-white hover:text-black transition-colors duration-300">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Main1;
