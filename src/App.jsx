import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus, Contact, Home, Ourservices } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subcribe from "./components/Subcribe";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="overflow-hidden">
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourservices" element={<Ourservices />} />
        </Routes>
        <Subcribe />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
