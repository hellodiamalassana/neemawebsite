import { useEffect, useState } from "react";
import Avatar9 from "../assets/avatar/9.png";
import Avatar1 from "../assets/avatar/1.png";
import Avatar2 from "../assets/avatar/2.png";
import Avatar3 from "../assets/avatar/3.png";
import Avatar4 from "../assets/avatar/4.png";
import Avatar5 from "../assets/avatar/5.png";
import Avatar6 from "../assets/avatar/6.png";
import Avatar7 from "../assets/avatar/7.png";
import Avatar8 from "../assets/avatar/8.png";
import Avatar10 from "../assets/avatar/10.png";
import { BaseButton, ServiceCard } from "./Global";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Temoignages = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <section className="pt-40">
      <div className="flex justify-center">
        <div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-black text-4xl"
          >
            Ce que dit notre heureux client
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="text-grey pt-5"
          >
            Plusieurs clients sélectionnés, qui croient déjà en notre service.
          </p>
        </div>
      </div>
      {/* Testimonals */}
      <div className="flex flex-col space-x-2 justify-between lg:flex-row h-full w-full items-center pt-10">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center space-x-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-2/3 lg:w-full"
            >
              <div className="relative">
                <img
                  loading="lazy"
                  src={Avatar10}
                  className="rounded-br-full relative rounded-bl-full rounded-tl-full z-10"
                  alt=""
                />
                <div className="absolute bottom-2">
                  <div className="w-[120px] h-[120px] border-8 border-[#FF007A] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="text-black font-bold text-2xl"
              >
                Amadou Coulibaly
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="font-normal text-sm leading-relaxed text-[#565656] pt-5"
              >
                Parfait, très bon travail ! Merci pour la conception et le travail incroyables.
                Vraiment impressionné par la haute qualité et le délai d'exécution rapide.
                Je recommande fortement <b>K'ETA</b>.
              </div>
              <div className="pt-[40px]">
                <div className="h-4 w-4 rounded-full bg-blue-700"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-[340px] relative">
          <div className="animate-spin-slow relative z-20">
            <div className=" w-[600px] h-[415px]">
              <div className="absolute left-[40%] ">
                <div className="animate-neg-spin-slow">
                  <img loading="lazy" src={Avatar1} alt="" />
                </div>
              </div>
              <div className="absolute top-[20%]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar5}
                    className="w-[98px] h-[98px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[60%]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar3}
                    className="w-[68px] h-[68px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-[30%]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar6}
                    className="w-[98px] h-[98px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-[20%] right-[10%]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar7}
                    className="w-[68px] h-[68px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[15%] right-[10%]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar4}
                    className="w-[54px] h-[54px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[40%] right-0">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar2}
                    className="w-[54px] h-[54px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[40%] right-0">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar2}
                    className="w-[54px] h-[54px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[50%] left-[50%] -mt-[50px] -ml-[50px]">
                <div className="animate-neg-spin-slow">
                  <img
                    src={Avatar8}
                    className="w-[120px] h-[120px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-16 left-10">
            <div className="w-[184px] h-[184px] rounded-full bg-[#FFF5DB]"></div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Temoignages;
