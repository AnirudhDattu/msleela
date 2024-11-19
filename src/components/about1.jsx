import React from "react";
import bgimg from "../assets/about bgimg.png";
import bgAbout from "../assets/bg-about.png";
import hobbies from "../assets/hobbies.png";
import values from "../assets/values.png";
import Footer from "./footer";
import Header from "./navbar";

const About1 = () => {
  return (
    <div className="">
      <Header />
      <div
        className="bg-cover bg-center min-h-screen bg-[#1b1b1b] flex justify-center"
        style={{ backgroundImage: `url(${bgimg})` }} // Replace with your image path
      >
        <div className="w-full md:w-2/5">
          <div className="text-white w-full mt-10 lg:max-w-[610px] py-16 pr-32">
            <h1 className="text-4xl tracking-widest mb-10 font-neon">
              Hello Stranger!
            </h1>
            <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
              <span className="text-2xl tracking-wide font-neon">
                I’m Siri{" "}
              </span>
              (yeah! just like the apple one), a designer who finds{" "}
              <span className="text-[#BF81F0]">
                inspiration in the beauty of everyday moments
              </span>
              . My approach to design is grounded in observation—whether it’s
              the calming hues of a sunset or the simplicity of everyday
              objects, I constantly draw ideas from the world around me. I
              believe that great design isn’t just about making things look
              good—it’s about creating experiences that feel intuitive,
              seamless, and a{" "}
              <span className="text-[#BF81F0]">little bit magical</span>. My
              journey started with curiosity, as I’ve always been the type of
              person to ask,{" "}
              <span className="text-[#BF81F0]">
                “How could this be better?”
              </span>{" "}
              Whether it’s reimagining everyday tasks or experimenting with
              creative ideas, I’ve found design to be the perfect outlet for my
              passion for problem-solving and storytelling.
            </p>
          </div>
          {/* Experience Section */}
          <div className="text-white w-full lg:max-w-[610px] pt-10 py-16 pr-32">
            <h1 className="text-4xl tracking-widest mb-10 font-neon">
              Experience
            </h1>
            <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
              While I haven’t yet worked in real-world projects, my personal and
              academic work has provided me with opportunities to{" "}
              <span className="text-[#BF81F0]">
                push my creative boundaries
              </span>
              . From crafting an e-commerce platform for book lovers with 'The
              Bookshelf' to designing a luxurious jewelry shopping experience
              with 'Timeless,' I’ve developed a strong foundation in UX/UI
              design. My projects reflect the same{" "}
              <span className="text-[#BF81F0]">potential and dedication</span>{" "}
              you’d expect from{" "}
              <span className="text-[#BF81F0]">industry work</span>, with a
              focus on delivering real, tangible results. These experiences have
              honed my ability to empathize with users, iterate on designs, and
              create{" "}
              <span className="text-[#BF81F0]">solutions that truly fit</span>{" "}
              the needs of the audience.
            </p>
          </div>
        </div>
        <div>
          {/* AMIWHO Section */}
          <div className="pt-8 flex items-center text-center justify-center mt-[10rem]">
            <div className="gap-4 text-center text-[5rem]">
              {/* Top Row */}
              <div className="flex ml-10">
                {" "}
                {/* Empty space for alignment */}
                <div className="flex">
                  <div
                    className="text-6xl text-[#C98F60] rotate-[-90deg] "
                    style={{ fontFamily: "Train One" }}
                  >
                    A
                  </div>
                  <div
                    className="text-6xl text-white mt-10"
                    style={{ fontFamily: "Train One" }}
                  >
                    M
                  </div>
                </div>
                <div
                  className="text-6xl text-[#C98F60] pl-24 mt-20"
                  style={{ fontFamily: "Rubik Iso" }}
                >
                  I
                </div>
              </div>
              <div
                className="text-6xl text-white tracking-widest"
                style={{ fontFamily: "Rubik Iso" }}
              >
                {" "}
                {/* Empty space for alignment */}W H O{" "}
                <span className="text-[#C98F60]">?</span>
              </div>
            </div>
          </div>
          <div className="text-white w-full lg:max-w-[560px] mt-24 ml-10">
            <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
              I design from a place of curiosity and connection. Whether it’s
              turning a sunset into a palette or finding the perfect layout in
              the structure of everyday life, I believe that the best designs
              come from a deep understanding of the world around us. My work
              reflects this—every project has a story, a sense of purpose, and a
              personal touch. I don’t just create for users, I create with them
              in mind, designing experiences that feel welcoming, and real. For
              me, design is all about turning those small, meaningful
              experiences into intuitive, impactful products.
            </p>
          </div>
          <div className="text-white w-full lg:max-w-[560px] mt-32 ml-10">
            <h1 className="text-4xl tracking-widest mb-10 font-neon">
              What’s my Style?
            </h1>
            <p className="text-lg mb-8 tracking-widest leading-8 font-sansation opacity-80">
              I’m all about balance. I love mixing function with a touch of
              flair—designs that are clean but never boring, user-friendly but
              still memorable. I’m drawn to designs that tell a story and evoke
              emotion, whether it's through subtle interactions, thoughtful
              color choices, or a layout that just feels right. My goal? To
              create digital experiences that resonate with users on a deeper
              level, making them feel understood and inspired.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[100vh] overflow-hidden px-[12vw] flex items-center box-border">
        <img
          className="absolute z-[-1] top-0 left-0 w-screen h-[100%] object-cover"
          src={bgAbout}
        />
        <div className="flex items-end w-full justify-between">
          <div className="w-[15rem] font-sansation text-[3rem]">
            <p>
              WHAT <br /> I DO <br /> IN MY FREE TIME
            </p>
          </div>

          <div className="relative px-20 flex justify-end">
            <img
              src={hobbies}
              alt="Hobby Image"
              className="w-[30rem] object-cover"
            />
            <div className="absolute top-0 left-[-14rem]">
              <p className="w-[22rem]">
                “I wouldn’t say these are my hobbies, but more like my happy
                escapes—whether it’s experimenting with new recipes, giving back
                through volunteering, or finding tranquility in a good swim.”
              </p>
            </div>
            <div className="absolute bottom-0 right-[-8rem]">
              <p className="w-[22rem]">
                This is what represents me as a person and how all of my friends
                know me
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#1b1b1b] grid gap-16 px-[12vw] py-[6rem] grid-cols-3"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-sansation text-white text-[2rem] tracking-widest">
              Creativity
            </p>
            <p className="font-sansation text-[#ffffffbb]">
              I believe in thinking outside the box and infusing creativity into
              everything I do, like crafting innovative designs or solving
              complex problems
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sansation text-white text-[2rem] tracking-widest">
              Curiosity
            </p>
            <p className="font-sansation text-[#ffffffbb]">
              I’m constantly learning and exploring, whether it's through trying
              new recipes, diving into new design trends, or embracing
              challenges.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-sansation text-white text-[2rem] tracking-widest">
              Empathy
            </p>
            <p className="font-sansation text-[#ffffffbb]">
              Understanding the needs of others drives my work—no matter it's
              users, teammates, or the community, I always aim to create with
              empathy.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sansation text-white tracking-widest text-[2rem]">
              Authenticity
            </p>
            <p className="font-sansation text-[#ffffffbb]">
              Being true to myself in both work and life is a core value. I
              bring my whole self into everything I do, and I strive to reflect
              that in my designs and projects
            </p>
          </div>
        </div>
        <img src={values} className="object-cover" />
      </div>
      <Footer />
    </div>
  );
};

export default About1;
