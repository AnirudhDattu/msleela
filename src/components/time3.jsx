import React from "react";
import { Link } from "react-router-dom";
import timefe from "../assets/timefeat.png";
import timeuj from "../assets/timeuj.png";
import timeclse from "../assets/timeclsc.png";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.png";
import T5 from "../assets/T5.png";
import T6 from "../assets/T6.png";
import T7 from "../assets/T7.png";
import T8 from "../assets/T8.png";
import T9 from "../assets/T9.png";
import tedbg from "../assets/tedx.png";
import tedlg from "../assets/tedlg.png";

const Time3 = () => {
  return (
    <div className="bg-black">
      <div className="pt-10">
        <div className="relative flex items-center py-4 ml-32 ">
          {/* Small rectangle */}
          <div
            className="w-[9px] h-[59px] bg-[#C19162]"
            style={{ position: "relative" }}
          ></div>

          {/* Text beside the rectangle */}
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
            The proposal
          </p>
        </div>
        <div className="ml-32">
          <p className="text-white ml-16 mr-36 tracking-wider">
            In the highly competitive online jewelry market, it's crucial to
            create an engaging and luxurious shopping experience that appeals to
            users while maintaining ease of navigation and usability. The goal
            was to create a seamless, intuitive, and visually rich platform that
            would elevate the brand and enhance user engagement.
          </p>
        </div>
        {/* ================================================================================================== */}
        <div className="ml-32 mt-10">
          <h1 className="text-white tracking-wider text-xl font-semibold font-play ml-16">
            Key Objectives
          </h1>
          <ul className="list-disc list-outside pl-5  ml-20 mt-4">
            <li className="text-white">
              Provide a sophisticated, user-friendly platform for purchasing
              jewelry.
            </li>
            <li className="text-white">
              Emphasize the visual allure of the products while ensuring ease of
              use.
            </li>
            <li className="text-white">
              Incorporate personalization and industry-standard e-commerce
              features.
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
          <p className="text-white ml-16 mr-36 tracking-wider">
            The design process for Timeless was structured around a
            user-centered approach, balancing aesthetic appeal with
            functionality. Below is the breakdown of how the website was
            designed:
          </p>
          <p className="text-xl font-semibold font-play text-white ml-14 tracking-wider mt-9">
            🔍 User research and Competitor research
            <br />
            ✅ Designing goals
            <br />
            🏗️ Information architecture
            <br />
            🖌️ Visual UI design and Branding
            <br />
          </p>
        </div>
        {/* ============================================================================================= */}
        <div className="ml-32 mt-10">
          <h1 className="text-white tracking-wider text-xl font-semibold font-play ml-16">
            Project Overview
          </h1>
          <ul className="list-disc list-outside pl-5  ml-20 mt-4">
            <li className="text-white">
              <strong>Role:</strong>Lead UI/UX Designer
            </li>
            <li className="text-white">
              <strong>Duration:</strong> 1 Week
            </li>
            <li className="text-white">
              <strong>Tools Used:</strong> Figma, FigJam, Miro
            </li>
          </ul>
        </div>
        {/* =============================================================================================== */}
        <div className="ml-32 mt-16 mr-24">
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
          <div className="py-4 ml-2 mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Primary Research 🤔
            </p>
            <p className="text-white ml-14 mr-36 mt-10 tracking-widest">
              <strong>Objective:</strong> To understand user preferences, pain
              points, and expectations in the online jewelry shopping
              experience. Methodology
            </p>
            <p className="text-white ml-14 mr-36 tracking-widest mt-5">
              I conducted a combination of user interviews and surveys to gather
              direct insights from potential customers of luxury jewelry
              e-commerce platforms. These participants were selected based on
              their online shopping behavior, age range (25-50), and interest in
              luxury goods, specifically jewelry.
            </p>
          </div>
          <div className="py-4 ml-2 mt-10">
            <p className="list-decimal text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              <li>User Interviews 🎤</li>
            </p>
            <p className="text-white ml-16 mr-36 tracking-widest mt-5">
              Participants: 4 individuals (5 women, 3 men) who had purchased
              luxury jewelry online at least once in the past year.
            </p>
            <div className="text-white ml-16 mr-36 tracking-widest mt-5">
              <p>Focus Areas:</p>
              <ul className="list-disc ml-10 mt-3">
                <li>
                  What are the key factors they consider when purchasing jewelry
                  online?
                </li>
                <li>Pain points in navigating current jewelry websites.</li>
                <li>
                  Features they value the most (e.g., product descriptions,
                  images, recommendations).
                </li>
                <li>Preferences for checkout and payment options.</li>
              </ul>
            </div>
            <div className="text-white ml-16 mr-36 tracking-widest mt-5">
              <p>Key Findings:</p>
              <ul className="list-disc ml-10 mt-3">
                <li>
                  Users want high-quality visuals with the ability to zoom in
                  for detailed product inspection.
                </li>
                <li>
                  Clean, non-cluttered design was preferred to reflect the
                  luxury nature of the products.
                </li>
                <li>
                  6 out of 4 participants mentioned wanting personalized
                  recommendations based on past purchases or browsing behavior.
                </li>
                <li>
                  Most respondents valued clear return policies and delivery
                  estimates.
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4 ml-2 mt-10">
            <p className=" text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              2. Surveys 📄
            </p>
            <p className="text-white ml-16 mr-36 tracking-widest mt-5">
              Participants: 50 respondents, aged 25-50, who had made at least
              one online purchase in the past year.
            </p>
            <div className="text-white ml-16 mr-36 tracking-widest mt-5">
              <p>Survey Questions:</p>
              <ul className="list-disc ml-10 mt-3">
                <li>What frustrates you the most about jewelry websites?</li>
                <li>
                  How important are features like product reviews, bestseller
                  tags, and gift-wrapping options?
                </li>
                <li>
                  On a scale of 1-10, rate the importance of design aesthetics
                  in your online shopping experience.
                </li>
              </ul>
            </div>
            <div className="text-white ml-16 mr-36 tracking-widest mt-5">
              <p>Key Results:</p>
              <ul className="list-disc ml-10 mt-3">
                <li>
                  74% of respondents rated design aesthetics as a key factor in
                  their decision to shop from a site.
                </li>
                <li>
                  Over 60% mentioned getting frustrated by over-complicated
                  filters or too many product details cluttering the screen.
                </li>
                <li>
                  Users appreciated the ability to save items to a wishlist for
                  future purchases.
                </li>
              </ul>
            </div>
          </div>
          {/* ============================================================================================================= */}
          <div className="py-4 ml-2 mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Primary Research Insights:
            </p>
            <div className="text-sm p-5 md:p-10 font-play pl-5 mx-44">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className="px-5 py-5 mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#A66E69",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    Visuals and Design: A sleek, minimal interface with
                    high-quality imagery is crucial{" "}
                  </p>
                </div>
                <div
                  className="px-5 py-5 mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#7F4756",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    Personalization: Many users seek personalized
                    recommendations and features like wishlists.
                  </p>
                </div>
                <div
                  className="px-5 py-5 mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#542641",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    Checkout Experience: A transparent, step-by-step checkout
                    process with clear options
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================================================================================================================= */}
          <div className="py-4 ml-2 mt-10 mr-36">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Secondary Research 🧐
            </p>
            <p className="text-white font-play ml-14 mt-3">
              <span className="font-bold">Objective:</span>To analyze industry
              trends, existing best practices, and competitor approaches in the
              online luxury jewelry space.
            </p>
          </div>
          <div className="py-4 ml-2">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Industry Reports
            </p>
            <p className="text-white font-play ml-14 mt-3 mr-36">
              Analyzed reports from McKinsey & Company and Statista on trends in
              the luxury e-commerce sector and understood that, the online
              luxury goods market has seen steady growth, with high-end jewelry
              being a major contributor. Brands with sleek, easy-to-navigate
              websites are seeing higher conversion rates. Consumers expect
              seamless, multi-device experiences (desktop, mobile, tablet) and
              value transparency in pricing and return policies.
            </p>
          </div>
          {/* =============================================================================== */}
          <div className="py-4 ml-2">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Competitor Analysis
            </p>
            <p className="text-white font-play ml-14 mt-3 mr-36">
              It is very important to choose the right competition. As i am
              aiming for a luxury and sophisticated website i chose these luxury
              brands.
            </p>
            <div className="flex justify-center items-center mt-5 p-5">
              <img src={timefe} alt="Design Concept Image" className="w-1/2" />
            </div>
            <ul className=" text-white font-play list-disc ml-14 mt-5 mr-36">
              <li>
                Tiffany & Co. and Cartier focus heavily on the visual and luxury
                aspects, but they lack several user-centric features such as
                personalized recommendations, mini carts, and coupon options.
              </li>
              <li>
                Pandora offers more user-friendly options such as product
                recommendations and delivery time estimates, but it is less
                focused on minimalism, which Timeless aims to incorporate for a
                more high-end feel.
              </li>
            </ul>
          </div>
          {/* =================================================================================== */}
          <div className="py-4  mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              User Behavior Studies
            </p>
            <p className="text-white font-play ml-14 mt-3 mr-36">
              Studies from Baymard Institute on e-commerce usability sa that
              Cart abandonment rates are high, with complex checkout processes
              being a key reason and Features like mini carts and easy access to
              product details can significantly reduce friction in the user
              journey.
            </p>
          </div>
          <div className="py-4 ml-2 mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              Secondary Research Insights:
            </p>
            <div className="text-sm p-5 md:p-10 font-play pl-5 mx-44">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className="px-5 py-5 mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#A66E69",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    Design Trends: Minimalism is a consistent theme across
                    luxury brands
                  </p>
                </div>
                <div
                  className="px-2 py-3   mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#7F4756",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    Personalization Opportunities: There is a gap in many
                    high-end websites when it comes to personalized shopping
                    experiences.
                  </p>
                </div>
                <div
                  className="px-3 py-5 mb-3"
                  style={{
                    width: "175px",
                    height: "160px",
                    backgroundColor: "#542641",
                  }}
                >
                  <p className="text-white font-play tracking-wider">
                    User Friction in Checkout: Simplifying the checkout process,
                    reducing steps improve conversion rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================================================================== */}
        <div className="ml-32 mt-16 mr-24">
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
          <div className="py-4  mt-10">
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
              User journey map
            </p>
            <p className="text-white font-play ml-14 mt-3 mr-36">
              Understanding how users interact with the website at different
              stages is vital for improving the experience. Here's a detailed
              user journey map for Timeless:
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 p-5">
            <img src={timeuj} alt="Design Concept Image" className="w-3/4" />
          </div>
        </div>
        {/* ==================================================================================== */}
        <div className="ml-32 mt-14 ">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
              Prioritized Features to Incorporate
            </p>
          </div>
          <p className=" font-play text-white ml-16 tracking-wider">
            Based on research and user journey analysis, the following features
            were prioritized for Timeless:
          </p>
          <ul className="list-decimal list-outside pl-5  ml-20 mt-4 mr-52 tracking-widest">
            <li className="text-white">Clear Navigation</li>
            <li className="text-white">Minimal Filters</li>
            <li className="text-white">Personalized Recommendations</li>
            <li className="text-white">Mini Cart</li>
            <li className="text-white">Gift Wrap and Delivery Instructions</li>
            <li className="text-white">Delivery Estimator</li>
            <li className="text-white">Bestseller Alerts</li>
            <li className="text-white">Hidden Details on Product Pages</li>
            <li className="text-white">Coupon and Discount Options</li>
          </ul>
        </div>
        {/* ================================================================================================== */}
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
                UI Design Process
              </p>
            </div>

            <ul className=" list-outside pl-5 ml-14 mt-4 tracking-widest ">
              <p className="text-white mb-5">
                <span className="text-[#C94F60] font-extrabold">
                  Minimalism with Focus:
                </span>
                &nbsp;The focus remained on showcasing the jewelry. The clean,
                minimalistic layout was intentional to highlight the luxury of
                the products. Hidden details on product pages maintained the
                sleek aesthetic, contributing to a more engaging, less cluttered
                experience.
              </p>
              <p className="text-white mb-5">
                <span className="text-[#C94F60] font-extrabold">
                  Familiar Navigation:
                </span>
                &nbsp;Following industry standards for e-commerce navigation
                ensures that users can easily find what they are looking for.
                This reduces friction and builds trust.
              </p>
              <p className="text-white ">
                <span className="text-[#C94F60] font-extrabold">
                  Emotional Design with Personalization:
                </span>
                &nbsp;Features like recommendations based on user behavior and
                wishlist functionalities create a personalized, emotionally
                resonant shopping experience.
              </p>
            </ul>
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest mt-10">
              Branding
            </p>
            <p className="text-white ml-14 mt-3">
              The name Timeless was chosen to reflect the enduring nature of
              fine jewelry. Jewelry, especially luxury pieces, is often passed
              down through generations, symbolizing not just wealth, but legacy,
              history, and sentiment. The brand aims to represent pieces that
              stand the test of time in both quality and design.
            </p>
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest mt-10">
              Color Scheme
            </p>
            <p className="text-white ml-14 mt-3">
              The color palette for Timeless was carefully selected to evoke a
              sense of luxury, elegance, and sophistication, aligning with the
              premium nature of the jewelry showcased on the website. Each color
              plays a specific role in enhancing the overall aesthetic and user
              experience.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 p-5">
            <img src={timeclse} alt="Design Concept Image" className="w-2/3" />
          </div>
        </div>
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
                Wireframes & Prototyping
              </p>
            </div>
            <p className="text-white ml-16 mt-3">
              I started with low-fidelity wireframes, gradually refining them
              based on user feedback. As this is a personal case study i was
              comforatble using a notepad when it comes to wireframes rather
              than using any online tool. I use tools when there is a
              requirement to use them
            </p>
            <p className="text-2xl font-semibold font-play text-white ml-16 tracking-widest mt-10">
              Hi-Fedelity Design
            </p>
            <p className="text-white ml-16 mt-3">
              Once the structure was in place, I moved to high-fidelity mockups.
            </p>
          </div>
        </div>
        {/* ===================================================================================== */}
        <div className="mx-32 mt-10 bg-black flex flex-col items-center">
          <div className="bg-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-10">
            <div className="rounded-lg">
              <img
                src={T1}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg">
              <img
                src={T2}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-20 pb-20">
            <div className="rounded-lg">
              <img
                src={T3}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg">
              <img
                src={T4}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-20 pb-20">
            <div className="rounded-lg">
              <img
                src={T5}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg">
              <img
                src={T6}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-black grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-20 pb-20">
            <div className="rounded-lg">
              <img
                src={T7}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg">
              <img
                src={T8}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-black w-full flex justify-center items-center pt-20 pb-20">
            <div className="rounded-lg">
              <img
                src={T9}
                alt="Design Concept Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================================= */}
        <div className="ml-32 mr-32 mt-10 ">
          <div className="mr-52">
            <div className="relative flex items-center py-4  ">
              {/* Small rectangle */}
              <div
                className="w-[9px] h-[59px] bg-[#C19162]"
                style={{ position: "relative" }}
              ></div>

              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-widest">
                Outcomes and Reflections
              </p>
            </div>
            <p className="text-white ml-16 mt-3">
              One challenge was maintaining a consistent aesthetic while
              ensuring usability across all devices. The rich, dark colors
              required careful contrast management to ensure readability without
              losing the vintage charm. Another challenge was finding a balance
              between creative freedom (like the fantasy-driven "mystery box")
              and keeping the design practical for e-commerce.
            </p>
            <p className="text-2xl font-semibold font-play text-white ml-16 tracking-widest mt-10">
              Challenges & Iterations
            </p>
            <p className="text-white ml-20 mt-8">
              Challenge 1: Achieving balance between minimalism and the luxury
              feel. Solution: Used high-quality visuals, rich color accents, and
              minimal UI elements to retain the feeling of elegance without
              cluttering the interface.
            </p>
            <p className="text-white ml-20 mt-8">
              Challenge 2: Creating a seamless, intuitive checkout process.
              Solution: Introduced a multi-step, transparent checkout process
              that highlights progress, with clear options for coupon
              application, gift wrapping, and delivery estimation.
            </p>
            <p className="text-white ml-16 mt-8">
              The final design of Timeless successfully balances elegance,
              functionality, and ease of use. By focusing on a user-centered
              approach, I was able to craft a luxury experience that enhances
              both the aesthetic and practical aspects of online jewelry
              shopping. Timeless offers a rich, streamlined journey from
              browsing to purchase, ensuring that users feel confident, engaged,
              and satisfied throughout the process.
            </p>
            <p className="text-white ml-16 mt-8">
              The case study not only showcases my ability to create visually
              appealing and intuitive designs but also highlights my approach
              towards the design. This holistic process is key to crafting
              designs that stand out in the competitive e-commerce space while
              meeting user needs effectively.
            </p>
          </div>
        </div>

        {/* ====================================================================================================== */}

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
        {/* ====================================================================================================== */}
      </div>
    </div>
  );
};
import jl from "../assets/jule.png";
import tmls from "../assets/timeless.png";

export default Time3;
