import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BaseButton, ServiceCard } from "./Global";

const Objetsconnectésdata = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Services */}

      <div className="pt-5">
        <a
          href="https://calendly.com/ketabusiness/30min"
          target="_blank"
          rel="noreferrer"
        >
          <BaseButton> Planifier une réunion</BaseButton>
        </a>
      </div>
    </>
  );
};

export default Objetsconnectésdata;
