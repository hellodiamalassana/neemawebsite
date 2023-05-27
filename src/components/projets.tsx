import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

import { BaseButton, ServiceCard } from "./Global";
import Portfolio from '../components/portfolio/Portfolio';

const NosProjets = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      < section id="services" className="relative" >
      <Portfolio />

        {/* phone, email, address <p className="autoTypingSection text-center pt-3">
          Bientot des projets
          <Typewriter
            words={[" ." , " .." , " ..."]}
            loop={Infinity}
            cursor
            cursorStyle=""
            typeSpeed={2}
            deleteSpeed={5}
            delaySpeed={1000}
          />
        </p> */}
      </section >
      
    </>

  );
};

export default NosProjets;
