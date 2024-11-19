import { useState } from "react";
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
function App() {
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

export default App;
