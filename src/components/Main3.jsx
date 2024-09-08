import React from "react";
import brain from "../assets/brain icon.png";
import interaction from "../assets/interaction icon.png";
import face from "../assets/face icon.png";
import table from "../assets/table icon.png";

const Main3 = () => {
  return (
    <div className=" bg-black ">
      <div className="grid grid-cols-1  lg:grid-cols-4 lg:gap-1 bg-black py-5 px-20">
        <div
          className="h-auto"
          style={{ background: "linear-gradient(180deg, #8C37CF, #22172A)" }}
        >
          <div className="flex flex-col items-center">
            <img
              src={interaction}
              alt="Logo"
              className="h-auto w-auto max-h-20 mt-8 mb-7"
            />
            <div className="font-play text-white text-center ">
              <p className="mx-3 leading-6 tracking-widest decoration-0">
                Develop interactive <br /> products that are creative <br /> and
                usable
              </p>
              <p className="mt-2 font-bold mb-3 text-xl">Interaction Design</p>
            </div>
          </div>
        </div>

        <div
          className="h-auto"
          style={{ background: "linear-gradient(360deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="font-play text-white text-center ">
              <p className="font-bold mb-3 mt-10 text-xl">Interaction Design</p>
              <p className="mx-3 leading-6 tracking-widest decoration-0">
                Predict user behavior <br /> based on theories of <br />{" "}
                cognition
              </p>
            </div>
            <div className="flex justify-center items-center mt-7">
              <img src={brain} alt="Logo" className="h-auto w-auto max-h-20" />
            </div>
          </div>
        </div>

        <div
          className="h-auto"
          style={{ background: "linear-gradient(180deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="flex justify-center items-center">
              <img
                src={face}
                alt="Logo"
                className="h-auto w-auto max-h-20 mt-8 mb-7"
              />
            </div>
            <div className="font-play text-white text-center ">
              <p className="mx-3 leading-6 tracking-widest decoration-0">
                Identify how emotions <br /> are connected to user <br />{" "}
                experience
              </p>
              <p className="mt-2 font-bold mb-3 text-xl">Emotional Design</p>
            </div>
          </div>
        </div>

        <div
          className="h-auto"
          style={{ background: "linear-gradient(360deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="font-play text-white text-center ">
              <p className="font-bold mb-3 mt-10 text-xl">Testing</p>
              <p className="mx-3 leading-6 tracking-widest decoration-0">
                Analyzing data of users <br /> experiences when <br />
                interacting with a design
              </p>
            </div>
            <div className="flex justify-center items-center mt-7">
              <img src={table} alt="Logo" className="h-auto w-auto max-h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
