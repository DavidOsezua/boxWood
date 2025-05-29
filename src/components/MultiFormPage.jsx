/* eslint-disable react/prop-types */
import React, { useState } from "react";
import useMultistepForm from "../hooks/useMultistepForm";
import ProgressBar from "./Progressbar";
import Button from "./Button";
import styles from "./MultiFormPage.module.css";

const MultiFormPage = ({
  stepContent,
  sectionClass,
  containerClass,
  onSubmit,
  validateStep,
  showPageHeader = true,
  headerText,
  showTipJar = true,
  formHeaderText,
  isSubmitted,
  error,
  setError,
}) => {
  const { steps, currentStep, next, step, stepNames, previous, goToStep } =
    useMultistepForm(stepContent);

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log(currentStep);
      next();
    }
  };

  const Upload = (e) => {
    e.preventDefault();
    onSubmit();
  };

  console.log(currentStep);
  return (
    <section className={`${sectionClass} `}>
      <div className={`${containerClass}`}>
        <div className={`${styles.formContainer} relative`}>
          <form className={`${styles.form} `}>
            <div className={`${styles.formHeader}`}>
              <div className="flex justify-center w-full">
                <p className={`${styles.formText} px-3`}>
                  Please kindly fill the required information below
                </p>
              </div>

              <div>
                <img
                  src={``}
                  onClick={``}
                  className="cursor-pointer w-[20px]"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <ProgressBar
                steps={steps.length}
                currentProgress={currentStep}
                onStepClick={goToStep}
                className="mb-8"

                // currentProgress={currentStep}
              />

              {/* <img src="/progress.png" /> */}
            </div>

            <div className={`${styles.tellUs}`}>
              <h3 className={styles.pageHeader}>Required Information</h3>
              <p>Please complete required information</p>
            </div>
            <div className={`${styles.formWrapper} `}>
              {step}

              {currentStep === 1 ? (
                <button onClick={previous} className="absolute top-0">
                  {/* <ArrowLeft /> */}
                </button>
              ) : (
                ""
              )}

              {currentStep > 0 ? (
                <Button
                  text={`Submit`}
                  width={`w-full`}
                  colored
                  radius={`rounded-sm`}
                  clickFunction={Upload}
                  type={`button`}
                  // svg2={<ArrowLeft />}
                />
              ) : (
                <Button
                  text={`Next`}
                  width={`w-full`}
                  colored
                  radius={`rounded-sm`}
                  clickFunction={next}
                  type={`submit`}
                  //   svg={<ArrowRight />}
                />
              )}

              {/* */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MultiFormPage;
