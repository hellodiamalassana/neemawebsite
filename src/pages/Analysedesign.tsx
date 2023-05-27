import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import AnalyseDesigndata from "../components/AnalyseDesigndata";
import Footer from "../components/Footer";

const AnalyseDesign = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Services */}
      <Navbar />
      <AnalyseDesigndata />
      <Footer />
    </>
  );
};

export default AnalyseDesign;
