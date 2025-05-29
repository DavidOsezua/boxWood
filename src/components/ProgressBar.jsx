/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ProgressBar = ({
  steps,
  currentProgress = 1,
  onStepClick = null,
  className = "",
}) => {
  const percentage = ((currentProgress  ) ) * 100;

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <div className="relative">
        {/* Background line */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200"></div>

        {/* Progress line */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-red-500 transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Step circles */}
        <div className="relative flex justify-between">
          {Array.from({ length: steps }, (_, index) => {
            const stepNumber = index;
            const isCompleted = stepNumber < currentProgress;
            const isCurrent = stepNumber === currentProgress;
            const isClickable = onStepClick && stepNumber <= currentProgress;

            return (
              <div
                key={stepNumber}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-red-500 border-red-500"
                    : isCurrent
                    ? "bg-red-500 border-red-500"
                    : "bg-white border-gray-200"
                } ${isClickable ? "cursor-pointer hover:scale-110" : ""}`}
                onClick={() => isClickable && onStepClick(stepNumber)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
