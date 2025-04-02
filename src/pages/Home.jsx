import React from "react";
import HomeHero from "../components/HomeHero";
import Firm from "../components/Firm";
import Recovery from "../components/Recovery";
import OurCompany from "../components/OurCompany";
import Reviews from "../components/Reviews";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Recovery />
      <OurCompany />
      {/* <HowItWorks /> */}
    </>
  );
};

export default Home;
