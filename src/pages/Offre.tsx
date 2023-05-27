import Navbar from "../components/Navbar";
import NosOffres from "../components/Offres";
import { BaseButton, ServiceCard } from "../components/Global/";
import Dots from "../assets/dots.svg";
import BoxSearchIcon from "../assets/icons/box-search.svg";
import ChartIcon from "../assets/icons/chart-square.svg";
import CodeIcon from "../assets/icons/code.svg";
import Contact from "./Contact";
import WalletIcon from "../assets/icons/empty-wallet.svg";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Footer from "../components/Footer";


const Offre = () => {
    return (
        <>
            <Navbar />
            <NosOffres />
            <Footer />
        </>
    );
};

export default Offre;
