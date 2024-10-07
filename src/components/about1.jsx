import React from "react";
import bgimg from "../assets/about bgimg.png";

const About1 = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-[#1b1b1b]"
      style={{ backgroundImage: `url(${bgimg})` }} // Replace with your image path
    >
      <div className="text-white w-full md:w-2/3 lg:max-w-[610px] pt-48 pl-44">
        <h1 className="text-4xl tracking-widest mb-10 font-neon">
          Hello Stranger!
        </h1>
        <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
          <span className="text-2xl tracking-wide font-neon">I’m Siri </span>
          (yeah! just like the apple one), a designer who finds{" "}
          <span className="text-[#BF81F0]">
            inspiration in the beauty of everyday moments
          </span>
          . My approach to design is grounded in observation—whether it’s the
          calming hues of a sunset or the simplicity of everyday objects, I
          constantly draw ideas from the world around me. I believe that great
          design isn’t just about making things look good—it’s about creating
          experiences that feel intuitive, seamless, and a{" "}
          <span className="text-[#BF81F0]">little bit magical</span>. My journey
          started with curiosity, as I’ve always been the type of person to ask,{" "}
          <span className="text-[#BF81F0]">“How could this be better?”</span>{" "}
          Whether it’s reimagining everyday tasks or experimenting with creative
          ideas, I’ve found design to be the perfect outlet for my passion for
          problem-solving and storytelling.
        </p>
      </div>

      {/* AMIWHO Section */}
      <div className="pt-8 pl-44 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4 text-center">
          {/* Top Row */}
          <div></div> {/* Empty space for alignment */}
          <span
            className="text-6xl text-[#C98F60] col-span-2 rotate-90"
            style={{ fontFamily: "Train One" }}
          >
            A
          </span>
          <div></div> {/* Empty space for alignment */}
          {/* Middle Row */}
          <span
            className="text-6xl text-white"
            style={{ fontFamily: "Rubik Iso" }}
          >
            W
          </span>
          <span
            className="text-6xl text-white"
            style={{ fontFamily: "Rubik Iso" }}
          >
            H
          </span>
          <span
            className="text-6xl text-white"
            style={{ fontFamily: "Rubik Iso" }}
          >
            O
          </span>
          <span
            className="text-6xl text-[#C98F60]"
            style={{ fontFamily: "Rubik Iso" }}
          >
            ?
          </span>
          {/* Bottom Row */}
          <div></div> {/* Empty space for alignment */}
          <span
            className="text-6xl text-white"
            style={{ fontFamily: "Train One" }}
          >
            M
          </span>
          <span
            className="text-6xl text-white"
            style={{ fontFamily: "Rubik Iso" }}
          >
            I
          </span>
          <div></div> {/* Empty space for alignment */}
        </div>
      </div>

      {/* Experience Section */}
      <div className="text-white w-full md:w-2/3 lg:max-w-[610px] pt-10 pl-44 pb-20">
        <h1 className="text-4xl tracking-widest mb-10 font-neon">Experience</h1>
        <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
          While I haven’t yet worked in real-world projects, my personal and
          academic work has provided me with opportunities to{" "}
          <span className="text-[#BF81F0]">push my creative boundaries</span>.
          From crafting an e-commerce platform for book lovers with 'The
          Bookshelf' to designing a luxurious jewelry shopping experience with
          'Timeless,' I’ve developed a strong foundation in UX/UI design. My
          projects reflect the same{" "}
          <span className="text-[#BF81F0]">potential and dedication</span> you’d
          expect from <span className="text-[#BF81F0]">industry work</span>,
          with a focus on delivering real, tangible results. These experiences
          have honed my ability to empathize with users, iterate on designs, and
          create{" "}
          <span className="text-[#BF81F0]">solutions that truly fit</span> the
          needs of the audience.
        </p>
      </div>
    </div>
  );
};

export default About1;
