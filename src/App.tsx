import { useEffect, useState } from "react";

import MenuIcon from "./assets/icons/menu-icon.svg";
import LogoIcon from "./assets/lo.png";
import LogoIcon1 from "./assets/logo.png";
import { BaseButton, ServiceCard } from "./components/Global/";
import Navbar from "./components/Navbar";
import { animateScroll as scroll, scroller, Element } from "react-scroll";
import { Link } from 'react-router-dom';
import NosOffres from "./components/Offres";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './pages/Projets';
import Newsletter from "./components/Newsletter";
import About from "./components/about";
import Temoignages from "./components/temoignages";
import Landing from "./components/Landing";



AOS.init({
  once: false,
  mirror: true,
  offset: 120,
  easing: "ease",
});

const scrollTo = () => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function App() {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="bg-[#292B00] font-averta h-full ">
      <div className="scroll-smooth md:mx-auto">
        <Navbar></Navbar>
        <Landing />
        
      </div >
    </div >
  );
}

export default App;
