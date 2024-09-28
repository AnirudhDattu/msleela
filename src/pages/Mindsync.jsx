import Mind1 from "../components/mind1";
import Header from "../components/navbar";
import Footer from "../components/footer";
import Ms2 from "../components/ms2";
import Ms3 from "../components/ms3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Mindsync() {
  return (
    <>
      <Header />
      <Mind1 />
      <Ms2 />
      <Ms3 />
      <Footer />
    </>
  );
}

export default Mindsync;
