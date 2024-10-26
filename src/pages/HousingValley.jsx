import Header from "../components/navbar";
import Footer from "../components/footer";
import Housing from "../assets/Housing.png";
import FirstImage from "../assets/Home-1.png";

const HousingValley = () => {
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
      <div className="flex flex-col items-center py-24 h-screen bg-[#101010]">
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
        <div className="ml-48 text-white">
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
        <div className="ml-48 text-white">
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

        <div className="ml-48 text-white">
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

      <Footer />
    </div>
  );
};

export default HousingValley;
