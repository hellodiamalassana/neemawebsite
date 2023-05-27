import { useEffect, useState } from "react";
import CodeIcon from "../assets/icons/code.svg";
import WalletIcon from "../assets/icons/empty-wallet.svg";
import MenuIcon from "../assets/icons/menu-icon.svg";
import LogoIcon from "../assets/lo.png";
import LogoIcon1 from "../assets/logo.png";
import { BaseButton, ServiceCard } from "./Global";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";


const Newsletter = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <section className="pt-40">
      <Element name="contact">
        <div className="relative h-[292px]">
          <div className="border-0 rounded-3xl h-full  bg-[black] rounded-br-0 rounded-tr-0 lg:rounded-br-[100px] lg:rounded-tr-[100px]">
            <div className="flex">
              <div className="w-full"></div>
              <div className="w-full">
                <div className="flex justify-end">
                  <div className="h-[292px] rounded-br-[100px] rounded-tr-[100px] rounded-tl-[190px] rounded-bl-[240px] w-3/4 bg-[brown] hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-10 top-0 h-full w-full">
            <div className="flex flex-col lg:flex-row w-full items-center h-full justify-around">
              <div className="flex flex-col space-y-2 px-8 text-center	">
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-[white] font-extrabold "
                >
                  Abonnez-vous à la newsletter
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-[white]"
                >
                  ... et recevez en premier toutes nos offres, pas de spam
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-20" >
                <div
                  data-aos="fade-up"
                  className="flex items-center space-x-2 p-2 w-full rounded-full justify-between  bg-white h-full shadow-3xl"
                >
                  <div className="w-full h-full pl-4 ">
                    <input
                      className="w-full h-full focus:outline-0 px-8"
                      placeholder="Entrez votre e-mail ..."
                    />
                  </div>
                  <div>
                 
                    <BaseButton className="whitespace-nowrap bg-[black]">
                      S'INSCRIRE
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>

  );
};

export default Newsletter;
