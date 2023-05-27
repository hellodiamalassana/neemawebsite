import { useEffect, useState } from "react";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";



const About = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <section className="pt-40">
      <Element name="product">
        <div className="flex  flex-col-reverse space-y-20 space-y-reverse lg-space-y-0 lg:flex-row w-full items-center">
          <div className="w-full relative">
            <div className="relative z-20">
              <iframe
                data-aos="fade-right"
                className="rounded-3xl shadow-xl w-full lg:w-4/5 h-[372px]"
                src="https://www.youtube.com/embed/BugBjyJRCbc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="h-24 w-24 bg-[#FFF5DB] rounded-full absolute right-28 -bottom-12 z-10"></div>
          </div>
          <div className="w-full relative">
            <div>
              <div className="h-40 w-40 bg-[#EFF1FF] rounded-br-[150px] absolute -left-10 -top-10 z-10"></div>

              <div className="relative z-20">
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-black text-4xl"
                >
                  Pourquoi travailler avec  <br /> K'ETA?{" "}
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-grey pt-5"
                >
                  {" "}
                  Nous faisons passer votre idée du concept à la production à grande échelle
                  et vous aiderons avec la conception initiale du produit, les maquettes 3D,
                  l'ingénierie électrique, la communication sans fil ou filaire, le micrologiciel,
                  le logiciel cloud, les applications et bien plus encore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>

  );
};

export default About;
