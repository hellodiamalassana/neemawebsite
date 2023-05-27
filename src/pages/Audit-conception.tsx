import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import AuditConceptiondata from "../components/Audit-conceptiondata";
import Footer from "../components/Footer";

const AuditConception = () => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Services */}
      <Navbar />
      <AuditConceptiondata />
      <Footer />
    </>
  );
};

export default AuditConception;
