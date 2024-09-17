import React from "react";
import bookimg from "../assets/book2.png";
import thebook from "../assets/thebook.png";
import L1 from "../assets/lap1.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import up1 from "../assets/up1.png";
import up2 from "../assets/up2.png";
import up3 from "../assets/up3.png";

const Ms3 = () => {
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
            Purpose & Goal
          </p>
        </div>
        <div className="ml-32">
          <p className="text-white ml-16 mr-36 tracking-wider">
            The app's primary goal is to provide users with the tools to connect
            with their thoughts and emotions, fostering mindfulness and
            self-awareness. MindSync aims to create an environment where users
            can practice cognitive meditation in a way that resonates with their
            unique needs, while also offering a supportive community to share
            experiences and seek guidance. Ultimately, as the name of the
            application depicts, the MindSync UI/UX design aims to synchronize
            users' minds with their cognitive senses, empower users with an
            enriching and transformative experience, helping them cultivate
            emotional resilience, improve cognitive habits, and lead more
            balanced and fulfilling lives.
          </p>
        </div>
        {/* ================================================================================================== */}
        <div className="ml-32 mt-10">
          <h1 className="text-white tracking-wider text-xl font-semibold font-play ml-16">
            Project Overview
          </h1>
          <ul className="list-disc list-outside pl-5  ml-20 mt-8">
            <li className="text-white">
              <strong>Role:</strong>Lead UI/UX Designer
            </li>
            <li className="text-white">
              <strong>Duration:</strong> 1 month
            </li>
            <li className="text-white">
              <strong>Tools Used:</strong> Figma, FigJam
            </li>
          </ul>
        </div>
        {/* ========================================================================================== */}
        <div className="ml-32 mt-14 ">
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
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider mt-9">
            🔍 Discover
            <br />
            📝 Research & user needs
            <br />
            💡 Ideation
            <br />
            🏗️ Architecture and UX
            <br />
            🎨 Design
            <br /> 💻 Prototype
          </p>
        </div>
        <div className="ml-32 mt-16 mr-28">
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
          <div className="bg-black">
            <p className="text-white ml-16 mr-36 tracking-widest">
              I conducted an online survey to gather user insights on mental
              health challenges, meditation habits, and preferences. Some sample
              questions are as follows:
            </p>
            <div>
              <ul className="list-decimal list-outside pl-5  ml-20 mt-5 mr-10 tracking-widest">
                <li className="text-white">
                  “What mental wellness challenged do you face most frequently”
                </li>
                <li className="text-white">“How often do you meditate”</li>
                <li className="text-white">
                  “What type of meditation do you prefer”
                </li>
                <li className="text-white">
                  “Are you familiar with cognitive techniques”
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------next---------------------------------------------------------- */}
        <div className=" mx-32 mt-10 grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4">
          <img
            src={g1}
            alt="Image 1"
            className="w-full h-72 object-contain hidden md:block"
          />
          <img
            src={g2}
            alt="Image 2"
            className="w-full h-72 object-contain hidden md:block"
          />
          <img
            src={g3}
            alt="Image 3"
            className="w-full h-72 object-contain hidden md:block"
          />
          <img
            src={g4}
            alt="Image 4"
            className="w-full h-72 object-contain hidden md:block"
          />
        </div>

        {/* --------------------------------------------------------------next------------------------------------------------------------ */}
        <div className="ml-32 mr-44 mt-20">
          <div className="">
            <p className="text-2xl font-semibold font-play text-white ml-16  mt-10  tracking-wide">
              Key Findings & Patterns:
            </p>
            <ul className="list-disc list-outside pl-5  ml-20 mt-8 tracking-[0.12em] ">
              <li className="text-white ">
                Mental Wellness Challenges: Stress and anxiety are the most
                common challenges reported, emphasizing the need for effective
                coping mechanisms.
              </li>
              <li className="text-white ">
                Meditation Frequency: A significant portion of respondents say
                that they don’t have a schedule and meditate whenever they feel
                like it, indicating us the need for an application.
              </li>
              <li className="text-white ">
                Preference for Meditation Type: Mindfulness and breathing
                exercises are popular, suggesting users appreciate both calming
                and focused practices.
              </li>
              <li className="text-white ">
                Interest in Cognitive Aspects: Many respondents express their
                confused knowledge about cognitive techniques
              </li>
              <li className="text-white ">
                Personalization Importance: Personalized content based on
                emotional state is highly valued by respondents.
              </li>
              <li className="text-white ">
                Engaging Cognitive Techniques: Many of the respondents say that
                they occasionally or haven’t integrated cognitive techniques
                into their meditation.
              </li>
              <li className="text-white ">
                Community Engagement: A substantial number of users are likely
                to engage with a community platform for sharing insights and
                experiences.
              </li>
              <li className="text-white ">
                Valuable App Aspects: Respondents find guided cognitive
                meditation sessions, personalized insights, and cognitive
                techniques for emotional regulation to be particularly valuable
                in a meditation app.
              </li>
            </ul>
          </div>
        </div>
        {/* ------------------------------------------------------------------------next------------------------------------------------------- */}
        <div className="mx-32 hidden md:block">
          <div className="relative flex items-center py-4  ">
            <p className="text-2xl my-20 font-semibold font-play text-white ml-14 tracking-widest">
              User Persona
            </p>
          </div>
          <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2 mx-20">
            <img
              src={up1}
              alt="Image 1"
              className="w-auto h-full object-contain hidden md:block"
            />
            <img
              src={up2}
              alt="Image 2"
              className="w-auto h-full object-contain hidden md:block"
            />
          </div>
        </div>
        {/* =========================================================================================================================== */}

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            src={up3}
            alt="Responsive Image"
            className="w-auto max-w-xs md:max-w-sm object-contain md:w-1/2 md:ml-4 md:mr-8"
          />
          <div className="text-content md:w-1/2 text-white">
            <h2 className="text-2xl font-bold mb-4">Responsive Text Section</h2>
            <p className="text-base leading-6">
              This is an example of a responsive layout where the image is on
              the left and the text is on the right on larger screens, but the
              content stacks vertically on mobile screens.
            </p>
          </div>
        </div>

        {/* =========================================================================================================================== */}
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
            <img src={thebook} alt="Design Concept Image" className="h-lvh" />
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

export default Ms3;
