import React from "react";
import HomeHero from "../components/HomeHero";
import Firm from "../components/Firm";
import Recovery from "../components/Recovery";
import OurCompany from "../components/OurCompany";
import Reviews from "../components/Reviews";
import HowItWorks from "../components/HowItWorks";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HomeHero />
      <Recovery />
      <OurCompany />
      {/* <HowItWorks /> */}
    </MainLayout>
  );
};

export default Home;
