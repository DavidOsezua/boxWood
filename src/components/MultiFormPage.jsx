/* eslint-disable react/prop-types */

import useMultistepForm from "../hooks/useMultistepForm";

import Button from "./Button";
import styles from "./MultiFormPage.module.css";
import ProgressBar from "./ProgressBarr";
import Left from "./SvgComponents/Left";

const MultiFormPage = ({ stepContent, onSubmit, validateStep }) => {
  const { steps, currentStep, next, step, previous, goToStep } =
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

  // console.log(currentStep);
  return (
    <section className="">
      <div className="">
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

            <div className="flex justify-center max-w-[160px] mx-auto">
              <ProgressBar
                steps={steps.length}
                currentProgress={currentStep}
                onStepClick={goToStep}
                className="mb-8"

                // currentProgress={currentStep}
              />
            </div>

            <div className={`${styles.tellUs}`}>
              <h3 className={styles.pageHeader}>Required Information</h3>
              <p>Please complete required information</p>
            </div>
            <div className={`${styles.formWrapper} `}>
              {step}

              {currentStep === 1 ? (
                <button onClick={previous} className="absolute top-0">
                  <Left />
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
                  clickFunction={submitHandler}
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
