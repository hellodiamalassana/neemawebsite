import { useEffect, useState } from "react";
import LogoIcon from "../assets/lo.png";
import LogoIcon1 from "../assets/logo.png";
import { BaseButton, ServiceCard } from "./Global";
import { animateScroll as scroll, scroller, Element } from "react-scroll";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <section>
      <div className="nc-Footer relative py-16 lg:py-28 border-t border-[black] dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="mr-10 cursor-pointer pb-6 col-span-2 md:col-span-1">
              <a href="/">
                <div className="font-bold text-2xl">
                  <img src={LogoIcon} className="w-[95px] h-[95px]" />
                </div>
              </a>
            </div>
            <div className="col-span-2 flex items-center md:col-span-3 text-[brown]">
              Nous offrons une expertise en développement logiciel, ingénierie
              électronique et conception mécanique pour développer vos projets
              complexes
            </div>
          </div>

          <div className="text-sm font-semibold text-black md:dark:text-black">
            Ce que nous faisons
            <ul className="mt-5 space-y-4 text-[brown]">
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://calendly.com/ketabusiness/30min">
                  {" "}
                  Création de sites web &rarr;
                </a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://calendly.com/ketabusiness/30min">
                  {" "}
                  Conception d'applications &rarr;
                </a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://calendly.com/ketabusiness/30min">
                  {" "}
                  Gestion des médias sociaux &rarr;
                </a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://calendly.com/ketabusiness/30min">
                  {" "}
                  Projet d'analyse de marché &rarr;
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm font-semibold text-neutral-700 dark:text-[black]">
            K'ETA
            <ul className="mt-5 space-y-4 text-[brown]">
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="/A-propos"> À propos de nous &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="#"> Carrière &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="#"> Devenez Investisseur &rarr;</a>
              </li>
            </ul>
          </div>

          <div className="text-sm font-semibold text-neutral-700 dark:text-[black]">
            Soutien
            <ul className="mt-5 space-y-4 text-[brown]">
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="#"> FAQ &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="#"> Politique &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="#"> Entreprise &rarr;</a>
              </li>
            </ul>
          </div>

          <div className="text-sm font-semibold text-neutral-700 dark:text-[black]">
            Contactez-nous
            <ul className="mt-5 space-y-4 text-[brown]">
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://wa.me/0022398538004"> WhatsApp &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                <a href="https://github.com/K-ETA-COMPANY"> Github &rarr;</a>
              </li>
              <li className="text-neutral-6000 dark:text-[brown] hover:text-black md:dark:text-black">
                Assistance 24H / 7j
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
