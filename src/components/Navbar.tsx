import { useEffect, useState } from "react";
import CodeIcon from "../assets/icons/code.svg";
import WalletIcon from "../assets/icons/empty-wallet.svg";
import MenuIcon from "../assets/icons/menu-icon.svg";
import LogoIcon from "../assets/Neema.png";
import LogoIcon1 from "../assets/logo.png";
import { BaseButton, ServiceCard } from "../components/Global/";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <div className=" container   overflow-x-hidden px-5 scroll-smooth md:mx-auto flex flex-wrap items-center justify-between w-full py-8">
      <div className="">
        <a className="font-bold text-2xl " href="/">
          <div className="font-bold text-2xl">
            <img src={LogoIcon}
              className="w-[114px] h-[35px]"
            />
          </div>
        </a>
      </div>
      <div>
        <img
          loading="lazy"
          onClick={() => onClickMenu()}
          className="h-6 w-6 cursor-pointer md:hidden block"
          src={MenuIcon}
        />
      </div>
       {/*
      <div
        className={`${!isActive ? "hidden" : null
          } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className=" flex flex-col md:flex-row space-y-5 md:space-y-0 pt-5 ">

          <li className=" text-[black] hover:text-[brown] mr-10 cursor-pointer">
            <a className="font-bold text-2xl" href="/A-propos"> A Propos
            </a>
          </li>

          <li className=" text-[black] hover:text-[brown] mr-10 cursor-pointer">
            <a className="font-bold text-2xl" href="/Offre"> Nos Offres
            </a>
          </li>

          <li className=" text-[black] hover:text-[brown] mr-10 cursor-pointer">
            <a className="font-bold text-2xl" href="/Projets"> Nos Projets
            </a>
          </li>

          <li className=" text-[black] hover:text-[brown] mr-10 cursor-pointer">
            <a className="font-bold text-2xl" href="/Blog"> Blog
            </a>
          </li>
          <li className=" bg-[brown] text-px-0 hover:bg-[black] text-white text-sm px-2 rounded-full mr-10 cursor-pointer ">
            <a className="font-bold text-2xl" href="/Contact"> Contact
            </a>
          </li>
        </ul>
      </div>
  */}

    </div>

  );
};

export default Navbar;
