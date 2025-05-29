import React from "react";
import AboutHero from "../components/AboutHero";
import Firm from "../components/Firm";
import Overview from "../components/Overview";
import CoreValues from "../components/CoreValues";
import Team from "../components/Team";
import MainLayout from "../layout/MainLayout";

const Aboutus = () => {
  return (
    <MainLayout>
      <AboutHero />

      <Overview />
      <CoreValues />
      <Team />
    </MainLayout>
  );
};

export default Aboutus;
