import React from "react";
import Project from "../components/project";
import Header from "../components/navbar";
import Webdes from "../components/webdes";
import Footer from "../components/footer";
import ScrollToTop from "../components/top";

function Projects() {
  return (
    <>
      <Header />
      <Project />
      <Webdes />
      <Footer />
    </>
  );
}

export default Projects;
