import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus, Contact, Home, Ourservices } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subcribe from "./components/Subcribe";
import FormPage from "./pages/FormPage";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ourservices" element={<Ourservices />} />
        <Route path="form" element={<FormPage />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
