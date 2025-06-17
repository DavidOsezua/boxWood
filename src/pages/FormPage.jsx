import React, { useState } from "react";
import MultiFormPage from "../components/MultiFormPage.jsx";
import { logo } from "../assets/index.js";
import FormOne from "../components/FormOne.jsx";
import FormTwo from "../components/FormTwo.jsx";
import { createComplain } from "../services/apiForm.js";
import Modal from "../components/Modal.jsx";
import SuccessCard from "../components/SuccessCard.jsx";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const initialData = {
    full_name: "",
    mobile_number: "",
    email: "",
    digital_currency_platform: "",
    amount_lost: 0,
    country: "",
    state: "",
    attempted_recovery: "",
    loss_description: "",
    information_certified: "",
  };

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateStep = (step) => {
    let errors = {};
    if (step === 0) {
      if (!formData.full_name || formData.full_name.trim() === "")
        errors.fullName = "Fill in your full name";

      if (!formData.mobile_number || formData.mobile_number.trim() === "")
        errors.mobileNumber = "Fill in your Mobile Number";

      if (!formData.email || formData.email.trim() === "")
        errors.email = "A valid Email is required";

      if (
        !formData.digital_currency_platform ||
        formData.digital_currency_platform.trim() === ""
      )
        errors.currency = "select a currency";

      if (!formData.amount_lost) errors.amount_lost = "Amount Lost is required";

      if (!formData.country || formData.country.trim() === "")
        errors.country = "Country is required";

      if (!formData.state || formData.state.trim() === "")
        errors.state = "state is required";
    }

    if (step === 1) {
      if (!formData.attempted_recovery)
        errors.attempted_recovery = "This filed is required";

      if (!formData.loss_description || formData.loss_description.trim() === "")
        errors.loss_description = "This filed is required";

      if (!formData.information_certified)
        errors.information_certified =
          "You must certify that the Information is accurate";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (validateStep(1)) {
      try {
        const dataForm = new FormData();
        Object.keys(formData).forEach((key) => {
          dataForm.append(key, formData[key]);
        });

        await createComplain(formData);
        setIsSubmitting(true);
        setFormData(initialData);
        setIsLoading(false);
        navigate("/success");

        console.log("Form Submitted", formData);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="pt-12 md:px-4 space-y-6">
      <div className="flex justify-center">
        <img src={logo} />
      </div>

      <div className="bg-[#ffffff] md:border-[1px] border-[#F8F2F3] max-w-[770px] mx-auto py-6">
        <MultiFormPage
          isSubmitting={isSubmitting}
          loading={isLoading}
          onSubmit={handleSubmit}
          validateStep={validateStep}
          stepContent={[
            <FormOne
              key={1}
              formData={formData}
              setFormData={setFormData}
              errors={formErrors}
            />,
            <FormTwo
              key={2}
              formData={formData}
              setFormData={setFormData}
              errors={formErrors}
            />,
          ]}
        />
      </div>

      {isSubmitting && (
        <Modal modalHandler={() => setIsSubmitting(false)}>
          <SuccessCard
            close={() => {
              setIsSubmitting(false);
            }}
          />
        </Modal>
      )}
    </section>
  );
};

export default FormPage;
