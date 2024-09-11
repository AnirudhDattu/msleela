import React from "react";
import bookimg from "../assets/book2.png";

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
            <li className="text-white">
              <strong>Objective:</strong> To create a visually striking,
              intuitive, and engaging e-commerce platform for book lovers,
              combining modern design principles with strategic gamification
              elements to boost user engagement and sales.
            </li>
          </ul>
        </div>
        <div className="ml-32 mt-28">
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
            className="w-full max-w-[650px] h-auto object-cover ml-52 mt-20"
          />
        </div>
        <div className="ml-32 mt-32">
          <div className="relative flex items-center py-4  ">
            {/* Small rectangle */}
            <div
              className="w-[9px] h-[59px] bg-[#C19162]"
              style={{ position: "relative" }}
            ></div>

            {/* Text beside the rectangle */}
            <p className="text-2xl font-semibold font-play text-white ml-14 tracking-wider">
              Research and Insights
            </p>
          </div>
          <div className="">
            <p className="text-white ml-16 mr-36 tracking-wider">
              To better understand user needs and preferences, I conducted
              interviews with 10 avid readers who frequently shop for books
              online. The findings helped inform key design decisions.
            </p>
            <ul className="list-disc list-outside pl-5  ml-20 mt-8">
              <li className="text-white">
                <strong>Overwhelming Choice:</strong> Users felt overwhelmed by
                too many book options on existing sites and found it difficult
                to choose.
              </li>
              <li className="text-white">
                <strong>Desire for Personalization:</strong> Many users
                mentioned wanting recommendations based on their reading habits,
                moods, and favorite genres.
              </li>
              <li className="text-white">
                <strong>Community Feel:</strong> Readers loved the idea of
                sharing their favorite books and being part of a community, but
                found that current e-commerce platforms lacked this feature.
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
        <div className="mt-32 ml-32 h-screen bg-black overflow-auto">
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
      </div>
    </div>
  );
};

export default Book2;
