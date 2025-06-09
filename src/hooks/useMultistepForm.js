import React, { useState } from "react";

const useMultistepForm = (steps, stepNames) => {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;

      return i + 1;
    });
  }
  function previous() {
    setCurrentStep((i) => {
      if (i <= steps.length - 1);

      return i - 1;
    });
  }
  function goToStep(steps) {
    setCurrentStep(steps);
  }

  return {
    previous,
    steps,
    next,
    step: steps[currentStep],
    currentStep,
    stepNames,
    goToStep,
  };
};

export default useMultistepForm;
