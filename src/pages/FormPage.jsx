import React from "react";
import MultiFormPage from "../components/MultiFormPage.jsx";
import { logo } from "../assets/index.js";
import FormOne from "../components/FormOne.jsx";
import FormTwo from "../components/FormTwo.jsx";

const FormPage = () => {
  return (
    <section className="pt-12 px-4 space-y-6">
      <div className="flex justify-center">
        <img src={logo} />
      </div>

      <div className="bg-[#ffffff] border-[1px] border-[#F8F2F3] max-w-[770px] mx-auto py-6">
        <MultiFormPage
          stepContent={[<FormOne key={1} />, <FormTwo key={2} />]}
        />
      </div>
    </section>
  );
};

export default FormPage;
