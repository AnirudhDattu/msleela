import React from "react";
import { Link } from "react-router-dom";
import bookimg from "../assets/book2.png";
import thebook from "../assets/thebook.png";
import L1 from "../assets/lap1.png";

const Ted3 = () => {
  return (
    <div className="bg-black">
      <div className="bg-black pt-20">
        <div className="relative flex items-center py-4 ml-32 ">
          {/* Small rectangle */}
          <div
            className="w-[9px] h-[59px] bg-[#C19162]"
            style={{ position: "relative" }}
          ></div>

          {/* Text beside the rectangle */}
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
            Background
          </p>
        </div>
        <div className="ml-32">
          <p className="text-white ml-16 mr-36 tracking-wider">
            For the 2023 TEDx event at BMU, I was tasked with designing the
            website’s user interface. The primary focus was to create a visually
            appealing, distinct from existing and a functional platform that
            effectively represented the event’s theme and facilitated seamless
            access to essential information, such as the event agenda, speaker
            profiles, and ticket registration. Although the UX process was
            minimal, the website was designed to deliver a smooth and
            user-friendly experience.
          </p>
        </div>
        <div className="ml-32 mt-10">
          <p className="text-2xl font-semibold font-play text-white ml-16 mb-5 tracking-wider">
            Objective:
          </p>
          <p className="text-white ml-16 mr-36 tracking-wider">
            The goal of the TEDx BMU website design was to capture the essence
            of the TEDx brand while incorporating elements that reflected the
            unique atmosphere of the BMU event. The design needed to be
            intuitive, with clear navigation and aesthetically pleasing visuals
            to engage both students and external attendees.
          </p>
        </div>
        <div className="ml-32 mt-10">
          <h1 className="text-white tracking-wider text-xl font-semibold font-play ml-16">
            Project Overview
          </h1>
          <ul className="list-disc list-outside pl-5  ml-20 mt-8">
            <li className="text-white">
              <strong>Role:</strong> UI/UX Designer
            </li>
            <li className="text-white">
              <strong>Duration:</strong> 3 days
            </li>
            <li className="text-white">
              <strong>Tools Used:</strong> Figma
            </li>
          </ul>
        </div>
        <div className="ml-32 mt-28 h-screen">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
              Design Process
            </p>
          </div>
          <img
            src={bookimg}
            alt="Book"
            className="w-full max-w-[750px] h-auto object-cover ml-52 mt-28"
          />
          <p className="text-xl font-semibold font-play text-white ml-14 tracking-wider mt-28">
            🔍 Research & user needs
            <br />
            🎨 Design concept
            <br />
            💻 Visual UI Design
            <br />
            📱 Responsive design
            <br />
            🔁 Continuous feedback and iterations
          </p>
        </div>
        <div className="ml-32 mt-32 mr-28">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Research on existing platforms
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              Before designing the TEDx BMU 2024 website, I explored several
              TEDx event websites from around the world, along with platforms
              for similar large-scale conferences. TEDx websites typically
              follow a minimalist approach, emphasizing the TED brand’s iconic
              red, black, and white color scheme. They prioritize content,
              speaker profiles, event agendas, and easy registration processes.
              Additionally, most of these websites focus on bold typography and
              clean, structured layouts to keep the user’s attention on key
              event details.
            </p>
            <div>
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10 tracking-wider">
                Common Patterns:
              </p>
              <ul className="list-disc list-outside pl-5  ml-20 mt-8 mr-10 gap-y-20 tracking-widest">
                <li className="text-white">
                  <strong> Minimalist Design:</strong> Most TEDx websites adhere
                  to a minimalistic design philosophy, using clean lines and
                  large whitespace to maintain focus on important elements.
                </li>
                <li className="text-white">
                  <strong>Speaker Profiles and Agendas:</strong> A dedicated
                  section for speaker profiles and event agendas is standard
                  across all TEDx websites, allowing attendees to engage with
                  the content beforehand.
                </li>
                <li className="text-white">
                  <strong>Clear Call-to-Actions (CTAs):</strong>
                  Common CTAs include “Register Now” and “Get Tickets,” designed
                  to guide users directly to the most important actions.
                </li>
                <li className="text-white">
                  <strong>Brand Consistency: </strong>
                  Strict adherence to TEDx branding guidelines (use of official
                  color schemes, typography, and logos) is a key trend.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------next---------------------------------------------------------- */}

        {/* =========================================================================================================================== */}
        <div className="bg-black mt-28 pb-20">
          <div className="bg-black py-10 text-center mb-10">
            <p className="text-white text-xl font-bold font-play sm:text-3xl tracking-[0.25em]">
              More Like This
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-8 justify-center mx-auto transition max-w-screen-lg">
            {/* First Card */}
            <div className="bg-[#151515] w-[400px]  text-white px-2 py-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
              {/* Top Image */}
              <div className="flex  justify-center">
                <img
                  src={bksm}
                  alt="Top Image"
                  className="w-[260px] h-58 object-cover " // Adjusted to make it larger
                />
              </div>

              {/* Middle Image */}
              <div className="flex  justify-center">
                <img
                  src={book}
                  alt="Middle Image"
                  className="w-[250px] h-30 object-cover mt-16" // Adjusted to match the height
                />
              </div>

              {/* Text Section */}
              <div className="mt-5 text-sm sm:text-base lg:text-lg text-center font-play tracking-wider text-[#EBD1FF]">
                <p>
                  Internship Case study | E-Commerce, UX Research, Psychology,
                  UI
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-7 text-center">
                <Link to="/Bookshelf">
                  <button className="tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1  border-2 border-white text-sm sm:text-base lg:text-lg">
                    View
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-[#151515] w-[400px] text-white  p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
              {/* Top Image */}
              <div className="flex  justify-center">
                <img
                  src={jl}
                  alt="Top Image"
                  className="w-[330px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
                />
              </div>

              {/* Middle Image */}
              <div className="flex  justify-center">
                <img
                  src={tmls}
                  alt="Middle Image"
                  className="w-[200px] h-30 object-cover mt-8" // Adjusted to match the height
                />
              </div>

              {/* Text Section */}
              <div className="tracking-wider text-sm text-center sm:text-base lg:text-lg font-play mt-5 text-[#EBD1FF]">
                <p>
                  Internship Case study | E-Commerce, UX Process, Visual Design,
                  Color Guide
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-6 text-center">
                <Link to="/Timeless">
                  <button className="tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1 mb-4  border-2 border-white text-sm sm:text-base lg:text-lg">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* =---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
import bksm from "../assets/booksm.png";
import book from "../assets/bkshlf.png";
import jl from "../assets/jule.png";
import tmls from "../assets/timeless.png";

export default Ted3;
