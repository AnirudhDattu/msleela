import React from "react";
import { Link } from "react-router-dom";
import bookimg from "../assets/book2.png";
import thebook from "../assets/thebook.png";
import tedbg from "../assets/tedx.png";
import tedlg from "../assets/tedlg.png";
import L1 from "../assets/lap1.png";
import L2 from "../assets/L2.png";
import L3 from "../assets/L3.png";
import L4 from "../assets/L4.png";
import L5 from "../assets/L5.png";
import L6 from "../assets/L6.png";
import L7 from "../assets/L7.png";
import L8 from "../assets/L8.png";
import L9 from "../assets/L9.png";
import L10 from "../assets/L10.png";
import L11 from "../assets/L11.png";
import L12 from "../assets/L12.png";
import L13 from "../assets/L13.png";
import L14 from "../assets/L14.png";

const data = {
  SAYS: [
    "“I love finding new books, but it’s overwhelming with so many choices.”",
    "“I wish I could find books based on my mood—sometimes I want something uplifting, other times more reflective.”",
    "“I want a book community where I can feel recognized and share my favorites.”",
  ],
  THINKS: [
    "“What if I buy a book and don’t like it? I want recommendations I can trust.”",
    "“It would be great to get rewards or special features for buying more frequently.”",
    "“Price is important, but so is the reading experience.”",
  ],
  DOES: [
    "Spends hours browsing different websites, often unsure which books to pick.",
    "Checks reviews before purchasing but is still uncertain about new authors.",
    "Looks for discounts but sometimes buys full-price books if they seem worth it.",
  ],
  FEELS: [
    "Overwhelmed by choice and lack of personalized recommendations.",
    "Frustrated with poor book discovery features on existing sites.",
    "Excited when a website offers an immersive or community-based experience.",
  ],
};

const colors = ["#709F9D", "#BF81F0", "#C19162", "#5E98FE"];

