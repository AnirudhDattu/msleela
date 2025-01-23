import React from "react";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import up1 from "../assets/up1.png";
import up2 from "../assets/up2.png";
import up3 from "../assets/up3.png";
import up4 from "../assets/msphone.png";
import msf from "../assets/msfea.png";
import ms3 from "../assets/ms3.png";
import ifa from "../assets/ifa.png";

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
          <p className="text-xl font-semibold font-play text-white ml-14 tracking-wider mt-3">
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

        <div className=" my-20 flex flex-col md:flex-row items-center md:justify-center md:items-center gap-8 max-w-screen-xl mx-auto p-4 md:px-8">
          <img
            src={up3}
            alt="Responsive Image"
            className="w-auto max-w-xs md:max-w-sm object-contain md:w-1/2 md:ml-4 md:mr-8"
          />
          <div className="text-content text-white md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Empathy Mapping</h2>
            <p className="text-base leading-6 tracking-wider ">
              The empathy maps from “Srilekha” and "Anil raju" provided
              invaluable insights into the thoughts, emotions, behaviors, and
              pain points of our target users. By understanding their
              perspectives more deeply, we were able to tailor the MindSync
              app's features and design to effectively address their specific
              needs.
            </p>
          </div>
        </div>

        {/* =========================================================================================================================== */}
        <div className=" my-20 flex flex-col md:flex-row items-start md:justify-center md:items-start gap-4 max-w-screen-xl mx-auto p-4 md:px-8">
          <div className="text-content text-white md:w-1/2 text-center md:text-left">
            <div className="relative flex items-center py-4  ">
              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-16 tracking-widest">
                Competitor Analysis
              </p>
            </div>
            <div className="ml-2">
              <h1 className="text-white tracking-widest text-xl font-semibold font-play ml-16">
                Key takeaways:
              </h1>
              <ul className="list-disc list-outside tracking-widest pl-5 mr-12 ml-20 mt-8">
                <li className="text-white">
                  Calm stands on first in relaxation-oriented content and
                  personalized recommendations
                </li>
                <li className="text-white">
                  Headspace emphasizes structured meditation programs with
                  expert-led sessions
                </li>
                <li className="text-white">
                  Insight timer focuses on a broad selection of meditation
                  practices and a supportive user community
                </li>
              </ul>
            </div>
          </div>
          <img
            src={msf}
            alt="Responsive Image"
            className="w-auto max-w-xs md:max-w-md object-contain md:w-1/2 md:ml-4 md:mr-8"
          />
        </div>

        {/* =========================================================================================================================== */}
        <div className="">
          <div className="relative flex items-center py-4 ml-32 ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
              Ideation
            </p>
          </div>
          <div className="ml-32">
            <p className="text-white ml-16 mr-36 tracking-wider">
              During the ideation phase, a range of creative ideas were gathered
              aiming at integrating cognitive techniques with meditation
              practices to enhance mental wellness. The ideas are presented,
              considered their potential, and categorized into different levels
              of priority. After conducting some self-brainstorming sessions,
              drawing inspiration from user insights, competitive analysis, and
              the differentiation strategy. The goal was to create a pool of
              innovative concepts that aligned with the MindSync app's unique
              approach.
            </p>
          </div>
          <div className="flex justify-center items-center my-10">
            <img
              src={ms3}
              alt="Responsive Image"
              className="w-auto max-w-xs md:max-w-screen-lg object-contain"
            />
          </div>
          <div className="ml-32 mt-16 mr-56">
            <h1 className="text-white tracking-wider text-xl font-semibold font-play ml-16">
              Prioritizing Categories:
            </h1>
            <p>
              Considering the feasibility, user value, and alignment with the
              app's goals to prioritize the ideas:{" "}
            </p>
            <ul className="list-disc list-outside pl-5  ml-20 tracking-[0.12em] ">
              <li className="text-white ">
                Must-Have Ideas: These ideas directly align with the MindSync
                app's core purpose and user needs. They are feasible to
                implement and offer substantial value.
              </li>
              <li className="text-white ">
                Neutral Ideas: While these ideas may enhance the overall
                experience, they are not critical to the app's core
                functionality. They will be considered for future updates.
              </li>
              <li className="text-white ">
                Not Necessary Ideas: These ideas may not contribute
                significantly to the app's main objectives or may require
                extensive resources. They are not immediate priorities.
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------------------     */}

        <div className="ml-32 mt-14 mr-28">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Cognitive techniques
            </p>
          </div>
          <div className="">
            <div>
              <ul className="list-decimal list-outside pl-5  ml-24 mt-8 mr-52 tracking-widest">
                <li className="text-white">
                  Cognitive Restructuring: Users learn to identify negative
                  thought patterns and replace them with more balanced and
                  rational thoughts. This technique promotes healthier
                  perspectives and reduces anxiety.
                </li>
                <li className="text-white">
                  Thought Labeling: Users practice labeling their thoughts as
                  either "helpful" or "unhelpful." This technique promotes
                  detachment from thoughts and helps manage overwhelming
                  emotions.
                </li>
                <li className="text-white">
                  Cognitive Defusion: Users learn to distance themselves from
                  their thoughts, treating them as passing mental events rather
                  than absolute truths. This technique reduces the impact of
                  distressing thoughts.
                </li>
                <li className="text-white">
                  Positive Reframing: MindSync encourages users to reframe
                  negative situations by focusing on positive aspects. This
                  technique shifts perspective and enhances resilience.
                </li>
                <li className="text-white">
                  Mindful Observation: Users practice observing their thoughts
                  without judgment, creating a sense of detachment and reducing
                  reactivity.
                </li>
                <li className="text-white">
                  Emotional Acceptance: MindSync guides users in acknowledging
                  and accepting their emotions without judgment, fostering
                  emotional resilience.
                </li>
                <li className="text-white">
                  Goal Setting and Action Planning: MindSync assists users in
                  setting cognitive goals and creating action plans to challenge
                  unhelpful thoughts and behaviors.
                </li>
                <li className="text-white">
                  Breath Awareness with Cognitive Focus: Breathing exercises are
                  combined with cognitive prompts, enhancing mindfulness and
                  emotional awareness.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="ml-32 mt-32 mr-28 ">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Information Architecture
            </p>
          </div>
          <div className="flex justify-center items-center my-10">
            <img
              src={ifa}
              alt="Responsive Image"
              className="w-auto max-w-xs md:max-w-screen-md object-contain"
            />
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
              The MindSync app's design will focus on creating a serene and
              intuitive interface that supports users in their mindfulness and
              cognitive meditation journey. The concept is centered around
              simplicity, fluidity, and a sense of calm that reflects the app’s
              core purpose: to help users connect deeply with their emotions and
              thoughts.
            </p>
          </div>
          <div className="py-4 ml-2 mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Behind the Name & Branding
            </p>
            <p className="text-white ml-14 mr-36 tracking-widest mt-5">
              The name "MindSync" signifies the synchronization and balance of
              the mind, much like the phases of the moon that cycle in harmony.
              Just as the moon undergoes phases of waxing and waning, the
              MindSync app guides users through phases of mental growth and
              transformation. The moon's gentle glow symbolizes serenity and
              calm, aligning with the app's focus on integrating cognitive
              techniques with meditation for a metamorphic mental wellness
              experience. This name reflects the idea that achieving mental
              wellness is an ongoing journey, akin to the moon's cyclical
              phases. Users can "sync" their minds with the app's guided
              sessions to find balance. Thus, "MindSync" captures the essence of
              fostering a harmonious connection between the mind and the moon's
              rhythmic cycles.
            </p>
            <div className="py-4 mt-10">
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Color Scheme
              </p>
              <p className="text-white ml-14 mr-36 tracking-widest mt-5">
                Color Scheme Soft, calming hues like white and lavender evoke
                tranquility and peace. Accent colors pink, yellow areused to
                signify progress, focus, or milestones in meditation. Navy blue
                is used for the night mode.
              </p>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------------------------------------------------------------------------------------------------     */}
        <div>
          <div className="ml-32 mt-10 mr-28">
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
            <div className="flex justify-center items-center mt-5 p-5">
              <img
                src={up4}
                alt="Design Concept Image"
                className="h-full rounded-2xl"
              />
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
              Outcomes & Learnings
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-widest">
              Through meticulous research, empathetic understanding, and
              innovative thinking, a unique meditation application has been
              designed that not only addresses the challenges of modern mental
              wellness but also activates the cognitive senses in the users mind
              By infusing cognitive techniques with meditation practices,
              MindSync offers users a holistic approach to enhancing emotional
              regulation, self-awareness, and personal growth. The empathetic
              insights gathered from user personas and empathy maps have driven
              our design decisions, ensuring that the app resonates deeply with
              users. Furthermore, the competitive analysis helped us distinguish
              MindSync in the crowded field of meditation apps by capitalizing
              on the moon theme and its calming, meaningful symbolism.
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
                  <button className="hover:border-[#C19162] hover:text-[#C19162] tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1  border-2 border-white text-sm sm:text-base lg:text-lg">
                    View
                  </button>
                </Link>
              </div>
            </div>
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
          </div>
        </div>
        {/* =---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
import bksm from "../assets/booksm.png";

import book from "../assets/bkshlf.png";
import tedbg from "../assets/tedx.png";
import tedlg from "../assets/tedlg.png";
import { Link } from "react-router-dom";

export default Ms3;
