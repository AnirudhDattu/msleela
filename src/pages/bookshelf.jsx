import React from "react";
import BKa from "../components/bka";
import Book1 from "../components/book1";
import Book2 from "../components/book2";
import Header from "../components/navbar";
import Footer from "../components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/top";

function Bookshelf() {
  return (
    <>
      <Header />
      <BKa />
      <Book1 />
      <Book2 />
      <Footer />
    </>
  );
}

export default Bookshelf;
