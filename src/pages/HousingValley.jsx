import Header from "../components/navbar";
import Footer from "../components/footer";
import Housing from "../assets/Housing.png";
import FirstImage from "../assets/Home-1.png";
import React, { useEffect } from "react";
import T1 from "../assets/hvs1.png";
import T2 from "../assets/hvs2.png";
import T3 from "../assets/hvs3.png";
import p1 from "../assets/hsps.png";
import t1 from "../assets/hs11.png";
import t2 from "../assets/hs12.png";
import t3 from "../assets/hs13.png";
import HousingValley1 from "../assets/HousingValley1.png";
import HousingValley2 from "../assets/HousingValley2.png";
import HousingValley3 from "../assets/HousingValley3.png";
import HousingValley4 from "../assets/HousingValley4.png";
import { Link } from "react-router-dom";

const HousingValley = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top
  }, []);

  return (
    <div className="bg-[#101010]">
      <Header />
      <div className="relative h-[350px] flex justify-center items-center bg-cover bg-center">
        <img
          src={Housing}
          width={1924}
          height={455}
          className="w-[100vw] h-full absolute z-30 top-0 left-0"
        />
        <div className="w-screen h-full absolute top-0 left-0 bg-[#101010ff] z-20"></div>
        {/* Breadcrumb placed in the top-left corner */}
        <nav
          aria-label="Breadcrumb"
          className="absolute top-8 left-10 z-30 text-white"
        >
          <ol className="flex items-center gap-1 text-sm text-gray-200">
            <li>
              <a href="/" className="block transition hover:text-gray-300">
                Home
              </a>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <a
                href="/projects"
                className="block transition hover:text-gray-300"
              >
                Projects
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <a
                href="/projects"
                className="block transition font-bold hover:text-gray-300"
              >
                HousingValley
              </a>
            </li>
          </ol>
        </nav>

        <div className="text-center z-30">
          <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-play leading-10 tracking-wider">
            HousingValley
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="flex flex-col items-center py-24 h-screen ">
        {/* Centered Image */}
        <img
          src={FirstImage}
          alt="Book"
          className="w-full max-w-[900px] h-auto object-cover"
        />

        {/* Bold Text Below Image */}
        <p className="mt-9 mx-52 text-[30px] tracking-widest font-semibold font-play text-center text-white">
          Housing Valley is a user - friendly platform for accurate house price
          predictions.
        </p>
      </div>
      <div className="mt-8 mb-24 flex flex-col gap-8">
        <div className="relative flex items-center ml-32">
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
            Housing Valley is a data-driven house price prediction application
            developed as part of our university major project. The goal was to
            design an intuitive platform that allows users—whether homebuyers or
            real estate professionals—to predict house prices based on key data
            inputs. I led the UI/UX design process, ensuring that the platform
            was user-centric, visually engaging, and functionally efficient.
          </p>
        </div>
        <div className="ml-48 flex gap-4 flex-col">
          <p className="text-2xl font-semibold font-play text-white tracking-wider">
            Project Overview
          </p>
          <ol className="text-white ml-4 tracking-wider list-disc">
            <li>Role: Lead UI/UX Designer</li>
            <li>Duration: 3 months</li>
            <li>Tools Used: Figma, FigJam</li>
          </ol>
        </div>
        <div className="relative flex items-center ml-32 mt-16">
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
        <div className="ml-48 text-xl font-semibold font-play text-white tracking-wider mt-3">
          <p>📝 Data collection</p>
          <p>🏗️ Storyboards</p>
          <p>📜 Design Principles Analysis</p>
          <p>🖌️ UI Design </p>
          <p>🔁 Iterations & Feedback</p>
          <p>🧪 Usability Testing</p>
        </div>
        <div className="relative flex items-center ml-32 mt-16">
          {/* Small rectangle */}
          <div
            className="w-[9px] h-[59px] bg-[#C19162]"
            style={{ position: "relative" }}
          ></div>

          {/* Text beside the rectangle */}
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
            Data Collection
          </p>
        </div>
        <div className="ml-48 mr-32 text-white">
          <p className="mb-4">
            For Housing Valley, the following qualitative data collection
            methods were used to deeply understand user needs and behaviors:
          </p>
          <ol className="text-white ml-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Think-Aloud Protocols: Users verbalized their thoughts while
              interacting with early prototypes, allowing us to observe their
              decision-making process and identify usability issues.
            </li>
            <li>
              Interviews: One-on-one interviews were conducted with potential
              users to gather insights about their needs, preferences, and
              challenges in predicting house prices.
            </li>
            <li>
              Group Discussions: Facilitated group discussions to encourage
              collaboration and gain diverse perspectives on user requirements
              and expectations.
            </li>
            <li>
              Observations: Observed users in their natural environments while
              interacting with similar platforms to capture behavioral patterns
              and usability gaps.
            </li>
          </ol>
        </div>
        <div className="relative flex items-center ml-32 mt-16">
          {/* Small rectangle */}
          <div
            className="w-[9px] h-[59px] bg-[#C19162]"
            style={{ position: "relative" }}
          ></div>

          {/* Text beside the rectangle */}
          <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
            Key Findings
          </p>
        </div>

        <div className="ml-48 mr-32 text-white">
          <ol className="text-white ml-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Users’ Priority on Accuracy: Users highly valued accurate house
              price predictions and were more likely to trust platforms that
              provided reliable estimates based on real data.
            </li>
            <li>
              Desire for Simplicity: Users expressed a preference for a clean,
              simple interface with easy-to-understand data. Overly complex
              charts and overwhelming information were seen as barriers.
            </li>
            <li>
              Location-Based Customization: Users emphasized the need for
              location-specific predictions. They wanted to filter and compare
              house prices based on specific neighborhoods or regions.
            </li>
            <li>
              Visual Clarity: Visual representations of price trends, such as
              graphs and charts, were considered helpful, but only if they were
              clear and easy to interpret.
            </li>
            <li>
              Mobile Access: Many users preferred using the application on
              mobile devices, indicating the need for a responsive and
              mobile-friendly design.
            </li>
            <li>
              User Trust: Trust in the platform was crucial, and users expected
              clear explanations of how predictions were generated, along with a
              transparent use of data.
            </li>
          </ol>
        </div>
      </div>
      <div className="relative flex items-center ml-32 mt-16 bg-[#101010]">
        {/* Small rectangle */}
        <div
          className="w-[9px] h-[59px] bg-[#C19162]"
          style={{ position: "relative" }}
        ></div>

        {/* Text beside the rectangle */}
        <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
          Storyboards
        </p>
      </div>
      <div className="mx-32 mt-10 flex flex-col items-center bg-[#101010]">
        {/* Top Image */}
        <div className="bg-[#101010] w-full flex justify-center items-center pt-10 pb-10">
          <div className="w-1/2">
            <img
              src={T1}
              alt="Design Concept Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* Bottom Two Images */}
        <div className="bg-[#101010] grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-10">
          <div className="w-full">
            <img
              src={T2}
              alt="Design Concept Image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src={T3}
              alt="Design Concept Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative flex items-center ml-32 mt-16 bg-[#101010]">
        {/* Small rectangle */}
        <div
          className="w-[9px] h-[59px] bg-[#C19162]"
          style={{ position: "relative" }}
        ></div>

        {/* Text beside the rectangle */}
        <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
          Design Principles Analysis (HCI)
        </p>
      </div>
      <div className="ml-32">
        <p className="text-white ml-16 mr-36 tracking-wider">
          This analyis is a part of the human computer interaction experiment
          design. Here me and my team identified the key features and their
          associated design principles and their significance
        </p>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      <div className="py-4 mx-32 mt-10">
        <div className="text-sm p-5 md:px-10 font-play ml-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#798495",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Drag bar in area Affordance, Feedback{" "}
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#709F9D",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Select Location Constraint
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#9AAEA0",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Logout Pop up Feedback
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#A09081",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Like button turning red Feedback
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 mx-32 ">
        <div className="text-sm px-5 pb-5 md:px-10  font-play ml-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#324360",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Back Arrow Affordance{" "}
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#768484",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Email & Password Constraints
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#4C5E50",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Show password icon Visibility
              </p>
            </div>
            <div
              className="flex justify-center items-center px-5 py-5 mb-3"
              style={{
                width: "175px",
                height: "160px",
                backgroundColor: "#564F40",
              }}
            >
              <p className="text-white font-play text-xl text-center">
                Color change in nav bar Feedback
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================== */}
      <div className="relative flex items-center ml-32 mt-10">
        {/* Small rectangle */}
        <div
          className="w-[9px] h-[59px] bg-[#C19162]"
          style={{ position: "relative" }}
        ></div>

        {/* Text beside the rectangle */}
        <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
          UI Design
        </p>
      </div>
      <div className="ml-32">
        <p className="text-white ml-16 mr-36 tracking-wider">
          These findings shaped the design process, leading to a user-friendly,
          intuitive, and responsive application focused on accurate and clear
          house price predictions. After many iterations and feedback, these are
          the final designs of Housing Valley.
        </p>
      </div>
      <div className="flex justify-center items-center my-14 h-screen ">
        {/* Centered Image */}
        <img
          src={p1}
          alt="Book"
          className="w-full max-w-[1000px] h-auto object-cover"
        />
      </div>
      <div className="my-14 mx-[10.5rem]">
        <div className="flex flex-wrap justify-between">
          <div className="relative text-white w-[25rem]">
            <div className="flex items-center mb-8">
              <div
                className="w-[9px] h-[59px] bg-[#C19162]"
                style={{ position: "relative" }}
              ></div>

              {/* Text beside the rectangle */}
              <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
                Feedback, iterations with improvement
              </p>
            </div>
            <div className="w-[17rem] ml-14">
              <p>
                Issue-1 <span>Date/month: April 2023</span>
              </p>
              <p>Duration:4</p>
              <p>Number of participants: 4 </p>
              <p>Type of participants: within team members and friends </p>
              <p>Method of feedback: focus group discussion</p>
              <p>
                Type of usability issue encountered: no flexibility in selecting
                the number of BHK and bathrooms. there are only limited number
                of options.
              </p>
            </div>
          </div>
          <img
            src={HousingValley1}
            alt="HousingValley1"
            className="h-[25rem]"
          />
        </div>
        <div className="flex ml-14 mt-24 flex-wrap justify-between">
          <img
            src={HousingValley2}
            alt="HousingValley2"
            className="h-[25rem]"
          />
          <div className="relative text-white w-[17rem] mr-20 mt-20">
            <p>
              Issue-2 <span>Date/month: April 2023</span>
            </p>
            <p>Duration:3 days</p>
            <p>Number of participants: 3 </p>
            <p>Type of participants: Friends </p>
            <p>Method of feedback: observation</p>
            <p>
              Type of usability issue encountered: difficulty in finding the
              edit profile option
            </p>
          </div>
        </div>
        <div className="flex ml-14 mt-24 flex-wrap justify-between">
          <div className="relative text-white w-[17rem] ml-20 mt-20">
            <p>
              Issue-3 <span>Date/month: April 2023</span>
            </p>
            <p>Duration:3 days</p>
            <p>Number of participants: 3 </p>
            <p>Type of participants: Friends, Family </p>
            <p>Method of feedback: Think Aloud</p>
            <p>
              Type of usability issue encountered: confusion in the colour of
              icons in the navigation bar as it does not match with colour
              palette
            </p>
          </div>
          <img
            src={HousingValley3}
            alt="HousingValley3"
            className="h-[25rem]"
          />
        </div>
        <div className="flex ml-14 mt-24 flex-wrap justify-between">
          <img
            src={HousingValley4}
            alt="HousingValley4"
            className="h-[25rem]"
          />
          <div className="relative text-white w-[17rem] mr-20 mt-20">
            <p>
              Issue-4 <span>Date/month: April 2023</span>
            </p>
            <p>Duration:2 days</p>
            <p>Number of participants: 3 </p>
            <p>Type of participants: Friends </p>
            <p>Method of feedback: interviews and observations from users </p>
            <p>
              Type of usability issue encountered: Confusion in the filter icon
              as it is different across pages Improvement: used the same filter
              icon across all pages
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center ml-32 mt-20">
        {/* Small rectangle */}
        <div
          className="w-[9px] h-[59px] bg-[#C19162]"
          style={{ position: "relative" }}
        ></div>

        {/* Text beside the rectangle */}
        <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
          Usability Testing
        </p>
      </div>
      <div className="relative flex items-center ml-32 mt-10">
        <p className="text-2xl font-semibold font-play text-white ml-16 tracking-wider">
          Learnability:
        </p>
      </div>
      <p className="text-white ml-48 my-5 mr-36 tracking-wider">
        Refers to how easily users can learn about how to use our application.
        In our application we ensured learnability by the following features:
      </p>
      <div className="ml-52 mr-36  text-white">
        <ol className="text-white ml-4 mt-4 flex flex-col gap-4 tracking-wider list-disc">
          <li>
            Consistent and clear interface: in our design, we have implemented a
            straight forward and easy to understand visual elements. This helps
            users to quickly grasp how the application works.
          </li>
          <li>
            Familiar design patterns: used familiar design patterns such as
            inputting the property details, action buttons and position of
            navigation bar. This reduces the learning curve of users as they can
            understand how the apps works with their existing knowledge.
          </li>
          <li>
            Clear instructions and icons: We have provided clear instructions
            throughout the application through labels, notable icons to help
            users understand the application's functionality.
          </li>
          <li>
            Minimal load: The application has different pages for different
            elements in the app, like the favourites and saved pages. This helps
            users reduce confusion, complete tasks efficiently and easier to
            learn about the application
          </li>
        </ol>
      </div>
      <p className="text-white ml-48 mt-5 mr-36 tracking-wider">
        Evaluation: We have followed a quantitative approach and conducted
        usability testing, where we have collected feedback on the clarity the
        app provides through interviews of the users.
      </p>
      <div>
        <div className="relative flex items-center ml-32 mt-16">
          <p className="text-2xl font-semibold font-play text-white ml-16 tracking-wider">
            Efficiency:
          </p>
        </div>
        <p className="text-white ml-48 my-5 mr-36 tracking-wider">
          Refers to how quickly and easily users can perform task in the
          application
        </p>
        <div className="ml-52 mr-36  text-white">
          <ol className="text-white ml-4 mt-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Simplified task flow: our design follows a simple workflow with
              minimal steps required to perform tasks.
            </li>
            <li>
              Clear feedback: the design provides clear feedback to users such
              as change in colour of buttons as they click on it, notifications.
              This is time saving for users and makes it easier for their next
              step.
            </li>
          </ol>
        </div>
        <p className="text-white ml-48 mt-5 mr-36 tracking-wider">
          Evaluation: We conducted a quantitative evaluation for this metric by
          dividing the tasks and measuring time taken to complete each task,
          number of clicks required and comparing the results. The tasks were
          divided into three types and 5 - 7 users were asked perform the task:
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-5 mx-48">
        <div className="rounded-lg">
          <img src={t1} alt="Design Concept Image" className="w-full h-auto" />
        </div>
        <div className="rounded-lg">
          <img src={t2} alt="Design Concept Image" className="w-full h-auto" />
        </div>
        <div className="rounded-lg">
          <img src={t3} alt="Design Concept Image" className="w-full h-auto" />
        </div>
      </div>
      <div>
        <div className="relative flex items-center ml-32 mt-5">
          <p className="text-2xl font-semibold font-play text-white ml-16 tracking-wider">
            Memorability:
          </p>
        </div>
        <p className="text-white ml-48 my-5 mr-36 tracking-wider">
          Refers to how well users can remember how to use the application after
          a period of time. we have ensured this by the following features:
        </p>
        <div className="ml-52 mr-36  text-white">
          <ol className="text-white ml-4 mt-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Consistent and simple elements: we have maintained the colour
              schemes, fonts and icons to provide a cohesive visual experience.
              Consistency makes it easier to remember and recognize even after a
              long time.
            </li>
            <li>
              Attractive design and layout: maintaining an aesthetic and
              appealing design makes the app stand out in user's mind
            </li>
          </ol>
        </div>
        <p className="text-white ml-48 mt-5 mr-36 tracking-wider">
          Evaluation: we have evaluation memorability by performing usability
          testing with users who have used the application previously and
          observed how much they are able to remember or recall about the app.
        </p>
      </div>
      <div>
        <div className="relative flex items-center ml-32 mt-16">
          <p className="text-2xl font-semibold font-play text-white ml-16 tracking-wider">
            Error Protection:
          </p>
        </div>
        <p className="text-white ml-48 my-5 mr-36 tracking-wider">
          Alerting a user when they are doing something wrong in the app.
        </p>
        <div className="ml-52 mr-36  text-white">
          <ol className="text-white ml-4 mt-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Confirmation help: we have included confirmation prompts for some
              actions such as deleting something, logging out. This helps user
              to avoid unintentional errors.
            </li>
            <li>
              Alerts: alerting the users when are entering wrong type of
              information in the input fields like email or password.
            </li>
          </ol>
        </div>
        <p className="text-white ml-48 mt-5 mr-36 tracking-wider">
          Evaluation: We have evaluated this metric using qualitative analysis
          by observing the error patterns and standard errors users make or
          experience in almost every application.
        </p>
      </div>
      <div className="pb-15">
        <div className="relative flex items-center ml-32 mt-16">
          <p className="text-2xl font-semibold font-play text-white ml-16 tracking-wider">
            Satisfaction:
          </p>
        </div>
        <p className="text-white ml-48 my-5 mr-36 tracking-wider">
          Satisfaction: Refers to the overall experience of the user while using
          the application
        </p>
        <div className="ml-52 mr-36  text-white">
          <ol className="text-white ml-4 mt-4 flex flex-col gap-4 tracking-wider list-disc">
            <li>
              Visually appealing: The app's clean and uncluttered look
              contributed towards users’ satisfaction of the application. This
              can create a positive impression among the users with their
              experience. Even the pleasing colour scheme of blue and white
              added to it.
            </li>
            <li>
              Smooth transitions: The design has smooth and not-so-sharp
              transitions between pages which enhances user satisfaction in
              sense of responsiveness.
            </li>
          </ol>
        </div>
        <p className="text-white ml-48 mt-5 mr-36 tracking-wider pb-8">
          Evaluation: We have interviewed users personally to collect feedback
          from users on their satisfaction with the application.
        </p>
      </div>
      {/* =========================================================================================================================== */}
      <div className="bg-black mt-12 pb-20">
        <div className="bg-black py-10 text-center mb-4">
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
                Internship Case study | E-Commerce, UX Research, Psychology, UI
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
                <button className=" hover:border-[#C19162] hover:text-[#C19162] tracking-widest bg-[#151515] text-white px-8 py-1 sm:px-14 sm:py-4 lg:px-10 lg:py-1 mb-4  border-2 border-white text-sm sm:text-base lg:text-lg">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import bksm from "../assets/booksm.png";
import book from "../assets/bkshlf.png";
import jl from "../assets/jule.png";
import tmls from "../assets/timeless.png";

export default HousingValley;
