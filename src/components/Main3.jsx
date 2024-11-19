import React from "react";
import brain from "../assets/brain icon.png";
import interaction from "../assets/interaction icon.png";
import face from "../assets/face icon.png";
import table from "../assets/table icon.png";

const Main3 = () => {
  return (
    <div className=" bg-black ">
      <div className="grid grid-cols-1  lg:grid-cols-4  bg-black py-5 px-20">
        <div
          className="h-auto border-black border-2"
          style={{ background: "linear-gradient(180deg, #8C37CF, #22172A)" }}
        >
          <div className="flex flex-col items-center">
            <img
              src={interaction}
              alt="Logo"
              className="h-auto w-auto max-h-20 mt-14 mb-7"
            />
            <div className="font-play text-white text-center ">
              <p className="mx-3 leading-6 tracking-widest decoration-0 text-lg">
                Develop interactive <br /> products that are creative <br /> and
                usable
              </p>
              <p className="mt-4 font-bold mb-12 text-xl tracking-widest">
                Interaction Design
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-auto border-black "
          style={{ background: "linear-gradient(360deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="font-play text-white text-center ">
              <p className="font-bold mb-3 mt-14 text-xl tracking-widest">
                Cognitive Frameworks
              </p>
              <p className="mx-3 mt-5 leading-6 tracking-widest decoration-0 text-lg">
                Predict user behavior <br /> based on theories of <br />{" "}
                cognition
              </p>
            </div>
            <div className="flex justify-center items-center mt-12">
              <img src={brain} alt="Logo" className="h-auto w-auto max-h-20" />
            </div>
          </div>
        </div>

        <div
          className="h-auto border-black border-2"
          style={{ background: "linear-gradient(180deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="flex justify-center items-center">
              <img
                src={face}
                alt="Logo"
                className="h-auto w-auto max-h-20 mt-14 mb-7"
              />
            </div>
            <div className="font-play text-white text-center ">
              <p className="mx-3 leading-6 tracking-widest decoration-0 text-lg">
                Identify how emotions <br /> are connected to user <br />{" "}
                experience
              </p>
              <p className="mt-4 font-bold mb-12 text-xl tracking-widest">
                Emotional Design
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-auto border-black "
          style={{ background: "linear-gradient(360deg, #8C37CF, #22172A)" }}
        >
          <div className="">
            <div className="font-play text-white text-center ">
              <p className="font-bold mb-3 mt-14 text-xl tracking-widest">
                Testing
              </p>
              <p className="mx-3 mt-5 leading-6 tracking-widest decoration-0 text-lg">
                Analyzing data of users <br /> experiences when <br />
                interacting with a design
              </p>
            </div>
            <div className="flex justify-center items-center mt-12">
              <img src={table} alt="Logo" className="h-auto w-auto max-h-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
