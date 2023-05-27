import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

import Dots from "../assets/dots.svg";
import BoxSearchIcon from "../assets/icons/box-search.svg";
import ChartIcon from "../assets/icons/iot.svg";
import CodeIcon from "../assets/icons/code.svg";
import WalletIcon from "../assets/icons/empty-wallet.svg";
import { BaseButton, ServiceCard } from "../components/Global/";
import AuditConception from "../pages/Audit-conception";
import Developpementdesplateformes from "../pages/softwaredeveloppement";
import AnalyseDesign from "../pages/Analysedesign";
import Objetsconnectés from "../pages/Objetsconnectés";

const NosOffres = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Services */}
      < section id="services" className="relative" >
        <div className="absolute w-[1047px] h-[619px] bg-[#F4F9FF] rounded-tl-[150px] -right-[5vw]"></div>
        <div className="flex  flex-col lg:flex-row items-center justify-between w-full pt-40">
          <div className="relative z-20">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-black text-4xl"
            >
              DOMAINES D’INTERVENTIONS
            </div>
            <p
              className="text-grey"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              Définissons ensemble vos besoins
            </p>
            <div className="absolute -bottom-28 z-10 -left-20">
              <img loading="lazy" src={Dots} />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div className="flex flex-col space-y-8 mt-20">
                <ServiceCard
                  className="pt-0 lg:pt-20"
                  color="bg-[#F1F7FF]"
                  icon={BoxSearchIcon}
                  title="Audit & conception"
                  subtitle="Analyse de vos axes de création de valeur et co-conception de service avec une approche design to cost."
                  href="/AuditConception" button={"En savoir plus"} />

                <ServiceCard
                  icon={WalletIcon}
                  color="bg-[#FFF2F8]"
                  title="Analyse UX & Design UI"
                  subtitle="Une direction artistique soutenant des usages pensés pour vos utilisateurs et avec vos utilisateurs."
                  href="/AnalyseDesign"
                  button={"En savoir plus"} />
              </div>

              <div className="flex flex-col space-y-8">
                <ServiceCard
                  className="pt-20"
                  color="bg-[#FFF7E3]"
                  icon={CodeIcon}
                  title="Développement Logiciel, Web & Mobile"
                  subtitle="Des process de conception robustes basés sur des technologies open-source récentes et maîtrisées."
                  href="/Developpementdesplateformes" button={" En savoir Plus"} />
                <ServiceCard
                  icon={ChartIcon}
                  color="bg-[#DEFFEE]"
                  title="Objets connectés"
                  subtitle="Des solutions «intelligentes» entièrement intégrées en combinant stratégie, innovation et expertise de pointe que nos clients peuvent mettre sur le marché."
                  href="/Objetsconnectés" button={"En savoir plus"} />
              </div>
            </div>
          </div>
        </div>
      </section >
    </>

  );
};

export default NosOffres;
