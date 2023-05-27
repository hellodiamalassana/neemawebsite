import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

const NousSOMMES = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <section className="pt-9 lg-500">
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[black] text-4xl pb-5"
        >
          <p className="text-sx text-[15px] font-thin text-[brown] ">
            Besoin d'aide pour votre start-up technologique ?
          </p >
          Nous apportons une valeur technologique transformatrice aux
          <p className="autoTypingSection">
            <Typewriter
              words={[" PME et Start-up", " organisations publiques ", " grands groupes privés ambitieux."]}
              loop={Infinity}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </p>




        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[black]"
        >
          {" "}
          Construire une startup réussie est difficile, mais trouver les bonnes
          personnes pour développer votre produit logiciel est peut-être encore plus difficile.
          Nous comprenons que vous souhaitiez avoir des membres d'équipe dédiés sur lesquels
          vous pouvez compter. <br /> Nous imaginons que vous n'avez pas les ressources pour embaucher
          toute une équipe et un CTO. <br /> <b>C'est pourquoi nous proposons un partenariat avec nous.
            Nous sommes votre co-fondateur technique et CTO par intérim.</b>
        </p>
      </div>
      <div className="flex items-center md:items-end w-full pt-10 lg:pt-0">


      </div>
    </section>

  );
};

export default NousSOMMES;
