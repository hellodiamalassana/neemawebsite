import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Objetsconnectésdata from "../components/Objetsconnectésdata";
import Footer from "../components/Footer";

const Objetsconnectés = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Services */}
      <Navbar />
      <Objetsconnectésdata />
      <Footer />
    </>
  );
};

export default Objetsconnectés;
