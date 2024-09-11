import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Bookshelf from "./pages/bookshelf";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Bookshelf />} path="/Bookshelf" />
      </Routes>
    </Router>
  );
}

export default App;