const Book2 = () => {
  return (
    <div className="bg-black">
      <div className="">
        <div className="relative flex items-center py-4 ml-32 ">
          {/* Small rectangle */}
          <div
            className="w-[9px] h-[59px] bg-[#C19162]"
            style={{ position: "relative" }}
          ></div>

          {/* Text beside the rectangle */}
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
            Introduction
          </p>
        </div>
        <div className="ml-32">
          <p className="text-white ml-16 mr-36 tracking-wider">
            The Bookshelf is an e-commerce platform designed specifically for
            book lovers. My goal was to create a unique shopping experience that
            blends a royal dark vintage aesthetic with intuitive, user-centered
            functionality. Drawing from personal experiences with other book
            websites, I envisioned a platform that not only sells books but also
            cultivates a sense of mystery and excitement for readers. Below,
            I’ll walk through the design process, key decisions, and strategies
            used to create this experience.
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
              <strong>Duration:</strong> 1 week
            </li>
            <li className="text-white">
              <strong>Tools Used:</strong> Figma, FigJam, Miro
            </li>
            <li className="text-white mr-36">
              <strong>Objective:</strong> To create a visually striking,
              intuitive, and engaging e-commerce platform for book lovers,
              combining modern design principles with strategic gamification
              elements to boost user engagement and sales.
            </li>
          </ul>
        </div>
        <div className="ml-32 mt-28 ">
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
            🏗️ Architecture and UX
            <br />
            🎨 Design concept
            <br />
            💻 Wireframes & Visual UI Design
          </p>
        </div>
        <div className="ml-32 mt-20 mr-28">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Research and Insights
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              To better understand user needs and preferences, I conducted
              interviews with 10 avid readers who frequently shop for books
              online. The findings helped inform key design decisions.
            </p>
            <div>
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
                Key Findings & Patterns:
              </p>
              <ul className="list-disc list-outside pl-5  ml-20 mt-8 mr-10 tracking-widest">
                <li className="text-white">
                  <strong>Overwhelming Choice:</strong> Users felt overwhelmed
                  by too many book options on existing sites and found it
                  difficult to choose.
                </li>
                <li className="text-white">
                  <strong>Desire for Personalization:</strong> Many users
                  mentioned wanting recommendations based on their reading
                  habits, moods, and favorite genres.
                </li>
                <li className="text-white">
                  <strong>Community Feel:</strong> Readers loved the idea of
                  sharing their favorite books and being part of a community,
                  but found that current e-commerce platforms lacked this
                  feature.
                </li>
                <li className="text-white">
                  <strong>Mood-Based Filtering: </strong>Users expressed
                  excitement about filtering books based on their mood, as they
                  often felt a mismatch between their emotional state and the
                  books they were currently reading.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ================================================================================ */}
        <div className="mt-32 ml-32  bg-black overflow-auto">
          <div className="flex items-center py-4">
            {/* Small rectangle */}
            <div className="w-[9px] h-[59px] bg-[#C19162]"></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
              Empathy Mapping
            </p>
          </div>

          <div className="text-sm p-5 md:p-10 font-play">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(data).map(([category, texts], index) => (
                <div key={category}>
                  <h2 className="text-2xl font-semibold font-play text-white ml-14 tracking-wider mb-5">
                    {category}
                  </h2>
                  {texts.map((text, i) => (
                    <div
                      key={i}
                      className="px-5 py-5 mb-3"
                      style={{
                        width: "175px",
                        height: "160px",
                        marginLeft: i === 1 ? "10px" : "0", // Offset for the second box only
                        backgroundColor: colors[index % colors.length], // Dynamic background color based on column
                      }}
                    >
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              ))}
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
            <div>
              <h1 className="text-white tracking-wider text-lg font-semibold font-play ml-16 mt-12">
                💼 Business goals
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
            <div>
              <h1 className="text-white tracking-wider text-lg font-semibold font-play ml-16 mt-12">
                🤝 Common goals
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
        <div className="ml-32 mr-44">
          <div className="mr-52">
            <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
              Feature Priorities
            </p>
            <ul className="list-disc list-outside pl-5  ml-20 mt-8 tracking-widest ">
              <li className="text-white mb-5">
                Allow users to search for books based on their current mood to
                simplify the discovery process and increase engagement.
              </li>
              <li className="text-white mb-5">
                Tailor suggestions based on user preferences and browsing
                history to enhance relevance and user satisfaction
              </li>
              <li className="text-white mb-5">
                Ensure that users can easily browse and locate books with a
                straightforward, user-friendly interface.
              </li>
              <li className="text-white mb-5">
                Maintain a cohesive visual style that aligns with the vintage
                theme to create a pleasant and immersive experience.
              </li>
              <li className="text-white mb-5">
                Incorporate engaging features such as the mystery box and top
                reader picks to enhance the user experience and encourage
                exploration.
              </li>
            </ul>
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
        <div className="ml-32 mt-32 mr-28">
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
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              The design reflects a royal, dark vintage vibe to differentiate
              from competitors. The idea was to provide a premium, immersive
              experience, where users feel as if they are entering an exclusive
              library.
            </p>
          </div>
          <div className="py-4 ml-2 mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Color Scheme
            </p>
            <p className="text-white ml-16 mr-36 tracking-widest mt-5">
              The color scheme leans heavily on deep, dark tones with hints of
              gold and crimson, evoking the charm of vintage books. This design
              choice was intentional to appeal to avid readers and create a
              timeless, sophisticated feel.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 p-5">
            <img src={thebook} alt="Design Concept Image" className="w-3/4" />
          </div>
        </div>
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
                  src={L2}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L3}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L4}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L5}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L6}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L7}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L8}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L9}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-20 pb-20">
              <div className=" rounded-lg ">
                <img
                  src={L10}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className=" rounded-lg ">
                <img
                  src={L11}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className=" bg-black grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-20 pb-20">
              <div className="rounded-lg">
                <img
                  src={L12}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L13}
                  alt="Design Concept Image"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg">
                <img
                  src={L14}
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
              Challenges & Learnings
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              One challenge was maintaining a consistent aesthetic while
              ensuring usability across all devices. The rich, dark colors
              required careful contrast management to ensure readability without
              losing the vintage charm. Another challenge was finding a balance
              between creative freedom (like the fantasy-driven "mystery box")
              and keeping the design practical for e-commerce.
            </p>
            <div>
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
                Results & Learnings
              </p>
              <ul className="list-disc list-outside pl-5  ml-24 mt-8 mr-10 tracking-widest">
                <li className="text-white">
                  <strong>Improved Engagement:</strong> The gamified elements
                  like the top reader picks and mystery box increased engagement
                  by X%
                </li>
                <li className="text-white">
                  <strong>Seamless Navigation:</strong>
                  Users reported that the mood-based filters and genre
                  categorization made book discovery easier.
                </li>
                <li className="text-white">
                  <strong>Consistent Branding:</strong> The royal vintage
                  aesthetic received positive feedback for its uniqueness and
                  cohesiveness throughout the site.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-semibold font-play text-white ml-20 mt-10  tracking-wider">
                Next Steps
              </p>
              <ul className="list-disc list-outside pl-5  ml-24 mt-8 mr-10 tracking-widest">
                <li className="text-white">
                  <strong>Testing & Iteration:</strong>
                  Conduct more A/B testing to refine certain features like the
                  checkout process and product recommendations.
                </li>
                <li className="text-white">
                  <strong>Feature Expansion:</strong>
                  Implement user profiles where users can track their reading
                  history and unlock more mystery boxes based on purchases.
                </li>
              </ul>
            </div>
            <p className="text-white ml-16 mr-36 mt-10 tracking-widest ">
              The Bookshelf is more than just a bookstore—it’s a fully immersive
              experience for book lovers. By blending a vintage, luxurious
              aesthetic with thoughtful user-centered features, the site not
              only attracts readers but also keeps them engaged. My goal was to
              create a platform that is functional, visually appealing, and
              emotionally engaging, and I’m proud to see that reflected in the
              final product.
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 p-8 justify-center mx-auto transition max-w-screen-lg mt-10">
            {/* Second Card */}
            <div className="bg-[#151515] w-[400px]  text-white px-2 py-6 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white mx-auto">
              {/* Top Image */}
              <div className="flex  justify-center">
                <img
                  src={tedbg}
                  alt="Top Image"
                  className="w-[330px] h-58 object-cover mt-3 mb-4 " // Adjusted to make it larger
                />
              </div>

              {/* Middle Image */}
              <div className="flex  justify-center">
                <img
                  src={tedlg}
                  alt="Middle Image"
                  className="w-[180px] h-30 object-cover mt-8 " // Adjusted to match the height
                />
              </div>

              {/* Text Section */}
              <div className="mt-5 text-sm sm:text-base lg:text-lg text-center font-play tracking-wider text-[#EBD1FF]">
                <p>
                  University Project | Real time, UI Design, Testing, Responsive
                  Design
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-7 mb-3 text-center">
                <Link to="/TedxBMU">
                  <button className="hover:border-[#C19162] hover:text-[#C19162] tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1  border-2 border-white text-sm sm:text-base lg:text-lg">
                    View
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Card */}
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
                  className="w-[200px] h-30 object-cover mt-11" // Adjusted to match the height
                />
              </div>

              {/* Text Section */}
              <div className="tracking-wider text-sm text-center sm:text-base lg:text-lg font-play mt-8 mb-7 text-[#EBD1FF]">
                <p>
                  Internship Case study | E-Commerce, UX Process, Visual Design,
                  Color Guide
                </p>
              </div>

              {/* Button Section */}
              <div className="mt-6 text-center">
                <Link to="/Timeless">
                  <button className="hover:border-[#C19162] hover:text-[#C19162] tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1 mb-4  border-2 border-white text-sm sm:text-base lg:text-lg">
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

export default Book2;
