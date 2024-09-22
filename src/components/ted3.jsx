import React from "react";
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
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider mt-28">
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
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
                Common Patterns:
              </p>
              <ul className="list-disc list-outside pl-5  ml-20 mt-8 mr-10 tracking-widest">
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
        <div className="">
          <div className="ml-32 mt-10 font-play">
            <div>
              <h1 className="text-white tracking-wider text-lg font-semibold font-play ml-16">
                👤 User goals
              </h1>
              <ul className="list-disc list-outside pl-5  ml-20 mt-4 tracking-widest">
                <li className="text-white">
                  Quickly find books that match their interests and mood.
                </li>
                <li className="text-white">
                  Recommendations and features tailored to their preferences.
                </li>
                <li className="text-white">
                  An interactive and rewarding experience.
                </li>
                <li className="text-white">
                  A well-designed, aesthetically pleasing interface
                </li>
                <li className="text-white">
                  Clear and comprehensive details about books.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------next------------------------------------------------------------ */}
        <div className="ml-32 mr-44 mt-10 ">
          <div className="mr-52">
            <div className="relative flex items-center py-4  ">
              {/* Small rectangle */}
              <div
                className="w-[9px] h-[59px] bg-[#C19162]"
                style={{ position: "relative" }}
              ></div>

              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Design Concept
              </p>
            </div>

            <ul className="list-decimal list-outside pl-5  ml-20 mt-8 tracking-widest ">
              <li className="text-white mb-1 font-extrabold text-xl">
                Consistent with TEDx Branding:
              </li>
              <p className="text-white mb-5">
                Maintaining consistency with TEDx’s global brand identity was
                crucial. I adhered to the official TEDx color scheme (red,
                black, and white) to ensure brand recognition and uniformity
                with TEDx standards. This made the website instantly familiar to
                those aware of the TED brand, building trust and excitement.
              </p>
              <li className="text-white mb-1 font-extrabold text-xl">
                Bold Typography:
              </li>
              <p className="text-white mb-5">
                To reflect the bold, inspirational, and forward-thinking nature
                of TEDx talks, I chose large, impactful typography for headings
                and key information. This aligned with the TEDx aesthetic while
                drawing attention to important sections such as the event's
                theme, speaker lineup, and calls to action (e.g., "Register
                Now").
              </p>
              <li className="text-white mb-1 font-extrabold text-xl">
                Simple, Clear Navigation:
              </li>
              <p className="text-white mb-5">
                The website was designed to be straightforward, with a simple
                navigation bar that included essential links: "Home,"
                "Speakers," "Schedule," "About TEDx BMU," and "Register." This
                ensured that users could quickly find the information they
                needed without unnecessary complexity.
              </p>
              <li className="text-white mb-1 font-extrabold text-xl">
                Dynamic Visuals:
              </li>
              <p className="text-white mb-5">
                I incorporated images and graphics that captured the excitement
                and energy of the TEDx BMU event. These included speaker photos,
                past event highlights, and dynamic banners that visually
                communicated the innovative and inspiring atmosphere of the
                event.
              </p>
            </ul>
            <div className="ml-4">
              <p className="text-2xl font-semibold font-play mt-20 text-white ml-14 tracking-widest">
                Key Features
              </p>
              <ul className=" list-outside pl-5  ml-9 mt-8 tracking-widest ">
                <li className="text-white mb-5">
                  Event Theme Highlight: A prominent section on the homepage
                  featured the theme of TEDx BMU 2024, with dynamic imagery and
                  a short description of what attendees could expect.
                </li>

                <li className="text-white mb-5">
                  Speaker Profiles: Each speaker had a dedicated profile page
                  with a bio, topic summary, and social media links, allowing
                  users to connect with speakers or learn more about their
                  background.
                </li>

                <li className="text-white mb-5">
                  Event Schedule: The event’s agenda was laid out clearly, with
                  timings and speaker slots easily accessible, helping attendees
                  plan their day at the event.
                </li>

                <li className="text-white mb-5">
                  Smooth Registration Flow: The registration process was
                  designed to be simple and quick, with clear calls to action
                  leading users to the ticketing platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------next------------------------------------------------------- */}
        <div className="ml-32 mt-32 mr-28">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Architecture
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              To create the physical product, I first identified the business
              objectives and essential features aligned with user goals, and
              then developed a primary architectural plan. This plan was shaped
              by formulating "How Might We" statements, which address user needs
              and guide the implementation of tasks and technology solutions.
            </p>
            <div>
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
                How might we?
              </p>
              <ul className="list-decimal list-outside pl-5  ml-24 mt-8 mr-10 tracking-widest">
                <li className="text-white">
                  How might we help users discover books in a way that feels
                  less overwhelming?
                </li>
                <li className="text-white">
                  How might we personalize the book-shopping experience based on
                  mood, genre, and preferences?
                </li>
                <li className="text-white">
                  How might we create a sense of community for users, rewarding
                  them for sharing and purchasing books?
                </li>
                <li className="text-white">
                  How might we incorporate gamification elements to make the
                  shopping experience more engaging?
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* -----------------------------------------------------------------------------------------------------------------------------------------------     */}
        <div>
          <div className="ml-32 mt-32 mr-28">
            <div className="relative flex items-center py-4  ">
              {/* Small rectangle */}
              <div
                className="w-[9px] h-[59px] bg-[#C19162]"
                style={{ position: "relative" }}
              ></div>

              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Wireframes & Prototyping
              </p>
            </div>
            <div className="">
              <p className="text-white ml-16 mr-36 tracking-widest">
                I started with low-fidelity wireframes, gradually refining them
                based on user feedback. As this is a personal case study i was
                comforatble using a notepad when it comes to wireframes rather
                than using any online tool. I use tools when there is a
                requirement to use them
              </p>
            </div>
            <div className="py-4 ml-2 mt-10">
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Visual Design
              </p>
              <p className="text-white ml-16 mr-36 tracking-widest mt-5">
                Once the structure was in place, I moved to high-fidelity
                mockups.
              </p>
            </div>
          </div>
          <div className="mx-20 mt-10 bg-black">
            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-10">
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-20 pb-20">
              <div className=" rounded-lg ">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className=" rounded-lg ">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L1}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------------------------------------------------------------------------------------------------     */}
        <div className="ml-32 mt-20 mr-28">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Continuous feedback & Iterations
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              While the time constraints limited the full UX process, I
              incorporated ongoing feedback from the organizing committee and
              peers. This iterative process helped me make adjustments to the
              design, ensuring that all essential information was easy to access
              and the UI remained visually appealing. Despite the absence of
              formal usability testing, small adjustments based on real-time
              feedback improved navigation and the clarity of the website’s key
              features. This continuous loop of feedback allowed me to refine
              the website to better meet user needs, ensuring it stayed aligned
              with the event’s goals and user expectations.
            </p>
          </div>
          <div className="mt-10">
            <div className="relative flex items-center py-4  ">
              {/* Small rectangle */}
              <div
                className="w-[9px] h-[59px] bg-[#C19162]"
                style={{ position: "relative" }}
              ></div>

              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Challenges
              </p>
            </div>
            <div>
              <ul className="list-disc list-outside pl-5 ml-24 mt-5 mr-10 tracking-widest">
                <li className="text-white mb-9">
                  Time Constraints: The website needed to be designed within a
                  tight timeline, which limited the depth of user testing or
                  iterative design improvements.
                </li>
                <li className="text-white">
                  Minimal UX Process: Due to the time restrictions, I focused
                  more on the UI elements, with limited opportunity to conduct
                  user research or in-depth usability testing. However, the
                  clean, intuitive design mitigated potential UX issues.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="absolute w-[499.01px] h-0 left-1/2 transform -translate-x-[250px]  border border-white/70 blur-[3px]"></div> */}
        </div>
        {/* =========================================================================================================================== */}
        <div className="bg-black mt-28 pb-20">
          <div className="bg-black py-10 text-center mb-10">
            <p className="text-white text-xl font-bold font-play sm:text-3xl tracking-[0.25em]">
              More Like This
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 justify-center mx-auto max-w-screen-lg">
            {/* First Card */}
            <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
              {/* Top Image */}
              <div className="flex  justify-center">
                <img
                  src={bksm}
                  alt="Top Image"
                  className="w-[300px] h-58 object-cover " // Adjusted to make it larger
                />
              </div>

              {/* Middle Image */}
              <div className="flex  justify-center">
                <img
                  src={book}
                  alt="Middle Image"
                  className="w-[250px] h-30 object-cover mt-8" // Adjusted to match the height
                />
              </div>

              {/* Text Section */}
              <div className=" text-sm sm:text-base lg:text-lg text-center font-play text-[#EBD1FF]">
                <p>
                  E-Commerce, UX Research, Psychology, UI Web Design, Responsive
                  Design
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-6 text-center">
                <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                  UX Research
                </button>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-[#151515] w-[380px] text-white p-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
              {/* Top Image */}
              <div className="flex  justify-center">
                <img
                  src={jl}
                  alt="Top Image"
                  className="w-[400px] h-58 object-cover mt-3 mb-4" // Adjusted to make it larger
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
              <div className="mt-2 text-sm text-center sm:text-base lg:text-lg font-play text-[#EBD1FF]">
                <p>
                  E-Commerce, UX Research, UI Web Design, Branding, Color Guide
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-6 text-center">
                <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
                  UX Research
                </button>
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
