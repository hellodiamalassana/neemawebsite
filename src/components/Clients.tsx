import { useEffect, useState } from "react";
import AiRobotsMali from "../assets/clients/airobotsmali.png";
import AirbnbImg from "../assets/clients/airbnb.png";
import UbereatsImg from "../assets/clients/ubereats.png";
import RobotsmaliImg from "../assets/clients/rb.png";
import RbImg from "../assets/clients/robotsmali.png";
import YlkImg from "../assets/clients/yelenkoura.png";
import StoreImg from "../assets/clients/store.png";

const Clients = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };
  return (
    <section className="lg:flex pt-40">
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-black text-4xl"
        >
          Nos Clients
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" className="text-grey">
          {" "}
          Que vous soyez une start-up ambitieuse, PME, ETI, Grands groupes, nous
          faisons passer votre idée du concept à la production à grande échelle.
        </p>
      </div>
      <div className="flex items-center md:items-end w-full pt-10 lg:pt-0">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-full space-y-10 lg:space-y-0">
          <div data-aos="fade-left" data-aos-delay="100">
            <a href="https://ai.robotsmali.org/">
            <img loading="lazy" src={AiRobotsMali} alt="" className="w-[150px] h-[70px]"/>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
          <a href="https://store.yelenkoura.ml/">
            <img loading="lazy" src={StoreImg} alt="" className="w-[150px] h-[90px]"/>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
          <a href="https://yelenkoura.ml/">
            <img loading="lazy" src={YlkImg} alt="" className="w-[100px] h-[90px]"/>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <a href="https://robotsmali.org/">
              <img
                loading="lazy"
                src={RobotsmaliImg}
                alt=""
                className="w-[100px] h-[60px]"
              />
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <a href="https://indabax.robotsmali.org/">
              <img
                loading="lazy"
                src={RbImg}
                alt=""
                className="w-[100px] h-[60px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
