/* eslint-disable jsx-a11y/anchor-is-valid */
import "./portfolio.css";
import { SiJavascript } from "react-icons/si";
import { SiAngular, SiBootstrap, SiHtml5, SiTypescript, SiReact, SiVite, SiTailwindcss } from "react-icons/si";
import { GiSkeleton } from "react-icons/gi";
import { FaCss3Alt } from "react-icons/fa";
import 'animate.css';

export default function Portfolio() {
  const IMG1 = 'https://firebasestorage.googleapis.com/v0/b/k-eta-5d6ee.appspot.com/o/websto.png?alt=media&token=008dd184-b872-4adf-8540-c8b440badabc';
  const IMG2 = 'https://firebasestorage.googleapis.com/v0/b/k-eta-5d6ee.appspot.com/o/webindabax.png?alt=media&token=26da1f0d-2712-41f0-93cd-72c0c2d11af6';
  const IMG3 = 'https://firebasestorage.googleapis.com/v0/b/k-eta-5d6ee.appspot.com/o/webmon.png?alt=media&token=23592de6-bd2b-4d38-9343-29fc507d4d0c';
  const IMG4 = 'https://firebasestorage.googleapis.com/v0/b/k-eta-5d6ee.appspot.com/o/webrobotsmali.png?alt=media&token=ceff253b-9147-4408-9071-bf012c9e3b6e';
  const IMG5 = 'https://firebasestorage.googleapis.com/v0/b/k-eta-5d6ee.appspot.com/o/webai.png?alt=media&token=adce5ef8-d2a6-4998-8318-302729f96eb1';
  const IMG6 = '';

  const portfolio = [
    {
      id: 1,
      img: IMG1,
      title: "Store Yelenkoura",
      page: "https://github.com/K-ETA-COMPANY",
      description:
        "Store Yelenkoura est une Start-Up spécialisée dans le commerce des produits High-Tech destinés à la domotique, à l'IOT(Internet Of Things) et des produits industriels.",
      demo: "https://store.yelenkoura.ml/",
      icon: <SiTypescript fontSize="2.6em" />,
      icon2: <SiAngular fontSize="2.6em" />,
      icon3: <SiBootstrap fontSize="2.6em" />,
      icon4: <SiHtml5 fontSize="2.6em" />,
      icon5: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 2,
      img: IMG2,
      title:
        "Deep Learning IndabaX Mali - Indabax-Mali",
      page: "https://github.com/K-ETA-COMPANY",
      description:
        "Un Deep Learning Indabax est un « Indaba » ou une conférence organisée localement qui contribue à garantir que les connaissances et les capacités en matière d'apprentissage automatique sont diffusées plus largement sur le continent africain.",
      demo: "https://indabax.robotsmali.org/",
      icon: <SiJavascript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <GiSkeleton fontSize="2.6em" />,
      icon4: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 3,
      img: IMG3,
      title: "PapDeski Watch",
      page: "https://github.com/K-ETA-COMPANY",
      description:
        "Magasin de vente en gros .",
      demo: "https://papdeskiwatch.com/",
      icon: <SiTypescript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <SiVite fontSize="2.6em" />,
      icon4: <SiTailwindcss fontSize="2.6em" />, 
      icon5: <FaCss3Alt fontSize="2.6em" />,
    },
    {
      id: 4,
      img: IMG4,
      title:
        "Centre National Collaboratif pour l’éducation en Robotique et en Intelligence Artificielle - RobotsMali",
      page: "https://github.com/K-ETA-COMPANY",
      description:
        "un centre spécialisé dans l’enseignement de la robotique auprès des jeunes de tout âge et de tout niveau. Il intervient également dans l’implantation de clubs et d’activités robotiques, de projets tutorés, l’élaboration de curriculum d’enseignement et bien d’autres activités pour les établissements scolaires et universitaires.",
      demo: "https://robotsmali.org",
      icon: <SiJavascript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <GiSkeleton fontSize="2.6em" />,
      icon4: <FaCss3Alt fontSize="2.6em" />,
    },
  {
      id: 5,
      img: IMG5,
      title: "IA.RobotsMali",
      page: "https://github.com/K-ETA-COMPANY",
      description:
        "Un premier laboratoire de Recherche Appliquée et Fondamentale spécialisé en Intelligence Artificielle, Robotique et Automatisme au Mali.",
      demo: "https://ai.robotsmali.org/",
      icon: <SiJavascript fontSize="2.6em" />,
      icon2: <SiReact fontSize="2.6em" />,
      icon3: <GiSkeleton fontSize="2.6em" />,
      icon4: <FaCss3Alt fontSize="2.6em" />,
    },
       /*
    {
      id: 6,
      img: IMG6,
      title: "This is a portfolio item title",
      page: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    }, */
  ];

  const portfolioList = portfolio.map((item, index) => (
    <article key={index} className="portfolio_item animate__animated animate__backInLeft">
      <div className="portfolio_item-image">
        <img src={item.img} alt="" />
      </div>
      <h3 className="text-[brown]"><b>{item.title}</b></h3>
      <p >
        <b className="text-[brown]">Description:</b> {item.description}{" "}
      </p>{" "}
      <br />

      <div className="flex space-x-4 text-center">
        <p className="flex items-stretch py-1 ">
          <b className="px-2 md:px-6 text-[brown]">Technologies: </b> <br/> 
          {item.icon} {item.icon2} {item.icon3} {item.icon4} {item.icon5}
        </p>
      </div>

      <div className="portfolio_item-cta">
        <a href={item.page} className="btn">
          Github
        </a>
        <a
          href={item.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  ));

  return (
    <section id="portfolio">
      <div className="container portfolio_container">{portfolioList}</div>
    </section>
  );
}
