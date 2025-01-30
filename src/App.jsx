// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Projects from "./pages/projects";
// import Bookshelf from "./pages/bookshelf";
// import Mindsync from "./pages/Mindsync";
// import Ted from "./pages/tedx";
// import Timeless from "./pages/timeless";
// import About1 from "./components/about1";
// import HousingValley from "./pages/HousingValley";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Home />} path="/" />
//         <Route element={<Projects />} path="/projects" />
//         <Route element={<Bookshelf />} path="/Bookshelf" />
//         <Route element={<Mindsync />} path="/Mindsync" />
//         <Route element={<Ted />} path="/TedxBMU" />
//         <Route element={<Timeless />} path="/Timeless" />
//         <Route element={<About1 />} path="/About" />
//         <Route element={<HousingValley />} path="/HousingValley" />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Bookshelf from "./pages/bookshelf";
import Mindsync from "./pages/Mindsync";
import Ted from "./pages/tedx";
import Timeless from "./pages/timeless";
import About1 from "./components/about1";
import HousingValley from "./pages/HousingValley";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint if needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  if (isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 text-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">
            Open on a PC for the Best Experience
          </h1>
          <p className="text-gray-600 mt-2">
            This website is best viewed on a laptop or desktop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Bookshelf />} path="/Bookshelf" />
        <Route element={<Mindsync />} path="/Mindsync" />
        <Route element={<Ted />} path="/TedxBMU" />
        <Route element={<Timeless />} path="/Timeless" />
        <Route element={<About1 />} path="/About" />
        <Route element={<HousingValley />} path="/HousingValley" />
      </Routes>
    </Router>
  );
}
