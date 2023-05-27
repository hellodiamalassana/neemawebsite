import { useEffect, useState } from "react";
import StudioRoomImg from "../assets/landing-bg.png";
import LandinImg from "../assets/landing.png";
import { Link } from 'react-router-dom';

import Dots from "../assets/dots.svg";
import { BaseButton, ServiceCard } from "./Global";
import { animateScroll as scroll, scroller, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-4 items-center">
    <div className="col-span-5 relative">
      <div className="relative z-20 px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#a52a2a] text-[35px]"
        >
          Construisons ensemble les meilleures expériences digitales
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-10 w-full lg:w-3/5"
        >
          <p className="text-sx text-[15px] font-thin text-[black] ">
            Pour tous vos projets stratégiques, d’ordre technique ou relevant des
            compétences , nous mettons en œuvre une solution à forte
            valeur ajoutée technologique et méthodologique.
          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500">
          <Link to="/Offre">
            <BaseButton>Nos Offres</BaseButton>
          </Link>

        </div>
      </div>
      <div className="absolute -bottom-28 z-10 -left-20">
        <img src={Dots} />
      </div>
    </div>

    <div className="col-span-7 relative pt-10">
      <div className="h-40 w-40 rounded-full bg-[black] absolute -left-20 z-10"></div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="relative z-20 "
      >
        {/* Image Landing*/}
        <img
          loading="lazy"
          src={LandinImg}
          alt=""
          className="rounded-tr-2xl"
        />
      </div>
      <div className="h-40 w-40 bg-[black] rounded-br-[100px] absolute right-20 -bottom-24 z-10"></div>
    </div>
  </div>

  );
};

export default Landing;
