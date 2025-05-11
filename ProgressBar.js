import React from 'react';
import Step from './Step';

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalSteps }, (_, i) => (
        <Step key={i} stepNumber={i + 1} currentStep={currentStep} />
      ))}
    </div>
  );
};

export default ProgressBar;