import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subcribe from "../components/Subcribe";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {children}
        <Subcribe />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
